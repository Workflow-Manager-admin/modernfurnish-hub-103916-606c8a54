# ModernFurnish Hub – Design Reference Notes

## 1. Overall Page Structure

- **Layout:** Responsive split — fixed vertical sidebar (left) and a masonry/grid main content area (right).
- **Color Scheme:** 
    - Background: Pure white (`#FFFFFF`)
    - Sidebar accents: Orange (`#ffb400`)
    - Primary/active text: Very dark grey (`#222222`)
    - Muted text: Medium grey (`#888888`)

---

## 2. Sidebar (Navigation + Branding)

**Width:** ~1/6th of viewport (about 15–17vw; min-width: 200px)

**Elements (from top to bottom):**
- **Brand:**
  - Text: `Amado`
      - Weight: Bold (700-800)
      - Font-size: 32px
      - Color: `#222222`
  - Subtext: `FURNITURE`
      - All-caps, orange (`#ffb400`)
      - Font-size: 15px, weight: 600, letter-spacing: 2px
      - Positioned under main brand, slight negative margin
- **Navigation Links:**
  - "Shop", "About", "Product", "Cart"
  - Vertical stack, left aligned
  - Font-size: 18px, weight: 500
  - Color: inactive #222222, active/hover #ffb400
  - Spacing: 18px vertical gap
  - No icons
- **Button:**
  - "New this week"
  - Full width, background #ffb400, white text, font-size 16px, font-weight 600
  - Rectangular, border-radius: 4px (minimal), 16px vertical padding, 32px vertical margin (space above/below)
- **Secondary Links/Social:** 
  - Lower on sidebar
  - Small font, color #888888
  - Arranged as horizontal inline links or stacked
- **Padding/margin:** 
  - 40px top/bottom, 36px side padding

---

## 3. Main Content Grid (Product Cards)

**Background:** White (#FFFFFF)

**Layout system:** CSS Grid (preferred), mimics masonry with uneven row heights as necessary

**Grid Properties:**
- Columns: Responsive, auto-fit `minmax(320px, 1fr)`
- Gap: 24px (row and column)
- Padding: 48px top, 0 right, 32px bottom, 32px left (adjacent to sidebar)

**Product Card:**
- **Image:** Edge-to-edge, no border-radius, 100% width inside card box
- **Overlayed texts:**
    - Upper left: Category 
        - All caps, 13px, semi-bold (700), orange (#ffb400), letter-spacing: 2px
        - Small white/transparent background box behind text (RGBA white 0.92, border-radius: 2px, 8px horizontal, 3px vertical padding)
    - Lower left (or right if fitting): Product Name
        - Regular/medium font (500), 18px, black (#222222), sometimes with light transparent white bg (as above), border-radius: 2px
        - Padding: 9px-11px horizontally, 2-3px vertically
- **Card shadows:** None

---

## 4. Typography

- **Font-family:** Helvetica Neue, Arial, sans-serif
- **Font-weights:** 400 (body), 500 (titles/nav), 600 (accent/buttons), 700/800 (branding)
- **Sizes:**
    - Sidebar/brand: 32px
    - Sidebar nav: 18px
    - Product card name: 18px
    - Product category: 13px

- **Letter-spacing:** 2px on all-caps/brand elements

---

## 5. Colors (use as root variables)

```
--primary-text: #222222;
--accent: #ffb400;
--bg-canvas: #ffffff;
--nav-link-inactive: #222222;
--nav-link-active: #ffb400;
--sidebar-muted: #888888;
```

---

## 6. Spacing & Sizing

### Sidebar

- 40px padding top/bottom, 36px padding sides
- Brand/subtext: margin-top: -8px (brand to subtext)
- Navigation vertical gap: 18px
- Button: 16px vertical padding, 32px top/bottom margin

### Main Grid

- 24px gap between cards
- Padding: 32px from sidebar to grid, 48px top on grid

### Card Overlays

- Overlay (category/title) padding: 8–11px horizontally, 2–3px vertically
- Border-radius: 2px on overlay backgrounds
- Distance from card edge: 18px

---

## 7. Interactive Elements

- **Sidebar nav links:** 
  - Hover/active changes color to accent orange
  - Cursor: pointer
- **CTA button:** 
  - Pure orange bg, white text, no shadow
  - Cursor: pointer

---

## 8. Responsive Behavior

- **Sidebar:** Collapses to topbar or drawer below 768px, nav links stack horizontally or hide in hamburger
- **Main grid:** Reduces columns, eventually stacks single-column on mobile; card overlays remain positioned

---

## 9. Image Details

- Images cover whole card area, no border or corner radius
- Use object-fit: cover for all product images

---

## 10. Sample CSS Reference

```css
:root {
  --primary-text: #222222;
  --accent: #ffb400;
  --bg-canvas: #ffffff;
  --nav-link-inactive: #222222;
  --nav-link-active: #ffb400;
  --sidebar-muted: #888888;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background: var(--bg-canvas);
  color: var(--primary-text);
}

/* Sidebar */
.sidebar {
  width: 17vw;
  min-width: 200px;
  background: var(--bg-canvas);
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-text);
}

.brand-accent {
  color: var(--accent);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: -8px;
}

.nav {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.nav-link {
  font-size: 18px;
  font-weight: 500;
  color: var(--nav-link-inactive);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link.active,
.nav-link:hover {
  color: var(--nav-link-active);
}

.cta-button {
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border: none;
  padding: 16px 0;
  border-radius: 4px;
  margin: 32px 0;
  cursor: pointer;
}

/* Main Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  padding: 48px 32px 32px 0;
}

.product-card {
  position: relative;
  background: #fff;
  overflow: hidden;
}

.product-image {
  width: 100%;
  display: block;
  object-fit: cover;
}

.product-category {
  position: absolute;
  top: 18px;
  left: 18px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: rgba(255,255,255,0.92);
  padding: 3px 10px 2px 8px;
  border-radius: 2px;
}

.product-title {
  position: absolute;
  bottom: 18px;
  left: 18px;
  color: var(--primary-text);
  font-size: 18px;
  font-weight: 500;
  background: rgba(255,255,255,0.93);
  padding: 2px 11px 3px 9px;
  border-radius: 2px;
}
```

---

**Use this document as the definitive reference for updating the ModernFurnish Hub UI, ensuring pixel-perfect implementation that matches the provided image.**
