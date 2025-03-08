import { Message } from '../components/chat/types';
import { predefinedResponses } from '../data/chatResponses';

const API_KEY = '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';
const API_URL = 'https://api.openai.com/v1/chat/completions';

const systemPrompt = `أنت مساعد عقاري ذكي يعمل في منصة كنف العقارية. مهمتك هي:
1. مساعدة العملاء في البحث عن العقارات المناسبة
2. الإجابة عن الأسئلة المتعلقة بالخدمات والمنصة
3. تقديم نصائح عقارية مفيدة
4. شرح عملية الحجز والدفع
5. التعامل مع الاستفسارات بلغة مهنية وودية

يجب أن تكون إجاباتك:
- مختصرة ومفيدة
- باللغة العربية الفصحى السهلة
- دقيقة ومهنية
- تركز على خدمة العميل

إذا لم تكن متأكداً من إجابة، اطلب من المستخدم التواصل مع خدمة العملاء.`;

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

    return bestResponse.response;
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
