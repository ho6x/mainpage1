import { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceBookingModal from './ServiceBookingModal';

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

export const AdditionalServices = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const services: Service[] = [
    {
      id: '1',
      title: 'شركة المها للخدمات المتكاملة',
      description: 'خدمات شاملة للتنظيف والصيانة والنقل',
      icon: '🏢',
      category: 'cleaning',
      providers: [
        {
          id: 'maha1',
          name: 'المها للتنظيف',
          logo: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100',
          rating: 4.9,
          reviewCount: 328,
          priceRange: '25-45 ر.ع/ساعة',
          description: `- تنظيف شامل للمنازل والشقق
- خدمة على مدار 24 ساعة
- عمالة مدربة ومؤهلة
- مواد تنظيف عالية الجودة
- ضمان رضا العملاء`
        }
      ]
    },
    {
      id: '2',
      title: 'شركة النورس للنقل',
      description: 'متخصصون في نقل الأثاث والعفش بأحدث المعدات',
      icon: '🚛',
      category: 'moving',
      providers: [
        {
          id: 'nooras1',
          name: 'النورس للنقل',
          logo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=100',
          rating: 4.8,
          reviewCount: 256,
          priceRange: '80-200 ر.ع',
          description: `- فك وتركيب الأثاث
- تغليف احترافي
- سيارات مجهزة
- فريق عمل محترف
- تأمين شامل على المنقولات`
        }
      ]
    },
    {
      id: '3',
      title: 'شركة الأمان للتأمين',
      description: 'حلول تأمينية شاملة للعقارات والممتلكات',
      icon: '🛡️',
      category: 'insurance',
      providers: [
        {
          id: 'aman1',
          name: 'الأمان للتأمين',
          logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100',
          rating: 4.7,
          reviewCount: 189,
          priceRange: '150-500 ر.ع/سنة',
          description: `- تأمين ضد جميع المخاطر
- تغطية الحوادث والكوارث
- خدمة عملاء 24/7
- معالجة سريعة للمطالبات
- باقات مخصصة للمستأجرين`
        }
      ]
    },
    {
      id: '4',
      title: 'شركة التقنية للصيانة',
      description: 'صيانة شاملة للمباني والمرافق',
      icon: '🔧',
      category: 'maintenance',
      providers: [
        {
          id: 'tech1',
          name: 'التقنية للصيانة',
          logo: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=100',
          rating: 4.9,
          reviewCount: 412,
          priceRange: '30-70 ر.ع/زيارة',
          description: `- صيانة كهربائية وسباكة
- صيانة تكييف وتبريد
- إصلاحات عامة
- خدمة طوارئ 24/7
- قطع غيار أصلية`
        }
      ]
    },
    {
      id: '5',
      title: 'شركة الواحة للحدائق',
      description: 'تصميم وتنسيق وصيانة الحدائق',
      icon: '🌳',
      category: 'maintenance',
      providers: [
        {
          id: 'oasis1',
          name: 'الواحة للحدائق',
          logo: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?w=100',
          rating: 4.8,
          reviewCount: 167,
          priceRange: '50-150 ر.ع/شهر',
          description: `- تصميم حدائق منزلية
- زراعة وتنسيق النباتات
- تركيب أنظمة ري
- صيانة دورية
- مكافحة آفات الحدائق`
        }
      ]
    },
    {
      id: '6',
      title: 'شركة نسيم الخليج للتكييف',
      description: 'خبراء في تركيب وصيانة أنظمة التكييف',
      icon: '❄️',
      category: 'maintenance',
      providers: [
        {
          id: 'naseem1',
          name: 'نسيم الخليج',
          logo: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=100',
          rating: 4.9,
          reviewCount: 289,
          priceRange: '35-80 ر.ع/وحدة',
          description: `- تركيب جميع أنواع المكيفات
- صيانة دورية وطارئة
- تنظيف وتعقيم
- قطع غيار أصلية
- ضمان على الخدمة`
        }
      ]
    },
    {
      id: '7',
      title: 'شركة درع الأمان للحراسة',
      description: 'خدمات أمنية وحراسة احترافية',
      icon: '👮',
      category: 'insurance',
      providers: [
        {
          id: 'shield1',
          name: 'درع الأمان',
          logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100',
          rating: 4.8,
          reviewCount: 198,
          priceRange: '400-800 ر.ع/شهر',
          description: `- حراسة 24/7
- كاميرات مراقبة
- أنظمة إنذار متطورة
- حراس مدربين
- تقارير أمنية دورية`
        }
      ]
    },
    {
      id: '8',
      title: 'شركة النظافة المثالية',
      description: 'خدمات تنظيف احترافية للمنازل والمكاتب',
      icon: '🧹',
      category: 'cleaning',
      providers: [
        {
          id: 'perfect1',
          name: 'النظافة المثالية',
          logo: 'https://images.unsplash.com/photo-1583900985737-944b68f80e7f?w=100',
          rating: 4.7,
          reviewCount: 234,
          priceRange: '20-40 ر.ع/ساعة',
          description: `- تنظيف شامل
- تعقيم وتطهير
- تنظيف واجهات زجاجية
- تنظيف مفروشات وسجاد
- عمالة مدربة`
        }
      ]
    }
  ];

  const handleBookService = (service: Service) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">الخدمات الإضافية</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onBook={() => handleBookService(service)}
          />
        ))}
      </div>

      {showBookingModal && selectedService && (
        <ServiceBookingModal
          service={selectedService}
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </div>
  );
};
