import React from 'react';

// PUBLIC_INTERFACE
function LogoHeader() {
  return (
    <div style={{
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      textAlign: 'left',
      marginBottom: '24px',
      userSelect: 'none'
    }}>
      <div className="brand-header">
        Amado
      </div>
      <div className="brand-sub">
        FURNITURE
      </div>
    </div>
  );
}

export default LogoHeader;
