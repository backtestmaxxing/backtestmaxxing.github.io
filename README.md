# backtestmaxxing.github.io

A tear sheet you can read. Static HTML, one stylesheet, three self-hosted
typefaces, no build step, no dependencies, no tracking. Pushing to `main`
publishes.

## Layout

```
index.html                 the desk: equity curve, stats, latest filings
writings/index.html        the trade log
writings/<slug>/index.html one memo per directory
projects/index.html        the book: open strategies and closed positions
404.html                   position closed
style.css  main.js  fonts/ everything else
```

## Design

- Typefaces: Sprat (headlines) and Necto Mono (figures) from Collletttivo,
  Libre Caslon Text (body) from Google Fonts. All SIL Open Font License; the
  licences are in `fonts/`.
- Theme: a salmon "pink paper" financial broadsheet. Column rules, a stock-table
  ticker, a halftone chart and a cropped outline wordmark in the footer. The
  edition button (or `t`) switches to a night edition. `⌘K` or `/` opens the index.
- Inspiration: gwern.net (small-caps reading column), yuga.com (halftone dots),
  omarchy.us (keyboard theme switch), minimal.gallery/the-new-industrials,
  footer.design/sites/decimals (cropped wordmark), 404s.design/sites/pensatori-irrazionali
  (404 as a status board).
- Colors carry meaning: green gains, red losses and links.
