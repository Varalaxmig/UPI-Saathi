// Web Speech API Voice synthesis and recognition service for Hindi, Marathi, and English

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    this.isMuted = false;
    this.rate = 0.9; // Friendly, slightly paced for ease of comprehension
    this.currentUtterance = null;
    this.recognition = null;

    if (typeof window !== 'undefined') {
      this.initVoices();
      if (this.synth && this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
      this.initRecognition();
    }
  }

  initVoices() {
    if (this.synth) {
      this.voices = this.synth.getVoices();
    }
  }

  initRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (muted) {
      this.stop();
    }
  }

  getMuted() {
    return this.isMuted;
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  /**
   * Speak a text string in the specified language (hi, mr, en)
   * @param {string} text 
   * @param {string} langCode 'hi' | 'mr' | 'en'
   * @param {Function} onEnd 
   */
  speak(text, langCode = 'hi', onEnd = null) {
    if (this.isMuted || !this.synth || !text) {
      if (onEnd) onEnd();
      return;
    }

    // Cancel any ongoing speech
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = this.rate;
    utterance.pitch = 1.0;

    // Pick best matching voice
    const voices = this.voices.length > 0 ? this.voices : this.synth.getVoices();
    let targetLang = 'hi-IN';
    if (langCode === 'mr') targetLang = 'mr-IN';
    else if (langCode === 'en') targetLang = 'en-IN';

    // Try finding exact match or fallback
    let voice = voices.find(v => v.lang === targetLang || v.lang.startsWith(langCode));
    if (!voice && langCode === 'mr') {
      // Fallback for Marathi to Hindi voice if Marathi voice isn't present
      voice = voices.find(v => v.lang.startsWith('hi'));
    }
    if (!voice && langCode === 'hi') {
      voice = voices.find(v => v.lang.startsWith('en-IN'));
    }
    if (!voice) {
      voice = voices[0];
    }

    if (voice) {
      utterance.voice = voice;
    }
    utterance.lang = targetLang;

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    try {
      this.synth.speak(utterance);
    } catch (err) {
      console.warn('TTS speak error:', err);
    }
  }

  /**
   * Start listening via microphone
   * @param {string} langCode 'hi' | 'mr' | 'en'
   * @param {Function} onResult callback receiving transcript string
   * @param {Function} onError callback receiving error
   * @param {Function} onEnd callback when recognition stops
   */
  startListening(langCode = 'hi', onResult, onError, onEnd) {
    if (!this.recognition) {
      if (onError) onError('Speech recognition not supported in this browser.');
      return false;
    }

    try {
      let speechLang = 'hi-IN';
      if (langCode === 'mr') speechLang = 'mr-IN';
      else if (langCode === 'en') speechLang = 'en-IN';

      this.recognition.lang = speechLang;

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (onResult) onResult(transcript);
      };

      this.recognition.onerror = (event) => {
        if (onError) onError(event.error);
      };

      this.recognition.onend = () => {
        if (onEnd) onEnd();
      };

      this.recognition.start();
      return true;
    } catch (e) {
      console.warn('Recognition start error:', e);
      if (onError) onError(e.message);
      return false;
    }
  }

  stopListening() {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
    }
  }
}

export const speechService = new SpeechService();
