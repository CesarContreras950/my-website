# Changelog

A record of the work done on my two projects: this website and the music player. Newest first. Dates come from Git history where there is one; entries marked *(guess)* are my best reconstruction.

## Nov 26, 2026

**Both projects**
- Reviewed both projects for bugs and wrote up a list of fixes (see "Known issues" in each README).
- Rewrote the website README: what's on the page, how to open it, what each file does, known issues, and next steps.
- Rewrote the music player README. The old one described a different single-file "Turntable" player. The new one covers the real client/server setup, how to run it, the API, the database, and known issues. A copy of the old README is kept in the project files at `readme-rewrite/old-music-player-README.md`.
- Added this changelog.
- Fixes for the website (styling, script, Submit button) and the music player (playlist, server connection) were started in separate threads. They aren't listed here yet.

**Music player**
- Checked that the server runs: `npm install` and `npm start` work on Node 22, `/api/songs` returns the demo song, and the page and MP3 load at http://localhost:3000.

## Nov 20, 2026

**Website**
- Renamed the project title in the README from "my-projects" to "my-website".

## Oct 24, 2026

**Website**
- Uploaded the site files to GitHub: `Cesar's-website.html`, `Cesar's-website.css`, `Cesar's-website.js`.

**Music player** *(guess: around this time, based on the dates inside its sample data)*
- Built the Express + SQLite server with routes to list, add, favorite, and delete songs.
- Built the player page: play, pause, stop, prev/next, shuffle, mute, volume, progress bar, playlist.
- Added a mock playback-events server and sample event JSON.
- Started a TypeScript version of the player (`music-player.ts`).

## Oct 11, 2026

**Website**
- Created the `my-website` repo on GitHub with a README and MIT license.
