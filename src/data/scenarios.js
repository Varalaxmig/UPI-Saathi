// Fraud and Scam Awareness Scenarios for Auto-Rickshaw Drivers & General Users

export const scamScenarios = [
  {
    id: 'scam_fake_screenshot',
    title: {
      hi: '1. सवारी का फ़र्ज़ी स्क्रीनशॉट',
      mr: '1. प्रवाशाचा बनावट स्क्रीनशॉट',
      en: '1. Passenger Fake Screenshot Scam'
    },
    dangerLevel: {
      hi: 'उच्च (High)',
      mr: 'उच्च (High)',
      en: 'High'
    },
    situation: {
      hi: 'एक सवारी ऑटो से उतरकर आपको मोबाइल में हरा टिक और "₹150 Paid to Raju Driver" का स्क्रीनशॉट दिखाकर कहती है - "भैया पेमेंट हो गया, मैं जल्दी में हूँ, जाऊं?"',
      mr: 'एक प्रवासी रिक्षामधून उतरून तुम्हाला फोनमध्ये हिरवा टिक आणि "₹150 Paid to Raju Driver" चा स्क्रीनशॉट दाखवतो आणि म्हणतो - "भाऊ पेमेंट झाले, मी घाईत आहे, जाऊ का?"',
      en: 'A passenger gets down and flashes a phone screenshot showing green tick and "₹150 Paid to Raju Driver". They say: "Bhaiya, payment done! I am in a hurry, may I leave?"'
    },
    question: {
      hi: 'आप क्या करेंगे?',
      mr: 'तुम्ही काय कराल?',
      en: 'What will you do?'
    },
    options: [
      {
        id: 'opt_1',
        text: {
          hi: 'स्क्रीनशॉट पर सब सही दिख रहा है, सवारी को जाने देंगे।',
          mr: 'स्क्रीनशॉटवर सर्व योग्य दिसत आहे, प्रवाशाला जाऊ देईन.',
          en: 'Screenshot looks legit, let the passenger leave.'
        },
        isCorrect: false,
        feedback: {
          hi: '❌ गलत फैसला! आजकल इंटरनेट पर 10 सेकंड में फर्जी स्क्रीनशॉट बनाने वाले ऐप्स आ गए हैं जो हूबहू असली लगते हैं। केवल स्क्रीनशॉट देखकर कभी सवारी को न जाने दें।',
          mr: '❌ चुकीचा निर्णय! आजकाल इंटरनेटवर काही सेकंदात बनावट स्क्रीनशॉट बनवणारे ॲप्स आहेत. फक्त स्क्रीनशॉट पाहून प्रवाशाला जाऊ देऊ नका.',
          en: '❌ Wrong Decision! Scammers use fake screenshot generator apps that look 100% identical to genuine payment apps. Never trust a passenger’s screen alone!'
        }
      },
      {
        id: 'opt_2',
        text: {
          hi: 'नहीं जाने देंगे! पहले अपने फोन की हिस्ट्री, बैंक SMS या साउंडबॉक्स की आवाज़ चेक करेंगे।',
          mr: 'जाऊ देणार नाही! आधी माझ्या फोनचा इतिहास, बँक SMS किंवा साउंडबॉक्सचा आवाज तपासेन.',
          en: 'Do not let them leave! First verify your own Phone History, Bank SMS, or Soundbox voice.'
        },
        isCorrect: true,
        feedback: {
          hi: '🎉 बिल्कुल सही फैसला! असली पेमेंट का सबूत सिर्फ आपके अपने फोन की हिस्ट्री, साउंडबॉक्स या बैंक SMS में ही होता है। अगर आपके फोन में नहीं आया, तो पेमेंट नहीं हुआ!',
          mr: '🎉 अगदी योग्य निर्णय! खऱ्या पेमेंटचा पुरावा फक्त तुमच्या स्वतःच्या फोनचा इतिहास किंवा साउंडबॉक्समध्ये असतो. जर तुमच्याकडे जमा झाले नाही, तर पेमेंट आलेले नाही!',
          en: '🎉 Spot On! True payment proof is ONLY what shows on YOUR OWN phone, Soundbox, or Bank SMS. If not credited there, money hasn’t arrived!'
        }
      }
    ],
    goldenLesson: {
      hi: '💡 याद रखें: "QR कोड स्कैन होना या स्क्रीनशॉट दिखाना = पैसे मिलना नहीं होता!"',
      mr: '💡 लक्षात ठेवा: "QR स्कॅन होणे किंवा स्क्रीनशॉट दाखवणे म्हणजे पैसे मिळणे नव्हे!"',
      en: '💡 Remember: "QR code scan or showing screenshot DOES NOT equal payment received!"'
    }
  },

  {
    id: 'scam_pin_to_receive',
    title: {
      hi: '2. "पैसे पाने के लिए पिन डालो" फ्रॉड',
      mr: '2. "पैसे मिळवण्यासाठी पिन टाका" फसवणूक',
      en: '2. UPI PIN to Receive Money Fraud'
    },
    dangerLevel: {
      hi: 'अत्यंत गंभीर (Critical)',
      mr: 'अतिशय गंभीर (Critical)',
      en: 'Critical'
    },
    situation: {
      hi: 'किसी ने फोन करके कहा: "भैया, मैंने आपको गलती से ₹2000 ज्यादा भेज दिए हैं। मैं आपको एक लिंक/रिक्वेस्ट भेज रहा हूँ, अपना 4 अंकों का UPI PIN डालकर पैसे वापस ले लो।"',
      mr: 'कोणीतरी फोन करून सांगितले: "भाऊ, मी चुकून तुम्हाला ₹2000 जास्त पाठवले. मी तुम्हाला एक लिंक पाठवतो, तुमचा 4-अंकी UPI PIN टाकून पैसे परत घ्या."',
      en: 'Someone calls and says: "Bhaiya, I accidentally sent you ₹2,000 extra. I am sending a payment request. Enter your 4-digit UPI PIN to claim/refund the money."'
    },
    question: {
      hi: 'क्या पैसे लेने या रिफंड पाने के लिए कभी UPI PIN डालना चाहिए?',
      mr: 'पैसे मिळवण्यासाठी किंवा रिफंडसाठी कधीही UPI PIN टाकावा का?',
      en: 'Should you ever enter your UPI PIN to receive money or get a refund?'
    },
    options: [
      {
        id: 'opt_1',
        text: {
          hi: 'हाँ, पैसे लेने के लिए भी बैंक का पिन डालना पड़ता है।',
          mr: 'होय, पैसे घेण्यासाठी सुद्धा बँकेचा पिन टाकावा लागतो.',
          en: 'Yes, entering PIN is needed to receive money.'
        },
        isCorrect: false,
        feedback: {
          hi: '❌ बहुत बड़ी भूल! UPI का सबसे बड़ा नियम: PIN डालने से केवल आपके खाते से पैसे कटते हैं! पैसे आने के लिए पिन कभी नहीं मांगा जाता।',
          mr: '❌ मोठी चूक! UPI चा सर्वात मोठा नियम: पिन टाकल्याने खात्यातून पैसे कापले जातात! पैसे येण्यासाठी पिन कधीही लागत नाही.',
          en: '❌ Dangerous Mistake! Absolute UPI rule: Entering PIN ONLY deducts money from your account! You NEVER need a PIN to receive money.'
        }
      },
      {
        id: 'opt_2',
        text: {
          hi: 'कभी नहीं! पिन केवल पैसे भेजने के लिए होता है, लेने के लिए नहीं।',
          mr: 'कधीही नाही! पिन फक्त पैसे पाठवण्यासाठी असतो, घेण्यासाठी नाही.',
          en: 'Never! PIN is solely for sending money, never for receiving.'
        },
        isCorrect: true,
        feedback: {
          hi: '🎉 शाबाश! आपने अपना खाता खाली होने से बचा लिया। जब भी कोई पिन डालने को कहे, समझ जाइये वह ठग है!',
          mr: '🎉 अभिनंदन! तुम्ही तुमचे खाते रिकामे होण्यापासून वाचवले. जेव्हा कोणी पिन टाकायला सांगेल, तेव्हा समजून जा की तो भामटा आहे!',
          en: '🎉 Outstanding! You prevented your account from being emptied. Anyone asking for your PIN to send you money is 100% a fraudster!'
        }
      }
    ],
    goldenLesson: {
      hi: '💡 याद रखें: "पिन (PIN) = पैसे कटना (Debit)। पैसे पाने के लिए PIN कभी न डालें!"',
      mr: '💡 लक्षात ठेवा: "पिन (PIN) = पैसे कट होणे. पैसे मिळवण्यासाठी PIN कधीही टाकू नका!"',
      en: '💡 Golden Rule: "PIN = Deducting Money. NEVER enter PIN to receive money!"'
    }
  },

  {
    id: 'scam_qr_code_trap',
    title: {
      hi: '3. वॉट्सऐप पर QR कोड भेजकर पैसे देने का झांसा',
      mr: '3. व्हॉट्सॲपवर QR कोड पाठवून पैसे देण्याचे आमिष',
      en: '3. WhatsApp QR Code "Scan to Receive" Trap'
    },
    dangerLevel: {
      hi: 'उच्च (High)',
      mr: 'उच्च (High)',
      en: 'High'
    },
    situation: {
      hi: 'एक अनजान व्यक्ति वॉट्सऐप पर एक QR कोड भेजता है और कहता है - "इस QR कोड को अपने PhonePe/GPay से स्कैन करो और ₹500 का एडवांस किराया तुरंत पाओ।"',
      mr: 'एक अनोळखी व्यक्ती व्हॉट्सॲपवर एक QR कोड पाठवते आणि म्हणते - "हा QR कोड तुमच्या PhonePe/GPay ने स्कॅन करा आणि ₹500 ॲडव्हान्स लगेच मिळवा."',
      en: 'A stranger on WhatsApp sends a QR code claiming: "Scan this QR code on PhonePe/GPay to instantly receive ₹500 advance auto fare."'
    },
    question: {
      hi: 'क्या किसी और का QR कोड स्कैन करने से आपके खाते में पैसे आ सकते हैं?',
      mr: 'दुसऱ्याचा QR कोड स्कॅन केल्याने तुमच्या खात्यात पैसे येऊ शकतात का?',
      en: 'Can scanning someone else’s QR code ever deposit money into your account?'
    },
    options: [
      {
        id: 'opt_1',
        text: {
          hi: 'नहीं! QR कोड स्कैन करने से हमेशा आपके खाते से पैसे कटते हैं।',
          mr: 'नाही! QR कोड स्कॅन केल्याने नेहमी तुमच्या खात्यातून पैसे कट होतात.',
          en: 'No! Scanning a QR code always sends money out of your account.'
        },
        isCorrect: true,
        feedback: {
          hi: '🎉 बिल्कुल सही! पैसे पाने के लिए आपको अपना QR कोड दिखाना होता है, किसी और का QR स्कैन नहीं करना होता।',
          mr: '🎉 अगदी बरोबर! पैसे मिळवण्यासाठी तुम्हाला तुमचा QR कोड दाखवायचा असतो, दुसऱ्याचा स्कॅन करायचा नसतो.',
          en: '🎉 Exactly right! To receive money, you SHOW your QR code. Scanning someone else’s QR code pays money to them!'
        }
      },
      {
        id: 'opt_2',
        text: {
          hi: 'हाँ, शायद यह पैसे प्राप्त करने का विशेष QR कोड हो।',
          mr: 'होय, कदाचित हा पैसे मिळवण्याचा खास QR कोड असेल.',
          en: 'Yes, maybe it is a special QR code to receive money.'
        },
        isCorrect: false,
        feedback: {
          hi: '❌ खतरा! ऐसा कोई QR कोड नहीं होता जिससे स्कैन करने पर पैसे मिलें। यह ठगी की सबसे आम चाल है।',
          mr: '❌ धोका! असा कोणताही QR कोड नसतो जो स्कॅन केल्यावर पैसे मिळतात. ही फसवणुकीची सामान्य युक्ती आहे.',
          en: '❌ Beware! There is no QR code in UPI that deposits money when scanned. It will debit your bank!'
        }
      }
    ],
    goldenLesson: {
      hi: '💡 याद रखें: "पैसे लेने के लिए अपना QR दिखाएं, किसी का QR स्कैन न करें!"',
      mr: '💡 लक्षात ठेवा: "पैसे घेण्यासाठी आपला QR दाखवा, कोणाचाही QR स्कॅन करू नका!"',
      en: '💡 Rule: "To receive money, show your own QR. Never scan someone else’s QR!"'
    }
  },

  {
    id: 'scam_screen_share_app',
    title: {
      hi: '4. फ़र्ज़ी कस्टमर केयर और स्क्रीन शेयर ऐप फ्रॉड',
      mr: '4. बनावट कस्टमर केअर आणि स्क्रीन शेअर ॲप फसवणूक',
      en: '4. Fake Customer Care & AnyDesk Screen Share Trap'
    },
    dangerLevel: {
      hi: 'अत्यंत गंभीर (Critical)',
      mr: 'अतिशय गंभीर (Critical)',
      en: 'Critical'
    },
    situation: {
      hi: 'एक कॉल आता है: "हम बैंक/PhonePe कस्टमर केयर से बोल रहे हैं। आपका अटका हुआ ₹400 वापस करने के लिए प्ले स्टोर से AnyDesk / RustDesk / TeamViewer ऐप डाउनलोड कीजिए।"',
      mr: 'एक फोन येतो: "आम्ही बँक/PhonePe कस्टमर केअरमधून बोलत आहोत. तुमचे अडकलेले ₹400 परत करण्यासाठी AnyDesk ॲप डाऊनलोड करा."',
      en: 'A caller claims: "We are from Bank/PhonePe support. To release your stuck ₹400, download AnyDesk or TeamViewer app from Play Store."'
    },
    question: {
      hi: 'क्या किसी के कहने पर स्क्रीन शेयरिंग ऐप डाउनलोड करना चाहिए?',
      mr: 'कोणाच्या सांगण्यावरून स्क्रीन शेअरिंग ॲप डाऊनलोड करावे का?',
      en: 'Should you ever install screen sharing apps on a caller’s instruction?'
    },
    options: [
      {
        id: 'opt_1',
        text: {
          hi: 'कभी नहीं! ये ऐप आपके फोन की स्क्रीन देखकर OTP और पासवर्ड चुरा लेते हैं।',
          mr: 'कधीही नाही! हे ॲप्स फोनची स्क्रीन पाहून OTP आणि पासवर्ड चोरतात.',
          en: 'Never! These apps allow fraudsters to view your screen, OTPs, and passwords.'
        },
        isCorrect: true,
        feedback: {
          hi: '🎉 बिल्कुल सही! कोई भी असली बैंक या कंपनी कभी AnyDesk या QuickSupport ऐप डाउनलोड करने को नहीं कहती। तुरंत फोन काट दें।',
          mr: '🎉 अगदी बरोबर! कोणतीही खरी बँक किंवा कंपनी AnyDesk डाऊनलोड करायला सांगत नाही. लगेच फोन कट करा.',
          en: '🎉 Spot on! Real banks and payment companies NEVER instruct you to install screen sharing tools. Hang up immediately!'
        }
      },
      {
        id: 'opt_2',
        text: {
          hi: 'हाँ, अगर बैंक अधिकारी कह रहे हैं तो डाउनलोड कर लेना चाहिए।',
          mr: 'होय, जर बँक अधिकारी सांगत असतील तर डाऊनलोड केले पाहिजे.',
          en: 'Yes, if the bank officer says so, we should download it.'
        },
        isCorrect: false,
        feedback: {
          hi: '❌ बहुत खतरनाक! स्क्रीन शेयरिंग ऐप डाउनलोड करते ही ठग आपके फोन को अपने कब्जे में लेकर सारा बैंक बैलेंस उड़ा देते हैं।',
          mr: '❌ अतिशय धोकादायक! स्क्रीन शेअरिंग ॲप डाऊनलोड करताच भामटे तुमच्या फोनचे नियंत्रण घेऊन सर्व पैसे पळवून नेतात.',
          en: '❌ Extremely Dangerous! Screen-sharing allows hackers to remotely view your banking passwords and drain all funds.'
        }
      }
    ],
    goldenLesson: {
      hi: '💡 याद रखें: "अनजान कॉल पर कभी कोई ऐप डाउनलोड न करें और कभी OTP न बताएं!"',
      mr: '💡 लक्षात ठेवा: "अनोळखी कॉलरच्या सांगण्यावरून कोणतेही ॲप डाऊनलोड करू नका आणि OTP सांगू नका!"',
      en: '💡 Rule: "Never install unknown apps or share OTPs over phone calls!"'
    }
  },

  {
    id: 'scam_fake_sms',
    title: {
      hi: '5. फ़र्ज़ी SMS पहचानना',
      mr: '5. बनावट SMS ओळखणे',
      en: '5. Identifying Fake Bank SMS'
    },
    dangerLevel: {
      hi: 'मध्यम (Medium)',
      mr: 'मध्यम (Medium)',
      en: 'Medium'
    },
    situation: {
      hi: 'सवारी उतरते ही आपके फोन पर साधारण 10-अंकों वाले मोबाइल नंबर (+91 99887 76655) से मैसेज आता है: "A/c Credited with Rs 150.00 by UPI".',
      mr: 'प्रवासी उतरताच तुमच्या फोनवर साध्या 10-अंकी मोबाइल नंबरवरून (+91 99887 76655) मेसेज येतो: "A/c Credited with Rs 150.00 by UPI".',
      en: 'The passenger steps out and you get an SMS from a standard 10-digit mobile number (+91 99887 76655) saying "A/c Credited with Rs 150.00 by UPI".'
    },
    question: {
      hi: 'क्या यह असली बैंक का SMS है?',
      mr: 'हा खऱ्या बँकेचा SMS आहे का?',
      en: 'Is this a genuine bank SMS?'
    },
    options: [
      {
        id: 'opt_1',
        text: {
          hi: 'नहीं! असली बैंक का SMS हमेशा बैंक कोड (जैसे VM-SBINB, AD-HDFCBK) से आता है, 10-अंकों के नंबर से नहीं।',
          mr: 'नाही! खऱ्या बँकेचा SMS नेहमी बँक कोडने (उदा: VM-SBINB, AD-HDFCBK) येतो, 10-अंकी नंबरवरून नाही.',
          en: 'No! Real bank SMS always comes from recognized sender codes like VM-SBINB, AD-HDFCBK, never from personal mobile numbers.'
        },
        isCorrect: true,
        feedback: {
          hi: '🎉 शाबाश! आपने बहुत गहरी समझ दिखाई। कई ठग खुद अपने दूसरे फोन से फर्जी SMS टाइप करके भेज देते हैं। हमेशा सेंडर का नाम देखें।',
          mr: '🎉 अभिनंदन! अनेक भामटे स्वतःच्या दुसऱ्या फोनवरून बनावट SMS पाठवतात. नेहमी प्रेषकाचे नाव तपासा.',
          en: '🎉 Spot on! Scammers often type and send fake SMS from their second phone. Always check the official sender header ID!'
        }
      },
      {
        id: 'opt_2',
        text: {
          hi: 'हाँ, मैसेज में "Credited" लिखा है इसलिए पैसा आ गया होगा।',
          mr: 'होय, मेसेजमध्ये "Credited" लिहिले आहे म्हणून पैसे आले असतील.',
          en: 'Yes, it says "Credited" so money must be there.'
        },
        isCorrect: false,
        feedback: {
          hi: '❌ गलती हो गई! कोई भी साधारण व्यक्ति आपको ऐसा मैसेज भेज सकता है। केवल आधिकारिक बैंक हेडर और ऐप हिस्ट्री पर भरोसा करें।',
          mr: '❌ चूक झाली! कोणीही सामान्य व्यक्ती तुम्हाला असा मेसेज पाठवू शकते. फक्त अधिकृत बँक आणि ॲपवर विश्वास ठेवा.',
          en: '❌ Incorrect! Anyone can write and send a fake text message. Only verify with your official bank sender and app transaction history.'
        }
      }
    ],
    goldenLesson: {
      hi: '💡 याद रखें: "10-अंकों के नंबर से आया क्रेडिट SMS हमेशा फ़र्ज़ी होता है!"',
      mr: '💡 लक्षात ठेवा: "10-अंकी नंबरवरून आलेला क्रेडिट SMS नेहमी बनावट असतो!"',
      en: '💡 Rule: "Credit SMS arriving from personal 10-digit phone numbers is fake!"'
    }
  }
];
