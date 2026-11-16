#!/usr/bin/env python3
"""Install licensed cinematic photographs into a local REELHOUSE GitHub Codespace.

The photos depict fictional films and are not official movie-poster images.
No third-party Python libraries are required.
"""
from __future__ import annotations

import json
import sys
import time
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "public" / "posters"
MANIFEST = Path(__file__).with_name("movie_photo_sources.json")


def is_jpeg(path: Path) -> bool:
    return path.exists() and path.stat().st_size > 8_000 and path.read_bytes()[:3] == b"\xff\xd8\xff"


def fetch_image(record: dict, destination: Path) -> None:
    # CDN cropping returns 900 x 1170 photographic poster assets in JPEG format.
    url = (
        "https://images.unsplash.com/" + record["photo_id"]
        + "?fm=jpg&fit=crop&crop=entropy&w=900&h=1170&q=82"
    )
    if is_jpeg(destination):
        print(f"  EXISTING {record['movie']} ({destination.stat().st_size:,} bytes)")
        return
    for attempt in range(1, 4):
        try:
            req = Request(url, headers={
                "User-Agent": "Mozilla/5.0 (compatible; REELHOUSE student project downloader)",
                "Accept": "image/jpeg,image/*;q=0.9",
            })
            with urlopen(req, timeout=35) as response:
                content = response.read(8_000_000)
            if len(content) < 8_000 or not content.startswith(b"\xff\xd8\xff"):
                raise ValueError("Downloaded content is not a complete JPEG photograph")
            tmp = destination.with_suffix(".part")
            tmp.write_bytes(content)
            tmp.replace(destination)
            print(f"  OK       {record['movie']} ({len(content):,} bytes)")
            return
        except (HTTPError, URLError, TimeoutError, ValueError, OSError) as error:
            print(f"  RETRY {attempt}/3  {record['movie']}: {error}")
            if attempt < 3:
                time.sleep(attempt * 2)
    raise RuntimeError(
        f"Cannot download {record['movie']}. Open {record['source']} "
        "and download the image manually, save it as public/posters/"
        + record['slug'] + ".jpg, then re-run the script."
    )


def replace_posters(content: str, records: list[dict]) -> str:
    for photo in records:
        content = content.replace(f"/posters/{photo['slug']}.svg", f"/posters/{photo['slug']}.jpg")
    return content


def main() -> int:
    if not (ROOT / "package.json").exists() or not (ROOT / "src" / "data" / "movies.js").exists():
        print("ERROR: Run from the original REELHOUSE project (package.json missing).", file=sys.stderr)
        return 2
    photos = json.loads(MANIFEST.read_text(encoding="utf-8"))
    if len(photos) != 12 or len({x["slug"] for x in photos}) != 12:
        print("ERROR: Invalid photo manifest",file=sys.stderr)
        return 2
    ASSETS.mkdir(parents=True,exist_ok=True)
    print("Downloading twelve credited cinematic photographs from Unsplash...")
    failures = []
    for item in photos:
        try:
            fetch_image(item, ASSETS / (item['slug'] + '.jpg'))
        except RuntimeError as err:
            failures.append(str(err))
    if failures:
        print("\nDownload incomplete. React source files have NOT been modified.",file=sys.stderr)
        for err in failures:
            print(' - '+err,file=sys.stderr)
        return 1

    # Only modify application source after all assets are present and validated.
    for path in (ROOT / 'src').rglob('*'):
        if path.suffix not in ('.jsx', '.js'):
            continue
        original = path.read_text(encoding='utf-8')
        edited = replace_posters(original, photos)
        edited = edited.replace('Original illustration for ${movie.title}', 'Cinematic photograph representing ${movie.title}')
        edited = edited.replace('Original film artwork for ${movie.title}', 'Cinematic photograph representing ${movie.title}')
        edited = edited.replace(' film illustration', ' cinematic photograph')
        if edited != original:
            path.write_text(edited,encoding='utf-8')
            print('  UPDATED  '+str(path.relative_to(ROOT)))
    # Keep the report and README truthful about the switch from SVG to photography.
    readme = ROOT / 'README.md'
    if readme.exists():
        text = readme.read_text(encoding='utf-8')
        text = text.replace('each with an original illustration', 'each with a credited cinematic photograph')
        text = text.replace('Original SVG movie artwork bundled locally rather than relying on a poster-image API.', 'Cinematic Unsplash photos downloaded locally with source credits; no runtime image API required.')
        text = text.replace('12 original local SVG illustrations', '12 local JPG photo posters plus retained SVG backups')
        text = text.replace('The movie artwork is original, locally stored SVG illustration, not licensed film-poster photography.', 'The current movie visuals are licensed cinematic stock photographs representing fictional films, not official film posters. Sources are documented in PHOTO-CREDITS.md.')
        if '## Photo sources' not in text:
            text += '\n\n## Photo sources\n\nSee [PHOTO-CREDITS.md](PHOTO-CREDITS.md) for the selected photographers, source links, licensing, and installation details.\n'
        readme.write_text(text,encoding='utf-8')
    disclosure = ROOT / 'AI-USE.md'
    if disclosure.exists():
        text=disclosure.read_text(encoding='utf-8')
        if 'Photo selection update' not in text:
            text+='\n## Photo selection update\n\nPhotographic poster references were selected with search and coding assistance, then incorporated as licensed example images. The selected source photographs and their authors are listed in PHOTO-CREDITS.md. The originally created SVG illustrations remain available in the repository.\n'
            disclosure.write_text(text,encoding='utf-8')
    print('\nSUCCESS: all 12 images installed and React references updated.')
    print('Next: npm run build && git add -A && git commit -m "Update movie photography" && git push origin main')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
