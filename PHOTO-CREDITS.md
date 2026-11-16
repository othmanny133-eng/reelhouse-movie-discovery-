# REELHOUSE — Photographic image sources

These twelve photographs are **illustrative images matched to fictional film concepts**, not official posters for actual productions. Each was found on Unsplash, on a page displaying "Free to use under the Unsplash License".

Images are distributed under the Unsplash License (https://unsplash.com/license). Source links and photographer credits are retained below for attribution and review. Do not imply that contributors endorse the project.

| Film | Photographer | Source |
|---|---|---|
| Midnight Atlas | Marek Piwnicki | https://unsplash.com/photos/SumjjLhysZM |
| The Last Signal | Niklas Bahe | https://unsplash.com/photos/mHdehMaED5Q |
| Silver Tides | Raul Ling | https://unsplash.com/photos/pWzwB8sPdkU |
| After the Rain | Julien | https://unsplash.com/photos/BDbHrOvo9_0 |
| Northbound | LOGAN WEAVER | https://unsplash.com/photos/J3NRFu2QWaw |
| The Quiet Hour | ᛟᛞᚨᛚᚹ | https://unsplash.com/photos/m93HIHQcxdE |
| Golden Horizon | Alexander Psiuk | https://unsplash.com/photos/cczug9CpFpU |
| Parallel Lines | Joe Dai Dai | https://unsplash.com/photos/ZKa9xwnfcWI |
| Paper Moons | Liam McGarry | https://unsplash.com/photos/ebsrin6WqxQ |
| Blue Orchard | Margot RICHARD | https://unsplash.com/photos/y5KuTTYZ6mc |
| Echoes of Tomorrow | MARIOLA GROBELSKA | https://unsplash.com/photos/GCjb21XeHzk |
| The Vanishing Room | Helena Lopes | https://unsplash.com/photos/AQQkAprYaro |

## How to install in GitHub Codespaces

1. Upload `REELHOUSE_Photo_Update.zip` into the root folder of your existing REELHOUSE GitHub Codespace.
2. Run:

```bash
set -e
unzip -oq REELHOUSE_Photo_Update.zip
python3 scripts/install_movie_photos.py
rm -f REELHOUSE_Photo_Update.zip
npm run build
git add -A
git commit -m "Replace illustrated posters with cinematic photographs"
git push origin main
```

The Python program downloads and verifies all twelve local JPG files **before it changes the React source**. It aborts if any image cannot be downloaded. The original SVG files remain in the repository as a fallback archive. The site should redeploy automatically on Render after the push.

Do not upload the ZIP file itself to GitHub once the installation has been completed; the ZIP may be deleted before `git add -A`.
