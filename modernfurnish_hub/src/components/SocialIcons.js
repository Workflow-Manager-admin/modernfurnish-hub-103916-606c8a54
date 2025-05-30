import React from "react";

// SVGs styled and spaced as per design reference
const icons = [
  {
    name: "Search",
    svg: (
      <svg height="24" width="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false" style={{display: 'block'}}><circle cx="11" cy="11" r="7"/><line x1="18" y1="18" x2="15.2" y2="15.2"/></svg>
    )
  },
  {
    name: "Cart",
    svg: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false" style={{display: 'block'}}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61l1.73-9.39H6.16"/></svg>
    )
  },
  {
    name: "User",
    svg: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false" style={{display: 'block'}}><circle cx="12" cy="8" r="4"/><path d="M2 22c0-5.33 9.75-5.33 9.75-5.33S22 16.67 22 22"/></svg>
    )
  }
];

// PUBLIC_INTERFACE
function SocialIcons() {
  return (
    <div className="sidebar-social-icons" aria-label="Sidebar utility links">
      {icons.map((icon) => (
        <button
          key={icon.name}
          aria-label={icon.name}
          className="sidebar-social-btn"
          tabIndex={0}
        >
          {icon.svg}
        </button>
      ))}
    </div>
  );
}

export default SocialIcons;
