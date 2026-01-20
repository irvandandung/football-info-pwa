# ⚡ Railway Quick Setup - 10 Minutes

**Get your Express backend running on Railway in 10 minutes.**

## 🚀 TL;DR - Just Follow These Steps

### Step 1: Deploy Frontend (3 minutes)
```bash
cd /var/www/football-info-pwa
git add .
git commit -m "Deploy with Railway backend"
git push origin main
```

Wait for GitHub Actions to complete (watch Actions tab).

### Step 2: Create Railway Account (2 minutes)
1. Go to: https://railway.app
2. Sign up with GitHub
3. Authorize Railway

### Step 3: Deploy to Railway (3 minutes)
1. Click "Create New Project"
2. Select "Deploy from GitHub repo"
3. Choose your repository
4. Railway detects Node.js, shows "Deploy"
5. Click "Deploy"
6. Wait for deployment to complete

### Step 4: Get Your URL (1 minute)
1. In Railway dashboard, find your project
2. Click "Settings"
3. Copy your Deployment URL
4. Format: `https://your-app-name.railway.app`

### Step 5: Update Frontend (1 minute)
Edit `js/api.js` line 4:

**Change this:**
```javascript
const base_url = "http://localhost:3000/api/";
```

**To this:**
```javascript
const base_url = "https://your-app-name.railway.app/api/";
```

Save and push:
```bash
git add js/api.js
git commit -m "Update API URL to Railway"
git push origin main
```

### Step 6: Test (1 minute)
1. Visit: `https://YOUR_USERNAME.github.io`
2. Check if features work
3. No API errors in console
4. Done! 🎉

---

## 🎯 That's It!

Your app is now live with:
- ✅ Frontend on GitHub Pages
- ✅ Backend on Railway
- ✅ Working API proxy
- ✅ $5 free credit/month
- ✅ No cost ever

---

## 📝 Important URLs

After setup, you'll have:

**Your Frontend:**
```
https://YOUR_USERNAME.github.io
```

**Your Backend:**
```
https://your-app-name.railway.app
```

**Your Dashboard:**
```
https://railway.app/dashboard
```

---

## ❓ Need More Details?

See full guide: `RAILWAY_DEPLOYMENT.md`

