# Quick Start Guide

Get the Football Info PWA running in minutes!

## 📋 Prerequisites

- Node.js v14+ ([Download](https://nodejs.org))
- npm v6+ (comes with Node.js)
- Git ([Download](https://git-scm.com))
- GitHub account

## 🚀 5-Minute Local Setup

### 1. Clone Repository
```bash
git clone https://github.com/irvandandung/irvandandung.github.io.git
cd irvandandung.github.io
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

You should see:
```
> eplteam@1.0.0 start
> node server.js

Server running at http://localhost:3000
```

### 4. Open in Browser
Visit: **http://localhost:3000**

🎉 **You're done!** The app is now running locally.

## 🌐 Deploy to GitHub Pages (5 more minutes)

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Add Football Info PWA"
git push origin main
```

### 2. Monitor Deployment
1. Go to your GitHub repository
2. Click **Actions** tab
3. Watch the "Deploy to GitHub Pages" workflow

### 3. Access Live Site
Once workflow completes, visit: `https://YOUR_USERNAME.github.io`

✅ **Your app is now live online!**

## 🗂️ Project Structure

```
.
├── index.html                 # Main page
├── manifest.json              # PWA config
├── service-worker.js          # Offline support
├── server.js                  # Backend server
├── js/                        # JavaScript files
├── css/                       # Stylesheets
├── pages/                     # HTML pages
└── .github/workflows/         # Auto-deployment
```

## 📚 Documentation

- **Full Setup Guide:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **GitHub Actions Setup:** [GITHUB_ACTIONS_SETUP.md](GITHUB_ACTIONS_SETUP.md)
- **Setup Checklist:** [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)

## 🔍 Testing Locally

### Test All Features
```bash
# While server is running (npm start)

# 1. Visit home page to see standings
# 2. Click "Teams" to see list
# 3. Click team to see players
# 4. Click heart icon to favorite
# 5. Check "Favorites" page
```

### Test Offline Mode
1. Open DevTools (F12)
2. Go to **Network** tab
3. Check **Offline** checkbox
4. Refresh page - it should still work!

## 🐛 Common Issues

### Issue: "Port 3000 already in use"
```bash
# Kill the process using port 3000
# On Windows:
netstat -ano | findstr :3000

# On Mac/Linux:
lsof -i :3000
kill -9 <PID>
```

### Issue: "npm: command not found"
Install Node.js from https://nodejs.org

### Issue: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Site shows 404 after deployment
1. Go to **Settings → Pages**
2. Verify source is set to "GitHub Actions"
3. Wait 2-3 minutes and refresh
4. Hard refresh (Ctrl+Shift+R)

## 📱 Mobile Testing

### Test on Mobile Device
```bash
# Find your computer's IP (in terminal):
# Mac/Linux: ifconfig | grep inet
# Windows: ipconfig | findstr IPv4

# On mobile, visit: http://YOUR_IP:3000
```

### Install as App (PWA)
1. On mobile, tap share/options
2. Tap "Add to Home Screen"
3. App appears on home screen
4. Works offline!

## 🔧 Customization

### Change API Key
Edit `server.js` line 5:
```javascript
const API_KEY = "YOUR_API_KEY";
```

Get your own at: https://www.football-data.org/client/register

### Change Port
Edit `server.js` line 2:
```javascript
const PORT = 3001; // Change to any port
```

### Update App Name
Edit `manifest.json`:
```json
{
  "name": "Your App Name",
  "short_name": "App"
}
```

## 📊 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main app page |
| `manifest.json` | PWA configuration |
| `service-worker.js` | Offline cache manager |
| `server.js` | Express.js backend |
| `js/api.js` | API calls |
| `js/db.js` | Local database |
| `css/custom.css` | Custom styles |

## 🚀 Next Steps

1. ✅ **Local Setup** - You're done with this!
2. ✅ **GitHub Deployment** - Follow the 5-minute steps above
3. 📖 **Read Full Docs** - Check DEPLOYMENT.md for details
4. 🔑 **Configure Secrets** - Add API keys for production
5. 🎨 **Customize** - Modify styles and content

## 📞 Support

- GitHub Issues: https://github.com/irvandandung/irvandandung.github.io/issues
- Football Data API: https://www.football-data.org
- GitHub Docs: https://docs.github.com

## ✨ Features

- ⚽ EPL standings and team info
- 👥 Player details and squad info
- ❤️ Save favorite teams
- 📱 Works offline
- 🔄 Auto-updates
- 📲 Installable on mobile

## 🎯 Tips

- Bookmark your live site: `https://YOUR_USERNAME.github.io`
- Share with friends and family
- Monitor GitHub Actions for deployments
- Check browser DevTools for any errors

---

**That's it!** You now have a fully functional Football Info PWA running locally and deployed online. Enjoy! ⚽

