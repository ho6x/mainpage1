import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

export const PropertyOwnerDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('properties');

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">لوحة تحكم مالك العقار</h1>
          
          {/* شريط التنقل */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('properties')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'properties'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              عقاراتي
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'requests'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              طلبات الحجز
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'maintenance'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              طلبات الصيانة
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-4 py-2 -mb-px ${
                activeTab === 'reports'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600'
              }`}
            >
              التقارير
            </button>
          </div>

          {/* محتوى التبويب */}
          <div className="mt-6">
            {activeTab === 'properties' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">عقاراتي</h2>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
                    إضافة عقار جديد
                  </button>
                </div>
                
                {/* قائمة العقارات */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* بطاقة عقار */}
                  <div className="border rounded-lg p-4">
                    <img src="/placeholder.jpg" alt="عقار" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="font-semibold mb-2">شقة في مسقط</h3>
                    <p className="text-gray-600 mb-2">3 غرف | 2 حمام | 150م²</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-semibold">500 ر.ع/شهرياً</span>
                      <button className="text-primary hover:text-primary-dark">تعديل</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'requests' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">طلبات الحجز</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          رقم الطلب
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          العقار
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          المستأجر
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          التاريخ
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الحالة
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الإجراءات
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">#12345</td>
                        <td className="px-6 py-4 whitespace-nowrap">شقة في مسقط</td>
                        <td className="px-6 py-4 whitespace-nowrap">أحمد محمد</td>
                        <td className="px-6 py-4 whitespace-nowrap">2025/02/19</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            قيد المراجعة
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-primary hover:text-primary-dark ml-2">قبول</button>
                          <button className="text-red-600 hover:text-red-800">رفض</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'maintenance' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">طلبات الصيانة</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">مشكلة في التكييف</h3>
                        <p className="text-gray-600 mt-1">شقة في مسقط - الوحدة رقم 123</p>
                        <p className="text-sm text-gray-500 mt-1">تم الإبلاغ: 2025/02/18</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        عاجل
                      </span>
                    </div>
                    <p className="mt-2 text-gray-700">التكييف لا يعمل بشكل صحيح ودرجة الحرارة مرتفعة</p>
                    <div className="mt-4 flex justify-end space-x-2">
                      <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
                        طلب صيانة
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">التقارير</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">إجمالي الإيرادات</h3>
                    <p className="text-3xl font-bold text-primary">1,500 ر.ع</p>
                    <p className="text-sm text-gray-500 mt-1">هذا الشهر</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">معدل الإشغال</h3>
                    <p className="text-3xl font-bold text-primary">85%</p>
                    <p className="text-sm text-gray-500 mt-1">جميع العقارات</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-2">طلبات الصيانة</h3>
                    <p className="text-3xl font-bold text-primary">3</p>
                    <p className="text-sm text-gray-500 mt-1">قيد المعالجة</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
