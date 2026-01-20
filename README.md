# Football Info PWA ⚽

A Progressive Web App for English Premier League football information with standings, teams, and player details.

![Deploy Status](https://github.com/irvandandung/irvandandung.github.io/actions/workflows/deploy.yml/badge.svg)

## 🚀 Quick Start

Get up and running in **5 minutes**:

```bash
# 1. Clone the repository
git clone https://github.com/irvandandung/irvandandung.github.io.git
cd irvandandung.github.io

# 2. Install dependencies
npm install

# 3. Start the development server
npm start

# 4. Open your browser
# Visit: http://localhost:3000
```

👉 **[Quick Start Guide](QUICKSTART.md)** - Detailed walkthrough with screenshots

## 📚 Documentation

- **[Quick Start Guide](QUICKSTART.md)** - Get running in 5 minutes
- **[Full Deployment Guide](DEPLOYMENT.md)** - Complete setup and deployment instructions
- **[GitHub Actions Setup](GITHUB_ACTIONS_SETUP.md)** - Configure automated deployment
- **[Setup Checklist](SETUP_CHECKLIST.md)** - Step-by-step verification checklist

## ✨ Features

### Progressive Web App
- 📱 Installable on mobile devices
- 🔄 Offline functionality via Service Worker
- ⚡ Fast loading with caching
- 📲 Push notifications support
- 🎨 Responsive design for all devices

### Application Features
- 📊 **EPL Standings** - Real-time league table with mock data fallback
- ⚽ **Team List** - All Premier League teams with info
- 👥 **Player Details** - Squad information for each team
- ❤️ **Favorites** - Save your favorite teams locally
- 🔍 **Search** - Find teams and players easily

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Backend | Node.js, Express.js |
| Database | IndexedDB (Local) |
| PWA | Service Workers, Web Manifest |
| Hosting | GitHub Pages, Heroku, Firebase |
| API | football-data.org |

## 🎯 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)
Deploy static files automatically with every push:
```bash
git push origin main
```

Your site will be live at: `https://YOUR_USERNAME.github.io`

👉 See [Deployment Guide](DEPLOYMENT.md#github-pages-deployment)

### Option 2: Full Backend Deployment
Deploy with Node.js server to:
- **Heroku** - Free/paid tiers
- **Render** - Modern Heroku alternative
- **Firebase** - Google's hosting
- **Railway** - Pay-as-you-go

👉 See [Backend Deployment Guide](DEPLOYMENT.md#deployment)

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       ├── deploy.yml           # GitHub Pages deployment
│       └── deploy-backend.yml   # Backend deployment (optional)
├── css/                         # Stylesheets
├── js/                          # JavaScript modules
├── pages/                       # HTML pages
├── index.html                   # Main entry point
├── manifest.json                # PWA manifest
├── service-worker.js            # Offline support
├── server.js                    # Express backend
├── Procfile                     # Heroku configuration
├── QUICKSTART.md                # 5-minute setup guide
├── DEPLOYMENT.md                # Full deployment docs
├── GITHUB_ACTIONS_SETUP.md      # GitHub Actions configuration
└── SETUP_CHECKLIST.md           # Verification checklist
```

## 🚀 Getting Started

### Prerequisites
- Node.js v14+ ([Download](https://nodejs.org))
- npm v6+ (included with Node.js)
- Git ([Download](https://git-scm.com))

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Access the app:**
   ```
   http://localhost:3000
   ```

4. **Test offline mode:**
   - Open DevTools (F12)
   - Go to Network tab
   - Check "Offline"
   - App still works! ✨

### GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy app"
   git push origin main
   ```

2. **Monitor deployment:**
   - Go to Actions tab
   - Watch workflow run
   - Verify deployment completes

3. **Access live site:**
   ```
   https://YOUR_USERNAME.github.io
   ```

## 🔧 Configuration

### API Key
The app uses football-data.org API. The key is pre-configured in `server.js`:
```javascript
const API_KEY = "45fde3c7f6ec4397ab50d26561781213";
```

Get your own at: https://www.football-data.org/client/register

### Customize App Name
Edit `manifest.json`:
```json
{
  "name": "Your App Name",
  "short_name": "App"
}
```

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change port in `server.js` or kill process |
| npm not found | Install Node.js from nodejs.org |
| Standings empty | Mock data shows automatically |
| GitHub Pages 404 | Check Settings → Pages, wait 2-3 min |
| Service Worker not working | Clear cache, hard refresh (Ctrl+Shift+R) |

👉 See [Setup Checklist](SETUP_CHECKLIST.md#-troubleshooting-checklist) for more help

## 📱 Mobile Testing

### Test Locally on Mobile Device
```bash
# Get your computer's IP:
# Mac/Linux: ifconfig | grep inet
# Windows: ipconfig | findstr IPv4

# On mobile, visit: http://YOUR_IP:3000
```

### Install as PWA
1. On mobile, tap share/options menu
2. Tap "Add to Home Screen" (iOS) or "Install App" (Android)
3. App appears on home screen
4. Works offline!

## 🌐 Live Demo

- **GitHub Pages:** https://irvandandung.github.io
- **Firebase Hosting:** https://dicoding-push-notification.web.app

## 📖 Documentation Files

| Document | Purpose |
|----------|---------|
| [QUICKSTART.md](QUICKSTART.md) | 5-minute setup guide |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Full deployment documentation |
| [GITHUB_ACTIONS_SETUP.md](GITHUB_ACTIONS_SETUP.md) | GitHub Actions configuration |
| [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md) | Verification checklist |

## 🎯 Next Steps

1. ✅ **Local Setup** - Run `npm start`
2. ✅ **GitHub Deployment** - Push to GitHub
3. 📖 **Read Documentation** - Check guides above
4. 🔧 **Customize** - Modify as needed
5. 🚀 **Deploy to Production** - Use GitHub Pages or backend services

## 🔗 Useful Links

- **GitHub:** https://github.com/irvandandung/irvandandung.github.io
- **Football Data API:** https://www.football-data.org
- **GitHub Actions:** https://docs.github.com/en/actions
- **PWA Documentation:** https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see [package.json](package.json) for details.

## 💬 Support

- 📝 **Issues:** [GitHub Issues](https://github.com/irvandandung/irvandandung.github.io/issues)
- 💡 **Questions:** Check the [DEPLOYMENT.md](DEPLOYMENT.md) FAQ
- 🐛 **Report Bugs:** Open an issue with detailed steps to reproduce

## 👨‍💻 Author

**Irvan Dandung**

- GitHub: [@irvandandung](https://github.com/irvandandung)
- Portfolio: https://irvandandung.github.io

## 🎉 Acknowledgments

- **football-data.org** - For providing the EPL API
- **Materialize CSS** - For UI framework
- **Service Workers** - For offline functionality

---

**Made with ❤️ for football fans**

**Last Updated:** January 20, 2026

⭐ If you find this useful, please star the repository!
