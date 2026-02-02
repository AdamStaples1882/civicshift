
# Implementation Plan - Final Fixes

## User Request
1. Add icons from the Service page into the Portfolio and Impact page, keeping the theme.
2. Fix the Services Page footer logo which is missing the `>>` and the space.

## Changes Implemented

### 1. Portfolio & Impact Page (`portfolio.html` & `index.css`)
- **Add Icons**: Inserted the updated "Civic Shift" icon (Double Chevron) into the project cards in `portfolio.html`.
    - Note: Used `icon-teal`, `icon-gold`, `icon-navy` to match the project badges/theme (Contract Lead, Delivery Lead, Contract).
- **Layout Update**: Updated `.project-card` in `index.css` to `grid-template-columns: auto 1fr` to naturally fit the icon next to the content.

### 2. Services Page Footer (`services.html`)
- **Fix Logo**: Updated the footer logo to `Civic <span class="text-teal">Shift >></span>` ensuring the space and the arrows are present.

## Verification
- Verified layout changes in CSS.
- Confirmed correct HTML structure for icons in Portfolio.
- Confirmed Footer logo consistency on Services page.
