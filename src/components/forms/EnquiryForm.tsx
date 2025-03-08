import { useState } from 'react';

interface EnquiryFormProps {
  propertyId: string;
  onSubmit: (data: any) => void;
  onClose: () => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ propertyId, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email',
    preferredTime: 'morning',
    visitRequired: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, propertyId });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">استفسار عن العقار</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            الاسم
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            رقم الهاتف
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="preferredContact" className="block text-gray-700 mb-2">
            طريقة التواصل المفضلة
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="email">البريد الإلكتروني</option>
            <option value="phone">الهاتف</option>
            <option value="whatsapp">واتساب</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-gray-700 mb-2">
            الوقت المفضل للتواصل
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="morning">صباحاً (9 - 12)</option>
            <option value="afternoon">ظهراً (12 - 4)</option>
            <option value="evening">مساءً (4 - 8)</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            الرسالة
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="visitRequired"
            name="visitRequired"
            checked={formData.visitRequired}
            onChange={handleChange}
            className="ml-2"
          />
          <label htmlFor="visitRequired" className="text-gray-700">
            أرغب في زيارة العقار
          </label>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border rounded-lg hover:bg-gray-50"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
          >
            إرسال
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
