import { Message } from '../components/chat/types';
import { predefinedResponses } from '../data/chatResponses';

export class ChatService {
  private static instance: ChatService;
  private messageHistory: Message[] = [];

  private constructor() {}

  public static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }
    return ChatService.instance;
  }

  private findBestResponse(message: string): string {
    // Convert message to lowercase for better matching
    const userMessage = message.toLowerCase();
    
    // Find the response with the most keyword matches
    let bestResponse = null;
    let maxMatches = 0;

    for (const response of predefinedResponses) {
      const matches = response.keywords.filter(keyword => 
        userMessage.includes(keyword.toLowerCase())
      ).length;

      if (matches > maxMatches) {
        maxMatches = matches;
        bestResponse = response;
      }
    }

    // If no good match found, return default response
    if (maxMatches === 0) {
      return `عذراً، لم أفهم سؤالك بشكل واضح. هل يمكنك:
1. إعادة صياغة السؤال
2. اختيار من الأسئلة الشائعة
3. التواصل مع خدمة العملاء على الرقم: 800-KANF`;
    }

    return bestResponse ? bestResponse.response : '';
  }

  public async sendMessage(message: string): Promise<string> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const reply = this.findBestResponse(message);

      // Update message history
      this.messageHistory.push(
        { id: Date.now().toString(), content: message, type: 'user', timestamp: new Date() },
        { id: (Date.now() + 1).toString(), content: reply, type: 'bot', timestamp: new Date() }
      );

      // Keep only last 10 messages
      if (this.messageHistory.length > 10) {
        this.messageHistory = this.messageHistory.slice(-10);
      }

      return reply;
    } catch (error) {
      console.error('Error in chat service:', error);
      throw new Error('عذراً، حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل مع خدمة العملاء.');
    }
  }

  public clearHistory(): void {
    this.messageHistory = [];
  }

  public addFeedback(messageId: string, isPositive: boolean): void {
    // Store feedback for future improvements
    console.log('Feedback received:', { messageId, isPositive });
  }
}
