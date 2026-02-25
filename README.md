# Youssef Ettalbi Tours

A single-page React experience that introduces Youssef Ettalbi and the Moroccan itineraries he guides. It leans on inline data to describe cities, services, and rhythms so the story feels curated and vivid without needing a build step.

## Running locally
1. Open `index.html` directly in any modern browser (ES module support is required).
2. Or serve the folder with a simple static server if you prefer:
   - `python -m http.server 4173`
   - `npx serve` (if Node.js is installed later).

## Structure
- `index.html` - Loads the React bundle and the stylesheet.
- `styles.css` - Defines the typography, gradients, layout, and responsive grid.
- `app.js` - Imports React from CDN, declares the tour data, and renders the landing page.

## Next steps
Customize the arrays in `app.js` to expand cities, services, or testimonials, and tweak colors in `styles.css` to match different vibes.
