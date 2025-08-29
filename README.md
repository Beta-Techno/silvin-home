# Lococo Home - Construction & Development

A modern website for Lococo Development, showcasing construction services, available properties, and project portfolios across Connecticut.

## 🏗️ About

Lococo Home is a professional construction and development company specializing in:
- New home construction
- Property development
- Interior and exterior renovations
- Financing solutions

## 🚀 Features

- **Interactive Property Map**: Google Maps integration showing available properties across Connecticut
- **Project Portfolio**: Showcase of completed construction projects
- **Design Services**: Contact form for custom home design requests
- **Financing Options**: Partnership with Elm Tree Funding
- **Responsive Design**: Optimized for all devices

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:4321`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment
- Push to the `main` branch triggers automatic build and deployment
- The site is deployed to: `https://damicorobot.github.io`

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## 📁 Project Structure

```
/
├── public/
│   ├── images/          # Property and project images
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── site.ts      # Site configuration
│   ├── layouts/
│   │   └── Layout.astro # Main layout
│   └── pages/           # Site pages
│       ├── index.astro  # Home page
│       ├── about.astro  # About/Team page
│       ├── available.astro # Properties map
│       ├── design.astro # Design services
│       ├── financing.astro # Financing options
│       ├── projects.astro # Project portfolio
│       └── contact.astro # Contact form
├── .github/workflows/   # GitHub Actions
└── astro.config.mjs     # Astro configuration
```

## 🔧 Configuration

### Google Maps API
The available properties page uses Google Maps. To set up:
1. Get a Google Maps JavaScript API key
2. Replace the API key in `src/pages/available.astro`

### Site Configuration
Edit `src/data/site.ts` to update:
- Company information
- Navigation links
- Contact details
- Social media links

## 📝 License

This project is proprietary to Lococo Development.
