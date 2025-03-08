import { useState, useEffect } from 'react';
import { PropertyCard } from './PropertyCard';

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

export const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState<'topRated' | 'discounted' | 'newest'>('topRated');
  const [featuredProperties, setFeaturedProperties] = useState<{
    topRated: Property[];
    discounted: Property[];
    newest: Property[];
  }>({
    topRated: [],
    discounted: [],
    newest: []
  });

  useEffect(() => {
    // هنا سيتم استبدال هذا بطلب API حقيقي
    const mockProperties: Property[] = [
      {
        id: '1',
        title: 'شقة فاخرة في الموج مسقط',
        description: 'شقة حديثة مع إطلالة مباشرة على البحر',
        price: {
          monthly: 600,
          yearly: 6500
        },
        location: {
          city: 'مسقط',
          district: 'الموج'
        },
        area: 140,
        bedrooms: 2,
        bathrooms: 2,
        rating: {
          average: 4.8,
          count: 24
        },
        images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        features: ['إطلالة بحرية', 'مسبح مشترك', 'موقف سيارات', 'أمن 24/7'],
        featured: true,
        addedDate: '2025-02-10'
      },
      {
        id: '2',
        title: 'فيلا راقية في المعبيلة',
        description: 'فيلا عصرية مع حديقة خاصة ومسبح',
        price: {
          monthly: 1200,
          yearly: 13000
        },
        location: {
          city: 'مسقط',
          district: 'المعبيلة'
        },
        area: 400,
        bedrooms: 5,
        bathrooms: 6,
        rating: {
          average: 4.9,
          count: 18
        },
        images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        features: ['مسبح خاص', 'حديقة واسعة', 'غرفة خادمة', 'مطبخ خارجي'],
        featured: true,
        addedDate: '2025-02-12'
      },
      {
        id: '3',
        title: 'شقة مفروشة في القرم',
        description: 'شقة راقية مفروشة بالكامل في قلب القرم',
        price: {
          monthly: 750,
          yearly: 8000
        },
        location: {
          city: 'مسقط',
          district: 'القرم'
        },
        area: 160,
        bedrooms: 3,
        bathrooms: 3,
        rating: {
          average: 4.7,
          count: 15
        },
        images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        features: ['مفروشة بالكامل', 'قريبة من المولات', 'خدمات فندقية', 'جيم'],
        featured: true,
        addedDate: '2025-02-11'
      },
      {
        id: '4',
        title: 'بنتهاوس فاخر في شاطئ القرم',
        description: 'شقة بنتهاوس مع إطلالة بانورامية على البحر',
        price: {
          monthly: 1500,
          yearly: 16000
        },
        location: {
          city: 'مسقط',
          district: 'شاطئ القرم'
        },
        area: 300,
        bedrooms: 4,
        bathrooms: 4,
        rating: {
          average: 5.0,
          count: 12
        },
        images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        features: ['إطلالة بانورامية', 'تراس خاص', 'مصعد خاص', 'خدمة كونسيرج'],
        featured: true,
        addedDate: '2025-02-13'
      },
      {
        id: '5',
        title: 'شقة في مركز الأعمال',
        description: 'شقة عصرية في برج تجاري بموقع استراتيجي',
        price: {
          monthly: 550,
          yearly: 6000
        },
        location: {
          city: 'مسقط',
          district: 'روي'
        },
        area: 120,
        bedrooms: 2,
        bathrooms: 2,
        rating: {
          average: 4.6,
          count: 20
        },
        images: ['https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        features: ['مكتب منزلي', 'أمن 24/7', 'مواقف مغطاة', 'قاعة اجتماعات'],
        featured: true,
        addedDate: '2025-02-09'
      }
    ];

    // تصنيف العقارات
    setFeaturedProperties({
      topRated: mockProperties.sort((a, b) => b.rating.average - a.rating.average).slice(0, 4),
      discounted: mockProperties
        .filter(p => p.price.yearly)
        .sort((a, b) => (b.price.yearly! - b.price.monthly * 12) - (a.price.yearly! - a.price.monthly * 12))
        .slice(0, 4),
      newest: mockProperties
        .sort((a, b) => new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime())
        .slice(0, 4)
    });
  }, []);

  const tabContent = {
    topRated: {
      title: 'الأعلى تقييماً',
      description: 'عقارات حازت على إعجاب عملائنا',
      icon: '⭐'
    },
    discounted: {
      title: 'عروض مميزة',
      description: 'أفضل الأسعار السنوية',
      icon: '💰'
    },
    newest: {
      title: 'أحدث العقارات',
      description: 'إضافات جديدة لدينا',
      icon: '🆕'
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">عقارات مميزة في مسقط</h2>
        <p className="text-gray-600 text-center mb-8">اكتشف أفضل العقارات المتاحة في السلطنة</p>

        {/* أزرار التصنيف */}
        <div className="flex justify-center gap-4 mb-8">
          {(Object.keys(tabContent) as Array<keyof typeof tabContent>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200
                ${activeTab === tab
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              <span>{tabContent[tab].icon}</span>
              <span>{tabContent[tab].title}</span>
            </button>
          ))}
        </div>

        {/* وصف التصنيف النشط */}
        <div className="text-center mb-8">
          <p className="text-gray-600">{tabContent[activeTab].description}</p>
        </div>

        {/* عرض العقارات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties[activeTab].map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
