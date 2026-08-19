'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#790708',
        color: '#ffffff',
        border: '2px solid #ffffff',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        zIndex: 2500,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#ffffff';
        e.currentTarget.style.color = '#790708';
        e.currentTarget.style.borderColor = '#790708';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#790708';
        e.currentTarget.style.color = '#ffffff';
        e.currentTarget.style.borderColor = '#ffffff';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  );
}
