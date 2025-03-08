import { useAuth } from './AuthContext';

interface AuthPromptProps {
  message?: string;
}

export const AuthPrompt = ({ message }: AuthPromptProps) => {
  const { setShowAuthPrompt } = useAuth();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          سجل دخولك للوصول إلى المزيد من المميزات
        </h3>
        
        <p className="text-gray-600 mb-6">
          {message || 'قم بإنشاء حساب أو تسجيل الدخول للاستفادة من جميع مميزات كنف:'}
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-center text-gray-700">
            <span className="ml-2 text-primary">✓</span>
            حفظ العقارات المفضلة ومتابعتها
          </li>
          <li className="flex items-center text-gray-700">
            <span className="ml-2 text-primary">✓</span>
            تلقي إشعارات العقارات الجديدة حسب تفضيلاتك
          </li>
          <li className="flex items-center text-gray-700">
            <span className="ml-2 text-primary">✓</span>
            إدارة طلبات الحجز والمعاينة بسهولة
          </li>
          <li className="flex items-center text-gray-700">
            <span className="ml-2 text-primary">✓</span>
            التواصل المباشر مع الملاك والوسطاء
          </li>
        </ul>

        <div className="flex flex-col space-y-3">
          <button
            onClick={() => setShowAuthPrompt(true)}
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-200"
          >
            تسجيل الدخول
          </button>
          <button
            onClick={() => setShowAuthPrompt(true)}
            className="w-full border border-primary text-primary py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition duration-200"
          >
            إنشاء حساب جديد
          </button>
          <button
            onClick={() => setShowAuthPrompt(false)}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            ربما لاحقاً
          </button>
        </div>
      </div>
    </div>
  );
};
