import React, { useState } from 'react';
import { 
  History, 
  ArrowDownLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  X
} from 'lucide-react';
import { translations } from '../data/translations';

export function TransactionHistoryScreen({ 
  transactions, 
  selectedTxn, 
  setSelectedTxn, 
  lang,
  onGuidedAction
}) {
  const [filterType, setFilterType] = useState('all'); // all | credit | debit | pending
  const t = translations[lang] || translations.hi;

  const handleFilterChange = (filter) => {
    setFilterType(filter);
    if (filter === 'pending' && onGuidedAction) {
      onGuidedAction('FILTER_PENDING');
    }
  };

  const handleCardClick = (txn) => {
    setSelectedTxn(txn);
    if (onGuidedAction) {
      onGuidedAction('CLICK_TXN_DETAILS');
    }
  };

  const filteredTransactions = transactions.filter((txn) => {
    if (filterType === 'credit' && txn.type !== 'credit') return false;
    if (filterType === 'debit' && txn.type !== 'debit') return false;
    if (filterType === 'pending' && txn.status !== 'pending') return false;
    return true;
  });

  return (
    <div className="app-content-body" style={{ paddingBottom: '90px' }}>
      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
        <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <History size={20} color="var(--primary)" />
          <span>{t.txnHistoryTitle} ({t.demoBadge})</span>
        </h3>
        <span style={{ fontSize: '11px', background: '#f3e8ff', color: 'var(--primary)', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
          {t.safePracticeBadge}
        </span>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', padding: '4px 0' }}>
        <button 
          id="filter-all-btn"
          className={`chat-chip ${filterType === 'all' ? 'active' : ''}`}
          style={{ background: filterType === 'all' ? 'var(--primary)' : '#f3f4f6', color: filterType === 'all' ? '#fff' : 'inherit' }}
          onClick={() => handleFilterChange('all')}
        >
          {t.filterAll}
        </button>
        <button 
          id="filter-credit-btn"
          className={`chat-chip ${filterType === 'credit' ? 'active' : ''}`}
          style={{ background: filterType === 'credit' ? '#059669' : '#f3f4f6', color: filterType === 'credit' ? '#fff' : 'inherit' }}
          onClick={() => handleFilterChange('credit')}
        >
          {t.creditText}
        </button>
        <button 
          id="filter-debit-btn"
          className={`chat-chip ${filterType === 'debit' ? 'active' : ''}`}
          style={{ background: filterType === 'debit' ? 'var(--primary)' : '#f3f4f6', color: filterType === 'debit' ? '#fff' : 'inherit' }}
          onClick={() => handleFilterChange('debit')}
        >
          {t.debitText}
        </button>
        <button 
          id="filter-pending-btn"
          className={`chat-chip ${filterType === 'pending' ? 'active' : ''}`}
          style={{ background: filterType === 'pending' ? '#d97706' : '#f3f4f6', color: filterType === 'pending' ? '#fff' : 'inherit' }}
          onClick={() => handleFilterChange('pending')}
        >
          {t.pending}
        </button>
      </div>

      {/* List */}
      <div className="transaction-list">
        {filteredTransactions.map((txn, index) => {
          const txnTitle = typeof txn.title === 'object' ? (txn.title[lang] || txn.title.hi) : txn.title;
          const txnSubtitle = typeof txn.subtitle === 'object' ? (txn.subtitle[lang] || txn.subtitle.hi) : txn.subtitle;
          const txnDate = typeof txn.date === 'object' ? (txn.date[lang] || txn.date.hi) : txn.date;
          const txnMode = typeof txn.mode === 'object' ? (txn.mode[lang] || txn.mode.hi) : txn.mode;

          return (
            <div 
              key={txn.id}
              id={index === 0 ? "first-transaction-card" : undefined}
              className="transaction-row"
              onClick={() => handleCardClick(txn)}
            >
              <div className="txn-left">
                <div className={`txn-avatar-badge ${txn.type} ${txn.status}`}>
                  {txn.type === 'credit' ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                </div>
                <div className="txn-details">
                  <h5>{txnTitle}</h5>
                  <p>{txnSubtitle}</p>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{txnDate} • {txnMode}</span>
                </div>
              </div>

              <div className="txn-right">
                <div className={`txn-amount ${txn.type}`}>
                  {txn.type === 'credit' ? `+ ₹${txn.amount}` : `- ₹${txn.amount}`}
                </div>
                <span className={`txn-status-badge ${txn.status}`}>
                  {txn.status === 'successful' ? t.successful : txn.status === 'pending' ? t.pending : t.failed}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Transaction Detail Sheet Modal */}
      {selectedTxn && (
        <div className="modal-backdrop" onClick={() => setSelectedTxn(null)}>
          <div 
            className="modal-sheet" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-row">
              <h3>
                <span>{t.txnDetailsTitle}</span>
              </h3>
              <button className="modal-close-btn" onClick={() => setSelectedTxn(null)}>
                <X size={18} />
              </button>
            </div>

            {/* Target ID for Lesson: txn-amount-status-box */}
            <div 
              id="txn-amount-status-box"
              style={{
                textAlign: 'center',
                padding: '16px 10px',
                background: selectedTxn.status === 'successful' ? '#f0fdf4' : selectedTxn.status === 'pending' ? '#fffbeb' : '#fff1f2',
                borderRadius: '16px',
                border: `1.5px solid ${selectedTxn.status === 'successful' ? '#86efac' : selectedTxn.status === 'pending' ? '#fde68a' : '#fecdd3'}`,
                marginBottom: '14px'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: selectedTxn.status === 'successful' ? '#22c55e' : selectedTxn.status === 'pending' ? '#f59e0b' : '#ef4444',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 8px auto'
              }}>
                {selectedTxn.status === 'successful' ? <CheckCircle2 size={28} /> : selectedTxn.status === 'pending' ? <Clock size={28} /> : <AlertCircle size={28} />}
              </div>

              <h2 style={{ fontSize: '28px', fontWeight: 800, color: selectedTxn.type === 'credit' ? '#15803d' : '#111827' }}>
                {selectedTxn.type === 'credit' ? `+ ₹${selectedTxn.amount}` : `- ₹${selectedTxn.amount}`}
              </h2>

              <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                {selectedTxn.type === 'credit' ? t.receivedStatusText : t.sentStatusText} • {selectedTxn.status === 'successful' ? t.successful.toUpperCase() : selectedTxn.status === 'pending' ? t.pending.toUpperCase() : t.failed.toUpperCase()}
              </p>
            </div>

            {/* Target ID for Lesson: txn-utr-box */}
            <div 
              id="txn-utr-box"
              style={{
                background: '#fafafa',
                borderRadius: '12px',
                padding: '12px 14px',
                border: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '12px',
                color: 'var(--text-secondary)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{t.passengerRecipient}</span>
                <strong style={{ color: 'var(--text-primary)' }}>
                  {typeof selectedTxn.title === 'object' ? (selectedTxn.title[lang] || selectedTxn.title.hi) : selectedTxn.title}
                </strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{t.dateTimeLabel}</span>
                <strong style={{ color: 'var(--text-primary)' }}>
                  {typeof selectedTxn.date === 'object' ? (selectedTxn.date[lang] || selectedTxn.date.hi) : selectedTxn.date}
                </strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{t.bankAccountLabel}</span>
                <strong style={{ color: 'var(--text-primary)' }}>{selectedTxn.bankName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{t.upiRefLabel}</span>
                <strong style={{ color: 'var(--primary)', fontFamily: 'monospace' }}>{selectedTxn.utr}</strong>
              </div>
            </div>

            {/* Explanation if Pending */}
            {selectedTxn.status === 'pending' && (
              <div 
                id="pending-explanation-card"
                style={{
                  background: '#fffbeb',
                  border: '1.5px dashed #f59e0b',
                  borderRadius: '12px',
                  padding: '12px',
                  marginTop: '12px',
                  fontSize: '11.5px',
                  color: '#92400e'
                }}
              >
                {t.pendingNotice}
              </div>
            )}

            <button 
              className="btn-primary" 
              style={{ marginTop: '14px' }}
              onClick={() => setSelectedTxn(null)}
            >
              <span>{t.closeBtn}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
