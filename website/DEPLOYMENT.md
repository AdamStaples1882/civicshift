# 🚀 Netlify Deployment Guide

> **This is the one file you need.** The other deployment documents in this folder are outdated — refer to this guide only.

---

## What's Already Configured

Everything in the `website` folder is ready to deploy:

| File           | Purpose                                                                |
| -------------- | ---------------------------------------------------------------------- |
| `netlify.toml` | Tells Netlify where to serve files from, sets security & cache headers |
| `_redirects`   | Handles 404 errors gracefully                                          |
| `robots.txt`   | Controls search engine crawling                                        |
| `sitemap.xml`  | Helps search engines index the site                                    |
| `.gitignore`   | Excludes temp/editor files from Git                                    |

---

## Method 1 — Drag & Drop (Quickest, ~2 minutes)

Use this if you just want the site live fast with no Git setup.

1. Open [https://app.netlify.com](https://app.netlify.com) and log in (or create a free account)
2. On your **Team Overview** page, click **"Add new site"** → **"Deploy manually"**
3. Open **File Explorer** and navigate to:
   ```
   C:\Users\Admin\OneDrive - EHDC & SBC\Desktop\Digital Consultancy\
   ```
4. Drag the **`website`** folder onto the Netlify upload area
   > ⚠️ Drag the `website` folder — **not** the `Digital Consultancy` folder
5. Wait ~30 seconds for the build to finish
6. Your site is live at `https://[random-name].netlify.app`

### Updating after changes (drag & drop method)

Every time you make changes to files, you need to re-upload:

1. Go to your site in the Netlify dashboard
2. Click **"Deploys"** → **"Deploy manually"**
3. Drag the `website` folder again

---

## Method 2 — GitHub (Recommended for ongoing updates)

Set this up once; after that every save-and-push automatically deploys.

### Step 1 — Set up Git locally (one-time)

Open PowerShell and run:

```powershell
cd "C:\Users\Admin\OneDrive - EHDC & SBC\Desktop\Digital Consultancy"
git init
git add .
git commit -m "Initial commit"
```

### Step 2 — Push to GitHub (one-time)

1. Go to [https://github.com/new](https://github.com/new) and create a new **private** repository called `digital-consultancy-website`
2. Do NOT initialise it with a README (keep it empty)
3. Copy the commands GitHub shows you under **"…or push an existing repository"** and paste them into PowerShell, e.g.:
   ```powershell
   git remote add origin https://github.com/YOUR-USERNAME/digital-consultancy-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 3 — Connect Netlify to GitHub (one-time)

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"** → **"Deploy with GitHub"**
3. Authorize Netlify when prompted
4. Search for and select **`digital-consultancy-website`**
5. On the build settings page, enter:

   | Setting           | Value                         |
   | ----------------- | ----------------------------- |
   | Branch to deploy  | `main`                        |
   | Base directory    | _(leave blank)_               |
   | Build command     | _(leave blank — static site)_ |
   | Publish directory | `website`                     |

6. Click **"Deploy site"**

> ✅ Netlify will auto-detect `netlify.toml` for headers and redirects.

### Step 4 — Future updates (daily workflow)

After making any changes to your files:

```powershell
cd "C:\Users\Admin\OneDrive - EHDC & SBC\Desktop\Digital Consultancy"
git add .
git commit -m "Brief description of what you changed"
git push
```

Netlify detects the push and deploys automatically in ~30–60 seconds.

---

## Customising Your Site Name

The default URL will be `https://some-random-name.netlify.app`. To change it:

1. Netlify dashboard → your site → **"Site settings"**
2. **General** → **Site details** → **"Change site name"**
3. Enter a name, e.g. `digital-consultancy-uk`
4. Your URL becomes: `https://digital-consultancy-uk.netlify.app`

---

## Adding a Custom Domain (Optional)

If you have a domain (e.g. `digitalconsultancy.co.uk`):

1. Netlify dashboard → **"Site settings"** → **"Domain management"**
2. Click **"Add custom domain"** and follow the instructions
3. Update your domain's DNS to point to Netlify (your domain registrar handles this)
4. Netlify automatically provisions a free HTTPS/SSL certificate

---

## Contact Form

The contact form on `contact.html` uses **Netlify Forms** — no backend or database needed.

- ✅ Form submissions are saved automatically in your Netlify dashboard
- ✅ Spam protection (honeypot field) is included
- ✅ Free up to 100 submissions/month

### Viewing submissions

1. Netlify dashboard → your site → **"Forms"** tab
2. Click your form name to see all submissions

### Getting email notifications

1. **Site settings** → **Forms** → **Form notifications**
2. **"Add notification"** → **"Email notification"**
3. Enter your email address and save

---

## Current Site Pages

| Page            | File                   |
| --------------- | ---------------------- |
| Home            | `index.html`           |
| Services        | `services.html`        |
| Blog            | `blog.html`            |
| Estimator       | `estimator.html`       |
| Success Stories | `success_stories.html` |
| Contact         | `contact.html`         |

---

## Troubleshooting

### Site shows a blank page or 404 after drag & drop

- Make sure you dragged the **`website`** folder, not `Digital Consultancy`
- Check the **Deploy log** in Netlify for errors

### Site shows 404 after GitHub connection

- Confirm **Publish directory** is set to `website` in your Netlify build settings
- Check that `website/index.html` exists in your GitHub repo

### CSS or images not loading

- All file paths in HTML must be **relative** (e.g. `./index.css`, not `C:\...`)
- Filenames are **case-sensitive** on Netlify (Linux server): `images/Hero.png` ≠ `images/hero.png`

### Contact form not appearing in Netlify dashboard

- Netlify detects forms on first deployment — submit a test entry after deploying
- The `<form>` tag must include `netlify` or `data-netlify="true"` attribute

### Build failed

- Check the deploy log: Netlify dashboard → **Deploys** → click the failed deploy
- Common causes: a missing file referenced in HTML, or a syntax error in `netlify.toml`

---

## Performance & Security (Already Configured)

Your `netlify.toml` includes:

- 🔒 **Security headers** — XSS protection, no-sniff, frame-deny, referrer policy
- ⚡ **1-year cache** on CSS, JS, and images for fast repeat visits
- 🔁 **404 redirect** — unknown URLs fall back to `index.html`

---

_Last updated: February 2026_
