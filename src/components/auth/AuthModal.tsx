import { useState } from 'react';
import { useAuth } from './AuthContext';
import { RegisterForm } from './RegisterForm';

interface AuthModalProps {
  onClose: () => void;
}

export const AuthModal = ({ onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login, register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(loginData.email, loginData.password);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ ما');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (data: any) => {
    setError('');
    setIsLoading(true);

    try {
      await register(data);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ ما');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">إغلاق</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 disabled:bg-gray-400"
            >
              {isLoading ? 'جاري التسجيل...' : 'تسجيل الدخول'}
            </button>
          </form>
        ) : (
          <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary hover:text-primary-dark"
          >
            {isLogin ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
          </button>
        </div>
      </div>
    </div>
  );
};
