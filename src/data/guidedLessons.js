// Interactive step-by-step guided lessons with highlighted UI elements and spoken audio

export const guidedLessons = [
  {
    id: 'lesson_check_received',
    title: {
      hi: 'पैसे आए हैं या नहीं कैसे चेक करें?',
      mr: 'पैसे आले की नाही कसे तपासायचे?',
      en: 'How to Check if Payment is Received'
    },
    shortDesc: {
      hi: 'सवारी ने पेमेंट किया या नहीं, असली क्रेडिट कैसे पहचानें',
      mr: 'प्रवाशाने पेमेंट केले की नाही, खरे जमा कसे ओळखायचे',
      en: 'Learn how to confirm genuine payment credit'
    },
    badge: {
      hi: 'सबसे ज़रूरी सबक',
      mr: 'सर्वात महत्त्वाचा धडा',
      en: 'Essential Lesson'
    },
    category: 'verification',
    steps: [
      {
        stepNumber: 1,
        targetId: 'nav-history-btn',
        title: {
          hi: 'कदम 1: ट्रांजेक्शन हिस्ट्री खोलें',
          mr: 'पायरी 1: व्यवहार इतिहास उघडा',
          en: 'Step 1: Open Transaction History'
        },
        instruction: {
          hi: 'नीचे दिए गए "हिस्ट्री" (Transaction History) बटन पर क्लिक कीजिए।',
          mr: 'खाली दिलेल्या "इतिहास" (Transaction History) बटणावर क्लिक करा.',
          en: 'Click on the "History" button at the bottom navigation.'
        },
        voiceText: {
          hi: 'सबसे पहले नीचे दिए गए ट्रांजेक्शन हिस्ट्री बटन पर क्लिक कीजिए।',
          mr: 'सर्वात आधी खाली दिलेल्या ट्रान्झॅक्शन इतिहास बटणावर क्लिक करा.',
          en: 'First, tap on the Transaction History button at the bottom.'
        },
        expectedAction: 'CLICK_HISTORY'
      },
      {
        stepNumber: 2,
        targetId: 'first-transaction-card',
        title: {
          hi: 'कदम 2: सबसे ऊपर वाला हालिया लेन-देन देखें',
          mr: 'पायरी 2: सर्वात वरचा नवीन व्यवहार पहा',
          en: 'Step 2: Check the latest transaction'
        },
        instruction: {
          hi: 'अब सबसे ऊपर राहुल शर्मा (सवारी) का लेन-देन देखिए और उस पर क्लिक कीजिए।',
          mr: 'आता सर्वात वरचा राहुल शर्मा (प्रवासी) यांचा व्यवहार पहा आणि त्यावर क्लिक करा.',
          en: 'Now look at the top transaction of Rahul Sharma (Passenger) and tap it.'
        },
        voiceText: {
          hi: 'अब सबसे ऊपर वाला हालिया लेन-देन देखिए और उस पर क्लिक कीजिए।',
          mr: 'आता सर्वात वरचा व्यवहार पहा आणि त्यावर क्लिक करा.',
          en: 'Now observe the latest transaction at the top and tap on it.'
        },
        expectedAction: 'CLICK_TXN_DETAILS'
      },
      {
        stepNumber: 3,
        targetId: 'txn-amount-status-box',
        title: {
          hi: 'कदम 3: राशि और स्थिति देखें',
          mr: 'पायरी 3: रक्कम आणि स्थिती तपासा',
          en: 'Step 3: Verify Amount and Status'
        },
        instruction: {
          hi: 'यहाँ हरे रंग में "+ ₹500" और "Credit / Successful" दिख रहा है।',
          mr: 'येथे हिरव्या रंगात "+ ₹500" आणि "Credit / Successful" दिसत आहे.',
          en: 'Notice the green "+ ₹500" and "Credit / Successful" status badge.'
        },
        voiceText: {
          hi: 'यहाँ हरे रंग में ₹500 क्रेडिट और सफल दिख रहा है। इसका मतलब पैसा सच में आपके बैंक खाते में आ गया है!',
          mr: 'येथे हिरव्या रंगात ₹500 क्रेडिट आणि यशस्वी दिसत आहे. याचा अर्थ खरेच पैसे तुमच्या खात्यात आले आहेत!',
          en: 'Here ₹500 Credit and Successful is visible. This confirms the money has genuinely arrived in your bank account!'
        },
        expectedAction: 'ACKNOWLEDGE'
      },
      {
        stepNumber: 4,
        targetId: 'txn-utr-box',
        title: {
          hi: 'कदम 4: बैंक का UTR रेफरेंस नंबर समझें',
          mr: 'पायरी 4: बँकेचा UTR रेफरन्स क्रमांक समजून घ्या',
          en: 'Step 4: Understand the Bank UTR Reference'
        },
        instruction: {
          hi: 'हर असली ट्रांजेक्शन में 12-अंकों का UPI/UTR रेफरेंस नंबर होता है। यही असली सबूत होता है!',
          mr: 'प्रत्येक खऱ्या व्यवहारात 12-अंकी UPI/UTR रेफरन्स नंबर असतो. हाच खरा पुरावा असतो!',
          en: 'Every authentic transaction has a unique 12-digit UTR reference number. This is the proof.'
        },
        voiceText: {
          hi: 'अगर क्रेडिट और 12 अंकों का यूटीआर नंबर दिख रहा है, तभी पेमेंट पक्का मानिए। स्क्रीनशॉट पर कभी भरोसा मत कीजिए!',
          mr: 'जर क्रेडिट आणि 12 अंकी यूटीआर नंबर दिसत असेल, तरच पेमेंट आले असे माना. फक्त स्क्रीनशॉटवर विश्वास ठेवू नका!',
          en: 'If Credit and UTR number are present, only then confirm receipt. Never trust screenshots alone!'
        },
        expectedAction: 'COMPLETE'
      }
    ]
  },

  {
    id: 'lesson_send_money',
    title: {
      hi: 'पैसे कैसे भेजें?',
      mr: 'पैसे कसे पाठवायचे?',
      en: 'How to Send Money Safely'
    },
    shortDesc: {
      hi: 'दुकानदार या मैकेनिक को सुरक्षित रूप से पैसे भेजना सीखें',
      mr: 'दुकानदार किंवा मेकॅनिकला सुरक्षितपणे पैसे पाठवणे शिका',
      en: 'Learn how to pay a shopkeeper or mechanic safely'
    },
    badge: {
      hi: 'सुरक्षित भुगतान',
      mr: 'सुरक्षित पेमेंट',
      en: 'Safe Payment'
    },
    category: 'sending',
    steps: [
      {
        stepNumber: 1,
        targetId: 'action-to-mobile',
        title: {
          hi: 'कदम 1: मोबाइल नंबर / सेंड मनी पर क्लिक करें',
          mr: 'पायरी 1: मोबाइल नंबर / पैसे पाठवा वर क्लिक करा',
          en: 'Step 1: Tap To Mobile'
        },
        instruction: {
          hi: 'होम स्क्रीन पर "मोबाइल नंबर" बटन पर क्लिक कीजिए।',
          mr: 'होम स्क्रीनवर "मोबाइल नंबर" बटणावर क्लिक करा.',
          en: 'Tap on the "To Mobile" button on the Home screen.'
        },
        voiceText: {
          hi: 'सबसे पहले मोबाइल नंबर बटन पर क्लिक कीजिए।',
          mr: 'सर्वात आधी मोबाइल नंबर बटणावर क्लिक करा.',
          en: 'First, tap on the To Mobile button.'
        },
        expectedAction: 'OPEN_SEND_MODAL'
      },
      {
        stepNumber: 2,
        targetId: 'contact-item-c1',
        title: {
          hi: 'कदम 2: व्यक्ति या मैकेनिक चुनें',
          mr: 'पायरी 2: व्यक्ती किंवा मेकॅनिक निवडा',
          en: 'Step 2: Select Recipient'
        },
        instruction: {
          hi: '"रमेश ऑटो गैराज" (Ramesh Auto Garage) पर क्लिक कीजिए।',
          mr: '"रमेश ऑटो गॅरेज" (Ramesh Auto Garage) वर क्लिक करा.',
          en: 'Select "Ramesh Auto Garage" from the contacts list.'
        },
        voiceText: {
          hi: 'सूची में से रमेश ऑटो गैराज पर क्लिक कीजिए।',
          mr: 'यादीतून रमेश ऑटो गॅरेज वर क्लिक करा.',
          en: 'Choose Ramesh Auto Garage from the list.'
        },
        expectedAction: 'SELECT_CONTACT'
      },
      {
        stepNumber: 3,
        targetId: 'send-amount-input',
        title: {
          hi: 'कदम 3: राशि दर्ज करें',
          mr: 'पायरी 3: रक्कम टाका',
          en: 'Step 3: Enter Amount'
        },
        instruction: {
          hi: 'रकम बॉक्स में ₹150 दर्ज कीजिए और "डेमो भुगतान" पर क्लिक करें।',
          mr: 'रक्कम बॉक्समध्ये ₹150 टाका आणि "डेमो पेमेंट" वर क्लिक करा.',
          en: 'Enter ₹150 in the amount field and tap Send Demo Payment.'
        },
        voiceText: {
          hi: 'रुपये वाले डिब्बे में एक सौ पचास रुपये लिखिए और डेमो भुगतान बटन दबाइए।',
          mr: 'रक्कम बॉक्समध्ये दीडशे रुपये लिहा आणि डेमो पेमेंट बटण दाबा.',
          en: 'Enter 150 rupees and press the Send Demo Payment button.'
        },
        expectedAction: 'SUBMIT_AMOUNT'
      },
      {
        stepNumber: 4,
        targetId: 'pin-demo-keypad',
        title: {
          hi: 'कदम 4: यूपीआई पिन केवल पैसे भेजने के लिए',
          mr: 'पायरी 4: यूपीआय पिन फक्त पैसे पाठवतानाच',
          en: 'Step 4: UPI PIN Rule'
        },
        instruction: {
          hi: '⚠️ याद रखें: यूपीआई पिन केवल पैसे भेजने के समय डाला जाता है। पैसे प्राप्त करते समय कभी पिन नहीं डालना होता!',
          mr: '⚠️ लक्षात ठेवा: यूपीआय पिन फक्त पैसे पाठवताना टाकला जातो. पैसे घेताना कधीही पिन टाकायचा नसतो!',
          en: '⚠️ Crucial Rule: Enter UPI PIN ONLY when sending money, NEVER when receiving money!'
        },
        voiceText: {
          hi: 'ध्यान रखें, यूपीआई पिन केवल पैसे भेजने के समय डाला जाता है। पैसे मंगाने के लिए कभी भी पिन नहीं डाला जाता। अब कन्फर्म दबाइए।',
          mr: 'लक्षात ठेवा, यूपीआय पिन फक्त पैसे पाठवताना टाकला जातो. पैसे घेण्यासाठी कधीही पिन लागत नाही. आता कन्फर्म दाबा.',
          en: 'Remember, UPI PIN is only entered to send money. Never enter PIN to receive money. Now press confirm.'
        },
        expectedAction: 'CONFIRM_PAYMENT'
      }
    ]
  },

  {
    id: 'lesson_receive_qr',
    title: {
      hi: 'QR कोड कैसे इस्तेमाल करें और पैसे पाएं?',
      mr: 'QR कोड कसा वापरावा आणि पैसे मिळवावे?',
      en: 'How to Receive Money using QR Code'
    },
    shortDesc: {
      hi: 'सवारी को अपना QR कोड दिखाना और साउंडबॉक्स की आवाज़ सुनना',
      mr: 'प्रवाशाला आपला QR कोड दाखवणे आणि साउंडबॉक्सचा आवाज ऐकणे',
      en: 'Show passenger your QR code and listen to the Soundbox confirmation'
    },
    badge: {
      hi: 'ऑटो चालक स्पेशल',
      mr: 'रिक्षा चालक विशेष',
      en: 'Driver Special'
    },
    category: 'receiving',
    steps: [
      {
        stepNumber: 1,
        targetId: 'action-my-qr',
        title: {
          hi: 'कदम 1: अपना QR कोड खोलें',
          mr: 'पायरी 1: आपला QR कोड उघडा',
          en: 'Step 1: Open My QR Code'
        },
        instruction: {
          hi: 'होम स्क्रीन पर "मेरा QR कोड" कार्ड पर क्लिक कीजिए।',
          mr: 'होम स्क्रीनवर "माझा QR कोड" कार्डवर क्लिक करा.',
          en: 'Tap on the "My QR Code" card on the Home screen.'
        },
        voiceText: {
          hi: 'सबसे पहले होम स्क्रीन पर मेरा क्यूआर कोड कार्ड पर क्लिक कीजिए।',
          mr: 'सर्वात आधी होम स्क्रीनवर माझा क्यूआर कोड कार्डवर क्लिक करा.',
          en: 'First, tap on My QR Code card on the Home screen.'
        },
        expectedAction: 'OPEN_QR_MODAL'
      },
      {
        stepNumber: 2,
        targetId: 'simulate-customer-pay-btn',
        title: {
          hi: 'कदम 2: सवारी द्वारा पेमेंट का अनुकरण करें',
          mr: 'पायरी 2: प्रवाशाकडून पेमेंटचा सराव करा',
          en: 'Step 2: Simulate Passenger Payment'
        },
        instruction: {
          hi: 'सवारी आपके रिक्शा पर लगा QR स्कैन करती है। अब "सवारी से ₹150 भुगतान करवाएं" बटन दबाएं।',
          mr: 'प्रवासी तुमच्या रिक्षावरील QR स्कॅन करतो. आता "प्रवाशाकडून ₹150 पेमेंट करा" बटण दाबा.',
          en: 'Customer scans your QR. Click "Simulate Passenger Paying ₹150" button.'
        },
        voiceText: {
          hi: 'सवारी से भुगतान करवाएं बटन दबाइए और साउंडबॉक्स की आवाज़ ध्यान से सुनिए।',
          mr: 'प्रवाशाकडून पेमेंट करा बटण दाबा आणि साउंडबॉक्सचा आवाज लक्षपूर्वक ऐका.',
          en: 'Press simulate passenger payment and listen carefully to the Soundbox voice.'
        },
        expectedAction: 'TRIGGER_SOUNDBOX'
      },
      {
        stepNumber: 3,
        targetId: 'soundbox-alert-banner',
        title: {
          hi: 'कदम 3: साउंडबॉक्स की आवाज़ और SMS की पुष्टि',
          mr: 'पायरी 3: साउंडबॉक्सचा आवाज आणि SMS खात्री',
          en: 'Step 3: Soundbox & Notification Confirmation'
        },
        instruction: {
          hi: 'सुना आपने? साउंडबॉक्स तुरंत बोला: "UPI Saathi पर 150 रुपये प्राप्त हुए!" अब आप निश्चिंत होकर सवारी को जाने दे सकते हैं।',
          mr: 'ऐकले का? साउंडबॉक्स लगेच बोलला: "UPI Saathi वर 150 रुपये प्राप्त झाले!" आता तुम्ही खात्रीने प्रवाशाला जाऊ देऊ शकता.',
          en: 'Did you hear that? The Soundbox instantly announced the payment! Now you can safely let the passenger depart.'
        },
        voiceText: {
          hi: 'साउंडबॉक्स ने बोलकर बता दिया कि डेढ़ सौ रुपये आ गए हैं। जब तक आवाज़ या मैसेज न आए, सवारी को कभी न जाने दें।',
          mr: 'साउंडबॉक्सने बोलून सांगितले की दीडशे रुपये आले आहेत. जोपर्यंत आवाज किंवा मेसेज येत नाही, तोपर्यंत प्रवाशाला जाऊ देऊ नका.',
          en: 'The Soundbox clearly announced the money has arrived. Never let a passenger leave without voice or bank confirmation.'
        },
        expectedAction: 'COMPLETE'
      }
    ]
  },

  {
    id: 'lesson_check_balance',
    title: {
      hi: 'बैंक बैलेंस कैसे चेक करें?',
      mr: 'बँक शिल्लक कशी तपासायची?',
      en: 'How to Check Bank Balance'
    },
    shortDesc: {
      hi: 'अपने खाते में कितने पैसे हैं, सुरक्षित रूप से देखना',
      mr: 'आपल्या खात्यात किती पैसे आहेत ते सुरक्षितपणे पाहणे',
      en: 'Check your available account balance safely'
    },
    badge: {
      hi: 'दैनिक जरूरत',
      mr: 'दैनंदिन गरज',
      en: 'Daily Essential'
    },
    category: 'balance',
    steps: [
      {
        stepNumber: 1,
        targetId: 'action-check-balance',
        title: {
          hi: 'कदम 1: बैलेंस चेक बटन पर क्लिक करें',
          mr: 'पायरी 1: शिल्लक तपासा बटणावर क्लिक करा',
          en: 'Step 1: Tap Check Balance'
        },
        instruction: {
          hi: 'होम स्क्रीन के गोल बटनों में से "बैलेंस चेक" बटन पर क्लिक कीजिए।',
          mr: 'होम स्क्रीनच्या बटणांपैकी "शिल्लक तपासा" बटणावर क्लिक करा.',
          en: 'Tap on the "Check Balance" button on the Home screen.'
        },
        voiceText: {
          hi: 'होम स्क्रीन पर दिए गए बैलेंस चेक बटन पर क्लिक कीजिए।',
          mr: 'होम स्क्रीनवरील शिल्लक तपासा बटणावर क्लिक करा.',
          en: 'Click on the Check Balance button on the home screen.'
        },
        expectedAction: 'OPEN_BALANCE_MODAL'
      },
      {
        stepNumber: 2,
        targetId: 'bank-acc-b1',
        title: {
          hi: 'कदम 2: अपना बैंक खाता चुनें',
          mr: 'पायरी 2: तुमचे बँक खाते निवडा',
          en: 'Step 2: Select Bank Account'
        },
        instruction: {
          hi: '"State Bank of India (SBI)" खाते पर क्लिक करें।',
          mr: '"State Bank of India (SBI)" खात्यावर क्लिक करा.',
          en: 'Click on the State Bank of India account.'
        },
        voiceText: {
          hi: 'स्टेट बैंक ऑफ इंडिया खाते पर क्लिक कीजिए।',
          mr: 'स्टेट बँक ऑफ इंडिया खात्यावर क्लिक करा.',
          en: 'Select the State Bank of India account.'
        },
        expectedAction: 'SELECT_BANK_ACCOUNT'
      },
      {
        stepNumber: 3,
        targetId: 'balance-display-box',
        title: {
          hi: 'कदम 3: बैलेंस देखें',
          mr: 'पायरी 3: शिल्लक पहा',
          en: 'Step 3: View Balance'
        },
        instruction: {
          hi: 'यहाँ आपका सुरक्षित डेमो बैलेंस ₹4,850 दिख रहा है। बैलेंस चेक करने से कोई पैसा नहीं कटता!',
          mr: 'येथे तुमची सुरक्षित डेमो शिल्लक ₹4,850 दिसत आहे. शिल्लक तपासल्याने कोणतेही पैसे कट होत नाहीत!',
          en: 'Here your demo balance ₹4,850 is displayed. Checking balance never deducts any fee!'
        },
        voiceText: {
          hi: 'यहाँ आपका उपलब्ध बैलेंस दिख रहा है। बैलेंस चेक करने के कोई पैसे नहीं कटते हैं।',
          mr: 'येथे तुमची उपलब्ध शिल्लक दिसत आहे. शिल्लक तपासण्याचे कोणतेही पैसे कापले जात नाहीत.',
          en: 'Here is your available balance. Checking balance is always free.'
        },
        expectedAction: 'COMPLETE'
      }
    ]
  },

  {
    id: 'lesson_pending_failed',
    title: {
      hi: 'पेंडिंग या फेल हो तो क्या करें?',
      mr: 'पेंडिंग किंवा फेल झाल्यास काय करावे?',
      en: 'What to Do if Payment is Pending or Failed'
    },
    shortDesc: {
      hi: 'बैंक सर्वर धीमा हो या पैसा अटक जाए तो घबराएं नहीं',
      mr: 'बँक सर्व्हर धीमा असल्यास किंवा पैसे अडकल्यास घाबरू नका',
      en: 'Handle payment delays or failures without panic'
    },
    badge: {
      hi: 'महत्वपूर्ण समझ',
      mr: 'महत्त्वाची समज',
      en: 'Key Guidance'
    },
    category: 'troubleshoot',
    steps: [
      {
        stepNumber: 1,
        targetId: 'nav-history-btn',
        title: {
          hi: 'कदम 1: हिस्ट्री खोलें',
          mr: 'पायरी 1: इतिहास उघडा',
          en: 'Step 1: Open History'
        },
        instruction: {
          hi: 'नीचे दिए गए "हिस्ट्री" बटन पर क्लिक कीजिए।',
          mr: 'खालील "इतिहास" बटणावर क्लिक करा.',
          en: 'Click on the History button.'
        },
        voiceText: {
          hi: 'नीचे दिए गए हिस्ट्री बटन पर क्लिक कीजिए।',
          mr: 'खाली दिलेल्या इतिहास बटणावर क्लिक करा.',
          en: 'Tap on the History button below.'
        },
        expectedAction: 'CLICK_HISTORY'
      },
      {
        stepNumber: 2,
        targetId: 'filter-pending-btn',
        title: {
          hi: 'कदम 2: पेंडिंग लेन-देन चुनें',
          mr: 'पायरी 2: पेंडिंग व्यवहार निवडा',
          en: 'Step 2: Filter Pending Transactions'
        },
        instruction: {
          hi: 'ऊपर फ़िल्टर में "पेंडिंग" बटन पर क्लिक करें और नेहा गुप्ता का लेन-देन देखें।',
          mr: 'वरच्या फिल्टरमध्ये "पेंडिंग" बटणावर क्लिक करा आणि नेहा गुप्ता यांचा व्यवहार पहा.',
          en: 'Tap on the "Pending" filter tab to view the pending transaction.'
        },
        voiceText: {
          hi: 'फ़िल्टर में पेंडिंग पर क्लिक कीजिए और नेहा गुप्ता का लेन-देन देखिए।',
          mr: 'फिल्टरमध्ये पेंडिंगवर क्लिक करा आणि नेहा गुप्ता यांचा व्यवहार पहा.',
          en: 'Tap the Pending filter and observe the transaction.'
        },
        expectedAction: 'FILTER_PENDING'
      },
      {
        stepNumber: 3,
        targetId: 'pending-explanation-card',
        title: {
          hi: 'कदम 3: नियम समझें - पेंडिंग का मतलब पैसा नहीं आया',
          mr: 'पायरी 3: नियम समजून घ्या - पेंडिंग म्हणजे पैसे जमा झाले नाहीत',
          en: 'Step 3: Golden Rule for Pending'
        },
        instruction: {
          hi: '⚠️ ज़रूरी बात: जब तक स्थिति "Successful" न हो, तब तक पैसा आपके बैंक में नहीं पहुंचा होता। सवारी से दूसरा भुगतान या कैश लेने को कहें। अगर उनके पैसे कटे हैं, तो बैंक 24 घंटे में उन्हें वापस कर देता है।',
          mr: '⚠️ महत्त्वाची गोष्ट: जोपर्यंत स्थिती "Successful" होत नाही, तोपर्यंत पैसे जमा झालेले नसतात. प्रवाशाला दुसरा पर्याय किंवा रोख रक्कम देण्यास सांगा.',
          en: '⚠️ Golden Rule: Unless status turns "Successful", funds are not in your account. The passenger can pay via cash; if deducted from their account, their bank refunds it within 24-48 hours.'
        },
        voiceText: {
          hi: 'पेंडिंग का मतलब है कि पैसा अभी बैंक के बीच में अटका है। इसे पेमेंट मिला हुआ न मानें। सवारी से कैश मांगें या दूसरा तरीका अपनाएं।',
          mr: 'पेंडिंग म्हणजे पैसे अजून बँकेत अडकलेले आहेत. जोपर्यंत यशस्वी होत नाही तोपर्यंत पैसे आले असे समजू नका.',
          en: 'Pending means funds are stuck in bank clearance. Do not treat it as received. Ask passenger for alternate payment.'
        },
        expectedAction: 'COMPLETE'
      }
    ]
  }
];
