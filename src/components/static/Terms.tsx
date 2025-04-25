export const Terms = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* مقدمة */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">شروط الاستخدام</h1>
          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/5 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">1. المقدمة</h2>
              <p className="text-gray-600">
                مرحبًا بك في كنف! قبل استخدام منصتنا، يُرجى قراءة هذه الشروط بعناية. 
                باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط.
              </p>
            </div>

            {/* شروط التسجيل والاستخدام */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">2. شروط التسجيل والاستخدام 📌</h2>
              
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">التسجيل:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    يجب أن يكون عمر المستخدم 18 عامًا أو أكثر.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    يلتزم المستخدم بتقديم معلومات صحيحة ودقيقة عند التسجيل.
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold mb-4">استخدام المنصة:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    لا يجوز استخدام المنصة لأي أغراض غير قانونية أو غير أخلاقية.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    يُمنع نشر معلومات أو صور مضللة عن العقارات.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    لا يجوز استخدام المحتوى الموجود على المنصة دون إذن مسبق.
                  </li>
                </ul>
              </div>
            </div>

            {/* حقوق وواجبات المستخدمين */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">3. حقوق وواجبات المستخدمين 📍</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">للباحثين عن سكن:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      يمكن للمستخدم البحث عن العقارات، التواصل مع الملاك، وطلب الخدمات الإضافية.
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      يُمنع استخدام المنصة في عمليات احتيالية أو تقديم عروض وهمية.
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">للملاك:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      يجب أن تكون جميع العقارات المدرجة مملوكة قانونيًا أو موثوقة.
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      يتحمل المالك مسؤولية صحة البيانات والتحديث المستمر للعروض.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* سياسات الدفع والاسترداد */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">4. سياسات الدفع والاسترداد 💰</h2>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="text-gray-600 mb-4">عند إجراء دفعة عبر المنصة، فإنك توافق على الشروط التالية:</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    جميع المدفوعات تتم عبر مزودي خدمات الدفع المعتمدين لدينا.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    لا يحق للمستخدم استرداد أي مبالغ بعد تأكيد الحجز، إلا في حالات محددة وفق سياسة الإلغاء.
                  </li>
                </ul>
              </div>
            </div>

            {/* تعديل الشروط */}
            <div className="bg-primary/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">5. تعديل الشروط 📝</h2>
              <p className="text-gray-600">
                نحتفظ بحق تعديل هذه الشروط في أي وقت. سيتم إخطار المستخدمين بأي تغييرات قبل تنفيذها.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
