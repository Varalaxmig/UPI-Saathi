import React, { useState } from 'react';
import { 
  QrCode, 
  Bell, 
  Search, 
  Volume2, 
  Languages, 
  MapPin, 
  HelpCircle,
  Check
} from 'lucide-react';
import { translations } from '../data/translations';
import { soundboxService } from '../services/soundboxService';

export function Header({ 
  lang, 
  setLang, 
  profile, 
  unreadCount = 2, 
  onOpenQR, 
  onOpenSMS, 
  onOpenChat 
}) {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const t = translations[lang] || translations.hi;

  const handleSoundTest = () => {
    soundboxService.announcePayment(100, lang);
  };

  return (
    <header className="phonepe-header">
      {/* Top Bar: Profile, Location, Scanner & Actions */}
      <div className="header-top-row">
        <div className="user-profile-meta">
          <div className="avatar-bubble" title={profile.name}>
            {profile.avatar}
            <span className="driver-tag-pill">{t.driverBadge}</span>
          </div>
          <div className="user-text-info">
            <h3>{profile.name}</h3>
            <p>
              <MapPin size={11} color="#ffb703" />
              <span>{t.driverVehicle} • {profile.city}</span>
            </p>
          </div>
        </div>

        <div className="header-action-icons">
          {/* Language Switcher Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              className="lang-selector-chip"
              onClick={() => setShowLangMenu(prev => !prev)}
              title={t.changeLanguage || 'Change Language'}
            >
              <Languages size={14} />
              <span>{lang === 'hi' ? 'हिन्दी' : lang === 'mr' ? 'मराठी' : 'English'}</span>
            </button>

            {showLangMenu && (
              <div 
                style={{
                  position: 'absolute',
                  top: '115%',
                  right: 0,
                  background: '#ffffff',
                  color: '#1f2937',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.22)',
                  border: '1px solid #e5e7eb',
                  padding: '6px',
                  zIndex: 9999,
                  minWidth: '135px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px'
                }}
              >
                <button
                  onClick={() => { setLang('hi'); setShowLangMenu(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    border: 'none',
                    background: lang === 'hi' ? '#f3e8ff' : 'transparent',
                    color: lang === 'hi' ? 'var(--primary)' : '#374151',
                    fontWeight: lang === 'hi' ? 800 : 600,
                    fontSize: '12px',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span>हिन्दी (Hindi)</span>
                  {lang === 'hi' && <Check size={14} color="var(--primary)" />}
                </button>
                <button
                  onClick={() => { setLang('mr'); setShowLangMenu(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    border: 'none',
                    background: lang === 'mr' ? '#f3e8ff' : 'transparent',
                    color: lang === 'mr' ? 'var(--primary)' : '#374151',
                    fontWeight: lang === 'mr' ? 800 : 600,
                    fontSize: '12px',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span>मराठी (Marathi)</span>
                  {lang === 'mr' && <Check size={14} color="var(--primary)" />}
                </button>
                <button
                  onClick={() => { setLang('en'); setShowLangMenu(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    border: 'none',
                    background: lang === 'en' ? '#f3e8ff' : 'transparent',
                    color: lang === 'en' ? 'var(--primary)' : '#374151',
                    fontWeight: lang === 'en' ? 800 : 600,
                    fontSize: '12px',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span>English</span>
                  {lang === 'en' && <Check size={14} color="var(--primary)" />}
                </button>
              </div>
            )}
          </div>

          {/* QR Scanner / My QR button */}
          <button 
            id="header-qr-btn"
            className="icon-circle-btn" 
            onClick={onOpenQR}
            title={t.myQrCode}
          >
            <QrCode size={18} />
          </button>

          {/* Connected Phone / Notifications */}
          <button 
            id="header-sms-btn"
            className="icon-circle-btn" 
            onClick={onOpenSMS}
            title={t.linkedSms}
          >
            <Bell size={18} />
            {unreadCount > 0 && <span className="badge-count">{unreadCount}</span>}
          </button>
        </div>
      </div>

      {/* PhonePe Search Bar */}
      <div className="header-search-bar" onClick={onOpenChat} style={{ cursor: 'pointer' }}>
        <Search size={16} />
        <input 
          type="text" 
          placeholder={t.searchPlaceholder} 
          readOnly 
        />
        <HelpCircle size={16} color="#fef08a" />
      </div>

      {/* Soundbox Live Status Strip */}
      <div className="soundbox-quick-bar">
        <div className="soundbox-status-indicator">
          <span className="status-pulse-dot"></span>
          <span>{t.soundboxActive}</span>
        </div>
        <button 
          id="btn-test-soundbox"
          className="soundbox-test-chip" 
          onClick={handleSoundTest}
        >
          <Volume2 size={13} />
          <span>{t.testSoundbox} (₹100)</span>
        </button>
      </div>
    </header>
  );
}
