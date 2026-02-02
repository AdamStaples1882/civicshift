
# Implementation Plan - Final Polish

## User Request 1
"Think: delivery focused, calm under pressure, allergic to fluff." on the Home page needs to be in a column next to the bullets, not below.

## User Request 2
Portfolio page text under "Portfolio & Impact" needs to be Title Case.

## User Request 3
Rate Page indicative rates text needs to be orange.

## Changes Implemented

### 1. Home Page Refinement (`index.html` & `index.css`)
- **Move Quote Box**: Shifted the `quote-box` div inside the `.why-me-grid` container to create a side-by-side layout.
- **CSS Grid Update**: Updated `.why-me-grid` in `index.css` to use `grid-template-columns: 1fr 1fr` for a 2-column layout.
- **Quote Styling**: Increased the font size of the quote to `2rem` as requested earlier.

### 2. Portfolio Page Update (`portfolio.html` & `index.css`)
- **Title Case**: Updated the hero subtitle text in `portfolio.html` to be Title Case ("Measurable Outcomes...").
- **CSS Fix**: Added `text-transform: none` to the `.hero-subtitle` in `index.css` to prevent automatic lowercasing/uppercasing and respect the HTML casing.

### 3. Rate Page Update (`estimator.html` & `index.css`)
- **Color Change**: Updated the "Indicative Rates" subtitle color to orange (`var(--accent-gold)`).
- **Implementation**: Removed the `text-green` class from `estimator.html` and added `color: var(--accent-gold)` directly to the `.estimator-header-subtitle` rule in `index.css`.

## Verification
- Verified all text updates.
- Checked CSS rules for correctness (grid layout, colors).
- Ensured consistency across changes.
