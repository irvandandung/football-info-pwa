# Setup & Deployment Checklist

Complete this checklist to successfully run and deploy the Football Info PWA.

## 🚀 Local Development Setup

- [ ] Clone the repository: `git clone <repo-url>`
- [ ] Navigate to project: `cd football-info-pwa` (or your project name)
- [ ] Install Node.js v14+ and npm v6+
- [ ] Install dependencies: `npm install`
- [ ] Start development server: `npm start`
- [ ] Verify app opens at `http://localhost:3000`
- [ ] Test navigation to all pages (Home, Teams, Favorites)
- [ ] Check browser console for errors
- [ ] Verify Service Worker is registered (check DevTools)

## 📱 Local Testing

- [ ] Test on desktop browser
- [ ] Test responsive design on mobile (use DevTools)
- [ ] Test offline functionality:
  - [ ] Open app
  - [ ] Go to DevTools → Network → Offline
  - [ ] Verify app still works with cached data
- [ ] Test favorite teams feature:
  - [ ] Add a team to favorites
  - [ ] Refresh the page
  - [ ] Verify team is still in favorites
- [ ] Check all images load correctly
- [ ] Verify standings data displays (mock data should show)

## 🌐 GitHub Pages Deployment

### Repository Setup
- [ ] Push code to GitHub repository
- [ ] Ensure you're the repository owner
- [ ] Repository is public (or upgrade to Pro for private repos with Pages)

### GitHub Configuration
- [ ] Go to Repository **Settings**
- [ ] Navigate to **Pages** section
- [ ] Verify **Source** is set to "GitHub Actions"
- [ ] Verify default branch is correct (main/master)

### Deploy Workflow
- [ ] Verify `.github/workflows/deploy.yml` exists
- [ ] Commit and push all changes:
  ```bash
  git add .
  git commit -m "Add deployment configuration"
  git push origin main
  ```
- [ ] Go to **Actions** tab in GitHub
- [ ] Wait for "Deploy to GitHub Pages" workflow to complete
- [ ] Check workflow logs for any errors
- [ ] Verify **Settings → Pages** shows your site URL

### Verify Deployment
- [ ] Visit your GitHub Pages URL (e.g., `https://irvandandung.github.io`)
- [ ] Test all navigation pages work
- [ ] Test responsive design on mobile
- [ ] Check DevTools Console for errors
- [ ] Verify standalone mode on mobile (Add to Home Screen)

## 🐳 Backend Deployment (Optional)

### For Heroku Deployment
- [ ] Create Heroku account at heroku.com
- [ ] Create new Heroku app
- [ ] Verify `Procfile` exists in project root
- [ ] Go to GitHub **Settings → Secrets and variables → Actions**
- [ ] Add secrets:
  - [ ] `HEROKU_API_KEY` - Your Heroku API key
  - [ ] `HEROKU_APP_NAME` - Your app name
  - [ ] `HEROKU_EMAIL` - Your email
- [ ] Create `production` branch: `git checkout -b production`
- [ ] Push to production: `git push origin production`
- [ ] Verify workflow completes in GitHub Actions
- [ ] Visit your Heroku app URL and test functionality

### For Render Deployment
- [ ] Create account at render.com
- [ ] Connect your GitHub repository
- [ ] Create Web Service from repository
- [ ] Get Deploy Hook URL
- [ ] Go to GitHub **Settings → Secrets and variables → Actions**
- [ ] Add secret: `RENDER_DEPLOY_HOOK` with hook URL
- [ ] Push to `production` branch to trigger deployment
- [ ] Verify deployment in Render dashboard

### For Firebase Deployment
- [ ] Create Firebase project at console.firebase.google.com
- [ ] Run: `npm install -g firebase-tools`
- [ ] Run: `firebase login`
- [ ] Run: `firebase init hosting`
- [ ] Get CI token: `firebase login:ci`
- [ ] Go to GitHub **Settings → Secrets and variables → Actions**
- [ ] Add secret: `FIREBASE_TOKEN` with your token
- [ ] Verify `firebase.json` exists
- [ ] Push to `production` branch
- [ ] Verify deployment in Firebase Console

## 🔧 Configuration

### API Key Management
- [ ] Verify `server.js` has valid football-data.org API key
- [ ] For production, consider using GitHub Secrets
- [ ] Update environment if needed

### Environment Setup (Production)
- [ ] Set `NODE_ENV=production` for backend deployment
- [ ] Enable CORS for your domain
- [ ] Configure custom domain (optional)
- [ ] Set up SSL/HTTPS (handled automatically by Heroku/Render/Firebase)

## 📊 Monitoring & Maintenance

### Ongoing Checks
- [ ] Monitor GitHub Actions workflow runs weekly
- [ ] Check for any deployment failures in Actions tab
- [ ] Monitor application performance
- [ ] Check browser console in production for errors
- [ ] Verify Service Worker updates are working

### Regular Updates
- [ ] Check npm for outdated packages: `npm outdated`
- [ ] Update dependencies: `npm update`
- [ ] Review GitHub security alerts
- [ ] Test app in different browsers monthly

## 🐛 Troubleshooting Checklist

If something isn't working:

### Deployment Not Starting
- [ ] Check GitHub Actions is enabled (**Settings → Actions**)
- [ ] Verify workflow files exist in `.github/workflows/`
- [ ] Check for syntax errors in YAML files
- [ ] Push a new commit to trigger workflow

### Workflow Failed
- [ ] Click workflow run to see error logs
- [ ] Check for missing files or dependencies
- [ ] Verify all secrets are set correctly
- [ ] Check Node.js version compatibility
- [ ] Try running build locally: `npm run build`

### Site Not Loading
- [ ] Wait 2-3 minutes for GitHub Pages to update
- [ ] Hard refresh browser (Ctrl+Shift+R)
- [ ] Clear browser cache
- [ ] Check **Settings → Pages** configuration
- [ ] Verify correct branch in GitHub Pages settings

### API Calls Not Working
- [ ] Ensure backend server is running locally: `npm start`
- [ ] Check API key is valid in `server.js`
- [ ] Verify network requests in DevTools
- [ ] Check browser console for CORS errors
- [ ] Ensure /api/ endpoints are accessible

### Service Worker Issues
- [ ] Clear Service Worker cache: DevTools → Application → Clear Storage
- [ ] Restart development server
- [ ] Check DevTools → Application → Service Workers
- [ ] Verify service-worker.js file exists
- [ ] Check browser console for errors

## ✅ Final Verification

- [ ] App works locally
- [ ] All pages load correctly
- [ ] Data displays properly
- [ ] Favorites feature works
- [ ] Offline mode works (Service Worker)
- [ ] Responsive design works on mobile
- [ ] GitHub Pages deployment is live
- [ ] GitHub Actions workflow succeeds
- [ ] No console errors in DevTools
- [ ] All images load correctly
- [ ] Navigation works smoothly

## 🎉 Deployment Complete!

Once all items are checked, your Football Info PWA is fully deployed!

### Next Steps
1. Share your site URL with others
2. Monitor the GitHub Actions tab for future deployments
3. Keep dependencies updated with `npm update`
4. Consider adding more features
5. Monitor user feedback and performance

### Support Resources
- GitHub Docs: https://docs.github.com/
- GitHub Actions: https://docs.github.com/en/actions
- Football-data.org API: https://www.football-data.org/
- MDN Web Docs: https://developer.mozilla.org/

---

**Date Completed:** _______________

**Deployed By:** _______________

**Notes:** _______________________________________________

