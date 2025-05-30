# ModernFurnish Hub – UI Design Extraction

## 1. Overall Layout

- **Main Structure:**  
  - 2-column layout:
    - **Left Sidebar (Navigation)**
      - Fixed width (~240px).
      - Vertical stack: logo, nav links, buttons, and social icons at the bottom.
      - Background color: White (`#fff`).
      - Height: 100vh (full height).
    - **Main Content (Product Grid)**
      - Responsive grid displaying products.
      - Light background (`#faf9f6` or white).
      - Images are dominant; text overlays at top left or bottom left of images.

- **Layout Mechanism:**  
  - Use CSS Grid for main content.
  - Flexbox for vertical sidebar alignment/spacing.

---

## 2. Sidebar (Navigation)

- **Header/Logo:**
  - "Amado" (color: #fbb034, bold, large size).
  - "FURNITURE" below in uppercase, light gray, tracking wide.
  - Padding: ~2rem top, ~1rem horizontal.

- **Menu/Nav Items:**
  - Vertical stack.
  - "Shop", "About", "Pages", "Blog", "Contact".
  - Black text, font-weight: normal/medium, letter-spacing: 1px.
  - Vertical spacing between items (~1.2rem).
  - No icons.

- **CTA Button:**
  - Label: "New this week"
  - Style: Filled with accent color (`#fbb034`), white text, rounded small corners.
  - Above the fold, under nav items, with ample top/bottom margin.

- **Social/Utility Links (at sidebar bottom):**
  - Gray colored icons (simple line/outline style).
  - Horizontal spacing between icons.
  - Faded effect or lower opacity.
  - Menu: Search, Cart, User/Profile, etc.

- **Spacing:**
  - Generous left/right padding.
  - Space between sections: ~2rem.

---

## 3. Main Content Area (Product Grid)

- **Responsive CSS Grid:**
  - 3 columns on desktop, collapses to 2 or 1 on tablet/mobile.
  - Gap between items: ~1.5rem
  - Each grid cell: photo of product, occupying most space.

- **Product Cards:**
  - **Image:**
    - Full-bleed image within grid cell.
    - Rounded corners: none or very slight.
  - **Text Overlay:**
    - Top or bottom left corner, depending on product.
    - Small tag (like "New" or "Featured") in accent color (`#fbb034`), uppercase.
    - Product Title: Large, bold, black.
    - Subtext (e.g., "Minimalistic Plant Pot"): Lighter, normal font, gray color.
    - Use a subtle drop shadow or contrasting background for text if photo requires.
  - **Example Products from Screenshot:**
    - Chair, Plant Pot, Succulent, Night Stand, Small Table, etc.

---

## 4. Typography

- **Primary Font:**  
  - Modern sans-serif (use `"Helvetica Neue", "Arial", sans-serif"` as default).
- **Logo:**  
  - "Amado" – Extra bold, 2.2rem, accent color #fbb034  
  - "FURNITURE" – All caps, spaced, light gray, 0.8rem
- **Menu/Nav:**  
  - 1.1rem, medium weight, black
- **Product Titles:**  
  - Bold, 1.3rem – 1.5rem, black
- **Subtext/Tagline:**  
  - 0.95rem, regular weight, #666–#999 gray
- **CTA/Button:**  
  - 1rem, white text, bold

---

## 5. Colors

Define in CSS variables:
```css
:root {
  --sidebar-bg: #fff;
  --main-bg: #faf9f6;
  --primary-text: #222;
  --secondary-text: #999;
  --accent: #fbb034;
  --cta-text: #fff;
  --border: #e6e6e6;
  --icon-gray: #bbb;
}
```

---

## 6. Spacing

- **Sidebar:**  
  - Padding: 2rem top, 1.2rem sides  
  - Between logo/menu: 1.5rem  
  - Between menu items: 1.2rem  
  - Sidebar width: 220–240px
- **Content Grid:**  
  - Grid gap: 1.5rem
  - Product card padding: none – images edge-to-edge
- **Text Overlays:**  
  - Padding: 0.8rem from edge  
  - Tagline gap above title: 0.4rem

---

## 7. Interactive Elements

- **Sidebar nav items:**  
  - Hover: text darkens or underline (subtle).
- **CTA Button:**  
  - Hover: darker accent or slight shadow.
- **Product images:**  
  - Hover: scale up slightly or add subtle shadow.
- **Social/utility icons:**  
  - Hover: icon darkens, opacity to 1.

---

## 8. Navigation / Responsiveness

- **Sidebar:**  
  - Fixed on desktop.
  - On mobile, hides to hamburger button.
- **Grid:**  
  - 3 columns desktop, 2 columns tablet, 1 column mobile.
- **Text/fonts:**  
  - Responsively scale down on mobile.

---

## 9. Imagery

- **Image placeholders:**  
  - Use descriptive `alt` text, e.g., "Minimalistic Plant Pot", "Modern Chair".
- **Iconography:**  
  - Line icons for social/utility, size ~24px

---

## 10. Accessibility Notes

- High contrast for CTA/button
- Alt text for product images
- Keyboard navigation for sidebar and product grid

---

## 11. Suggested Components

- `SidebarNav`
- `ProductGrid`
- `ProductCard`
- `NavButton`
- `SocialIcons`
- `LogoHeader`
