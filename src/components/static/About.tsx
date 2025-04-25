export const About = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* مقدمة عن المنصة */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">من نحن؟</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            مرحبًا بك في كنف، المنصة العقارية الذكية التي تجمع بين الباحثين عن سكن وملاك العقارات في بيئة رقمية متكاملة. 
            نحن نؤمن بأن البحث عن سكن مناسب يجب أن يكون سهلاً وسريعًا، ولهذا قمنا بتطوير منصة توفر تجربة سلسة، آمنة، 
            وشاملة لإدارة العقارات وحجزها بسهولة.
          </p>
        </div>

        {/* مهمتنا */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">مهمتنا</h2>
          <div className="bg-primary/5 rounded-2xl p-8">
            <p className="text-lg text-gray-600 mb-6">في كنف، نهدف إلى:</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                تسهيل عملية البحث عن العقارات عبر أدوات بحث متقدمة.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                تمكين ملاك العقارات من إدارة ممتلكاتهم بسهولة.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                توفير خدمات متكاملة مثل الصيانة، التأمين، والتنظيف لجعل تجربة السكن أكثر راحة.
              </li>
            </ul>
          </div>
        </div>

        {/* قيمنا */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">قيمنا</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-2xl mb-4">✅</div>
              <h3 className="font-bold text-xl mb-2">الشفافية</h3>
              <p className="text-gray-600">نوفر معلومات دقيقة وموثوقة لكل العقارات المدرجة.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-2xl mb-4">✅</div>
              <h3 className="font-bold text-xl mb-2">الأمان</h3>
              <p className="text-gray-600">نضمن حماية بيانات المستخدمين عبر أنظمة تشفير متقدمة.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-2xl mb-4">✅</div>
              <h3 className="font-bold text-xl mb-2">التطوير المستمر</h3>
              <p className="text-gray-600">نعمل باستمرار على تحسين خدماتنا لتلبية احتياجات المستخدمين.</p>
            </div>
          </div>
        </div>

        {/* كيف نعمل */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">كيف نعمل؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl text-primary mb-4">1️⃣</div>
              <p className="text-gray-600">قم بالبحث عن العقارات بسهولة عبر الفلاتر الذكية.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-primary mb-4">2️⃣</div>
              <p className="text-gray-600">استعرض التفاصيل، شاهد الصور، وقم بحجز العقار الذي يناسبك.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-primary mb-4">3️⃣</div>
              <p className="text-gray-600">تواصل مع المالك مباشرة أو استخدم خدماتنا الإضافية لدعم تجربتك.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl font-medium text-primary">
              📍 كنف – حيث يجد السكن طريقه إليك بسهولة!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
