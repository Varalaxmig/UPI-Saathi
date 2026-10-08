import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Smartphone, 
  Monitor, 
  ShieldCheck
} from 'lucide-react';
import { translations } from '../data/translations';

export function PhoneFrame({ 
  children, 
  lang, 
  setLang,
  isWideMode, 
  setIsWideMode 
}) {
  const [timeStr, setTimeStr] = useState('10:24 AM');
  const t = translations[lang] || translations.hi;

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      setTimeStr(`${hours}:${minutes} ${ampm}`);
    };
    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-container">
      {/* Top desktop helper controls */}
      <div className="top-desktop-controls">
        <div className="brand-pill">
          <span className="badge-dot"></span>
          <span>{t.desktopTitle}</span>
        </div>

        <div className="desktop-btn-group">
          {/* Quick Language Toggle on desktop */}
          <div style={{ display: 'flex', gap: '3px', background: 'rgba(255, 255, 255, 0.08)', padding: '2px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <button 
              className={`glass-btn ${lang === 'hi' ? 'active' : ''}`}
              style={{ padding: '4px 10px', fontSize: '11px', borderRadius: '16px' }}
              onClick={() => setLang && setLang('hi')}
            >
              हिन्दी
            </button>
            <button 
              className={`glass-btn ${lang === 'mr' ? 'active' : ''}`}
              style={{ padding: '4px 10px', fontSize: '11px', borderRadius: '16px' }}
              onClick={() => setLang && setLang('mr')}
            >
              मराठी
            </button>
            <button 
              className={`glass-btn ${lang === 'en' ? 'active' : ''}`}
              style={{ padding: '4px 10px', fontSize: '11px', borderRadius: '16px' }}
              onClick={() => setLang && setLang('en')}
            >
              English
            </button>
          </div>

          {/* Mode toggle */}
          <button 
            className={`glass-btn ${!isWideMode ? 'active' : ''}`}
            onClick={() => setIsWideMode(false)}
            title="Smartphone View"
          >
            <Smartphone size={14} />
            <span>{t.desktopMobileMode}</span>
          </button>
          
          <button 
            className={`glass-btn ${isWideMode ? 'active' : ''}`}
            onClick={() => setIsWideMode(true)}
            title="Wide Desktop View"
          >
            <Monitor size={14} />
            <span>{t.desktopWideMode}</span>
          </button>
        </div>
      </div>

      {/* Main Bezel Container */}
      <div className={`phone-wrapper ${isWideMode ? 'wide-mode' : ''}`}>
        <div className="phone-bezel">
          {/* Phone Screen */}
          <div className="phone-inner-screen">
            {/* Status Bar */}
            <div className="phone-status-bar">
              <span>{timeStr}</span>
              <div className="camera-notch">
                <div className="notch-lens"></div>
              </div>
              <div className="status-right-icons">
                <Signal size={12} />
                <Wifi size={12} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <span>92%</span>
                  <Battery size={13} />
                </div>
              </div>
            </div>

            {/* Mandatory Educational Disclaimer Strip */}
            <div className="edu-disclaimer-strip">
              <span>
                <ShieldCheck size={14} color="#a16207" />
                {t.disclaimerBar}
              </span>
              <span className="lang-tag">{lang.toUpperCase()}</span>
            </div>

            {/* App Body Content */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
