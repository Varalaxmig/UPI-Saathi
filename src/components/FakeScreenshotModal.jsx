import React, { useState } from 'react';
import { 
  X, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { translations } from '../data/translations';
import { soundboxService } from '../services/soundboxService';

export function FakeScreenshotModal({ isOpen, onClose, lang }) {
  const [userChoice, setUserChoice] = useState(null); // 'yes' | 'no'
  const t = translations[lang] || translations.hi;

  if (!isOpen) return null;

  const handleSelectChoice = (choice) => {
    setUserChoice(choice);
    if (choice === 'no') {
      soundboxService.playChime();
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (_e) {
        // ignore
      }
    }
  };

  const handleReset = () => {
    setUserChoice(null);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-sheet" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-row">
          <h3>
            <AlertTriangle size={18} color="var(--warning)" />
            <span>{t.fakeScreenTitle}</span>
          </h3>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
          {t.fakeScreenDesc}
        </p>

        {/* Realistic Fake Screenshot Graphic */}
        <div className="fake-screenshot-phone">
          <div className="fake-screenshot-inner">
            <div className="fake-check-circle">✓</div>
            <div className="fake-amount">₹150</div>
            <div className="fake-recipient">{t.paymentSuccess} • Raju Auto</div>
            <div className="fake-note">MH 02 AB 1234 • Bandra Station Drop</div>
            <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '6px' }}>
              10:22 AM, 08 Oct 2026 • UPI Ref 429182736182
            </div>
            <div className="fake-watermark">
              {t.fakeScreenshotWatermark}
            </div>
          </div>
        </div>

        {/* Question & Choices */}
        <div style={{ margin: '14px 0' }}>
          <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
            {t.fakeQuestion}
          </h4>

          {userChoice === null ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button 
                className="btn-secondary"
                style={{ textAlign: 'left', justifyContent: 'flex-start', padding: '12px' }}
                onClick={() => handleSelectChoice('yes')}
              >
                <span>A) {t.fakeOptionYes}</span>
              </button>

              <button 
                className="btn-secondary"
                style={{ textAlign: 'left', justifyContent: 'flex-start', padding: '12px', borderColor: 'var(--primary)', background: '#faf5ff' }}
                onClick={() => handleSelectChoice('no')}
              >
                <span style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>
                  B) {t.fakeOptionNo}
                </span>
              </button>
            </div>
          ) : (
            <div>
              {/* Feedback */}
              {userChoice === 'no' ? (
                <div style={{
                  background: '#ecfdf5',
                  border: '2px solid #34d399',
                  borderRadius: '12px',
                  padding: '14px',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#059669', marginBottom: '6px' }}>
                    <CheckCircle2 size={20} />
                    <h4 style={{ fontSize: '14.5px', fontWeight: 800 }}>{t.fakeCorrectAnswer}</h4>
                  </div>
                  <p style={{ fontSize: '12px', color: '#065f46', lineHeight: 1.4 }}>
                    {t.fakeCorrectMsg}
                  </p>
                </div>
              ) : (
                <div style={{
                  background: '#fef2f2',
                  border: '2px solid #f87171',
                  borderRadius: '12px',
                  padding: '14px',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b91c1c', marginBottom: '6px' }}>
                    <XCircle size={20} />
                    <h4 style={{ fontSize: '14.5px', fontWeight: 800 }}>{t.fakeWrongAnswer}</h4>
                  </div>
                  <p style={{ fontSize: '12px', color: '#991b1b', lineHeight: 1.4 }}>
                    {t.fakeWrongMsg}
                  </p>
                </div>
              )}

              {/* Golden takeaway */}
              <div style={{
                background: '#fffbeb',
                border: '1px solid #fde68a',
                borderRadius: '10px',
                padding: '10px 12px',
                fontSize: '11.5px',
                color: '#92400e',
                marginBottom: '14px'
              }}>
                {t.fakeGoldenRule}
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="btn-secondary" 
                  onClick={handleReset}
                  style={{ flex: 1 }}
                >
                  <RotateCcw size={14} />
                  <span>{t.tryAgainBtn}</span>
                </button>
                <button 
                  className="btn-primary" 
                  onClick={onClose}
                  style={{ flex: 1 }}
                >
                  <span>{t.understoodDoneBtn}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
