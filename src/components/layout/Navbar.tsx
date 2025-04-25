import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export const Navbar = () => {
  const { user, logout, setShowAuthPrompt } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">كنف</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 mr-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
            >
              الرئيسية
            </Link>
            <Link
              to="/properties"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
            >
              العقارات
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
            >
              الخدمات
            </Link>
            <Link
              to="/manage-property"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
            >
              طلب إدارة عقار
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
            >
              المدونة
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 order-last"
            >
              عن كنف
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex flex-col w-full text-sm px-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <span className="sr-only">فتح القائمة</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} flex flex-col space-y-2`}>
              <Link
                to="/"
                className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                to="/properties"
                className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                العقارات
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                الخدمات التكامليه
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                عن كنف
              </Link>
              <Link
                to="/manage-property"
                className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                طلب إدارة عقار
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                المدونة
              </Link>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  لوحة التحكم
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  تسجيل الخروج
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthPrompt(true)}
                className="bg-primary text-white hover:bg-primary-dark px-6 py-2.5 rounded-lg text-base font-medium transition-colors duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <span>تسجيل الدخول</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
