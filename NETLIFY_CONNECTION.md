# 🔗 Netlify Connection Guide

I've opened Netlify in your browser at: https://app.netlify.com

## 📋 Step-by-Step Instructions

### Step 1: Delete Old Site (If Needed)

If you have an existing site at `capable-souffle-3e6086`:

1. Navigate to: https://app.netlify.com/sites/capable-souffle-3e6086
2. Click **"Site settings"** (in the navigation)
3. Scroll to the bottom
4. Click **"Delete site"**
5. Type the site name to confirm
6. Confirm deletion

**OR** skip this if you want to keep the old site.

---

### Step 2: Create New Site from Git

1. On the Netlify dashboard, click the **"Add new site"** button
   
2. Select **"Import an existing project"**

3. Choose **"Deploy with GitHub"**

4. **Authorize Netlify** (if prompted):
   - A popup will appear asking you to authorize Netlify
   - Click **"Authorize Netlify"**
   - This is a secure OAuth connection

5. **Select your repository**:
   - Search for: `digital-consultancy-website`
   - Click on the repository when you see it

---

### Step 3: Configure Build Settings

You'll see a configuration page. Fill in:

**Branch to deploy:**
- `main`

**Base directory:**
- Leave empty

**Build command:**
- Leave empty (it's a static site!)

**Publish directory:**
- `website`

**Important**: Double-check that "Publish directory" is set to `website` (not blank!)

---

### Step 4: Deploy Site

1. Click the green **"Deploy [your-site-name]"** button

2. Wait for deployment to complete (usually 30-60 seconds)

3. You'll see:
   - Building process
   - Deploy log
   - Success message with your site URL

---

### Step 5: Customize Your Site Name (Optional)

After deployment:

1. Go to **"Site settings"**
2. Click **"Change site name"**
3. Enter a custom name (e.g., `digital-consultancy-uk`)
4. Your URL will be: `https://digital-consultancy-uk.netlify.app`

---

## ✅ Verify Auto-Deploy Works

Once deployed, test that automatic deployments work:

```powershell
cd "c:/Users/Admin/OneDrive - EHDC & SBC/Desktop/Digital Consultancy"

# Make a small test change
echo "<!-- Auto-deploy test -->" >> website/index.html

# Commit and push
git add .
git commit -m "Test: Verify auto-deploy functionality"
git push
```

**Watch the Netlify dashboard** - you should see:
- A new deployment triggered automatically
- Build progress
- Deploy success in ~30-60 seconds

---

## 🎉 You're Done!

From now on, every time you push to GitHub:
1. Netlify detects the push automatically
2. Deploys your changes
3. Your site is live in under a minute!

### Daily Workflow:

```bash
# Make your changes to files
git add .
git commit -m "Updated contact form"
git push
# ✨ Auto-deploys!
```

---

## 🐛 Troubleshooting

**Can't find your repository?**
- Make sure you pushed to GitHub successfully
- Check: `git remote -v` shows your GitHub URL
- Try refreshing the Netlify repository list

**Build failed?**
- Check the deploy log in Netlify
- Verify `publish = "website"` in netlify.toml
- Ensure website/index.html exists

**Site shows 404?**
- Verify publish directory is `website` (not `Website` or blank)
- Check that website/index.html exists in your repo

---

## 📊 Expected Result

Your site will be live at:
- `https://[random-name].netlify.app`
- Or your custom name: `https://[your-custom-name].netlify.app`

**SSL certificate**: Automatically enabled ✅
**CDN**: Global delivery ✅
**Auto-deploy**: Enabled ✅
