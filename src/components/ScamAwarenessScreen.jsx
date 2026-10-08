import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { scamScenarios } from '../data/scenarios';
import { translations } from '../data/translations';
import { soundboxService } from '../services/soundboxService';

export function ScamAwarenessScreen({ lang }) {
  const [activeScenarioId, setActiveScenarioId] = useState(scamScenarios[0].id);
  const [answers, setAnswers] = useState({}); // { [scenarioId]: optionId }
  const t = translations[lang] || translations.hi;

  const currentScenario = scamScenarios.find(s => s.id === activeScenarioId) || scamScenarios[0];
  const selectedOptionId = answers[currentScenario.id];
  const selectedOption = currentScenario.options.find(o => o.id === selectedOptionId);

  const handleSelectOption = (optId) => {
    setAnswers(prev => ({ ...prev, [currentScenario.id]: optId }));
    const opt = currentScenario.options.find(o => o.id === optId);
    if (opt?.isCorrect) {
      soundboxService.playChime();
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (_e) {
        // ignore
      }
    }
  };

  const handleResetScenario = () => {
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentScenario.id];
      return copy;
    });
  };

  const currentDanger = typeof currentScenario.dangerLevel === 'object'
    ? (currentScenario.dangerLevel[lang] || currentScenario.dangerLevel.hi)
    : currentScenario.dangerLevel;

  return (
    <div className="app-content-body" style={{ paddingBottom: '90px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldAlert size={20} color="#e11d48" />
            <span>{t.safetyTitle}</span>
          </h3>
          <p style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
            {t.safetySubtitle}
          </p>
        </div>
        <span style={{ fontSize: '10px', background: '#fee2e2', color: '#b91c1c', padding: '3px 8px', borderRadius: '12px', fontWeight: 800 }}>
          {t.awarenessTestBadge}
        </span>
      </div>

      {/* Scenario Selector Chips */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', padding: '4px 0 10px 0' }}>
        {scamScenarios.map((scen, idx) => {
          const isDone = !!answers[scen.id];
          const isCurrent = scen.id === currentScenario.id;
          return (
            <button
              key={scen.id}
              onClick={() => setActiveScenarioId(scen.id)}
              style={{
                background: isCurrent ? 'var(--primary)' : isDone ? '#ecfdf5' : '#f3f4f6',
                color: isCurrent ? '#fff' : isDone ? '#065f46' : 'var(--text-primary)',
                border: isCurrent ? '1.5px solid var(--primary)' : isDone ? '1px solid #86efac' : '1px solid #e5e7eb',
                borderRadius: '20px',
                padding: '6px 12px',
                fontSize: '11.5px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              {isDone && <CheckCircle2 size={12} color={isCurrent ? '#fff' : '#059669'} />}
              <span>{t.caseText} {idx + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Active Interactive Scenario Card */}
      <div style={{
        background: '#ffffff',
        border: '1.5px solid #e5e7eb',
        borderRadius: '16px',
        padding: '16px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
      }}>
        {/* Scenario Title & Danger level */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--text-primary)' }}>
            {currentScenario.title[lang] || currentScenario.title.hi}
          </h4>
          <span style={{ fontSize: '10px', background: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '6px', fontWeight: 800 }}>
            {t.riskText}: {currentDanger}
          </span>
        </div>

        {/* Situation Description */}
        <div style={{
          background: '#f8fafc',
          borderLeft: '4px solid #6366f1',
          padding: '10px 12px',
          borderRadius: '4px',
          fontSize: '12.5px',
          lineHeight: 1.45,
          color: 'var(--text-primary)',
          marginBottom: '14px'
        }}>
          <strong>{t.situationLabel}:</strong> {currentScenario.situation[lang] || currentScenario.situation.hi}
        </div>

        {/* Question */}
        <h5 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
          ❓ {currentScenario.question[lang] || currentScenario.question.hi}
        </h5>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
          {currentScenario.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            let bgColor = '#fafafa';
            let borderColor = '#e5e7eb';
            if (isSelected) {
              bgColor = opt.isCorrect ? '#ecfdf5' : '#fff1f2';
              borderColor = opt.isCorrect ? '#10b981' : '#f43f5e';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                style={{
                  background: bgColor,
                  border: `1.5px solid ${borderColor}`,
                  borderRadius: '12px',
                  padding: '10px 12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected && opt.isCorrect ? '#065f46' : isSelected && !opt.isCorrect ? '#9f1239' : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{opt.text[lang] || opt.text.hi}</span>
                {isSelected && (
                  opt.isCorrect ? <CheckCircle2 size={18} color="#059669" /> : <XCircle size={18} color="#e11d48" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {selectedOption && (
          <div style={{
            background: selectedOption.isCorrect ? '#ecfdf5' : '#fff1f2',
            border: `1px solid ${selectedOption.isCorrect ? '#a7f3d0' : '#fecdd3'}`,
            borderRadius: '12px',
            padding: '12px',
            marginBottom: '12px',
            animation: 'fadeIn 0.2s ease'
          }}>
            <p style={{
              fontSize: '12px',
              lineHeight: 1.4,
              color: selectedOption.isCorrect ? '#065f46' : '#991b1b',
              fontWeight: 600
            }}>
              {selectedOption.feedback[lang] || selectedOption.feedback.hi}
            </p>

            <div style={{
              marginTop: '8px',
              paddingTop: '6px',
              borderTop: '1px dashed rgba(0, 0, 0, 0.1)',
              fontSize: '11px',
              color: '#374151',
              fontWeight: 700
            }}>
              {currentScenario.goldenLesson[lang] || currentScenario.goldenLesson.hi}
            </div>

            <button 
              className="btn-secondary" 
              style={{ marginTop: '10px', padding: '6px 12px', fontSize: '11px' }}
              onClick={handleResetScenario}
            >
              <RotateCcw size={12} />
              <span>{t.changeAnswerBtn}</span>
            </button>
          </div>
        )}
      </div>

      {/* Cyber Helpline Emergency Card */}
      <div style={{
        marginTop: '14px',
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
        color: '#fff',
        borderRadius: '16px',
        padding: '14px 16px',
        boxShadow: '0 4px 15px rgba(30, 27, 75, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px'
          }}>
            🚨
          </div>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 800 }}>{t.cyberHelplineTitle}</h4>
            <p style={{ fontSize: '11px', opacity: 0.9 }}>
              {t.cyberHelplineDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
