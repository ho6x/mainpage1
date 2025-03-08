import { Link } from 'react-router-dom';
import { AdvancedSearch } from '../search/AdvancedSearch';

interface HeroProps {
  googleMapsLoaded: boolean;
}

export const Hero: React.FC<HeroProps> = ({ googleMapsLoaded }) => {
  return (
    <div className="relative bg-gradient-to-b from-primary/5 to-white pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ابحث عن منزل أحلامك في <span className="text-primary">عُمان</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            نوفر لك أفضل العقارات في جميع أنحاء السلطنة مع خدمات متكاملة لتجربة سكن مريحة
          </p>
        </div>

        {/* Advanced Search Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <AdvancedSearch googleMapsLoaded={googleMapsLoaded} />
        </div>
          
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/properties"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary-dark rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            ابحث عن عقار
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary bg-white hover:bg-gray-50 border-2 border-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            الخدمات التكامليه 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+1000</div>
            <div className="text-gray-600">عقار متاح</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+500</div>
            <div className="text-gray-600">عميل سعيد</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+50</div>
            <div className="text-gray-600">وكيل عقاري</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+10</div>
            <div className="text-gray-600">خدمات متكاملة</div>
          </div>
        </div>
      </div>
    </div>
  );
};
