import { useState } from 'react';

interface ServiceProvider {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'cleaning' | 'moving' | 'insurance' | 'maintenance';
  providers: ServiceProvider[];
}

interface ServiceBookingModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceBookingModal: React.FC<ServiceBookingModalProps> = ({ service, onClose }) => {
  const [selectedProvider, setSelectedProvider] = useState<string>(service.providers[0].id);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    notes: '',
    propertyAddress: '',
    contactNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', {
      serviceId: service.id,
      providerId: selectedProvider,
      ...formData
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              حجز {service.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">اختر مزود الخدمة</label>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {service.providers.map((provider) => (
                  <option key={provider.id} value={provider.id}>
                    {provider.name} - {provider.priceRange}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">التاريخ</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">الوقت</label>
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">عنوان العقار</label>
              <input
                type="text"
                name="propertyAddress"
                required
                value={formData.propertyAddress}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="أدخل العنوان التفصيلي"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">رقم التواصل</label>
              <input
                type="tel"
                name="contactNumber"
                required
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="أدخل رقم الهاتف"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">ملاحظات إضافية</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="أي تفاصيل إضافية تود إضافتها"
              />
            </div>

            <div className="flex justify-end space-x-4">
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
                تأكيد الحجز
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingModal;
