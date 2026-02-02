# GitHub Repository Setup - Live Instructions

## 🌐 Opening GitHub for You

I've opened GitHub in your browser at: https://github.com/new

## ✏️ Fill Out the Form

On the GitHub page, enter:

1. **Repository name**: `digital-consultancy-website`

2. **Description** (optional): `Digital consultancy services website`

3. **Visibility**: 
   - ✅ **Private** (recommended - only you can see it)
   - OR **Public** (anyone can see it)

4. **Initialize repository**:
   - ❌ **DO NOT** check "Add a README file"
   - ❌ **DO NOT** check "Add .gitignore"
   - ❌ **DO NOT** select a license

   *(We already have these files in your local repository!)*

5. Click the green **"Create repository"** button

---

## 📋 After Creating Repository

GitHub will show you a page with setup instructions. **Look for the section titled:**

> **"…or push an existing repository from the command line"**

You'll see something like:

```
git remote add origin https://github.com/AdamStaples1882/digital-consultancy-website.git
git branch -M main
git push -u origin main
```

---

## 💻 Commands to Run

**Open your terminal/PowerShell** and paste these commands:

```powershell
cd "c:/Users/Admin/OneDrive - EHDC & SBC/Desktop/Digital Consultancy"

git remote add origin https://github.com/AdamStaples1882/digital-consultancy-website.git

git branch -M main

git push -u origin main
```

---

## 🔐 If Asked for Authentication

You may see a GitHub login window or be asked for credentials:

**Option 1: Browser Authentication (Easiest)**
- A browser window may pop up
- Sign in to GitHub
- Authorize Git

**Option 2: Personal Access Token**
- Username: `AdamStaples1882`
- Password: Use a **Personal Access Token** (not your GitHub password)
- Create token at: https://github.com/settings/tokens/new
  - Name: "Deploy Token"
  - Scopes: Select `repo`
  - Generate and copy the token

---

## ✅ Verify Success

After pushing, you should see:

```
Enumerating objects: ...
Counting objects: 100% ...
Writing objects: 100% ...
To https://github.com/AdamStaples1882/digital-consultancy-website.git
 * [new branch]      main -> main
```

Visit your repository to confirm: 
**https://github.com/AdamStaples1882/digital-consultancy-website**

---

## 🎯 Next: Connect Netlify

Once your code is on GitHub, I'll help you connect Netlify!
