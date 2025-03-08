import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

interface Property {
  id: string;
  title: string;
  description: string;
  price: {
    monthly: number;
    yearly?: number;
  };
  location: {
    city: string;
    district: string;
  };
  area: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  features: string[];
  rating: {
    average: number;
    count: number;
  };
  featured: boolean;
  addedDate: string;
}

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      return;
    }
    setIsFavorite(!isFavorite);
  };

  // تنسيق السعر بالريال العماني
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-OM', {
      style: 'currency',
      currency: 'OMR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-102 cursor-pointer">
      {/* صورة العقار */}
      <div className="relative h-48 overflow-hidden">
        <Link to={`/property/${property.id}`} className="block h-full">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          />
        </Link>
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
            fill={isFavorite ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* تفاصيل العقار */}
      <div className="p-4">
        <Link to={`/property/${property.id}`} className="block">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-primary">
              {property.title}
            </h3>
            <div className="flex items-center">
              <span className="text-yellow-400 ml-1">⭐</span>
              <span className="text-sm text-gray-600">{property.rating.average}</span>
              <span className="text-xs text-gray-500 mr-1">({property.rating.count})</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center text-gray-500">
              <span className="text-sm">{property.location.district}، {property.location.city}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-sm">{property.area} م²</span>
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-sm">{property.bedrooms} غرف</span>
              </span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-primary text-lg font-bold">{formatPrice(property.price.monthly)}</span>
                <span className="text-gray-600 text-sm mr-1">/شهرياً</span>
              </div>
              {property.price.yearly && (
                <div className="text-sm text-gray-500">
                  <span>{formatPrice(property.price.yearly)}</span>
                  <span className="mr-1">/سنوياً</span>
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
