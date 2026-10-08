import React, { useState } from 'react';
import { 
  X, 
  Send, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { translations } from '../data/translations';
import { soundboxService } from '../services/soundboxService';

export function SendMoneyModal({ 
  isOpen, 
  onClose, 
  contacts, 
  onPaymentSuccess, 
  lang,
  onGuidedAction
}) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [amount, setAmount] = useState('150');
  const [showPinScreen, setShowPinScreen] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successUtr, setSuccessUtr] = useState('');

  const t = translations[lang] || translations.hi;

  if (!isOpen) return null;

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    if (onGuidedAction) onGuidedAction('SELECT_CONTACT');
  };

  const handleProceedToPin = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    setShowPinScreen(true);
    if (onGuidedAction) onGuidedAction('SUBMIT_AMOUNT');
  };

  const handleConfirmPayment = () => {
    const generatedUtr = `UPI/${Math.floor(100000000000 + Math.random() * 900000000000)}`;
    setSuccessUtr(generatedUtr);
    setIsSuccess(true);
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

    if (onGuidedAction) onGuidedAction('CONFIRM_PAYMENT');

    if (onPaymentSuccess) {
      const roleStr = typeof selectedContact?.role === 'object' 
        ? (selectedContact.role[lang] || selectedContact.role.hi) 
        : (selectedContact?.role || 'Auto Repair');

      onPaymentSuccess({
        title: selectedContact?.name || 'Ramesh Auto Garage',
        subtitle: roleStr,
        amount: parseFloat(amount) || 150,
        type: 'debit',
        status: 'successful',
        date: lang === 'en' ? 'Just now' : lang === 'mr' ? 'आत्ताच' : 'अभी-अभी',
        timestamp: lang === 'en' ? 'Just now' : lang === 'mr' ? 'आत्ताच' : 'अभी-अभी',
        utr: generatedUtr,
        bankName: 'State Bank of India',
        mode: lang === 'en' ? 'UPI Number Pay' : lang === 'mr' ? 'UPI नंबर पेमेंट' : 'UPI नंबर भुगतान'
      });
    }
  };

  const resetAndClose = () => {
    setSelectedContact(null);
    setAmount('150');
    setShowPinScreen(false);
    setEnteredPin('');
    setIsSuccess(false);
    setSuccessUtr('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div 
        className="modal-sheet" 
        id="send-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header-row">
          <h3>
            <Send size={18} color="var(--primary)" />
            <span>{t.sendTitle}</span>
          </h3>
          <button className="modal-close-btn" onClick={resetAndClose}>
            <X size={18} />
          </button>
        </div>

        {/* State 1: Select Contact & Amount */}
        {!showPinScreen && !isSuccess && (
          <div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
              {t.sendSubtitle}
            </p>

            {/* Contact picker */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                {t.selectContact}
              </label>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {contacts.map((c) => {
                  const isSelected = selectedContact?.id === c.id;
                  const cRole = typeof c.role === 'object' ? (c.role[lang] || c.role.hi) : c.role;

                  return (
                    <div 
                      key={c.id}
                      id={`contact-item-${c.id}`}
                      onClick={() => handleSelectContact(c)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid var(--primary)' : '1px solid #e5e7eb',
                        background: isSelected ? '#f5effc' : '#fafafa',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '20px' }}>{c.icon}</span>
                        <div>
                          <h5 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{c.name}</h5>
                          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{cRole} • {c.upi}</span>
                        </div>
                      </div>
                      {isSelected && <CheckCircle2 size={18} color="var(--primary)" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Amount input */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                {t.enterAmount}
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '12px', top: '10px', fontSize: '18px', fontWeight: 800, color: 'var(--primary)' }}>₹</span>
                <input 
                  id="send-amount-input"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 32px',
                    fontSize: '18px',
                    fontWeight: 800,
                    borderRadius: '10px',
                    border: '1.5px solid #d1d5db',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {/* Quick Amount Chips */}
              <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                {['50', '100', '150', '300'].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAmount(val)}
                    style={{
                      background: '#f3f4f6',
                      border: '1px solid #e5e7eb',
                      borderRadius: '14px',
                      padding: '4px 10px',
                      fontSize: '11px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    +₹{val}
                  </button>
                ))}
              </div>
            </div>

            {/* Proceed Button */}
            <button 
              id="btn-submit-amount"
              className="btn-primary" 
              onClick={handleProceedToPin}
            >
              <span>{t.sendDemoButton} (₹{amount || 0})</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* State 2: Simulated UPI PIN Keypad */}
        {showPinScreen && !isSuccess && (
          <div id="pin-demo-keypad" style={{ textAlign: 'center', padding: '10px 0' }}>
            <div style={{ 
              background: '#fef2f2', 
              border: '1.5px dashed #f87171', 
              borderRadius: '12px', 
              padding: '10px 12px', 
              marginBottom: '16px',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#b91c1c', fontWeight: 800, fontSize: '12px' }}>
                <ShieldAlert size={16} />
                <span>{t.pinWarning}</span>
              </div>
            </div>

            <div style={{ margin: '14px 0' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{t.payingToLabel}</span>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)' }}>
                {selectedContact?.name || 'Ramesh Auto Garage'}
              </h4>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--primary)', marginTop: '4px' }}>
                ₹{amount}
              </h2>
            </div>

            {/* 4 Pin Indicator Circles */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', margin: '16px 0' }}>
              {[0, 1, 2, 3].map((idx) => (
                <div 
                  key={idx} 
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: enteredPin.length > idx ? 'var(--primary)' : '#e5e7eb',
                    border: '2px solid var(--primary)',
                    transition: 'all 0.15s'
                  }}
                />
              ))}
            </div>

            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '14px' }}>
              {t.pinKeypadHint}
            </p>

            {/* Demo Keypad */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '8px', 
              maxWidth: '240px', 
              margin: '0 auto 16px auto' 
            }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    if (enteredPin.length < 4) setEnteredPin(prev => prev + num);
                  }}
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    background: '#f9fafb',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {num}
                </button>
              ))}
              <button 
                type="button"
                onClick={() => setEnteredPin('')}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e5e7eb', background: '#fee2e2', color: '#b91c1c', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
              >
                Clear
              </button>
              <button 
                type="button"
                onClick={() => {
                  if (enteredPin.length < 4) setEnteredPin(prev => prev + '0');
                }}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e5e7eb', background: '#f9fafb', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}
              >
                0
              </button>
              <button 
                type="button"
                onClick={() => setEnteredPin(prev => prev.slice(0, -1))}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e5e7eb', background: '#f3f4f6', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
              >
                ⌫
              </button>
            </div>

            <button 
              id="btn-confirm-pin"
              className="btn-primary" 
              onClick={handleConfirmPayment}
            >
              <Lock size={15} />
              <span>{t.confirmPay} (₹{amount})</span>
            </button>
          </div>
        )}

        {/* State 3: Payment Success Card */}
        {isSuccess && (
          <div style={{ textAlign: 'center', padding: '16px 8px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#22c55e',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px auto',
              boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#15803d' }}>
              {t.paymentSuccess}
            </h3>
            
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', margin: '6px 0' }}>
              ₹{amount}
            </h1>

            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              {t.paymentSentTo} <strong>{selectedContact?.name || 'Ramesh Auto Garage'}</strong>
            </p>

            <div style={{
              background: '#f4f5f9',
              borderRadius: '12px',
              padding: '10px 14px',
              margin: '16px 0',
              textAlign: 'left',
              fontSize: '11.5px',
              color: 'var(--text-secondary)'
            }}>
              <p><strong>UTR:</strong> {successUtr}</p>
              <p><strong>{t.bankAccountLabel}</strong> State Bank of India •••• 4821</p>
            </div>

            <button className="btn-primary" onClick={resetAndClose}>
              <span>{t.doneBtn}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
