
# Implementation Plan - Uniform "Shift" Icon

## User Request
Update the icons on the Services Page to be the **same for each**, "more digital", and "Civic Shift focused".

## Changes Implemented

### 1. `services.html` Update
- **Replaced**: Replaced all individual service icons with a **single uniform icon**.
- **Icon Selection**: "Double Chevron Right" (Similar to `>>` or Fast Forward).
    - **Why?**: It directly visually represents "Shift" (movement/action) and looks "digital" (code-like, direction).
- **Styling**:
    - Used `stroke-width="2.5"` for a slightly bolder, more digital look.
    - Kept the underlying color classes (`icon-teal`, `icon-gold`, `icon-navy`) to maintain the card variety while unifying the branding symbol.

## Verification
- Verified that all 7 service cards now use the exact same SVG code.
- Confirmed the icon is the Double Chevron (`<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>`).
