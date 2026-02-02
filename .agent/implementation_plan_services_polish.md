
# Implementation Plan - Service Cards Enhancement

## User Request
Improve the appearance of Service Cards on the Services Page and ensure the green matches the Civic Shift colours.

## Changes Implemented

### 1. Style Update (`index.css`)
- **Card Styling**: Updated `.service-card` to include:
    - `border-radius: var(--radius-lg)` (8px) for a softer look.
    - `box-shadow: var(--shadow-md)` for depth.
    - A subtle border `1px solid rgba(0,0,0,0.03)` for definition.
    - `transition` for smooth hover effects.
- **Hover Effect**: Added `.service-card:hover` to lift the card (`translateY(-5px)`) and increase shadow (`var(--shadow-xl)`), making it feel interactive.
- **Icon Update**:
    - Increased icon size to `60px`.
    - Centered icons using flexbox.
    - Updated `.icon-teal` background to `var(--accent-green)` (Civic Shift Green).
    - Added subtle colored shadows to icons matching their background color for a "glow" effect.
- **Typography**:
    - Made card titles (`h3`) bolder (`font-weight: 600`) and darker (`var(--primary-dark)`).
    - Improved paragraph readability with `line-height: 1.6`.

## Verification
- Verified the use of `var(--accent-green)`.
- Confirmed the hover effects and transitions are present in the CSS.
