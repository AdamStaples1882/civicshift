
# Implementation Plan - Modern Icons for Services

## User Request
Replace the "square coloured icon" in the service cards on the Services Page with something "more modern digital".

## Changes Implemented

### 1. `services.html` Update
- **Replaced**: Replaced the empty `div` icon placeholders with inline SVG icons.
- **Icon Selection**:
    - **Interim Leadership**: User/Star icon (Leadership focus).
    - **CRM Delivery**: Layout/Grid icon (Structured data/platform).
    - **Programme Recovery**: Pulse/Graph icon (Getting back on track).
    - **Infrastructure**: Server/Database icon (Technical foundation).
    - **Integration**: Link/Connection icon (Joining systems).
    - **Project Management**: Clipboard/Checklist icon (governance).
    - **Service Redesign**: Cycle/Refresh icon (Improvement).
- **Styling**: Icons are set to `stroke="white"` to stand out against the colored backgrounds.

## Verification
- Verified that all 7 service cards now have unique, relevant SVG icons.
- Confirmed the icons fit within the existing `.service-icon` containers (32x32 size within the 60x60 container).
