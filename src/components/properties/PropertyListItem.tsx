import { Link } from 'react-router-dom';

interface PropertyListItemProps {
  property: {
    id: string;
    title: string;
    description: string;
    price: {
      monthly: number;
      yearly: number;
    };
    location: {
      city: string;
      district: string;
    };
    images: string[];
    rating: {
      average: number;
      count: number;
    };
    features: string[];
  };
}

export const PropertyListItem = ({ property }: PropertyListItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Property Image */}
        <div className="relative w-full md:w-72 h-48 md:h-auto">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
              {property.price.monthly} ر.ع/شهرياً
            </span>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex-1 p-4">
          <div className="flex flex-col h-full">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <div className="flex items-center">
                  <div className="flex items-center text-yellow-400 ml-1">
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-gray-600">
                    {property.rating.average} ({property.rating.count} تقييم)
                  </span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <i className="fas fa-map-marker-alt text-primary ml-2"></i>
                <span>{property.location.district}، {property.location.city}</span>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {property.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {property.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto flex items-center justify-between">
              <div className="text-primary font-semibold">
                {property.price.yearly} ر.ع/سنوياً
              </div>
              <Link
                to={`/property/${property.id}`}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200"
              >
                عرض التفاصيل
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
