import { useState } from 'react';
import { UserType } from '../../types/user';

interface RegisterFormProps {
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export const RegisterForm = ({ onSubmit, isLoading }: RegisterFormProps) => {
  const [userType, setUserType] = useState<UserType | ''>('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    serviceTypes: [] as string[],
    customService: '',
    additionalSkills: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, userType });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">إنشاء حساب جديد</h2>

      {/* نوع المستخدم */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          نوع المستخدم *
        </label>
        <select
          name="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value as UserType)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          required
        >
          <option value="">اختر نوع المستخدم</option>
          <option value={UserType.PROPERTY_OWNER}>مالك عقار</option>
          <option value={UserType.PROPERTY_SEEKER}>باحث عن سكن</option>
          <option value={UserType.SERVICE_PROVIDER}>مقدم خدمة</option>
        </select>
      </div>

      {/* البيانات الأساسية */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          الاسم الكامل *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          البريد الإلكتروني *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          رقم الهاتف *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      {/* حقول خاصة بمقدمي الخدمات */}
      {userType === UserType.SERVICE_PROVIDER && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نوع الخدمة *
            </label>
            <select
              name="serviceType"
              value={formData.serviceTypes[0] || ''}
              onChange={(e) => {
                const value = e.target.value;
                setFormData(prev => ({ 
                  ...prev, 
                  serviceTypes: [value],
                  customService: value === 'other' ? prev.customService : ''
                }));
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              required
            >
              <option value="">اختر نوع الخدمة</option>
              <option value="maintenance">صيانة عامة</option>
              <option value="cleaning">تنظيف</option>
              <option value="security">أمن وحراسة</option>
              <option value="decoration">تصميم وديكور</option>
              <option value="photography">تصوير عقاري</option>
              <option value="other">خدمة أخرى</option>
            </select>
          </div>

          {formData.serviceTypes[0] === 'other' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                وصف الخدمة *
              </label>
              <textarea
                name="customService"
                value={formData.customService || ''}
                onChange={handleChange}
                placeholder="اكتب وصفاً مختصراً للخدمة التي تقدمها..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-24"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              مهارات وخبرات إضافية
            </label>
            <textarea
              name="additionalSkills"
              value={formData.additionalSkills || ''}
              onChange={handleChange}
              placeholder="اذكر مهاراتك وخبراتك في مجال عملك..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-24"
            />
          </div>
        </>
      )}

      {/* حقول كلمة المرور */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          كلمة المرور *
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          required
          minLength={8}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          تأكيد كلمة المرور *
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200 disabled:bg-gray-400"
      >
        {isLoading ? 'جاري التسجيل...' : 'إنشاء حساب'}
      </button>
    </form>
  );
};
