import { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

export const PropertySeekerDashboard = () => {
  const { } = useAuth();
  const [activeTab, setActiveTab] = useState('favorites');

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">لوحة تحكم باحث السكن</h1>
          
          {/* شريط التنقل */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'favorites'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              المفضلة
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'requests'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              طلباتي
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'preferences'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              تفضيلاتي
            </button>
          </div>

          {/* محتوى التبويب */}
          <div className="mt-6">
            {activeTab === 'favorites' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* بطاقة عقار مفضل */}
                  <div className="border rounded-lg overflow-hidden">
                    <img
                      src="/placeholder-property.jpg"
                      alt="عقار"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">شقة فاخرة في مسقط</h3>
                      <p className="text-gray-600 mb-2">3 غرف | 2 حمام | 150م²</p>
                      <p className="text-primary font-semibold mb-4">450 ر.ع/شهرياً</p>
                      <div className="flex justify-between">
                        <button className="text-primary hover:text-primary-dark">
                          عرض التفاصيل
                        </button>
                        <button className="text-red-600 hover:text-red-700">
                          إزالة من المفضلة
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'requests' && (
              <div className="space-y-4">
                {/* بطاقة طلب */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        قيد المراجعة
                      </span>
                      <h3 className="font-semibold mt-2">طلب معاينة - شقة في مسقط</h3>
                      <p className="text-gray-600 mt-1">تاريخ الطلب: 2025/02/19</p>
                    </div>
                    <button className="text-red-600 hover:text-red-700">
                      إلغاء الطلب
                    </button>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700">موعد المعاينة المقترح: 2025/02/22 - 10:00 صباحاً</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* تفضيلات البحث */}
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-4">تفضيلات البحث</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">نوع العقار</label>
                        <select className="w-full border rounded-lg p-2">
                          <option value="">اختر نوع العقار</option>
                          <option value="apartment">شقة</option>
                          <option value="villa">فيلا</option>
                          <option value="office">مكتب</option>
                          <option value="shop">محل تجاري</option>
                          <option value="warehouse">مستودع</option>
                          <option value="land">أرض</option>
                          <option value="building">مبنى</option>
                          <option value="farm">مزرعة</option>
                          <option value="other">أخرى</option>
                        </select>
                        <input
                          type="text"
                          placeholder="في حال اختيار أخرى، يرجى التحديد"
                          className="w-full border rounded-lg p-2 mt-2"
                          style={{ display: 'none' }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">الميزانية الشهرية</label>
                        <div className="flex gap-4">
                          <input
                            type="number"
                            placeholder="الحد الأدنى"
                            className="w-1/2 border rounded-lg p-2"
                          />
                          <input
                            type="number"
                            placeholder="الحد الأقصى"
                            className="w-1/2 border rounded-lg p-2"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">المنطقة المفضلة</label>
                        <input
                          type="text"
                          placeholder="اكتب اسم المنطقة"
                          className="w-full border rounded-lg p-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* إعدادات الإشعارات */}
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-4">إعدادات الإشعارات</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">إشعارات العقارات الجديدة</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">إشعارات تغيير الأسعار</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">إشعارات حالة الطلبات</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200">
                    حفظ التفضيلات
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
