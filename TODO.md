# GitHub Pages Deployment Fix - TODO

- [x] Analyze project configuration (vite.config.js, package.json, index.html)
- [x] Identify root cause (case mismatch in base path)
- [x] Fix vite.config.js - change base from `/dissidiawiki/` to `/DissidiaWiki/`
- [x] Fix package.json - add homepage field and update deploy script
- [x] Add 404.html SPA fallback
- [x] Add SPA redirect handler to index.html
- [x] Run deploy command (via manual git push due to Windows gh-pages bug)
- [ ] Verify GitHub Pages settings

