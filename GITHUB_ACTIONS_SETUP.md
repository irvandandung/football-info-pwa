# GitHub Actions Setup Guide

This guide explains how to configure GitHub Actions for automated deployment of the Football Info PWA.

## Table of Contents

1. [GitHub Pages Deployment (Recommended for Static Hosting)](#github-pages-deployment)
2. [Backend Deployment with Heroku/Render (For Full PWA with Server)](#backend-deployment)
3. [Configuration Steps](#configuration-steps)
4. [Monitoring Deployments](#monitoring-deployments)
5. [Troubleshooting](#troubleshooting)

---

## GitHub Pages Deployment

### Overview

This workflow automatically deploys your static PWA files to GitHub Pages whenever you push to the `main` branch.

**File:** `.github/workflows/deploy.yml`

### What It Does

1. Checks out your code
2. Sets up Node.js environment
3. Installs dependencies
4. Builds static files (if applicable)
5. Uploads files to GitHub Pages
6. Deploys to your GitHub Pages site

### Setup Instructions

1. **No additional setup required!**
   - GitHub Actions is enabled by default for all repositories
   - The workflow file is already included

2. **Verify GitHub Pages settings:**
   - Go to repository **Settings → Pages**
   - Ensure "GitHub Pages" is enabled
   - Source should be set to "GitHub Actions"

3. **Make your first commit:**
   ```bash
   git add .
   git commit -m "Add GitHub Actions workflow"
   git push origin main
   ```

4. **Monitor the deployment:**
   - Go to your repository
   - Click **Actions** tab
   - You'll see the workflow running
   - Once complete, your site is live at: `https://irvandandung.github.io`

### Automatic Triggers

The workflow runs automatically when:
- You push to `main` or `master` branch
- You manually trigger it via **Actions → Deploy to GitHub Pages → Run workflow**
- A pull request is opened (runs checks only, no deployment)

---

## Backend Deployment

### Overview

For deploying the full application with the Node.js backend, use the backend deployment workflow.

**File:** `.github/workflows/deploy-backend.yml`

### Supported Platforms

- **Heroku** - Easy deployment, free tier available (limited)
- **Render** - Modern alternative to Heroku
- **Firebase Hosting** - Google's hosting solution
- **Railway** - Pay-as-you-go deployment platform

### Setup for Heroku

#### Step 1: Create Heroku Account
1. Go to [heroku.com](https://www.heroku.com)
2. Sign up for a free account
3. Create a new app in the Heroku dashboard

#### Step 2: Get Your Credentials
1. Go to **Account Settings → API Key**
2. Click **Reveal** and copy your API key
3. Note your Heroku app name (from app dashboard)
4. Your Heroku email address

#### Step 3: Add Secrets to GitHub
1. Go to your repository
2. Click **Settings → Secrets and variables → Actions**
3. Click **New repository secret** and add:

| Secret Name | Value |
|-------------|-------|
| `HEROKU_API_KEY` | Your Heroku API key |
| `HEROKU_APP_NAME` | Your Heroku app name |
| `HEROKU_EMAIL` | Your Heroku account email |

#### Step 4: Create `Procfile`
Create a file named `Procfile` in your project root:

```
web: node server.js
```

#### Step 5: Deploy
```bash
git add Procfile
git commit -m "Add Procfile for Heroku"
git push origin production
```

The workflow will automatically deploy to Heroku.

### Setup for Render

#### Step 1: Connect Repository
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Create a new service from your repository

#### Step 2: Get Deploy Hook
1. In Render service settings, find **Deploy Hook**
2. Copy the hook URL
3. This is your `RENDER_DEPLOY_HOOK`

#### Step 3: Add Secret to GitHub
1. Go to **Settings → Secrets and variables → Actions**
2. Add new secret:
   - Name: `RENDER_DEPLOY_HOOK`
   - Value: Your Render deploy hook URL

#### Step 4: Deploy
```bash
git push origin production
```

### Setup for Firebase

#### Step 1: Initialize Firebase
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

#### Step 2: Get Firebase Token
```bash
firebase login:ci
```

Copy the token provided.

#### Step 3: Add Secret to GitHub
1. Go to **Settings → Secrets and variables → Actions**
2. Add new secret:
   - Name: `FIREBASE_TOKEN`
   - Value: Your Firebase CI token

#### Step 4: Create `firebase.json` (if not created)
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### Step 5: Deploy
```bash
git push origin production
```

---

## Configuration Steps

### Step 1: Enable GitHub Actions
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Actions** in the left sidebar
4. Ensure "Allow all actions and reusable workflows" is selected
5. Click **Save**

### Step 2: Configure GitHub Pages
1. Go to **Settings → Pages**
2. Under **Build and deployment:**
   - **Source:** GitHub Actions
   - **Branch:** (GitHub Pages will auto-detect from workflow)

### Step 3: Customize Workflow (Optional)

Edit `.github/workflows/deploy.yml` to customize:

```yaml
# Change branch triggers
on:
  push:
    branches:
      - main          # Change to your default branch
      - master
```

### Step 4: Update Environment Variables (if needed)

If you need to pass environment variables to your build process:

1. Add secrets in **Settings → Secrets and variables → Actions**
2. Use in workflow:
   ```yaml
   env:
     NODE_ENV: production
     FOOTBALL_DATA_API_KEY: ${{ secrets.API_KEY }}
   ```

---

## Monitoring Deployments

### Check Workflow Status

1. **In Real-Time:**
   - Go to **Actions** tab in your repository
   - Click on the running workflow
   - View live logs as the deployment progresses

2. **View Deployment History:**
   - Click **Actions** tab
   - See all past workflow runs
   - Click each one to view details and logs

3. **Check GitHub Pages Status:**
   - Go to **Settings → Pages**
   - See your site URL and deployment status

### Enable Notifications

1. Go to your GitHub account **Settings → Notifications**
2. Check **Email notifications** to get alerts on workflow failures
3. Or install GitHub mobile app for push notifications

---

## Troubleshooting

### Workflow Failed - "Permission Denied"

**Cause:** GitHub Actions doesn't have permission to deploy

**Solution:**
1. Go to **Settings → Actions → General**
2. Under **Workflow permissions**, select:
   - ✓ "Read and write permissions"
   - ✓ "Allow GitHub Actions to create and approve pull requests"
3. Click **Save**

### Pages Shows 404

**Cause:** Deployment completed but GitHub Pages not updated

**Solution:**
1. Wait 2-3 minutes for GitHub Pages to update
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check **Settings → Pages** to verify correct branch
4. Look for errors in the workflow run logs

### Heroku Deploy Failed - "Couldn't find Procfile"

**Cause:** Missing `Procfile` in repository root

**Solution:**
1. Create `Procfile` in project root with:
   ```
   web: node server.js
   ```
2. Commit and push: `git push origin production`

### Firebase Deploy - "Authentication failed"

**Cause:** Invalid or expired Firebase token

**Solution:**
1. Generate new token:
   ```bash
   firebase login:ci
   ```
2. Update `FIREBASE_TOKEN` secret in GitHub
3. Re-run workflow

### Render Deploy - "Hook not found"

**Cause:** Invalid or expired deploy hook URL

**Solution:**
1. Go to Render dashboard
2. Select your service
3. Go to **Settings** and find new Deploy Hook
4. Update `RENDER_DEPLOY_HOOK` secret in GitHub

### npm install Fails

**Cause:** Node modules version mismatch

**Solution:**
1. Delete `package-lock.json`
2. Commit the change
3. The workflow will regenerate it
4. Or manually run: `npm ci`

---

## Manual Workflow Trigger

If you need to deploy without pushing new code:

1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages** (or your workflow name)
3. Click **Run workflow** dropdown
4. Select your branch
5. Click **Run workflow**

---

## Environment Variables for Production

For sensitive data (API keys, tokens), use GitHub Secrets:

1. Go to **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Use in workflow:
   ```yaml
   - name: Deploy
     env:
       API_KEY: ${{ secrets.FOOTBALL_DATA_API_KEY }}
     run: npm run deploy
   ```

**Never commit sensitive data to your repository!**

---

## Advanced: Custom Deployment Scripts

To run custom build or deployment steps, edit the workflow:

```yaml
- name: Custom Build
  run: |
    echo "Running custom build steps..."
    npm run build
    npm run minify
    npm run optimize-images
```

---

## Status Badge

Add a deployment status badge to your README:

```markdown
![Deploy Status](https://github.com/irvandandung/irvandandung.github.io/actions/workflows/deploy.yml/badge.svg)
```

This shows the current workflow status in your README!

---

## Next Steps

1. ✅ Verify workflows are set up correctly
2. ✅ Make your first commit
3. ✅ Monitor the deployment via Actions tab
4. ✅ Verify your site is live
5. ✅ Set up backend deployment (optional)

For more help, see [GitHub Actions Documentation](https://docs.github.com/en/actions)
