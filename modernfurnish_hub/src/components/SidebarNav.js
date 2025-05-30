import React from 'react';
import LogoHeader from './LogoHeader';
import NavButton from './NavButton';
import SocialIcons from './SocialIcons';

// The order and use matches the design reference notes.
const navItems = ["Shop", "About", "Product", "Cart"];

// PUBLIC_INTERFACE
function SidebarNav() {
  return (
    <aside className="sidebar-nav">
      {/* Branding */}
      <LogoHeader />
      {/* Navigation links and CTA */}
      <nav>
        <ul className="sidebar-nav-list">
          {navItems.map((item, idx) => (
            <li key={item} className="sidebar-link">
              <a href="#" tabIndex={0}>{item}</a>
            </li>
          ))}
        </ul>
        <NavButton text="New this week" />
      </nav>
      {/* Social icons and/or secondary links */}
      <div className="sidebar-bottom">
        <SocialIcons />
        {/* Add secondary muted text or links here if needed */}
      </div>
    </aside>
  );
}

export default SidebarNav;
