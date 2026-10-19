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

- Main inspiration: https://www.jasonpontin.com/, found on minimal.gallery
  (blog tag).
- Typefaces: Schibsted Grotesk (headlines, UI) and Libre Caslon Text (body)
  from Google Fonts, Necto Mono (figures) from Collletttivo. All SIL Open Font
  License; the licences are in `fonts/`.
- Theme: a vermilion block with the name cropped at the fold, an off-white
  page, black ink, a red dot as the page marker and a halftone equity curve.
  The edition button (or `t`) switches to a night edition. `⌘K` or `/` opens
  the index. The footer crop follows footer.design/sites/decimals and the 404
  status board follows 404s.design/sites/pensatori-irrazionali.
- Colors carry meaning: green gains, vermilion losses, links and markers.
