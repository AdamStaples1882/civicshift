# 🚀 Quick Setup Commands

Copy and paste these commands to complete your GitHub integration.

## Step 1: Create GitHub Repository

1. Go to: **https://github.com/new**
2. Fill in:
   - **Repository name**: `digital-consultancy-website`
   - **Description**: Digital consultancy services website
   - **Visibility**: Choose Private or Public
   - ❌ **DO NOT** check: Add README, Add .gitignore, Choose license
3. Click **"Create repository"**

---

## Step 2: Connect and Push to GitHub

After creating the repository, GitHub will show you a URL. Copy it, then run these commands:

### Option A: HTTPS (Recommended)

```bash
cd "c:/Users/Admin/OneDrive - EHDC & SBC/Desktop/Digital Consultancy"

git remote add origin https://github.com/AdamStaples1882/digital-consultancy-website.git

git branch -M main

git push -u origin main
```

**Note**: You'll be prompted for GitHub authentication. Use your GitHub username and a Personal Access Token (not your password).

### Creating a Personal Access Token (if needed):

1. Go to: https://github.com/settings/tokens/new
2. Name: "Netlify Deploy Token"
3. Expiration: 90 days (or your preference)
4. Select scopes: ✅ `repo` (full control)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

---

## Step 3: Verify Push

After running the commands above, verify your code is on GitHub:

```bash
# Check that remote is configured
git remote -v

# You should see:
# origin  https://github.com/AdamStaples1882/digital-consultancy-website.git (fetch)
# origin  https://github.com/AdamStaples1882/digital-consultancy-website.git (push)
```

Visit your repository: `https://github.com/AdamStaples1882/digital-consultancy-website`

You should see all your files!

---

## Step 4: Connect Netlify to GitHub

### A. Delete Old Netlify Site (if exists)

1. Go to: https://app.netlify.com/sites/capable-souffle-3e6086
2. Click **"Site settings"**
3. Scroll to bottom → **"Delete site"**
4. Confirm deletion

### B. Create New Site from Git

1. Go to: **https://app.netlify.com**
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"GitHub"**
4. Click **"Authorize Netlify"** (OAuth popup)
5. Select repository: **digital-consultancy-website**
6. Configure:
   - **Branch**: `main`
   - **Build command**: (leave empty)
   - **Publish directory**: `website`
7. Click **"Deploy site"**

---

## Step 5: Test Auto-Deploy! 🎉

Make a test change:

```bash
cd "c:/Users/Admin/OneDrive - EHDC & SBC/Desktop/Digital Consultancy"

# Make a small change
echo "<!-- Test auto-deploy -->" >> website/index.html

# Commit and push
git add .
git commit -m "Test: Verify auto-deploy works"
git push
```

Watch Netlify dashboard - a new deployment should trigger automatically!

---

## ✅ You're Done!

From now on, just:
```bash
git add .
git commit -m "Your changes"
git push
```

Netlify will automatically deploy your changes! 🚀
