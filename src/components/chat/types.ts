export interface Message {
  id: string;
  content: string;
  type: 'user' | 'bot';
  timestamp: Date;
  feedback?: boolean;
}

export interface QuickQuestion {
  id: string;
  question: string;
  shortText: string;
  category: string;
}

export interface ChatConfig {
  apiKey: string;
  language: 'ar' | 'en';
  maxHistory: number;
}
