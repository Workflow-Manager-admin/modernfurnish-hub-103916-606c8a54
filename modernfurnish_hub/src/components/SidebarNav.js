import React from 'react';
import LogoHeader from './LogoHeader';
import NavButton from './NavButton';
import SocialIcons from './SocialIcons';

const navItems = ["Shop", "About", "Pages", "Blog", "Contact"];

// PUBLIC_INTERFACE
function SidebarNav() {
  return (
    <aside className="sidebar-nav">
      <LogoHeader />
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
      <div className="sidebar-bottom">
        <SocialIcons />
      </div>
    </aside>
  );
}

export default SidebarNav;
