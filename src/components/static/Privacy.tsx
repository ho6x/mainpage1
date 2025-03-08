import React from 'react';

export const Privacy = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* مقدمة */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">سياسة الخصوصية</h1>
          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/5 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">1. مقدمة</h2>
              <p className="text-gray-600">
                نحن في كنف نولي أهمية قصوى لخصوصية مستخدمينا. توضح هذه السياسة كيف نجمع البيانات الشخصية، 
                وكيفية استخدامها، وحمايتها عند استخدامك لمنصتنا.
              </p>
            </div>

            {/* البيانات التي نجمعها */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">2. البيانات التي نجمعها 📌</h2>
              <p className="text-gray-600 mb-4">عند استخدامك لخدماتنا، قد نقوم بجمع المعلومات التالية:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>معلومات الحساب:</strong> مثل الاسم، البريد الإلكتروني، ورقم الهاتف.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>بيانات العقارات:</strong> التي يقوم الملاك بإضافتها، مثل الصور والوصف.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>معلومات الموقع:</strong> عند استخدام البحث الجغرافي على الخريطة.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>بيانات الدفع:</strong> عند إجراء المدفوعات عبر المنصة.</span>
                </li>
              </ul>
            </div>

            {/* كيفية استخدام البيانات */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">3. كيفية استخدام البيانات 📍</h2>
              <p className="text-gray-600 mb-4">نستخدم المعلومات التي نجمعها من أجل:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  تحسين تجربة المستخدم وتقديم خدمات مخصصة.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  تسهيل عمليات البحث والحجز.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  إرسال إشعارات وتنبيهات حول العقارات والخدمات.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  تحسين الأمان ومنع الاحتيال.
                </li>
              </ul>
            </div>

            {/* مشاركة البيانات */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">4. مشاركة البيانات مع أطراف ثالثة 🔐</h2>
              <p className="text-gray-600 mb-4">نحن لا نبيع بياناتك الشخصية لأي جهة، ولكن قد نشاركها مع:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  مزودي خدمات الدفع لتنفيذ المعاملات المالية.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  شركات الصيانة والخدمات عند طلبك لهذه الخدمات.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  الجهات القانونية إذا طُلب منا ذلك بموجب القوانين المعمول بها.
                </li>
              </ul>
            </div>

            {/* الأمان وحماية البيانات */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">5. الأمان وحماية البيانات 🔒</h2>
              <p className="text-gray-600 mb-4">نستخدم تقنيات متقدمة لحماية بياناتك، مثل:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  التشفير لحماية معلومات الدفع.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  المصادقة الثنائية (2FA) للحسابات.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  بروتوكولات أمان لحماية الخوادم وقواعد البيانات.
                </li>
              </ul>
            </div>

            {/* حقوق المستخدم */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">6. حقوق المستخدم ✅</h2>
              <p className="text-gray-600 mb-4">لديك الحق في:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  طلب الاطلاع على بياناتك المخزنة.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  طلب تعديل أو حذف بياناتك.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  إلغاء الاشتراك في الإشعارات أو التسويق.
                </li>
              </ul>
            </div>

            <div className="text-center text-gray-600">
              <p>📧 للاستفسارات حول الخصوصية، يمكنك التواصل معنا عبر البريد الإلكتروني:</p>
              <a href="mailto:privacy@kanf.com" className="text-primary hover:underline">privacy@kanf.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
