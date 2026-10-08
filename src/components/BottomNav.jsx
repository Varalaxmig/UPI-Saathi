import React from 'react';
import { 
  Home, 
  BookOpen, 
  MessageSquareText, 
  History, 
  ShieldAlert 
} from 'lucide-react';
import { translations } from '../data/translations';

export function BottomNav({ activeTab, setActiveTab, lang, onTabClickAction }) {
  const t = translations[lang] || translations.hi;

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    if (onTabClickAction) {
      onTabClickAction(tabKey);
    }
  };

  return (
    <nav className="phonepepe-bottom-nav phonepe-bottom-nav">
      {/* 1. Home */}
      <button 
        id="nav-home-btn"
        className={`nav-tab-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => handleTabClick('home')}
      >
        <div className="nav-icon-wrapper">
          <Home size={20} />
        </div>
        <span>{t.navHome}</span>
      </button>

      {/* 2. Learn / Guided Lessons */}
      <button 
        id="nav-lessons-btn"
        className={`nav-tab-item ${activeTab === 'lessons' ? 'active' : ''}`}
        onClick={() => handleTabClick('lessons')}
      >
        <div className="nav-icon-wrapper">
          <BookOpen size={20} />
        </div>
        <span>{t.navLessons}</span>
      </button>

      {/* 3. Saathi Chatbot */}
      <button 
        id="nav-chat-btn"
        className={`nav-tab-item ${activeTab === 'chat' ? 'active' : ''}`}
        onClick={() => handleTabClick('chat')}
      >
        <div className="nav-icon-wrapper">
          <MessageSquareText size={20} />
        </div>
        <span>{t.navChatbot}</span>
        <span className="nav-alert-dot"></span>
      </button>

      {/* 4. Transaction History */}
      <button 
        id="nav-history-btn"
        className={`nav-tab-item ${activeTab === 'history' ? 'active' : ''}`}
        onClick={() => handleTabClick('history')}
      >
        <div className="nav-icon-wrapper">
          <History size={20} />
        </div>
        <span>{t.navHistory}</span>
      </button>

      {/* 5. Stay Safe / Fraud Awareness */}
      <button 
        id="nav-safety-btn"
        className={`nav-tab-item ${activeTab === 'safety' ? 'active' : ''}`}
        onClick={() => handleTabClick('safety')}
      >
        <div className="nav-icon-wrapper">
          <ShieldAlert size={20} />
        </div>
        <span>{t.navSafety}</span>
      </button>
    </nav>
  );
}
