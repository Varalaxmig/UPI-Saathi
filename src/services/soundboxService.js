// Simulated Smart Speaker / Soundbox Audio service (like PhonePe SmartSpeaker / Paytm Soundbox)
import { speechService } from './speechService';

class SoundboxService {
  constructor() {
    this.audioCtx = null;
  }

  getAudioContext() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  // Play pleasant double chime (Soundbox ding-dong alert)
  playChime() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // Note 1: E5 (659.25 Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.25, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.35);

      // Note 2: A5 (880 Hz) slightly later
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.18);
      gain2.gain.setValueAtTime(0.3, now + 0.18);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.18);
      osc2.stop(now + 0.65);
    } catch (e) {
      console.warn('Audio chime error:', e);
    }
  }

  // Announce payment received like real soundbox
  announcePayment(amount, lang = 'hi', onEnd = null) {
    this.playChime();

    setTimeout(() => {
      let announcement = '';
      if (lang === 'mr') {
        announcement = `UPI Saathi वर ${amount} रुपये प्राप्त झाले!`;
      } else if (lang === 'en') {
        announcement = `Received ${amount} rupees on UPI Saathi!`;
      } else {
        announcement = `UPI Saathi पर ${amount} रुपये प्राप्त हुए!`;
      }

      speechService.speak(announcement, lang, onEnd);
    }, 600);
  }
}

export const soundboxService = new SoundboxService();
