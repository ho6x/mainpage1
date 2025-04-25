import { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

export const ServiceProviderDashboard = () => {
  const { } = useAuth();
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">لوحة تحكم مقدم الخدمة</h1>
          
          {/* شريط التنقل */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'orders'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              طلبات الخدمة
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'schedule'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              جدول المواعيد
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'services'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              خدماتي
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              التقييمات
            </button>
            <button
              onClick={() => setActiveTab('earnings')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'earnings'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              الأرباح
            </button>
          </div>

          {/* محتوى التبويب */}
          <div className="mt-6">
            {activeTab === 'orders' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">طلبات الخدمة</h2>
                  <div className="flex gap-2">
                    <select className="border border-gray-300 rounded-lg px-3 py-2">
                      <option value="all">جميع الطلبات</option>
                      <option value="pending">قيد الانتظار</option>
                      <option value="in-progress">قيد التنفيذ</option>
                      <option value="completed">مكتملة</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* بطاقة طلب خدمة */}
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          قيد الانتظار
                        </span>
                        <h3 className="font-semibold mt-2">صيانة تكييف</h3>
                        <p className="text-gray-600 mt-1">شقة في مسقط - الوحدة رقم 123</p>
                        <p className="text-sm text-gray-500 mt-1">تاريخ الطلب: 2025/02/19</p>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-primary">50 ر.ع</p>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-700">التكييف لا يعمل بشكل صحيح ودرجة الحرارة مرتفعة</p>
                    <div className="mt-4 flex justify-end space-x-2">
                      <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
                        قبول الطلب
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50">
                        رفض
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">جدول المواعيد</h2>
                <div className="grid grid-cols-7 gap-4">
                  {/* أيام الأسبوع */}
                  {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((day) => (
                    <div key={day} className="text-center font-semibold">
                      {day}
                    </div>
                  ))}
                  
                  {/* خلايا التقويم */}
                  {Array.from({ length: 35 }).map((_, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-2 min-h-[100px] hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="text-right text-sm text-gray-500">{index + 1}</div>
                      {/* مثال على موعد */}
                      {index === 15 && (
                        <div className="mt-1 p-1 bg-primary/10 rounded text-xs">
                          صيانة تكييف - 10:00
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">خدماتي</h2>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
                    إضافة خدمة جديدة
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* بطاقة خدمة */}
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">صيانة تكييف</h3>
                        <p className="text-gray-600 mt-1">صيانة وإصلاح جميع أنواع المكيفات</p>
                      </div>
                      <span className="text-primary font-semibold">50 ر.ع</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500">متوسط التقييم: ⭐️ 4.8</span>
                      <button className="text-primary hover:text-primary-dark">تعديل</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">التقييمات</h2>
                <div className="space-y-4">
                  {/* بطاقة تقييم */}
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <span className="text-yellow-400">⭐️⭐️⭐️⭐️⭐️</span>
                          <span className="mr-2 text-gray-600">5.0</span>
                        </div>
                        <p className="mt-2">خدمة ممتازة وسريعة. أنصح بالتعامل معه.</p>
                        <p className="text-sm text-gray-500 mt-1">أحمد - صيانة تكييف</p>
                      </div>
                      <span className="text-sm text-gray-500">2025/02/15</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">إجمالي الأرباح</h3>
                    <p className="text-3xl font-bold text-primary">1,250 ر.ع</p>
                    <p className="text-sm text-gray-500 mt-1">هذا الشهر</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">الطلبات المكتملة</h3>
                    <p className="text-3xl font-bold text-primary">25</p>
                    <p className="text-sm text-gray-500 mt-1">هذا الشهر</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">متوسط التقييم</h3>
                    <p className="text-3xl font-bold text-primary">4.8</p>
                    <p className="text-sm text-gray-500 mt-1">من 5.0</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">سجل المدفوعات</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          رقم العملية
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الخدمة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          المبلغ
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          التاريخ
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الحالة
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">#123456</td>
                        <td className="px-6 py-4 whitespace-nowrap">صيانة تكييف</td>
                        <td className="px-6 py-4 whitespace-nowrap">50 ر.ع</td>
                        <td className="px-6 py-4 whitespace-nowrap">2025/02/19</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            تم التحويل
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
