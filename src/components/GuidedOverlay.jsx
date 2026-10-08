import React, { useEffect, useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { speechService } from '../services/speechService';
import { translations } from '../data/translations';

export function GuidedOverlay({ 
  lesson, 
  stepIndex, 
  onNextStep, 
  onPrevStep, 
  onExitLesson, 
  lang 
}) {
  const [isMuted, setIsMuted] = useState(() => speechService.getMuted());
  const t = translations[lang] || translations.hi;

  const currentStep = lesson?.steps?.[stepIndex];
  const totalSteps = lesson?.steps?.length || 0;
  const isLastStep = stepIndex === totalSteps - 1;

  // Speak instruction on step change
  useEffect(() => {
    if (!currentStep) return;

    const textToSpeak = currentStep.voiceText?.[lang] || currentStep.voiceText?.hi;
    speechService.speak(textToSpeak, lang);

    // Apply glowing highlight class to target DOM element
    const targetElement = document.getElementById(currentStep.targetId);
    if (targetElement) {
      targetElement.classList.add('guided-highlight');
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return () => {
      if (targetElement) {
        targetElement.classList.remove('guided-highlight');
      }
    };
  }, [stepIndex, lesson, lang, currentStep]);

  if (!lesson || !lesson.steps || !currentStep) {
    return null;
  }

  const handleReplay = () => {
    const textToSpeak = currentStep.voiceText[lang] || currentStep.voiceText.hi;
    speechService.speak(textToSpeak, lang);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    speechService.setMuted(nextMuted);
  };

  return (
    <div className="guided-floating-bar" id="guided-floating-container">
      {/* Top row: Badge, Audio controls, and Close */}
      <div className="guided-header-row">
        <div className="guided-badge">
          <Sparkles size={12} />
          <span>{t.stepText} {stepIndex + 1} {t.ofText} {totalSteps}</span>
        </div>

        <div className="guided-controls-top">
          <button 
            className="guided-icon-btn" 
            onClick={handleReplay} 
            title={t.replayAudio}
          >
            <RotateCcw size={14} />
          </button>
          
          <button 
            className="guided-icon-btn" 
            onClick={toggleMute} 
            title={isMuted ? t.unmuteAudio : t.muteAudio}
          >
            {isMuted ? <VolumeX size={14} color="#f87171" /> : <Volume2 size={14} color="#4ade80" />}
          </button>

          <button 
            className="guided-icon-btn" 
            onClick={onExitLesson} 
            title={t.finishLesson}
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Spoken Instruction Banner */}
      <div className="guided-instruction-text">
        👉 {currentStep.instruction[lang] || currentStep.instruction.hi}
      </div>

      {/* Footer Navigation */}
      <div className="guided-footer-nav">
        <div className="step-indicators">
          {lesson.steps.map((_, idx) => (
            <span 
              key={idx} 
              className={`step-dot ${idx === stepIndex ? 'active' : idx < stepIndex ? 'completed' : ''}`}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          {stepIndex > 0 && (
            <button className="guided-nav-btn" onClick={onPrevStep}>
              <ChevronLeft size={13} />
              <span>{t.prevStep}</span>
            </button>
          )}

          <button 
            className="guided-nav-btn primary" 
            onClick={() => {
              if (isLastStep) {
                onExitLesson();
              } else {
                onNextStep();
              }
            }}
          >
            <span>{isLastStep ? t.finishLesson : t.nextStep}</span>
            {isLastStep ? <CheckCircle2 size={13} /> : <ChevronRight size={13} />}
          </button>
        </div>
      </div>
    </div>
  );
}
