# 🚀 Git Integration & Auto-Deploy Setup Guide

Your Git repository is ready! Follow these steps to connect to GitHub and enable automatic Netlify deployments.

## ✅ What's Already Done

- Git repository initialized
- 39 files committed (initial commit: `3fc0104`)
- `.gitignore` configured
- Git user configured: **AdamStaples1882** (adamstaples1982@gmail.com)

---

## 📝 Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com/new

2. **Repository settings**:
   - **Repository name**: `digital-consultancy-website` (or your preferred name)
   - **Description** (optional): "Professional digital consultancy services website"
   - **Visibility**: Choose either:
     - ✅ **Private** (recommended) - Only you can see it
     - ⚠️ **Public** - Anyone can see it (both work with Netlify!)
   
3. **Important - DO NOT check these boxes**:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
   
   (We already have these files!)

4. **Click**: "Create repository"

---

## 📤 Step 2: Push to GitHub

GitHub will show you a page with instructions. **Use the second option** ("push an existing repository").

Copy the repository URL (looks like: `https://github.com/AdamStaples1882/digital-consultancy-website.git`)

Then run these commands in your terminal:

```bash
cd "c:/Users/Admin/OneDrive - EHDC & SBC/Desktop/Digital Consultancy"
git remote add origin https://github.com/AdamStaples1882/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

**Replace `YOUR-REPO-NAME`** with your actual repository name!

> **Note**: You may be prompted to authenticate with GitHub. Use your GitHub credentials or personal access token.

---

## 🔗 Step 3: Connect Netlify to GitHub

### A. Delete Existing Netlify Site (if needed)

If you have an existing manual deployment:

1. Go to: https://app.netlify.com/sites/capable-souffle-3e6086
2. Click **"Site settings"** (bottom left)
3. Scroll to **"Delete site"**
4. Confirm deletion

### B. Create New Site from Git

1. **Go to Netlify**: https://app.netlify.com

2. **Click**: "Add new site" → "Import an existing project"

3. **Choose**: "GitHub"

4. **Authorize**: Click "Authorize Netlify" when prompted
   - This connects Netlify to your GitHub account (secure OAuth)

5. **Select repository**: Find and click `digital-consultancy-website`

6. **Configure build settings**:
   - **Branch to deploy**: `main`
   - **Base directory**: (leave empty)
   - **Build command**: (leave empty - it's a static site)
   - **Publish directory**: `website`

7. **Click**: "Deploy site"

---

## 🎉 Step 4: Verify Auto-Deploy Works

Netlify will now deploy your site! Once complete:

### Test Automatic Deployments

1. **Make a small change** to test:
   ```bash
   cd "c:/Users/Admin/OneDrive - EHDC & SBC/Desktop/Digital Consultancy"
   echo "<!-- Test auto-deploy -->" >> website/index.html
   ```

2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Test: Verify auto-deploy"
   git push
   ```

3. **Watch Netlify**:
   - Go to your Netlify dashboard
   - You should see a new deployment triggered automatically
   - Wait 30-60 seconds for deployment to complete

4. **Check your live site**:
   - Changes should appear automatically!

---

## 🔄 Daily Workflow (After Setup)

Making updates is now super easy:

```bash
# 1. Make your changes to files in the website folder

# 2. Stage your changes
git add .

# 3. Commit with a descriptive message
git commit -m "Updated contact form styling"

# 4. Push to GitHub
git push

# 5. Netlify automatically deploys! ✨
```

That's it! No manual deployments needed anymore.

---

## 🛠️ Useful Git Commands

```bash
# Check current status
git status

# View commit history
git log --oneline

# See what changed
git diff

# Undo uncommitted changes to a file
git checkout -- filename.html

# Create a new branch for experiments
git checkout -b feature/new-design
```

---

## 🐛 Troubleshooting

### "Permission denied" when pushing to GitHub
- **Solution**: Set up a [Personal Access Token](https://github.com/settings/tokens)
- Use the token as your password when prompted

### Netlify deployment failed
- Check the Netlify deploy log for errors
- Verify `publish = "website"` in `netlify.toml`
- Ensure `website/index.html` exists

### Changes not showing on live site
- Wait 1-2 minutes (deployments aren't instant)
- Check Netlify dashboard for deployment status
- Clear your browser cache (Ctrl + Shift + R)

---

## 📊 Repository Info

- **Local Path**: `c:/Users/Admin/OneDrive - EHDC & SBC/Desktop/Digital Consultancy`
- **Git User**: AdamStaples1882
- **Email**: adamstaples1982@gmail.com
- **Initial Commit**: 3fc0104
- **Files Tracked**: 39 files

---

## 🎯 Next Steps

1. Complete Step 1-3 above
2. Customize your Netlify site name in Site Settings
3. (Optional) Add a custom domain in Netlify
4. Start making updates and watch them deploy automatically!

---

**Questions?** The setup is straightforward - just follow the steps above in order!
