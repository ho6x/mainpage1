interface ServiceProvider {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'cleaning' | 'moving' | 'insurance' | 'maintenance';
  providers: ServiceProvider[];
}

interface ServiceCardProps {
  service: Service;
  onBook: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  const getCategoryColor = (category: Service['category']) => {
    switch (category) {
      case 'cleaning':
        return 'bg-blue-100 text-blue-800';
      case 'moving':
        return 'bg-green-100 text-green-800';
      case 'insurance':
        return 'bg-purple-100 text-purple-800';
      case 'maintenance':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: Service['category']) => {
    switch (category) {
      case 'cleaning':
        return 'تنظيف';
      case 'moving':
        return 'نقل';
      case 'insurance':
        return 'تأمين';
      case 'maintenance':
        return 'صيانة';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl">{service.icon}</span>
          <span className={`px-3 py-1 rounded-full text-sm ${getCategoryColor(service.category)}`}>
            {getCategoryName(service.category)}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="space-y-3">
          {service.providers.map((provider) => (
            <div key={provider.id} className="flex items-center space-x-3 border-t pt-3">
              <img
                src={provider.logo}
                alt={provider.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{provider.name}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    ⭐ {provider.rating}
                    <span className="mx-1">•</span>
                    {provider.reviewCount} تقييم
                  </span>
                </div>
                <div className="text-sm text-primary font-semibold">
                  {provider.priceRange}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={onBook}
          className="w-full mt-6 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-200"
        >
          احجز الخدمة
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
