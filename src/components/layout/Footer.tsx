import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* عن كنف */}
          <div>
            <h3 className="text-lg font-bold mb-4">عن كنف</h3>
            <p className="text-gray-400 mb-6 text-sm">
              نحن نقدم حلولاً متكاملة لإدارة العقارات، ونساعد الملاك في تحقيق أقصى استفادة من عقاراتهم من خلال خدمات إدارية احترافية.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  عن كنف
                </Link>
              </li>
              <li>
                <Link to="/manage-property" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  طلب إدارة عقار
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  تصفح العقارات
                </Link>
              </li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">البريد الإلكتروني: info@kanf.sa</p>
              <p className="text-gray-400 text-sm">هاتف: 920000000</p>
              <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* حقوق النشر والروابط القانونية */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {new Date().getFullYear()} كنف. جميع الحقوق محفوظة
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
