# backtestmaxxing.github.io

A quant's notebook. Static HTML, one stylesheet, two typefaces, no build
step, no dependencies, no tracking. Pushing to `main` publishes.

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

- Main inspiration: https://www.atalanta.tech/, found on minimal.gallery
  (software tag).
- Typefaces: Switzer (Indian Type Foundry) loaded from Fontshare's CDN,
  api.fontshare.com, never copied into the repo; IBM Plex Mono (figures,
  labels) from Google Fonts, SIL Open Font License, self-hosted in `fonts/`
  with its licence.
- Theme: warm charcoal by default, a left rail split off by one full-height
  hairline, memo metadata and page latency as tabular figures in the rail, a
  light two-tone sentence instead of a headline, "/" navigation with a square
  marker, memos as an order book with depth bars, a quiet tape under the top
  bar. The edition button (or `t`) switches to a paper edition. `⌘K` or `/`
  opens the index.
- Colours carry meaning only: muted green for gains, muted coral for losses.
