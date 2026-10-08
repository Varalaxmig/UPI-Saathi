import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  PlayCircle, 
  Bot
} from 'lucide-react';
import { translations } from '../data/translations';
import { speechService } from '../services/speechService';
import { guidedLessons } from '../data/guidedLessons';

export function ChatbotAssistant({ lang, onStartLesson }) {
  const t = translations[lang] || translations.hi;

  const getGreeting = (language) => {
    if (language === 'mr') {
      return "नमस्कार राजू भाऊ! मी तुमचा यूपीआय साथी आहे. आज तुम्हाला काय शिकायचे आहे? खालील पर्याय निवडा किंवा बोलून विचारा.";
    } else if (language === 'en') {
      return "Namaste Raju Bhaiya! I am your UPI Saathi. What would you like to learn today? Choose an option below or speak into the mic.";
    }
    return "नमस्ते राजू भैया! मैं आपका यूपीआई साथी हूँ। आज आप क्या सीखना चाहते हैं? नीचे दिए विकल्पों में से चुनें या बोलकर पूछें।";
  };

  const [messages, setMessages] = useState(() => [
    {
      id: 'msg_welcome',
      sender: 'bot',
      text: getGreeting(lang),
      time: 'Just now',
      lessonAction: null
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [micError, setMicError] = useState(null);
  const messagesEndRef = useRef(null);

  // Update greeting if language switches
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].id === 'msg_welcome') {
        return [{
          id: 'msg_welcome',
          sender: 'bot',
          text: getGreeting(lang),
          time: 'Just now',
          lessonAction: null
        }];
      }
      return prev;
    });
  }, [lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Predefined knowledge base for quick answers
  const quickResponses = {
    send: {
      match: ['bheje', 'send', 'pathva', 'bhejna', 'transfer'],
      text: {
        hi: "पैसे भेजने के लिए होम स्क्रीन पर 'मोबाइल नंबर' बटन दबाएं, व्यक्ति चुनें, राशि डालें और अपना 4-अंकों का यूपीआई पिन डालें। ध्यान रहे: पिन केवल पैसे भेजने के लिए होता है!",
        mr: "पैसे पाठवण्यासाठी होम स्क्रीनवर 'मोबाइल नंबर' बटण दाबा, व्यक्ती निवडा, रक्कम टाका आणि तुमचा 4-अंकी UPI पिन टाका. लक्षात ठेवा: पिन फक्त पैसे पाठवतानाच टाकला जातो!",
        en: "To send money, tap 'To Mobile' on the home screen, select the contact, enter amount and your 4-digit UPI PIN. Crucial: PIN is strictly for sending money!"
      },
      lessonId: 'lesson_send_money'
    },
    receive: {
      match: ['receive', 'milna', 'aaya', 'check', 'milale'],
      text: {
        hi: "पैसे आए हैं या नहीं यह जानने के लिए हमेशा 'ट्रांजेक्शन हिस्ट्री' या 'साउंडबॉक्स' की आवाज़ पर भरोसा करें। केवल सवारी का स्क्रीनशॉट देखकर कभी भरोसा न करें!",
        mr: "पैसे आले की नाही हे तपासण्यासाठी नेहमी 'व्यवहार इतिहास' किंवा 'साउंडबॉक्स'चा आवाज यावरच विश्वास ठेवा. प्रवाशाच्या स्क्रीनशॉटवर विश्वास ठेवू नका!",
        en: "To verify received payments, always check 'Transaction History' or listen to the Soundbox voice announcement. Never trust customer screenshots alone!"
      },
      lessonId: 'lesson_check_received'
    },
    qr: {
      match: ['qr', 'code', 'scanner', 'kyu'],
      text: {
        hi: "QR कोड से पैसे लेने के लिए सवारी को अपना ऑटो का QR कोड स्कैन करने को कहें। जब साउंडबॉक्स बोले या बैंक का मैसेज आए, तभी समझें कि पैसा आ गया।",
        mr: "QR कोडने पैसे घेण्यासाठी प्रवाशाला तुमचा रिक्षाचा QR कोड स्कॅन करायला सांगा. जेव्हा साउंडबॉक्स बोलेल किंवा SMS येईल, तेव्हाच पैसे आले असे माना.",
        en: "To receive money via QR code, show your auto's QR code. Once the Soundbox announces or bank SMS arrives, payment is confirmed."
      },
      lessonId: 'lesson_receive_qr'
    },
    balance: {
      match: ['balance', 'shillak', 'khata', 'bachen'],
      text: {
        hi: "बैंक बैलेंस चेक करने के लिए 'बैलेंस चेक' बटन दबाएं और अपना बैंक चुनें। बैलेंस चेक करने से कोई पैसा नहीं कटता, यह बिल्कुल मुफ्त है।",
        mr: "बँक शिल्लक तपासण्यासाठी 'शिल्लक तपासा' बटण दाबा आणि बँक निवडा. शिल्लक तपासण्याचे कोणतेही पैसे कापले जात नाहीत, हे पूर्णपणे मोफत आहे.",
        en: "To check account balance, tap 'Check Balance' on the home screen and choose your bank. Checking balance is always 100% free."
      },
      lessonId: 'lesson_check_balance'
    },
    pending: {
      match: ['pending', 'fail', 'atak', 'adakle'],
      text: {
        hi: "अगर पेमेंट पेंडिंग (Pending) है, तो इसका मतलब पैसा बैंक के बीच में अटका है और आपके खाते में नहीं आया। सवारी से कैश मांगें या दूसरा तरीका अपनाएं।",
        mr: "जर पेमेंट पेंडिंग (Pending) असेल, तर पैसे अद्याप बँकेत अडकलेले आहेत. जोपर्यंत यशस्वी होत नाही तोपर्यंत पैसे आले असे समजू नका.",
        en: "If payment is Pending, funds are held in bank clearance. Do not treat it as received. Ask passenger for alternate payment."
      },
      lessonId: 'lesson_pending_failed'
    },
    scam: {
      match: ['fake', 'screenshot', 'fraud', 'thagi', 'fasavnuk'],
      text: {
        hi: "फेक स्क्रीनशॉट से बचने का एक ही नियम है: 'QR कोड स्कैन होना या स्क्रीनशॉट दिखाना = पैसे मिलना नहीं होता।' हमेशा अपना फोन और साउंडबॉक्स चेक करें।",
        mr: "बनावट स्क्रीनशॉटपासून सावध राहण्याचा एकच नियम: 'QR स्कॅन होणे किंवा स्क्रीनशॉट दाखवणे म्हणजे पैसे मिळणे नव्हे!' नेहमी स्वतःचा फोन तपासा.",
        en: "To prevent fake screenshot fraud: 'QR scan or customer screen ≠ money received!' Always verify on your own phone or Soundbox."
      },
      lessonId: 'lesson_check_received'
    },
    pin: {
      match: ['pin', 'otp', 'passcode'],
      text: {
        hi: "⚠️ महा-नियम: यूपीआई पिन (PIN) केवल और केवल पैसे भेजने के लिए डाला जाता है। पैसे प्राप्त करने या इनाम पाने के लिए कभी पिन नहीं डालना होता!",
        mr: "⚠️ सुवर्ण नियम: यूपीआय पिन (PIN) फक्त आणि फक्त पैसे पाठवण्यासाठी टाकला जातो. पैसे मिळवण्यासाठी कधीही पिन टाकायचा नसतो!",
        en: "⚠️ Absolute Rule: UPI PIN is entered ONLY to send money. You NEVER need to enter PIN to receive money!"
      },
      lessonId: 'lesson_send_money'
    }
  };

  const handleSendMessage = (textToSend = inputText) => {
    if (!textToSend.trim()) return;

    const userMsg = {
      id: `user_${String(Date.now())}`,
      sender: 'user',
      text: textToSend,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Determine response
    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let matched = null;

      for (const key of Object.keys(quickResponses)) {
        const item = quickResponses[key];
        if (item.match.some(m => lower.includes(m))) {
          matched = item;
          break;
        }
      }

      let replyText = '';
      let lessonAction = null;

      if (matched) {
        replyText = matched.text[lang] || matched.text.hi;
        if (matched.lessonId) {
          lessonAction = guidedLessons.find(l => l.id === matched.lessonId);
        }
      } else {
        if (lang === 'mr') {
          replyText = "मी समजलो. डिजिटल पेमेंट्स सुरक्षितपणे वापरण्यासाठी खालील पर्यायांवर क्लिक करा किंवा थेट लाइव्ह सराव सुरू करा.";
        } else if (lang === 'en') {
          replyText = "I understand. To practice digital payments safely, tap one of the quick options below or start a live guided practice.";
        } else {
          replyText = "मैं समझ गया। सुरक्षित रूप से डिजिटल पेमेंट सीखने के लिए नीचे दिए गए विकल्पों में से किसी एक पर टैप करें या लाइव अभ्यास शुरू करें।";
        }
        lessonAction = guidedLessons[0];
      }

      const botMsg = {
        id: `bot_${String(Date.now())}`,
        sender: 'bot',
        text: replyText,
        time: 'Just now',
        lessonAction
      };

      setMessages(prev => [...prev, botMsg]);
      // Speak out bot response!
      speechService.speak(replyText, lang);
    }, 400);
  };

  // Mic voice input handling
  const handleToggleVoiceInput = () => {
    if (isListening) {
      speechService.stopListening();
      setIsListening(false);
      return;
    }

    setMicError(null);
    setIsListening(true);

    const started = speechService.startListening(
      lang,
      (transcript) => {
        setIsListening(false);
        handleSendMessage(transcript);
      },
      (_err) => {
        setIsListening(false);
        setMicError(t.chatMicErrorDenied);
      },
      () => {
        setIsListening(false);
      }
    );

    if (!started) {
      setIsListening(false);
      setMicError(t.chatMicErrorUnavail);
    }
  };

  const handleSpeakBubble = (text) => {
    speechService.speak(text, lang);
  };

  const quickChips = [
    { label: t.q1, text: "Payment kaise bheje?" },
    { label: t.q4, text: "Payment aaya ya nahi kaise check kare?" },
    { label: t.q3, text: "QR code kaise use kare?" },
    { label: t.q5, text: "Bank balance kaise check kare?" },
    { label: t.q6, text: "Fake screenshot se kaise bache?" },
    { label: t.q7, text: "Payment pending ho to kya kare?" },
    { label: t.q8, text: "UPI PIN kab dalna chahiye?" }
  ];

  return (
    <div className="chat-window">
      {/* Chat header */}
      <div style={{
        background: '#ffffff',
        padding: '12px 14px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7c3aed 0%, #5f259f 100%)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Bot size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>
              {t.chatTitle}
            </h4>
            <p style={{ fontSize: '10.5px', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="status-pulse-dot" style={{ width: '6px', height: '6px' }}></span>
              <span>{t.chatSubtitle}</span>
            </p>
          </div>
        </div>

        <span style={{ fontSize: '10px', background: '#f3e8ff', color: 'var(--primary)', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
          {lang.toUpperCase()}
        </span>
      </div>

      {/* Messages */}
      <div className="chat-messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-bubble ${msg.sender}`}>
            <p style={{ lineHeight: 1.4 }}>{msg.text}</p>

            {/* Audio read aloud icon */}
            {msg.sender === 'bot' && (
              <button 
                className="chat-voice-btn"
                onClick={() => handleSpeakBubble(msg.text)}
                title="Listen"
              >
                <Volume2 size={12} />
                <span>{t.listenBtn}</span>
              </button>
            )}

            {/* Action button if tied to a guided lesson */}
            {msg.lessonAction && (
              <div className="chat-bubble-action">
                <button 
                  className="btn-primary"
                  style={{ padding: '8px 12px', fontSize: '12px', borderRadius: '8px', background: 'var(--primary-dark)' }}
                  onClick={() => onStartLesson(msg.lessonAction)}
                >
                  <PlayCircle size={15} />
                  <span>{t.startPracticeNow}</span>
                </button>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Mic status or error banner */}
      {isListening && (
        <div style={{ background: '#fef2f2', color: '#dc2626', padding: '6px 12px', fontSize: '11px', textAlign: 'center', fontWeight: 700 }}>
          🎙️ {t.chatListening}
        </div>
      )}
      {micError && (
        <div style={{ background: '#fffbeb', color: '#b45309', padding: '6px 12px', fontSize: '11px', textAlign: 'center' }}>
          {micError}
        </div>
      )}

      {/* Quick Suggestion Chips Scroll */}
      <div className="chat-chips-scroll">
        {quickChips.map((chip, idx) => (
          <button 
            key={idx}
            className="chat-chip"
            onClick={() => handleSendMessage(chip.text)}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form 
        className="chat-input-bar"
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <button 
          type="button"
          className={`mic-btn ${isListening ? 'listening' : ''}`}
          onClick={handleToggleVoiceInput}
          title={isListening ? "Mute" : "Tap to Speak"}
        >
          {isListening ? <MicOff size={18} /> : <Mic size={18} />}
        </button>

        <input 
          type="text"
          className="chat-input-field"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t.chatPlaceholder}
        />

        <button 
          type="submit"
          className="icon-circle-btn"
          style={{ background: 'var(--primary)', color: '#fff', border: 'none' }}
          disabled={!inputText.trim()}
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
