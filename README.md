# backtestmaxxing.github.io

A tear sheet you can read. Static HTML, one stylesheet, two self-hosted
typefaces (Newsreader, IBM Plex Mono), no build step, no dependencies, no
tracking. Pushing to `main` publishes.

## Layout

```
index.html                 the desk: equity curve, stats, latest filings
writings/index.html        the trade log
writings/<slug>/index.html one memo per directory
projects/index.html        the book: open strategies and closed positions
404.html                   position closed
style.css  main.js  fonts/ everything else
```

## Notes

- Terminal theme is the default; `mode` in the header switches to print.
- Colors carry meaning: green gains, red losses, amber interactive. Body
  text stays near-white on near-black in both themes.
- Typefaces are under the SIL Open Font License; see `fonts/`.
