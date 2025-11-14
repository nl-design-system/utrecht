---
"@utrecht/flo-legal-decision-tree-client": patch
---

fix(storybook): resolve flo-client-plugin.js 404 in deployed version

- Fix static assets path in storybook-css config to use correct workspace path
- Replace manual URL construction with URL constructor for robust path resolution
- Ensures FloDecision component works in both development and production builds
