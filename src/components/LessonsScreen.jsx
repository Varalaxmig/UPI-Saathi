import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Volume2, 
  PlayCircle
} from 'lucide-react';
import { guidedLessons } from '../data/guidedLessons';
import { translations } from '../data/translations';

export function LessonsScreen({ lang, onStartLesson }) {
  const t = translations[lang] || translations.hi;

  return (
    <div className="app-content-body" style={{ paddingBottom: '90px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} color="var(--primary)" />
            <span>{t.lessonsTitle}</span>
          </h3>
          <p style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
            {t.lessonsSubtitle}
          </p>
        </div>
        <span style={{ fontSize: '11px', background: '#ecfdf5', color: '#059669', padding: '3px 8px', borderRadius: '12px', fontWeight: 700 }}>
          {t.safe100}
        </span>
      </div>

      {/* List of guided lessons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {guidedLessons.map((lesson) => {
          const badgeText = typeof lesson.badge === 'object' ? (lesson.badge[lang] || lesson.badge.hi) : lesson.badge;
          return (
            <div 
              key={lesson.id}
              style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                padding: '14px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => onStartLesson(lesson)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ 
                  fontSize: '10px', 
                  fontWeight: 800, 
                  color: '#7e22ce', 
                  background: '#f3e8ff', 
                  padding: '2px 8px', 
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={11} /> {badgeText}
                </span>

                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  {lesson.steps.length} {t.stepsCountText}
                </span>
              </div>

              <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                {lesson.title[lang] || lesson.title.hi}
              </h4>

              <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.35 }}>
                {lesson.shortDesc[lang] || lesson.shortDesc.hi}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '10px',
                paddingTop: '8px',
                borderTop: '1px solid #f3f4f6'
              }}>
                <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Volume2 size={13} /> {t.voiceGuidedTag}
                </span>

                <button 
                  className="btn-primary" 
                  style={{ width: 'auto', padding: '6px 14px', fontSize: '12px', borderRadius: '18px' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartLesson(lesson);
                  }}
                >
                  <PlayCircle size={14} />
                  <span>{t.startLessonBtn}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
