# Football Info PWA - Documentation

A Progressive Web App for English Premier League football information with standings, teams, and player details.

## Table of Contents

- [Quick Start](#quick-start)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [GitHub Pages Deployment](#github-pages-deployment)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Project Structure](#project-structure)
- [Features](#features)
- [Troubleshooting](#troubleshooting)

## Quick Start

### Prerequisites

- Node.js v14 or higher
- npm v6 or higher
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/irvandandung/irvandandung.github.io.git
cd irvandandung.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Local Development

### Running the Development Server

The project includes a Node.js backend server that serves the PWA and handles API proxy requests.

```bash
npm start
```

This will:
- Start the Express.js server on `http://localhost:3000`
- Serve all static files (HTML, CSS, JS, images)
- Proxy API requests to football-data.org (with CORS handling)
- Serve mock standings data as fallback

### Available Routes

- **`GET /`** - Main PWA application
- **`GET /api/teams`** - List all EPL teams
- **`GET /api/teams/:id`** - Get specific team details with squad
- **`GET /api/standings`** - Get EPL standings (with mock data fallback)

### Development Tips

- The app uses Service Workers for offline functionality
- IndexedDB is used for storing favorite teams
- Mock standings data is provided when API data is unavailable
- All API requests are cached by the Service Worker

## Deployment

### GitHub Pages Deployment Options

Since GitHub Pages only supports static content, you have two options:

#### Option 1: Deploy Only Static Files (Recommended for GitHub Pages)

Deploy just the HTML, CSS, JS, and image files without the Node.js server:

1. Create a `build` or `dist` directory with your static files
2. Configure GitHub Pages to use this directory
3. Limitations: The `/api/*` endpoints won't work, so you'll need to modify the frontend to call the external API directly

#### Option 2: Deploy Full App with Backend (Recommended)

Deploy to a platform that supports Node.js like:
- **Heroku** (free tier available)
- **Vercel**
- **Railway**
- **Render**
- **Firebase Functions**

## GitHub Pages Deployment

### Step 1: Configure Repository Settings

1. Go to your GitHub repository settings
2. Navigate to **Settings → Pages**
3. Under **Build and deployment**:
   - Set **Source** to "Deploy from a branch"
   - Set **Branch** to `main` (or your default branch)
   - Set **Folder** to `/docs` or `/ (root)`

### Step 2: Prepare Static Files

Create a workflow that prepares static files for GitHub Pages deployment.

See [GitHub Actions Workflow](#github-actions-workflow) section for automated deployment.

### Step 3: Enable GitHub Pages

After your first deployment via GitHub Actions, enable GitHub Pages:
1. Go to **Settings → Pages**
2. Verify the source branch is correct
3. Your site will be available at: `https://irvandandung.github.io`

## GitHub Actions Workflow

### Automated Deployment Setup

Create a GitHub Actions workflow file: `.github/workflows/deploy.yml`

This workflow will:
- Run on every push to `main` branch
- Install dependencies
- Build/prepare static files
- Deploy to GitHub Pages using `gh-pages` branch

### Configuration Steps

1. Install gh-pages package (already in this project):
```bash
npm install --save-dev gh-pages
```

2. Update `package.json` scripts section:
```json
{
  "scripts": {
    "start": "node server.js",
    "build": "echo 'Build complete'",
    "deploy": "gh-pages -d .",
    "deploy-gh-pages": "npm run build && gh-pages -d ."
  }
}
```

3. Create `.github/workflows/deploy.yml`:

See the workflow file created in this repository.

### Manual Deployment via GitHub Actions

You can manually trigger the deployment:

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow**

### Deployment Status

Check deployment status:
1. Go to **Actions** tab in your GitHub repository
2. Look for your workflow run
3. Click on it to see detailed logs

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions workflow
├── css/                            # Stylesheets
│   └── custom.css
│   └── materialize.min.css
├── font/                           # Font files
├── js/                             # JavaScript files
│   ├── api.js                      # API calls (proxied through server)
│   ├── db.js                       # IndexedDB operations
│   ├── index.js                    # Main application logic
│   ├── indexDetail.js              # Detail page logic
│   ├── idb.js                      # IndexedDB library
│   ├── serviceworkerRegister.js    # Service Worker registration
│   └── viewresponse.js             # UI rendering functions
├── pages/                          # HTML pages
│   ├── home.html
│   ├── listteam.html
│   ├── favorite.html
│   └── detailtim.html
├── index.html                      # Main entry point
├── manifest.json                   # PWA manifest
├── service-worker.js               # Service Worker script
├── server.js                       # Express.js backend server
├── package.json                    # Node.js dependencies
└── README.md                       # This file
```

## Features

### Progressive Web App
- ✅ Installable on mobile devices
- ✅ Offline functionality via Service Worker
- ✅ Works on all modern browsers
- ✅ Responsive design (mobile-first)

### Application Features
- 📊 EPL standings table with live updates
- ⚽ Team list with basic information
- 👥 Player details and squad information
- ❤️ Save favorite teams locally
- 📱 Push notifications (setup required)

### Backend Features
- 🔄 CORS proxy for api.football-data.org
- 💾 Fallback mock data for standings
- 🚀 Fully static file compatible

## Troubleshooting

### Issue: CORS Error When Fetching API

**Solution:**
- The backend server (`npm start`) handles CORS automatically
- Ensure the server is running on `http://localhost:3000`
- The API endpoints are available at `http://localhost:3000/api/*`

### Issue: Standings Data is Empty

**Solution:**
- The application includes mock standings data as fallback
- The mock data displays automatically if the real API data is unavailable
- To use real data, ensure your football-data.org API key is valid in `server.js`

### Issue: Service Worker Not Working

**Solution:**
- Service Workers require HTTPS in production (except localhost)
- Clear your browser cache and service worker cache
- Check browser console for service worker errors
- Restart the development server

### Issue: Favorite Teams Not Persisting

**Solution:**
- IndexedDB is used for local storage
- Check if your browser's storage is full
- Try clearing browser cache and reloading
- Ensure IndexedDB is enabled in your browser

### Issue: GitHub Pages Shows 404

**Solution:**
- Verify the deployment workflow completed successfully in GitHub Actions
- Check that files were deployed to the correct branch (`gh-pages`)
- Ensure repository settings point to the correct source branch
- Clear browser cache and wait a few minutes for GitHub Pages to update

### Issue: Local Server Shows 404 for Static Files

**Solution:**
- Ensure you're running `npm start` from the project root directory
- Check that all static files exist (especially in `js/`, `css/`, `pages/`)
- Verify the server is listening on `http://localhost:3000`

## Environment Variables

The project requires an API key for football-data.org. Currently, the key is stored directly in `server.js`:

```javascript
const API_KEY = "45fde3c7f6ec4397ab50d26561781213";
```

For production, consider moving this to environment variables:

```javascript
const API_KEY = process.env.FOOTBALL_DATA_API_KEY || "45fde3c7f6ec4397ab50d26561781213";
```

Then set the environment variable in GitHub Actions secrets.

## API Documentation

### football-data.org API

- **Base URL:** `https://api.football-data.org/v2/`
- **API Key:** Required in `X-Auth-Token` header
- **Rate Limit:** Depends on subscription plan

Learn more: [football-data.org API Documentation](https://www.football-data.org/client/register)

## Browser Support

- ✅ Chrome 50+
- ✅ Firefox 54+
- ✅ Safari 11+
- ✅ Edge 15+
- ✅ Mobile browsers (iOS Safari 11.3+, Chrome Android 50+)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the package.json file for details.

## Support & Issues

For issues and feature requests, please visit the [GitHub Issues](https://github.com/irvandandung/irvandandung.github.io/issues) page.

## Related Links

- **Live Demo:** https://irvandandung.github.io
- **Firebase Hosting:** https://dicoding-push-notification.web.app/
- **GitHub Repository:** https://github.com/irvandandung/irvandandung.github.io
- **Football Data API:** https://www.football-data.org

---

**Last Updated:** January 20, 2026
