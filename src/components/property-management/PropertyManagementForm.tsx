import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

interface FormData {
  // معلومات المالك
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  idNumber: string;
  idCard: File | null;
  
  // معلومات العقار
  propertyTitle: string;
  propertyType: string;
  propertyAddress: string;
  propertySize: string;
  propertyAge: string;
  ownershipDocument: File | null;
  
  // معلومات إضافية
  rentalHistory: string;
  maintenanceHistory: string;
  additionalDetails: string;
  propertyPhotos: File[];
  
  // تفضيلات الإدارة
  managementType: string;
  expectedRent: string;
  preferredContractDuration: string;
}

export const PropertyManagementForm = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    ownerName: user?.name || '',
    ownerPhone: '',
    ownerEmail: user?.email || '',
    idNumber: '',
    idCard: null,
    propertyTitle: '',
    propertyType: 'apartment',
    propertyAddress: '',
    propertySize: '',
    propertyAge: '',
    ownershipDocument: null,
    rentalHistory: '',
    maintenanceHistory: '',
    additionalDetails: '',
    propertyPhotos: [],
    managementType: 'full',
    expectedRent: '',
    preferredContractDuration: '12',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      if (name === 'propertyPhotos') {
        setFormData(prev => ({ ...prev, [name]: Array.from(files) }));
      } else {
        setFormData(prev => ({ ...prev, [name]: files[0] }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', message: '' });

    try {
      // هنا سيتم إرسال البيانات إلى الخادم
      await new Promise(resolve => setTimeout(resolve, 2000)); // محاكاة الإرسال
      setSubmitMessage({
        type: 'success',
        message: 'تم إرسال طلبك بنجاح! سنقوم بمراجعته والرد عليك في أقرب وقت.'
      });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        message: 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">طلب إدارة عقار</h1>
          
          {submitMessage.message && (
            <div className={`mb-8 p-4 rounded-lg ${
              submitMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}>
              {submitMessage.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* معلومات المالك */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات المالك</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">الاسم الكامل *</label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">رقم الهاتف *</label>
                  <input
                    type="tel"
                    name="ownerPhone"
                    value={formData.ownerPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    name="ownerEmail"
                    value={formData.ownerEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">رقم البطاقة الشخصية *</label>
                  <input
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">صورة البطاقة الشخصية *</label>
                  <input
                    type="file"
                    name="idCard"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">يرجى إرفاق صورة واضحة من الجهتين</p>
                </div>
              </div>
            </div>

            {/* معلومات العقار */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات العقار</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">عنوان العقار *</label>
                  <input
                    type="text"
                    name="propertyTitle"
                    value={formData.propertyTitle}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">نوع العقار *</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="apartment">شقة</option>
                    <option value="villa">فيلا</option>
                    <option value="building">مبنى</option>
                    <option value="land">أرض</option>
                    <option value="office">مكتب</option>
                    <option value="shop">محل تجاري</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">العنوان التفصيلي *</label>
                  <input
                    type="text"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">المساحة (متر مربع) *</label>
                  <input
                    type="number"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">عمر العقار (سنوات) *</label>
                  <input
                    type="number"
                    name="propertyAge"
                    value={formData.propertyAge}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">مستند الملكية *</label>
                  <input
                    type="file"
                    name="ownershipDocument"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* معلومات إضافية */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات إضافية</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">تاريخ التأجير السابق</label>
                  <textarea
                    name="rentalHistory"
                    value={formData.rentalHistory}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="اذكر تفاصيل عن تاريخ تأجير العقار السابق إن وجد"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">تاريخ الصيانة</label>
                  <textarea
                    name="maintenanceHistory"
                    value={formData.maintenanceHistory}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="اذكر تفاصيل عن أعمال الصيانة السابقة"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">تفاصيل إضافية</label>
                  <textarea
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="أي معلومات إضافية ترغب في إخبارنا بها"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">صور العقار *</label>
                  <input
                    type="file"
                    name="propertyPhotos"
                    onChange={handleFileChange}
                    accept="image/*"
                    multiple
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">يمكنك اختيار عدة صور (الحد الأقصى 10 صور)</p>
                </div>
              </div>
            </div>

            {/* تفضيلات الإدارة */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">تفضيلات الإدارة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">نوع الإدارة المطلوبة *</label>
                  <select
                    name="managementType"
                    value={formData.managementType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="full">إدارة كاملة</option>
                    <option value="partial">إدارة جزئية</option>
                    <option value="listing">عرض فقط</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">القيمة الإيجارية المتوقعة *</label>
                  <input
                    type="number"
                    name="expectedRent"
                    value={formData.expectedRent}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">مدة العقد المفضلة (بالأشهر) *</label>
                  <select
                    name="preferredContractDuration"
                    value={formData.preferredContractDuration}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="6">6 أشهر</option>
                    <option value="12">سنة</option>
                    <option value="24">سنتين</option>
                    <option value="36">3 سنوات</option>
                  </select>
                </div>
              </div>
            </div>

            {/* زر الإرسال */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-primary text-white rounded-lg font-medium text-lg
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'}
                  transition-colors duration-200`}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
