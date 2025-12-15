# Signals2Trade Landing Pages

This repository contains two landing pages for Signals2Trade that are ready for deployment on Vercel:

1. Main landing page (`/index.html`) - Primary marketing page
2. Secondary landing page (`/ott-core2-landing-page/index.html`) - Alternative landing page

## Deployment

This project is configured for automatic deployment on Vercel. The configuration includes:

- `vercel.json` - Routing configuration to serve both landing pages correctly
- `package.json` - Defines the project and static server configuration

## File Structure

```
/
├── index.html (Main landing page)
├── package.json
├── vercel.json
└── /ott-core2-landing-page/
    └── index.html (Secondary landing page)
```

## How to Deploy

1. Push this repository to GitHub
2. Connect the repository to Vercel
3. Vercel will automatically detect the configuration and deploy the site

Both landing pages will be accessible at:
- Main page: `https://your-domain.vercel.app/`
- Secondary page: `https://your-domain.vercel.app/ott-core2-landing-page`