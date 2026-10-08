import React from 'react';
import { 
  Smartphone, 
  Landmark, 
  Wallet, 
  QrCode, 
  ShieldAlert, 
  Volume2, 
  Fuel, 
  PhoneCall, 
  Car, 
  Shield, 
  Sparkles
} from 'lucide-react';
import { translations } from '../data/translations';
import { soundboxService } from '../services/soundboxService';

export function HomeScreen({ 
  lang, 
  onOpenSend, 
  onOpenQR, 
  onOpenBalance, 
  onOpenFakeTest, 
  onOpenSMS, 
  onNavigateTab
}) {
  const t = translations[lang] || translations.hi;

  const handleTestSoundbox = () => {
    soundboxService.announcePayment(100, lang);
  };

  return (
    <div className="app-content-body">
      {/* 1. PhonePe Signature 3-Column Money Transfer Card */}
      <div className="phonepe-card" style={{ padding: '16px 14px' }}>
        <h4 className="card-section-title">
          <span>{t.transferMoney}</span>
          <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700 }}>
            {t.demoBadge}
          </span>
        </h4>

        <div className="transfer-grid-3">
          {/* To Mobile */}
          <button 
            id="action-to-mobile"
            className="transfer-action-item" 
            onClick={onOpenSend}
          >
            <div className="transfer-icon-container">
              <Smartphone size={24} />
            </div>
            <span className="transfer-action-label">{t.toMobile}</span>
          </button>

          {/* To Bank / UPI */}
          <button 
            id="action-to-bank"
            className="transfer-action-item" 
            onClick={onOpenSend}
          >
            <div className="transfer-icon-container">
              <Landmark size={24} />
            </div>
            <span className="transfer-action-label">{t.toBank}</span>
          </button>

          {/* Check Balance */}
          <button 
            id="action-check-balance"
            className="transfer-action-item" 
            onClick={onOpenBalance}
          >
            <div className="transfer-icon-container">
              <Wallet size={24} />
            </div>
            <span className="transfer-action-label">{t.checkBalance}</span>
          </button>
        </div>
      </div>

      {/* 2. UPI Saathi Smart Soundbox Live Card */}
      <div className="soundbox-feature-card">
        <div className="soundbox-flex-row">
          <div className="soundbox-text">
            <h4>
              <Volume2 size={16} />
              <span>{t.soundboxTitle}</span>
            </h4>
            <p>{t.soundboxDesc}</p>
            <button 
              id="btn-soundbox-voice-test"
              className="soundbox-test-chip" 
              style={{ marginTop: '8px' }}
              onClick={handleTestSoundbox}
            >
              <Volume2 size={12} />
              <span>{t.testVoiceBtn} (₹100)</span>
            </button>
          </div>

          <div className="soundbox-speaker-graphic">
            🔊
          </div>
        </div>
      </div>

      {/* 3. Driver Quick Shortcuts Grid (2x2) */}
      <div className="driver-shortcuts-grid">
        {/* My QR Code */}
        <div 
          id="action-my-qr"
          className="shortcut-card" 
          onClick={onOpenQR}
        >
          <div className="shortcut-icon purple">
            <QrCode size={20} />
          </div>
          <div className="shortcut-text">
            <h5>{t.myQrCode}</h5>
            <p>{t.myQrSubtitle}</p>
          </div>
        </div>

        {/* Receive Demo Payment */}
        <div 
          id="action-receive-demo"
          className="shortcut-card" 
          onClick={onOpenQR}
        >
          <div className="shortcut-icon green">
            <Sparkles size={20} />
          </div>
          <div className="shortcut-text">
            <h5>{t.receiveDemo}</h5>
            <p>{t.receiveDemoSubtitle}</p>
          </div>
        </div>

        {/* Fake Screenshot Test */}
        <div 
          id="action-fake-test"
          className="shortcut-card" 
          onClick={onOpenFakeTest}
        >
          <div className="shortcut-icon orange">
            <ShieldAlert size={20} />
          </div>
          <div className="shortcut-text">
            <h5>{t.fakeScreenshotTest}</h5>
            <p>{t.fakeTestSubtitle}</p>
          </div>
        </div>

        {/* Linked SMS Phone */}
        <div 
          id="action-linked-sms"
          className="shortcut-card" 
          onClick={onOpenSMS}
        >
          <div className="shortcut-icon blue">
            <Smartphone size={20} />
          </div>
          <div className="shortcut-text">
            <h5>{t.linkedSms}</h5>
            <p>{t.linkedSmsSubtitle}</p>
          </div>
        </div>
      </div>

      {/* 4. Golden Rule Warning Card */}
      <div className="golden-rule-banner">
        <span className="icon">💡</span>
        <div>
          <h5>{t.goldenRuleTitle}</h5>
          <p>{t.goldenRuleText}</p>
        </div>
      </div>

      {/* 5. Auto & Daily Services */}
      <div className="phonepe-card">
        <h4 className="card-section-title">
          <span>{t.servicesTitle}</span>
        </h4>
        <div className="transfer-grid-4">
          <div className="transfer-action-item" onClick={() => onOpenSend()}>
            <div className="transfer-icon-container" style={{ background: '#ecfdf5', borderColor: '#a7f3d0', color: '#059669' }}>
              <Fuel size={20} />
            </div>
            <span className="transfer-action-label">{t.cngPay}</span>
          </div>

          <div className="transfer-action-item" onClick={() => onOpenSend()}>
            <div className="transfer-icon-container" style={{ background: '#eff6ff', borderColor: '#bfdbfe', color: '#2563eb' }}>
              <PhoneCall size={20} />
            </div>
            <span className="transfer-action-label">{t.mobileRecharge}</span>
          </div>

          <div className="transfer-action-item" onClick={() => onOpenSend()}>
            <div className="transfer-icon-container" style={{ background: '#fffbeb', borderColor: '#fde68a', color: '#d97706' }}>
              <Car size={20} />
            </div>
            <span className="transfer-action-label">{t.fastag}</span>
          </div>

          <div className="transfer-action-item" onClick={() => onNavigateTab('safety')}>
            <div className="transfer-icon-container" style={{ background: '#fdf2f8', borderColor: '#fbcfe8', color: '#db2777' }}>
              <Shield size={20} />
            </div>
            <span className="transfer-action-label">{t.autoInsurance}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
