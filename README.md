# REELHOUSE — Movie Discovery

**Web Applications Programming and Engineering | Semester Project | Milestone 1**

REELHOUSE is a responsive movie-discovery website made with React. The aim is to help visitors find a film quickly without an overwhelming interface. It uses a small, fictional catalog of 12 movies, each with a credited cinematic photograph and the details people normally look for before deciding what to watch.

This repository contains the **Milestone 1 React single-page application prototype only**. There is no API, database, or working authentication yet. Those belong to Milestone 2.

## Project team

- Mohammed Abdullah Fakhri Samhan — Student ID 2433192
- Ahmad Emad Hussain Abdallah — Student ID 2433053

Individual GitHub contributions must be made from the respective student accounts. This list identifies the group but does not assign unverified contributions.

## Features

- An editorial-style home page with the movie collection.
- Twelve structured movie records stored in `src/data/movies.js` and loaded into React state.
- Live search by title, director, or synopsis.
- Genre filtering and sorting by rating, year, or title.
- All active criteria applied together to the **same array of records**.
- Separate film detail pages, each accessible by a client-side route.
- Login and registration pages implemented as clearly labeled **non-functional placeholders**.
- An About page describing the application and its course-project status.
- Shared header and footer, reusable components, props, functional components, and React hooks.
- Responsive desktop, tablet, and mobile layouts, including mobile navigation.
- Empty search results, input labels, form validation, and readable status feedback.
- Cinematic Unsplash photos downloaded locally with source credits; no runtime image API required.

## Stack

- React 18
- React Router 6
- Vite 6
- JavaScript (ES modules)
- Plain responsive CSS
- Lucide icons

## Requirements

Install a current LTS version of Node.js and npm (Node.js 20 or later is recommended).

## Run locally

1. Extract the ZIP archive.
2. Open a terminal in the project folder (the one containing `package.json`).
3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open the local address shown in the terminal (normally `http://localhost:5173`).

To create the production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

**Important:** The source package does not contain `node_modules`, and it does not contain an invented deployment URL or Git history.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home page, movie listing, search, filter, and sort |
| `/movies/:movieId` | Details for an individual movie |
| `/login` | Non-functional login form placeholder |
| `/register` | Non-functional registration form placeholder |
| `/about` | Application and team information |
| Other paths | Friendly 404 page |

## How search, filter, and sorting work

The home page keeps the user's choices in React state using `useState`. A single `useMemo` calculation then:

1. Checks whether the movie matches the search text.
2. Checks whether its genre matches the selected category.
3. Sorts the **filtered results** according to the selected order.

This means a search for `signal` with the Thriller genre, for example, still uses the selected sort order. The page updates immediately when any control changes. `filter()` and `sort()` are native JavaScript array methods.

## Project structure

```text
REELHOUSE-Milestone-1/
├── public/
│   ├── favicon.svg
│   └── posters/             # 12 local JPG photo posters plus retained SVG backups
├── src/
│   ├── components/          # Header, Footer, FilterBar, MovieCard, ScrollToTop
│   ├── data/movies.js       # 12 local records, genres, sort options
│   ├── pages/               # Home, detail, login, register, about, not found
│   ├── App.jsx              # App state and client-side routes
│   ├── main.jsx             # React entry point
│   └── styles.css           # Design system and responsive breakpoints
├── docs/                    # Optional project overview
├── index.html
├── package.json
├── vite.config.js
├── render.yaml              # Static-site deployment and route rewrites
├── submission-links.txt     # Fill in after GitHub/Render publication
├── AI-USE.md                # Course-required assistance declaration
└── README.md
```

## Deploy as a Render Static Site

1. Create **one shared public GitHub repository** for the group and push this project into it.
2. Invite all group members. Each person should use their **own GitHub account** and make meaningful commits during development; a ZIP file alone does not establish teamwork.
3. On Render, create a new Static Site and connect the shared repository.
4. Use **Build Command** `npm install && npm run build`.
5. Use **Publish Directory** `dist`.
6. In Render, add a rewrite: **Source** `/*` → **Destination** `/index.html` → **Action** `Rewrite`. The included `render.yaml` also specifies this rule for Blueprint deployment.
7. Once deployed, open the home page and **refresh a nested route** such as `/about` or `/movies/midnight-atlas` to verify the rewrite works.
8. Copy the public GitHub URL, deployed website URL, and exact submitted commit hash into `submission-links.txt`.
9. Before submission, make sure the archive corresponds to that exact commit.

Deployment requires access to the team's actual GitHub and Render accounts. The files included here are deployment-ready configurations, not proof that a public deployment has already taken place.

## Milestone 1 requirement checklist

- [x] React SPA with a shared header and client-side routing
- [x] Main/list, login placeholder, registration placeholder, and About pages
- [x] Functional components, React hooks, props, and reusable UI pieces
- [x] At least 10 structured local mock records (12 provided)
- [x] Combined filtering and sorting using `filter()` and `sort()`
- [x] Responsive design for desktop and mobile
- [x] Source-code archive can be provided without `node_modules`
- [x] README and AI assistance disclosure file included
- [ ] Public shared GitHub repository created by students
- [ ] Regular commits from each group member recorded on GitHub
- [ ] Render Static Site deployed under the group's account
- [x] Student names and student IDs added to the report and submission file
- [ ] Real GitHub and Render URLs and submitted commit hash added
- [ ] Actual deployed site tested and submission uploaded through Moodle

## Working as a team

A practical division of work is: one member reviews the catalog and listing, another checks routing and forms, and another polishes responsiveness and deployment. The team should adjust these responsibilities to match its actual contributions. Everyone should review the full codebase before the course demonstration.

## Academic note

The film titles, synopses, directors, and ratings are **fictional mock records** created solely to demonstrate the interface. None of the ratings or details should be interpreted as factual entries in a public movie database. The current movie visuals are licensed cinematic stock photographs representing fictional films, not official film posters. Sources are documented in PHOTO-CREDITS.md.

See `AI-USE.md` for the separate assistance disclosure required by the assignment instructions.


## Photo sources

See [PHOTO-CREDITS.md](PHOTO-CREDITS.md) for the selected photographers, source links, licensing, and installation details.
