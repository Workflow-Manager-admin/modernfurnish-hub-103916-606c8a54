import React from 'react';

// PUBLIC_INTERFACE
function LogoHeader() {
  return (
    <div style={{
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      padding: '2rem 1rem 0.5rem 1rem',
      textAlign: 'left'
    }}>
      <div style={{
        fontSize: '2.2rem',
        fontWeight: 800,
        color: 'var(--accent)',
        letterSpacing: '0.5px',
        lineHeight: '1'
      }}>Amado</div>
      <div style={{
        fontSize: '0.8rem',
        color: '#bbb',
        letterSpacing: '0.38em',
        fontWeight: 500,
        textTransform: 'uppercase',
        marginTop: '0.2em'
      }}>FURNITURE</div>
    </div>
  );
}

export default LogoHeader;
