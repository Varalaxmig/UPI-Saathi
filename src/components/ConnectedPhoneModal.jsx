import React from 'react';
import { 
  X, 
  Smartphone, 
  AlertTriangle, 
  CheckCircle2
} from 'lucide-react';
import { translations } from '../data/translations';

export function ConnectedPhoneModal({ isOpen, onClose, smsList, lang }) {
  const t = translations[lang] || translations.hi;

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-sheet" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-row">
          <h3>
            <Smartphone size={18} color="var(--primary)" />
            <span>{t.smsModalTitle}</span>
          </h3>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Info header */}
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          border: '1px solid #86efac',
          borderRadius: '12px',
          padding: '10px 12px',
          marginBottom: '14px',
          fontSize: '11.5px',
          color: '#166534'
        }}>
          <p>
            <strong>📱 {t.linkedNumberLabel}</strong> {t.linkedNumberSub}
          </p>
          <p style={{ marginTop: '3px', opacity: 0.9 }}>
            {t.smsModalSubtitle}
          </p>
        </div>

        {/* SMS List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '55vh', overflowY: 'auto' }}>
          {smsList.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px' }}>
              {t.noSmsYet}
            </p>
          ) : (
            smsList.map((sms) => (
              <div 
                key={sms.id}
                style={{
                  background: sms.isGenuine ? '#ffffff' : '#fff1f2',
                  border: sms.isGenuine ? '1px solid #e5e7eb' : '1.5px dashed #f43f5e',
                  borderRadius: '12px',
                  padding: '12px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ 
                      fontSize: '11.5px', 
                      fontWeight: 800, 
                      color: sms.isGenuine ? '#0369a1' : '#be123c',
                      background: sms.isGenuine ? '#e0f2fe' : '#ffe4e6',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}>
                      {sms.sender}
                    </span>
                    {sms.isGenuine ? (
                      <span style={{ fontSize: '10px', color: '#15803d', display: 'flex', alignItems: 'center', gap: '2px' }}>
                        <CheckCircle2 size={11} /> {t.realBankBadge}
                      </span>
                    ) : (
                      <span style={{ fontSize: '10px', color: '#b91c1c', display: 'flex', alignItems: 'center', gap: '2px' }}>
                        <AlertTriangle size={11} /> {t.fakeSmsBadge}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>
                    {typeof sms.time === 'object' ? (sms.time[lang] || sms.time.hi) : sms.time}
                  </span>
                </div>

                <p style={{ fontSize: '12.5px', color: 'var(--text-primary)', lineHeight: 1.35, fontFamily: 'monospace' }}>
                  {sms.message}
                </p>

                {sms.warning && (
                  <div style={{
                    marginTop: '8px',
                    padding: '6px 8px',
                    borderRadius: '6px',
                    background: '#fef2f2',
                    fontSize: '11px',
                    color: '#991b1b',
                    fontWeight: 600
                  }}>
                    {typeof sms.warning === 'object' ? (sms.warning[lang] || sms.warning.hi) : sms.warning}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <button 
          className="btn-primary" 
          style={{ marginTop: '16px' }}
          onClick={onClose}
        >
          <span>{t.closeBtn}</span>
        </button>
      </div>
    </div>
  );
}
