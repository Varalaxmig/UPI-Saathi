// Fictional data designed for Auto-Rickshaw Drivers and general users (Strictly Simulated)

export const initialDriverProfile = {
  name: "Raju Yadav",
  phone: "+91 98765 43210",
  upiId: "rajuauto@upisaathi",
  autoNumber: "MH 02 AB 1234",
  city: "Mumbai / Indore",
  avatar: "🚕",
  soundboxActive: true,
};

export const initialContacts = [
  { 
    id: 'c1', 
    name: 'Ramesh Auto Garage', 
    phone: '98221 00001', 
    upi: 'rameshgarage@oksbi', 
    role: { hi: 'रिपेयर / मैकेनिक', mr: 'दुरुस्ती / मेकॅनिक', en: 'Repair / Mechanic' }, 
    icon: '🔧' 
  },
  { 
    id: 'c2', 
    name: 'Sunita CNG Station', 
    phone: '98221 00002', 
    upi: 'sunitacng@paytm', 
    role: { hi: 'सीएनजी गैस', mr: 'सीएनजी गॅस', en: 'CNG Gas Station' }, 
    icon: '⛽' 
  },
  { 
    id: 'c3', 
    name: 'Chai Wale Chacha', 
    phone: '98221 00003', 
    upi: 'chailover@upi', 
    role: { hi: 'चाय व नाश्ता', mr: 'चहा व नाश्ता', en: 'Tea & Snacks' }, 
    icon: '☕' 
  },
  { 
    id: 'c4', 
    name: 'Suresh Bhai (Family)', 
    phone: '98221 00004', 
    upi: 'sureshbhai@ybl', 
    role: { hi: 'परिवार', mr: 'कुटुंब', en: 'Family' }, 
    icon: '👨‍👦' 
  },
  { 
    id: 'c5', 
    name: 'Priya Passenger', 
    phone: '98221 00005', 
    upi: 'priya123@axl', 
    role: { hi: 'सवारी (किराया)', mr: 'प्रवासी (भाडे)', en: 'Passenger (Fare)' }, 
    icon: '🎒' 
  },
];

export const initialBankAccounts = [
  {
    id: 'b1',
    bankName: 'State Bank of India',
    accountNumber: '•••• •••• 4821',
    type: { hi: 'बचत खाता (प्राथमिक)', mr: 'बचत खाते (प्राथमिक)', en: 'Savings Account (Primary)' },
    balance: 4850,
    logo: '🏦',
    color: '#005b9f'
  },
  {
    id: 'b2',
    bankName: 'Bank of Baroda',
    accountNumber: '•••• •••• 9032',
    type: { hi: 'बचत खाता', mr: 'बचत खाते', en: 'Savings Account' },
    balance: 1200,
    logo: '🏛️',
    color: '#f26522'
  }
];

export const initialTransactions = [
  {
    id: 'tx_01',
    title: { hi: 'राहुल शर्मा', mr: 'राहुल शर्मा', en: 'Rahul Sharma' },
    subtitle: { hi: 'ऑटो किराया (सवारी - बांद्रा स्टेशन)', mr: 'रिक्षा भाडे (प्रवासी - वांद्रे स्टेशन)', en: 'Auto Fare (Passenger - Bandra)' },
    amount: 500,
    type: 'credit', // credit = received
    status: 'successful',
    date: { hi: 'आज, 10:15 AM', mr: 'आज, 10:15 AM', en: 'Today, 10:15 AM' },
    timestamp: 'Today, 10:15 AM',
    utr: 'UPI/428910284918',
    bankName: 'State Bank of India',
    mode: { hi: 'QR कोड स्कैन', mr: 'QR कोड स्कॅन', en: 'QR Code Scan' },
    isRecent: true
  },
  {
    id: 'tx_02',
    title: { hi: 'अमित सीएनजी गैस स्टेशन', mr: 'अमित सीएनजी गॅस स्टेशन', en: 'Amit CNG Gas Station' },
    subtitle: { hi: 'सीएनजी गैस भरवाई', mr: 'सीएनजी गॅस भरला', en: 'CNG Fuel Refill' },
    amount: 300,
    type: 'debit', // debit = sent
    status: 'successful',
    date: { hi: 'आज, 08:30 AM', mr: 'आज, 08:30 AM', en: 'Today, 08:30 AM' },
    timestamp: 'Today, 08:30 AM',
    utr: 'UPI/428909871234',
    bankName: 'State Bank of India',
    mode: { hi: 'QR कोड भुगतान', mr: 'QR कोड पेमेंट', en: 'QR Code Pay' },
    isRecent: true
  },
  {
    id: 'tx_03',
    title: { hi: 'नेहा गुप्ता', mr: 'नेहा गुप्ता', en: 'Neha Gupta' },
    subtitle: { hi: 'सवारी (हवाई अड्डा ट्रिप)', mr: 'प्रवासी (विमानतळ ट्रिप)', en: 'Passenger (Airport Trip)' },
    amount: 200,
    type: 'credit',
    status: 'pending', // Pending lesson
    date: { hi: 'कल, 09:20 PM', mr: 'काल, 09:20 PM', en: 'Yesterday, 09:20 PM' },
    timestamp: 'Yesterday, 09:20 PM',
    utr: 'UPI/428800192837',
    bankName: 'State Bank of India',
    mode: { hi: 'मोबाइल नंबर ट्रांसफर', mr: 'मोबाइल नंबर ट्रान्सफर', en: 'To Mobile Number' },
    isRecent: false
  },
  {
    id: 'tx_04',
    title: { hi: 'रवि ऑटो स्पेयर पार्ट्स', mr: 'रवी ऑटो स्पेअर पार्ट्स', en: 'Ravi Auto Spare Parts' },
    subtitle: { hi: 'ऑटो क्लच वायर', mr: 'रिक्षा क्लच वायर', en: 'Auto Clutch Wire' },
    amount: 400,
    type: 'debit',
    status: 'failed', // Failed lesson
    date: { hi: 'कल, 05:40 PM', mr: 'काल, 05:40 PM', en: 'Yesterday, 05:40 PM' },
    timestamp: 'Yesterday, 05:40 PM',
    utr: 'UPI/428799981245',
    bankName: 'Bank of Baroda',
    mode: { hi: 'बैंक खाता ट्रांसफर', mr: 'बँक खाते ट्रान्सफर', en: 'To Bank Account' },
    isRecent: false
  },
  {
    id: 'tx_05',
    title: { hi: 'पूजा वर्मा', mr: 'पूजा वर्मा', en: 'Pooja Verma' },
    subtitle: { hi: 'सवारी किराया (मार्केट से घर)', mr: 'प्रवासी भाडे (मार्केट ते घर)', en: 'Passenger Fare (Market to Home)' },
    amount: 70,
    type: 'credit',
    status: 'successful',
    date: { hi: '06 अक्टूबर, 02:15 PM', mr: '06 ऑक्टोबर, 02:15 PM', en: '06 Oct, 02:15 PM' },
    timestamp: '06 Oct, 02:15 PM',
    utr: 'UPI/428511223344',
    bankName: 'State Bank of India',
    mode: { hi: 'QR कोड स्कैन', mr: 'QR कोड स्कॅन', en: 'QR Code Scan' },
    isRecent: false
  },
  {
    id: 'tx_06',
    title: { hi: 'मनोज बैटरी शॉप', mr: 'मनोज बॅटरी शॉप', en: 'Manoj Battery Shop' },
    subtitle: { hi: 'ऑटो बैटरी चार्जिंग', mr: 'रिक्षा बॅटरी चार्जिंग', en: 'Auto Battery Charging' },
    amount: 250,
    type: 'debit',
    status: 'successful',
    date: { hi: '05 अक्टूबर, 11:30 AM', mr: '05 ऑक्टोबर, 11:30 AM', en: '05 Oct, 11:30 AM' },
    timestamp: '05 Oct, 11:30 AM',
    utr: 'UPI/428477665511',
    bankName: 'State Bank of India',
    mode: { hi: 'UPI नंबर ट्रांसफर', mr: 'UPI नंबर ट्रान्सफर', en: 'UPI Number Pay' },
    isRecent: false
  }
];

export const initialSmsList = [
  {
    id: 'sms_01',
    sender: 'VM-SBINB',
    time: { hi: 'आज, 10:15 AM', mr: 'आज, 10:15 AM', en: 'Today, 10:15 AM' },
    message: 'Dear SBI User, A/c *4821 Credited by Rs 500.00 on 08-Oct-26 by UPI Ref 428910284918. Bal: Rs 4850.00. -SBI',
    isGenuine: true
  },
  {
    id: 'sms_02',
    sender: 'VM-SBINB',
    time: { hi: 'आज, 08:30 AM', mr: 'आज, 08:30 AM', en: 'Today, 08:30 AM' },
    message: 'Dear SBI User, A/c *4821 Debited by Rs 300.00 on 08-Oct-26 by UPI Ref 428909871234. Bal: Rs 4350.00. -SBI',
    isGenuine: true
  },
  {
    id: 'sms_03',
    sender: '+919988776655', // Fake scam SMS from random mobile number
    time: { hi: '04 अक्टूबर, 04:12 PM', mr: '04 ऑक्टोबर, 04:12 PM', en: '04 Oct, 04:12 PM' },
    message: 'CONGRATS! You won Rs 5000 cashback on Paytm. Click http://free-cashback-claim.xyz to enter UPI PIN and collect money.',
    isGenuine: false,
    warning: {
      hi: '⚠️ फ़र्ज़ी संदेश: बैंक कभी 10 अंकों के निजी मोबाइल नंबर से SMS नहीं भेजता और पैसे पाने के लिए कभी लिंक या पिन नहीं मांगता!',
      mr: '⚠️ बनावट मेसेज: बँक कधीही 10-अंकी वैयक्तिक नंबरवरून मेसेज पाठवत नाही आणि पैसे मिळवण्यासाठी लिंक किंवा पिन मागत नाही!',
      en: '⚠️ Fake SMS Alert: Real banks never send messages from 10-digit private mobile numbers, and never ask for PIN or links to receive funds!'
    }
  }
];
