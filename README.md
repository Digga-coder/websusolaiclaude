# DUSOLAI Static Site

This repo contains a lightweight static website for DUSOLAI.

## Optimizations
- Added skip links and main landmarks for better accessibility
- Included Twitter meta tags for richer sharing
- Added loading="lazy" to images
- Introduced security headers file for Netlify deployment
- Added sitemap and robots.txt for SEO
- Minor script update to close modals with Escape key

## Local Development
The project is a pure static site with prebuilt assets. To preview it locally you can use any static server.

```bash
npx serve -s .
```

The command above serves the current directory and opens the site on `http://localhost:3000`.

## Build / Optimization
The repository already contains the minified files `style-optimized.min.css` and `scripts-optimized.min.js`. If you edit the CSS or JS you will need to run your own minification step (for example using `npx csso` or `npx terser`) to regenerate these optimized files. There is no additional build pipeline.

## Deploying to Netlify
1. Push your changes to a Git repository (as this one).
2. In Netlify, create a new site from Git.
3. Set the build command to `None` and the publish directory to the repository root.
4. Netlify will automatically use the `_headers` file included in the repo to apply strict security headers.

After deploying you should see the site live on your Netlify domain.
