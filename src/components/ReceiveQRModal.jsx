import React, { useState } from 'react';
import { 
  X, 
  QrCode, 
  Volume2, 
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { translations } from '../data/translations';
import { soundboxService } from '../services/soundboxService';

export function ReceiveQRModal({ 
  isOpen, 
  onClose, 
  profile, 
  onSimulateReceive, 
  lang,
  onGuidedAction
}) {
  const [hasReceived, setHasReceived] = useState(false);
  const receivedAmount = 150;
  const t = translations[lang] || translations.hi;

  if (!isOpen) return null;

  const handleSimulatePayment = () => {
    setHasReceived(true);
    
    // Trigger Soundbox chime & voice announcement!
    soundboxService.announcePayment(receivedAmount, lang);

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.5 }
      });
    } catch (_e) {
      // ignore
    }

    if (onGuidedAction) {
      onGuidedAction('TRIGGER_SOUNDBOX');
    }

    if (onSimulateReceive) {
      onSimulateReceive({
        title: lang === 'en' ? 'Passenger - Bandra' : lang === 'mr' ? 'प्रवासी - वांद्रे' : 'सवारी - बांद्रा',
        subtitle: lang === 'en' ? 'Auto Fare QR Scan' : lang === 'mr' ? 'रिक्षा भाडे QR स्कॅन' : 'ऑटो किराया QR स्कैन',
        amount: receivedAmount,
        type: 'credit',
        status: 'successful',
        date: lang === 'en' ? 'Just now' : lang === 'mr' ? 'आत्ताच' : 'अभी-अभी',
        timestamp: lang === 'en' ? 'Just now' : lang === 'mr' ? 'आत्ताच' : 'अभी-अभी',
        utr: `UPI/${Math.floor(100000000000 + Math.random() * 900000000000)}`,
        bankName: 'State Bank of India',
        mode: lang === 'en' ? 'QR Code Scan' : lang === 'mr' ? 'QR कोड स्कॅन' : 'QR कोड स्कैन'
      });
    }
  };

  const resetAndClose = () => {
    setHasReceived(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div 
        className="modal-sheet" 
        onClick={(e) => e.stopPropagation()}
        style={{ textAlign: 'center' }}
      >
        <div className="modal-header-row">
          <h3>
            <QrCode size={18} color="var(--primary)" />
            <span>{t.receiveTitle}</span>
          </h3>
          <button className="modal-close-btn" onClick={resetAndClose}>
            <X size={18} />
          </button>
        </div>

        {/* QR Card Container */}
        <div style={{
          background: 'linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%)',
          borderRadius: '16px',
          padding: '16px',
          border: '2px solid #c084fc',
          marginBottom: '14px'
        }}>
          {/* Driver identity banner */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '10px' }}>
            <span style={{ fontSize: '24px' }}>🚕</span>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-dark)' }}>{profile.name}</h4>
              <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{profile.autoNumber} • {profile.upiId}</p>
            </div>
          </div>

          {/* Simulated Authentic QR Graphic SVG */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '12px',
            display: 'inline-block',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            position: 'relative'
          }}>
            <svg width="170" height="170" viewBox="0 0 170 170">
              {/* Corner position markers */}
              <rect x="10" y="10" width="40" height="40" fill="#1e1e24" rx="4" />
              <rect x="18" y="18" width="24" height="24" fill="#ffffff" rx="2" />
              <rect x="24" y="24" width="12" height="12" fill="#5f259f" />

              <rect x="120" y="10" width="40" height="40" fill="#1e1e24" rx="4" />
              <rect x="128" y="18" width="24" height="24" fill="#ffffff" rx="2" />
              <rect x="134" y="24" width="12" height="12" fill="#5f259f" />

              <rect x="10" y="120" width="40" height="40" fill="#1e1e24" rx="4" />
              <rect x="18" y="128" width="24" height="24" fill="#ffffff" rx="2" />
              <rect x="24" y="134" width="12" height="12" fill="#5f259f" />

              {/* Data dots pattern */}
              <rect x="60" y="15" width="8" height="8" fill="#1e1e24" />
              <rect x="75" y="15" width="8" height="8" fill="#5f259f" />
              <rect x="90" y="15" width="8" height="8" fill="#1e1e24" />
              <rect x="105" y="25" width="8" height="8" fill="#5f259f" />

              <rect x="15" y="60" width="8" height="8" fill="#5f259f" />
              <rect x="25" y="75" width="8" height="8" fill="#1e1e24" />
              <rect x="15" y="90" width="8" height="8" fill="#1e1e24" />
              <rect x="35" y="100" width="8" height="8" fill="#5f259f" />

              <rect x="65" y="60" width="10" height="10" fill="#1e1e24" />
              <rect x="95" y="60" width="10" height="10" fill="#5f259f" />
              <rect x="65" y="100" width="10" height="10" fill="#5f259f" />
              <rect x="95" y="100" width="10" height="10" fill="#1e1e24" />

              <rect x="125" y="65" width="8" height="8" fill="#1e1e24" />
              <rect x="145" y="75" width="8" height="8" fill="#5f259f" />
              <rect x="125" y="95" width="8" height="8" fill="#1e1e24" />
              <rect x="140" y="110" width="8" height="8" fill="#5f259f" />

              <rect x="60" y="135" width="8" height="8" fill="#1e1e24" />
              <rect x="75" y="145" width="8" height="8" fill="#5f259f" />
              <rect x="90" y="135" width="8" height="8" fill="#1e1e24" />

              {/* Center Logo badge */}
              <circle cx="85" cy="85" r="18" fill="#ffffff" />
              <circle cx="85" cy="85" r="15" fill="#5f259f" />
              <text x="85" y="91" fontSize="14" fontWeight="bold" fill="#ffffff" textAnchor="middle">₹</text>
            </svg>
          </div>

          <p style={{ fontSize: '11px', color: 'var(--primary-dark)', fontWeight: 700, marginTop: '8px' }}>
            {t.acceptedPayApps}
          </p>
        </div>

        {/* Golden Rule Notice */}
        <div style={{
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '10px',
          padding: '8px 12px',
          fontSize: '11px',
          color: '#92400e',
          textAlign: 'left',
          marginBottom: '14px'
        }}>
          <strong>💡 {t.qrScanRule}</strong>
        </div>

        {/* Live Simulation Trigger Button */}
        {!hasReceived ? (
          <button 
            id="simulate-customer-pay-btn"
            className="btn-primary" 
            onClick={handleSimulatePayment}
          >
            <Sparkles size={16} />
            <span>{t.simulateCustomerPay}</span>
          </button>
        ) : (
          <div 
            id="soundbox-alert-banner"
            style={{
              background: '#ecfdf5',
              border: '2px solid #34d399',
              borderRadius: '12px',
              padding: '12px',
              animation: 'slideDown 0.25s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#059669', marginBottom: '4px' }}>
              <Volume2 size={20} className="pulse-icon" />
              <h4 style={{ fontSize: '15px', fontWeight: 800 }}>{t.soundboxAnnouncedBadge}</h4>
            </div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#065f46' }}>
              "{t.soundboxReceivedMsg}"
            </p>
            <p style={{ fontSize: '11px', color: '#047857', marginTop: '6px' }}>
              {t.soundboxCreditedMsg}
            </p>

            <button 
              className="btn-primary" 
              style={{ marginTop: '10px', background: '#059669' }}
              onClick={resetAndClose}
            >
              <span>{t.verifiedBtn}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
