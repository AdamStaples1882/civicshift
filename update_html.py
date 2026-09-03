import os
import re

html_dir = r'c:\Users\Admin\OneDrive - EHDC & SBC\Desktop\Digital Consultancy\website'

nav_addition = '''            <span class="availability-badge" title="Currently booking for Q1">🟢 Available Q1</span>
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">🌙</button>
            <a href="contact.html" class="btn btn-primary">Let's Talk &rarr;</a>'''

for filename in os.listdir(html_dir):
    if filename.endswith('.html'):
        filepath = os.path.join(html_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the Let's Talk button in the nav-links with the new addition
        # Be careful, the button might have different spacing
        pattern = r'<a\s+href="contact\.html"\s+class="btn btn-primary">\s*Let\'s Talk &rarr;\s*</a>'
        # We only want to replace it inside the nav block
        # A simple way is to find the nav block, but since "Let's Talk ->" usually only has class="btn btn-primary" in the nav and hero, let's just do a targeted replace.
        # Actually, let's find:
        # <a href="estimator.html">Rates</a>
        # <a href="contact.html" class="btn btn-primary">Let's Talk &rarr;</a>
        
        # Better:
        new_content = re.sub(
            r'(<a href="estimator.html"[^>]*>.*?</a>)\s*<a href="contact.html" class="btn btn-primary">Let\'s Talk &rarr;</a>',
            r'\1\n' + nav_addition,
            content,
            flags=re.IGNORECASE
        )
        
        # We also need to add loading="lazy" to all <img tags except the hero image (images/hero.png)
        new_content = re.sub(
            r'<img\s+src="(?!images/hero\.png)([^"]+)"([^>]*)>',
            r'<img src="\1" loading="lazy"\2>',
            new_content,
            flags=re.IGNORECASE
        )

        # Fix any double loading="lazy"
        new_content = new_content.replace('loading="lazy" loading="lazy"', 'loading="lazy"')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

print('Updated HTML files.')
