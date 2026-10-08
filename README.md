# 🚖 UPI Saathi (यूपीआई साथी)

> **Empowering Auto-Rickshaw Drivers and Citizens with Safe, Guided Digital Payment Learning**

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF.svg)](https://vitejs.dev/)
[![Multilingual](https://img.shields.io/badge/Languages-Hindi%20%7C%20Marathi%20%7C%20English-green.svg)](#multilingual-support)
[![Simulation](https://img.shields.io/badge/Strictly-Educational%20Simulation-purple.svg)](#educational-disclaimer)

---

## ⚠️ Important Educational Disclaimer

**UPI Saathi is STRICTLY an educational simulation and practice platform.**
- **NO real money**, bank accounts, UPI IDs, OTPs, or UPI PINs are ever collected, processed, or transferred.
- All numbers, accounts, contacts, and payment confirmations are 100% simulated mock data created specifically to build confidence and digital literacy.

---

## 🌟 Key Features

### 1. 📱 Familiar, Accessible Interface
- Designed inspired by widely-used digital payment apps (clean PhonePe-style purple theme).
- Dual view support: **Smartphone View** and **Full Desktop Screen Mode**.
- Large legible text, high-contrast buttons, and intuitive iconography.

### 2. 🔊 Smart Soundbox Audio Simulation
- Authentic **Web Audio API double chime** alert.
- Real-time voice announcements in Hindi, Marathi, and English upon receiving payments (e.g. *"UPI Saathi पर 150 रुपये प्राप्त हुए!"*).
- Teaches drivers to rely on soundbox announcements rather than customer phone screens.

### 3. 🌐 100% Multilingual Support
- **हिन्दी (Hindi)**, **मराठी (Marathi)**, and **English**.
- **1-Tap Dynamic Language Switching** from in-app header dropdown or top control bar.
- 100% of screen labels, buttons, transaction histories, simulated SMS, and voice prompts dynamically update to the selected language.

### 4. 🧭 Step-by-Step Guided Mode with Beacon Highlights
- Interactive walkthroughs with animated glowing beacons (`.guided-highlight`) and voice narration.
- Covers essential driver workflows:
  - *How to Check if Payment is Received*
  - *How to Send Money Safely*
  - *How to Receive Money using QR Code*
  - *How to Check Bank Balance*
  - *What to Do if Payment is Pending or Failed*

### 5. 🛡️ Stay Safe & Scam Awareness Lab
- Real-world interactive fraud scenarios:
  1. **Passenger Fake Screenshot Scam**
  2. **"Enter UPI PIN to Receive Money" Fraud**
  3. **WhatsApp "Scan to Receive" Trap**
  4. **Fake Customer Care & AnyDesk Screen Share Trap**
  5. **Identifying Fake 10-Digit Mobile Bank SMS**
- Instant decision feedback with safety rules and the **National Cyber Helpline 1930** info.

### 6. 🤖 Interactive Saathi Chatbot
- Voice-enabled AI assistant with **Web Speech API** Speech-to-Text (STT) and Text-to-Speech (TTS).
- Quick suggestion chips for common driver questions.
- Direct live practice launcher from chatbot answers.

---

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Bundler & Dev Server**: Vite
- **Icons**: Lucide React
- **Voice / Audio**: Web Speech API (`SpeechSynthesis`, `SpeechRecognition`) + Web Audio API (`AudioContext`)
- **Visuals**: Canvas Confetti

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Varalaxmig/UPI-Saathi.git

# Navigate into project directory
cd UPI-Saathi

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser at `http://localhost:5173/` to run the application.

### Building for Production
```bash
npm run build
```

---

## 📜 License
This project is open-source and intended for educational and social empowerment purposes.
