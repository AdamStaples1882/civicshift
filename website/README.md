# Digital Consultancy Website

A modern, professional website for digital consultancy services featuring cost estimation tools, service information, and success stories.

## 🚀 Deployment

This site is deployed on Netlify and is ready for production.

### Deploy to Netlify

1. **Via Netlify CLI:**

   ```bash
   # Install Netlify CLI globally
   npm install -g netlify-cli

   
   # Login to Netlify
   netlify login
   
   # Deploy to production
   netlify deploy --prod
   ```

2. **Via Netlify Dashboard:**
   - Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
   - Log in to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

3. **Via Drag & Drop:**
   - Log in to [Netlify](https://app.netlify.com)
   - Drag and drop the `website` folder to the Netlify dashboard

## 📁 Project Structure

```plaintext
website/

├── index.html              # Home page
├── services.html           # Services overview
├── estimator.html          # Cost estimation tool
├── success_stories.html    # Client success stories
├── contact.html            # Contact form
├── index.css               # Main stylesheet
├── estimator-styles.css    # Estimator-specific styles
├── script.js               # JavaScript functionality
├── images/                 # Image assets
├── netlify.toml            # Netlify configuration
├── _redirects              # URL redirect rules
└── README.md               # This file
```

## 🛠️ Features

- **Responsive Design**: Mobile-first, works on all devices
- **Cost Estimator**: Interactive tool for project cost estimation
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized assets and caching headers

## 🔧 Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000
```

Then visit `http://localhost:8000`

## 📝 License

© 2026 Digital Consultancy. All rights reserved.
