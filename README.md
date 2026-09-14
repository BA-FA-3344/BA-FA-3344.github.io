# Spatial Memory by Agents, for Agents

Anonymous project page: https://ba-fa-3344.github.io/

Static HTML/CSS with a small local script; no build step, third-party scripts,
analytics, external fonts, or author information. The page hosts the 2:52
overview video and a combined T1–T5 / Unified leaderboard. Paper and code links remain pending.

The leaderboard shows five human-engineered baselines, then the best observed
system from each of four Designer configurations. Values match the paper's
frozen results. Unified equally weights all five tracks; FARM-4B and
ConceptGraphs are listed with no Unified value because coverage is incomplete.
The final question-mark row is an open slot, not a forecast or measured score.

Scores live in `index.html`; `site.js` reads those values to draw the bars.
Video and optional English captions live in `assets/`. The video does not
autoplay, and the caption track is opt-in. `assets/project-mark.svg` is the
shared three-piece puzzle logo.

For GitHub Pages, use **Deploy from a branch → main → / (root)**.
Update `index.html` when the project content is ready.

Keep both Git author and committer identities anonymous, and publish using
the anonymous project account. Do not add author names, affiliations, personal
links, or files containing identifying metadata during anonymous review.
