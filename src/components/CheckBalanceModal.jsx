import React, { useState } from 'react';
import { 
  X, 
  Landmark, 
  Eye, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { translations } from '../data/translations';

export function CheckBalanceModal({ 
  isOpen, 
  onClose, 
  bankAccounts, 
  lang,
  onGuidedAction
}) {
  const [selectedBank, setSelectedBank] = useState(null);
  const [showBalance, setShowBalance] = useState(false);
  const t = translations[lang] || translations.hi;

  if (!isOpen) return null;

  const handleSelectBank = (bank) => {
    setSelectedBank(bank);
    setShowBalance(false);
    if (onGuidedAction) {
      onGuidedAction('SELECT_BANK_ACCOUNT');
    }
  };

  const handleRevealBalance = () => {
    setShowBalance(true);
    if (onGuidedAction) {
      onGuidedAction('VIEW_BALANCE');
    }
  };

  const resetAndClose = () => {
    setSelectedBank(null);
    setShowBalance(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div 
        className="modal-sheet" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-row">
          <h3>
            <Landmark size={18} color="var(--primary)" />
            <span>{t.balanceTitle}</span>
          </h3>
          <button className="modal-close-btn" onClick={resetAndClose}>
            <X size={18} />
          </button>
        </div>

        {/* Step 1: Select Bank Account */}
        {!selectedBank ? (
          <div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
              {t.selectAccount}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {bankAccounts.map((bank) => (
                <div 
                  key={bank.id}
                  id={`bank-acc-${bank.id}`}
                  onClick={() => handleSelectBank(bank)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1.5px solid #e5e7eb',
                    background: '#fafafa',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '24px' }}>{bank.logo}</span>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {bank.bankName}
                      </h4>
                      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        {bank.accountNumber} • {typeof bank.type === 'object' ? (bank.type[lang] || bank.type.hi) : bank.type}
                      </p>
                    </div>
                  </div>
                  <span style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: 700 }}>
                    {t.checkBtn}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '16px',
              padding: '10px 12px',
              borderRadius: '10px',
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              color: '#065f46'
            }}>
              <ShieldCheck size={16} />
              <span>{t.freeBalanceNotice}</span>
            </div>
          </div>
        ) : (
          /* Step 2: View Balance */
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '24px' }}>{selectedBank.logo}</span>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800 }}>{selectedBank.bankName}</h4>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{selectedBank.accountNumber}</p>
              </div>
            </div>

            {!showBalance ? (
              <div style={{ padding: '14px 0' }}>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  {t.tapToRevealBalance}
                </p>

                <button 
                  className="btn-primary" 
                  onClick={handleRevealBalance}
                >
                  <Eye size={16} />
                  <span>{t.showBalanceBtn}</span>
                </button>
              </div>
            ) : (
              <div 
                id="balance-display-box"
                style={{
                  background: 'linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%)',
                  borderRadius: '16px',
                  padding: '20px 14px',
                  border: '2px solid #c084fc',
                  margin: '14px 0',
                  animation: 'fadeIn 0.25s ease'
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary-dark)' }}>
                  {t.availableBalance}
                </span>
                <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary-dark)', margin: '4px 0' }}>
                  ₹{selectedBank.balance.toLocaleString('en-IN')}
                </h2>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: '#dcfce7',
                  color: '#15803d',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: 700,
                  marginTop: '4px'
                }}>
                  <CheckCircle2 size={12} />
                  <span>{t.verifiedBalanceBadge}</span>
                </div>
              </div>
            )}

            <button 
              className="btn-secondary" 
              style={{ marginTop: '10px' }}
              onClick={() => setSelectedBank(null)}
            >
              <span>{t.chooseOtherAccBtn}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
