import React from 'react';

// PUBLIC_INTERFACE
function NavButton({ text }) {
  return (
    <button className="sidebar-cta-btn">
      {text}
    </button>
  );
}

export default NavButton;
