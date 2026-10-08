import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  initialDriverProfile, 
  initialContacts, 
  initialBankAccounts, 
  initialTransactions, 
  initialSmsList 
} from './data/fictionalData';
import { speechService } from './services/speechService';

import { PhoneFrame } from './components/PhoneFrame';
import { Header } from './components/Header';
import { GuidedOverlay } from './components/GuidedOverlay';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { LessonsScreen } from './components/LessonsScreen';
import { ChatbotAssistant } from './components/ChatbotAssistant';
import { TransactionHistoryScreen } from './components/TransactionHistoryScreen';
import { ScamAwarenessScreen } from './components/ScamAwarenessScreen';

import { SendMoneyModal } from './components/SendMoneyModal';
import { ReceiveQRModal } from './components/ReceiveQRModal';
import { CheckBalanceModal } from './components/CheckBalanceModal';
import { FakeScreenshotModal } from './components/FakeScreenshotModal';
import { ConnectedPhoneModal } from './components/ConnectedPhoneModal';

export function App() {
  // App-wide state
  const [lang, setLang] = useState('hi'); // 'hi' | 'mr' | 'en'
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'lessons' | 'chat' | 'history' | 'safety'
  const [isWideMode, setIsWideMode] = useState(false);

  // Data states
  const [driverProfile] = useState(initialDriverProfile);
  const [contacts] = useState(initialContacts);
  const [bankAccounts, setBankAccounts] = useState(initialBankAccounts);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [smsList, setSmsList] = useState(initialSmsList);

  // Modal states
  const [isSendOpen, setIsSendOpen] = useState(false);
  const [isQROpen, setIsQROpen] = useState(false);
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);
  const [isFakeTestOpen, setIsFakeTestOpen] = useState(false);
  const [isSMSOpen, setIsSMSOpen] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState(null);

  // Guided Lesson state
  const [activeLesson, setActiveLesson] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);

  // Start a guided lesson
  const handleStartLesson = (lesson) => {
    setActiveLesson(lesson);
    setStepIndex(0);

    // Contextual setup based on lesson
    setActiveTab('home');

    // Close any open modals
    setIsSendOpen(false);
    setIsQROpen(false);
    setIsBalanceOpen(false);
    setIsFakeTestOpen(false);
    setIsSMSOpen(false);
    setSelectedTxn(null);
  };

  const handleNextStep = () => {
    if (activeLesson && stepIndex < activeLesson.steps.length - 1) {
      setStepIndex(prev => prev + 1);
    } else {
      handleExitLesson();
    }
  };

  const handlePrevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(prev => prev - 1);
    }
  };

  const handleExitLesson = () => {
    setActiveLesson(null);
    setStepIndex(0);
    speechService.stop();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 }
      });
    } catch (_e) {
      // ignore
    }
  };

  // Synchronize guided actions
  const handleGuidedAction = (actionType) => {
    if (!activeLesson) return;

    const currentStep = activeLesson.steps[stepIndex];
    if (currentStep && currentStep.expectedAction === actionType) {
      setTimeout(() => {
        handleNextStep();
      }, 500);
    }
  };

  // When user clicks bottom nav tab
  const handleTabClickAction = (tabKey) => {
    if (activeLesson) {
      const currentStep = activeLesson.steps[stepIndex];
      if (tabKey === 'history' && currentStep?.expectedAction === 'CLICK_HISTORY') {
        setTimeout(() => handleNextStep(), 300);
      }
    }
  };

  // When a payment is successfully sent (Debit)
  const handlePaymentSent = (newTxn) => {
    setTransactions(prev => [newTxn, ...prev]);

    // Update bank balance
    setBankAccounts(prev => prev.map(bank => {
      if (bank.id === 'b1') {
        return { ...bank, balance: Math.max(0, bank.balance - newTxn.amount) };
      }
      return bank;
    }));

    // Generate simulated SMS
    const newSms = {
      id: `sms_${Date.now()}`,
      sender: 'VM-SBINB',
      time: { hi: 'अभी-अभी', mr: 'आत्ताच', en: 'Just now' },
      message: `Dear SBI User, A/c *4821 Debited by Rs ${newTxn.amount}.00 on 08-Oct-26 by ${newTxn.utr}. Available Bal: Rs ${(bankAccounts[0].balance - newTxn.amount).toLocaleString('en-IN')}. -SBI`,
      isGenuine: true
    };
    setSmsList(prev => [newSms, ...prev]);
  };

  // When a payment is simulated received (Credit)
  const handlePaymentReceived = (newTxn) => {
    setTransactions(prev => [newTxn, ...prev]);

    // Update bank balance
    setBankAccounts(prev => prev.map(bank => {
      if (bank.id === 'b1') {
        return { ...bank, balance: bank.balance + newTxn.amount };
      }
      return bank;
    }));

    // Generate simulated SMS
    const newSms = {
      id: `sms_${Date.now()}`,
      sender: 'VM-SBINB',
      time: { hi: 'अभी-अभी', mr: 'आत्ताच', en: 'Just now' },
      message: `Dear SBI User, A/c *4821 Credited by Rs ${newTxn.amount}.00 on 08-Oct-26 by ${newTxn.utr}. Available Bal: Rs ${(bankAccounts[0].balance + newTxn.amount).toLocaleString('en-IN')}. -SBI`,
      isGenuine: true
    };
    setSmsList(prev => [newSms, ...prev]);
  };

  return (
    <PhoneFrame 
      lang={lang} 
      setLang={setLang}
      isWideMode={isWideMode}
      setIsWideMode={setIsWideMode}
    >
      {/* Top Header */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        profile={driverProfile}
        unreadCount={smsList.length}
        onOpenQR={() => {
          setIsQROpen(true);
          handleGuidedAction('OPEN_QR_MODAL');
        }}
        onOpenSMS={() => setIsSMSOpen(true)}
        onOpenChat={() => setActiveTab('chat')}
      />

      {/* Interactive Step-by-Step Guidance Banner */}
      {activeLesson && (
        <GuidedOverlay 
          lesson={activeLesson}
          stepIndex={stepIndex}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          onExitLesson={handleExitLesson}
          lang={lang}
        />
      )}

      {/* Main Tab Screen Content */}
      <main style={{ flex: 1, minHeight: '600px' }}>
        {activeTab === 'home' && (
          <HomeScreen 
            lang={lang}
            onOpenSend={() => {
              setIsSendOpen(true);
              handleGuidedAction('OPEN_SEND_MODAL');
            }}
            onOpenQR={() => {
              setIsQROpen(true);
              handleGuidedAction('OPEN_QR_MODAL');
            }}
            onOpenBalance={() => {
              setIsBalanceOpen(true);
              handleGuidedAction('OPEN_BALANCE_MODAL');
            }}
            onOpenFakeTest={() => setIsFakeTestOpen(true)}
            onOpenSMS={() => setIsSMSOpen(true)}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'lessons' && (
          <LessonsScreen 
            lang={lang} 
            onStartLesson={handleStartLesson} 
          />
        )}

        {activeTab === 'chat' && (
          <ChatbotAssistant 
            lang={lang} 
            onStartLesson={handleStartLesson} 
          />
        )}

        {activeTab === 'history' && (
          <TransactionHistoryScreen 
            transactions={transactions}
            selectedTxn={selectedTxn}
            setSelectedTxn={setSelectedTxn}
            lang={lang}
            onGuidedAction={handleGuidedAction}
          />
        )}

        {activeTab === 'safety' && (
          <ScamAwarenessScreen 
            lang={lang} 
          />
        )}
      </main>

      {/* Bottom PhonePe Navigation Bar */}
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
        onTabClickAction={handleTabClickAction}
      />

      {/* Modals & Dialogs */}
      <SendMoneyModal 
        isOpen={isSendOpen}
        onClose={() => setIsSendOpen(false)}
        contacts={contacts}
        onPaymentSuccess={handlePaymentSent}
        lang={lang}
        onGuidedAction={handleGuidedAction}
      />

      <ReceiveQRModal 
        isOpen={isQROpen}
        onClose={() => setIsQROpen(false)}
        profile={driverProfile}
        onSimulateReceive={handlePaymentReceived}
        lang={lang}
        onGuidedAction={handleGuidedAction}
      />

      <CheckBalanceModal 
        isOpen={isBalanceOpen}
        onClose={() => setIsBalanceOpen(false)}
        bankAccounts={bankAccounts}
        lang={lang}
        onGuidedAction={handleGuidedAction}
      />

      <FakeScreenshotModal 
        isOpen={isFakeTestOpen}
        onClose={() => setIsFakeTestOpen(false)}
        lang={lang}
      />

      <ConnectedPhoneModal 
        isOpen={isSMSOpen}
        onClose={() => setIsSMSOpen(false)}
        smsList={smsList}
        lang={lang}
      />
    </PhoneFrame>
  );
}

export default App;
