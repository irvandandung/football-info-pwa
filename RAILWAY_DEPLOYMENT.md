# GitHub Pages + Railway Backend Deployment

Deploy your Football Info PWA with GitHub Pages frontend + Railway Express backend.

## 🎯 Architecture

```
Your PWA (GitHub Pages)     Express Backend (Railway)
        ↓                              ↓
  Static files               API proxy server
  (FREE, 24/7)              ($5 free/month credit)
        ↓                              ↓
  API calls ────────→ https://your-app.railway.app/api/*
```

## 📋 Prerequisites

- GitHub account (already have it)
- Railway account (free at railway.app)
- Your code pushed to GitHub
- Credit card (for Railway free tier verification, no charge)

## 🚀 Step 1: Deploy Frontend to GitHub Pages

### 1.1 Push Code to GitHub

```bash
cd /var/www/football-info-pwa
git add .
git commit -m "Deploy Football Info PWA with Railway backend"
git push origin main
```

### 1.2 Wait for GitHub Actions

1. Go to: `https://github.com/YOUR_USERNAME/YOUR_REPO/actions`
2. Watch "Deploy to GitHub Pages" workflow
3. Wait for green ✅ checkmark (2-3 minutes)

### 1.3 Your Frontend is Live

Your PWA is now at:
```
https://YOUR_USERNAME.github.io
```

**Frontend deployment complete!** ✅

---

## 🚂 Step 2: Deploy Backend to Railway

### 2.1 Create Railway Account

1. Go to: https://railway.app
2. Click "Start Project"
3. Sign up with GitHub (easiest option)
4. Authorize Railway to access GitHub

### 2.2 Create New Project

1. Click "Create New Project" or "New Project"
2. Select "Deploy from GitHub repo"
3. Connect your GitHub repository (irvandandung.github.io or your repo)
4. Select your repository

### 2.3 Configure Railway Service

1. Railway will detect Node.js project automatically
2. Click "Add Service" → "GitHub Repo"
3. Select your repository again
4. Railway shows configuration:
   - Runtime: Node.js ✅
   - Start command: `npm start` ✅

### 2.4 Set Environment Variables (Optional but Recommended)

1. In Railway dashboard, go to your project
2. Click "Variables" tab
3. Add your API key:
   ```
   FOOTBALL_DATA_API_KEY=45fde3c7f6ec4397ab50d26561781213
   ```

4. Add production mode:
   ```
   NODE_ENV=production
   ```

### 2.5 Deploy

1. Click "Deploy" button
2. Railway builds and deploys automatically
3. Takes 3-5 minutes
4. Watch logs in real-time

### 2.6 Get Your Railway URL

1. Once deployed, Railway shows your URL
2. Format: `https://your-app-name.railway.app`
3. Copy this URL (you'll need it)

**Backend deployment complete!** ✅

---

## 🔗 Step 3: Connect Frontend to Backend

### 3.1 Update Frontend to Use Railway Backend

Edit `js/api.js`:

**Before:**
```javascript
const base_url = "http://localhost:3000/api/";
```

**After:**
```javascript
const base_url = "https://your-app-name.railway.app/api/";
```

Replace `your-app-name` with your actual Railway app name.

### 3.2 Commit and Push

```bash
git add js/api.js
git commit -m "Update API URL to Railway backend"
git push origin main
```

### 3.3 GitHub Actions Redeploys

1. GitHub Actions automatically runs
2. Updates your PWA with new API URL
3. Deploys in 2-3 minutes
4. Your PWA now talks to Railway backend! 🎉

---

## ✅ Verification

### Test Your Setup

1. **Visit your frontend:**
   ```
   https://YOUR_USERNAME.github.io
   ```

2. **Test features:**
   - Navigate to each page
   - Add a team to favorites
   - Refresh page - favorites persist ✅
   - Check standings display ✅
   - Try team details page ✅

3. **Test on mobile:**
   - Open on phone browser
   - Check responsive design
   - Tap "Add to Home Screen"
   - Install as PWA

4. **Monitor in browser console:**
   - Open DevTools (F12)
   - Go to Console tab
   - No red errors should appear
   - API calls should show in Network tab

---

## 🆕 How to Find Your Railway URL

If you forgot your Railway URL:

1. Go to: https://railway.app/dashboard
2. Select your project
3. Click "Settings"
4. Find "Deployment URL" or "Domain"
5. Copy the full URL

Format: `https://your-app-name.railway.app`

---

## 💰 Railway Free Tier

### Free Credits
- $5 free credit per month
- Automatically renews each month
- Your Express server uses ~$0.05-0.10/hour

### What You Get
- Enough to run your server 50+ hours/month
- Perfect for testing/development
- Can always upgrade if needed
- No automatic charges

### How to Monitor
1. Go to Railway dashboard
2. Click "Billing"
3. See credit usage
4. Get alerts before running out

---

## 🛠️ Troubleshooting

### Frontend shows 404

**Solution:**
1. Check GitHub Actions - workflow should be ✅ green
2. Wait 2-3 minutes for GitHub Pages to update
3. Hard refresh browser (Ctrl+Shift+R)
4. Clear browser cache

### API calls show CORS error

**Cause:** Frontend still pointing to old API URL

**Solution:**
1. Check `js/api.js` - should have Railway URL
2. Verify it's the correct Railway URL format
3. Commit and push changes
4. Wait for GitHub Actions to redeploy
5. Hard refresh browser

### Railway shows deployment error

**Check logs:**
1. Go to Railway dashboard
2. Click your project
3. Go to "Logs" tab
4. See error messages
5. Common fixes:
   - Ensure `npm start` works locally
   - Check `Procfile` is not conflicting
   - Verify `package.json` has correct scripts

### Standings show empty

**This is expected:**
- Mock data displays automatically
- Your app works correctly
- API data may be unavailable

### App won't load at all

**Check browser console:**
1. Open DevTools (F12)
2. Go to Console tab
3. See error messages
4. Common issues:
   - Wrong Railway URL in `api.js`
   - Network connectivity
   - Railway backend not running

---

## 📊 What's Running Where

| Component | Location | Status |
|-----------|----------|--------|
| PWA Files (HTML/CSS/JS) | GitHub Pages | Always on ✅ |
| API Proxy Server | Railway | May sleep ✅ |
| Database | None (local storage) | Browser-based ✅ |
| Favorites Storage | IndexedDB | Local device ✅ |

---

## 🚀 Update & Redeploy

### To Update Frontend

```bash
# Make changes to your code
# Edit files as needed

# Commit and push
git add .
git commit -m "Update description"
git push origin main

# GitHub Actions automatically redeploys (2-3 min)
```

### To Update Backend

```bash
# Edit server.js or other backend files
# Make your changes

# Commit and push
git add .
git commit -m "Update backend"
git push origin main

# Railway watches GitHub and redeploys (3-5 min)
```

---

## 📱 Install as PWA on Mobile

### iPhone (iOS)
1. Open your site in Safari
2. Tap the Share icon (up arrow)
3. Tap "Add to Home Screen"
4. Name your app
5. Tap "Add"
6. App appears on home screen
7. Tap to open - works offline!

### Android (Chrome)
1. Open your site in Chrome
2. Tap menu (3 dots)
3. Tap "Install app" or "Add to Home Screen"
4. App appears on home screen
5. Tap to open - works offline!

---

## 🎯 Final Checklist

### Deployment Complete When:
- [ ] Frontend deployed to GitHub Pages
- [ ] Backend deployed to Railway
- [ ] API URL updated in `js/api.js`
- [ ] GitHub Actions redeployed frontend
- [ ] Frontend + Backend working together
- [ ] All pages load without errors
- [ ] API calls working
- [ ] Mock data displays
- [ ] Favorites feature works
- [ ] PWA installable on mobile

---

## 📞 Support

### Railway Support
- Dashboard: https://railway.app/dashboard
- Docs: https://docs.railway.app/
- Status: https://railway.app/status

### GitHub Support
- Repository Settings: GitHub.com → Settings → Pages
- Actions Logs: Repository → Actions tab
- Docs: https://docs.github.com/

### Your App Monitoring
- Frontend logs: GitHub Actions tab
- Backend logs: Railway dashboard → Logs

---

## 🎉 You're Live!

Your Football Info PWA is now:

✅ **Frontend:** Hosted on GitHub Pages (FREE, 24/7)
✅ **Backend:** Running on Railway (FREE, $5 credit/month)
✅ **API Proxy:** Working perfectly
✅ **Offline:** Service Worker enabled
✅ **Mobile:** PWA installable
✅ **Favorites:** Stored locally
✅ **Cost:** FREE forever

### Next Steps

1. Share your site: `https://YOUR_USERNAME.github.io`
2. Tell friends it's a PWA (installable app)
3. Monitor Railway credit usage
4. Add more features if desired
5. Enjoy your live application! ⚽

---

## 📚 Documentation

For more details:
- `START_HERE.md` - Quick deployment
- `GITHUB_PAGES_ONLY.md` - GitHub Pages only
- `README.md` - Project overview
- `SETUP_CHECKLIST.md` - Verification

---

**Your Football Info PWA is now live with GitHub Pages + Railway! 🚀**

