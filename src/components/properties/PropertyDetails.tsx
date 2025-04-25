import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageSlider from '../common/ImageSlider';
import PropertyMap from '../map/PropertyMap';
import ReviewCard from '../common/ReviewCard';
import EnquiryForm from '../forms/EnquiryForm';

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  userImage?: string;
}

interface PropertyDetailsProps {
  googleMapsLoaded: boolean;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({ googleMapsLoaded }) => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'description' | 'location' | 'reviews'>('description');
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  // Temporary mock data - replace with actual API call
  const property = {
    id: id,
    title: 'شقة فاخرة في الموج مسقط',
    description: `شقة حديثة مطلة على البحر مع مرافق متكاملة. تتميز هذه الشقة بموقعها الاستراتيجي وإطلالتها الخلابة على البحر.

    المميزات:
    - 3 غرف نوم واسعة
    - 2 حمام حديث
    - مطبخ مجهز بالكامل
    - صالة معيشة فسيحة
    - شرفة مطلة على البحر
    - موقف سيارات خاص
    - مسبح مشترك
    - صالة رياضية
    - أمن على مدار الساعة
    
    الموقع:
    - 5 دقائق من المركز التجاري
    - 10 دقائق من المطار
    - قريب من المدارس والمستشفيات
    `,
    price: {
      monthly: 500,
      yearly: 6000,
    },
    location: {
      city: 'مسقط',
      district: 'الموج',
      coordinates: {
        lat: 23.5880,
        lng: 58.3829,
      },
      address: 'الموج، مسقط، عُمان'
    },
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800'
    ],
    features: ['3 غرف نوم', '2 حمام', 'موقف سيارات', 'مسبح'],
    agent: {
      name: 'أحمد العامري',
      phone: '+968 1234 5678',
      email: 'ahmed@example.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200',
      agency: 'الوسيط العقاري المتميز',
      rating: 4.8,
      totalDeals: 156
    },
    paymentMethods: [
      'دفع شهري',
      'دفع سنوي',
      'شيك مصرفي',
      'تحويل بنكي'
    ],
    reviews: [
      {
        id: '1',
        userName: 'سالم البلوشي',
        rating: 5,
        comment: 'شقة رائعة وموقع ممتاز. التعامل مع المالك كان سلساً جداً.',
        date: '2024-12-15',
        userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
      },
      {
        id: '2',
        userName: 'مريم الحارثي',
        rating: 4,
        comment: 'المرافق ممتازة والموقع استراتيجي. فقط الصيانة تحتاج لبعض التحسين.',
        date: '2024-11-20',
        userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
      }
    ] as Review[]
  };

  const handleEnquirySubmit = (data: any) => {
    console.log('Enquiry submitted:', data);
    setShowEnquiryForm(false);
    // Add API call here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Slider */}
      <div className="mb-8">
        <ImageSlider images={property.images} />
      </div>

      {/* Title and Price */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <p className="text-lg text-gray-600">{property.location.address}</p>
        </div>
        <div className="text-left">
          <div className="text-2xl font-bold text-primary">
            {property.price.monthly} ر.ع
            <span className="text-sm text-gray-600 mr-1">/ شهرياً</span>
          </div>
          <div className="text-gray-600">
            {property.price.yearly} ر.ع / سنوياً
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-4 mb-8">
        {property.features.map((feature, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 ${
              activeTab === 'description'
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('description')}
          >
            التفاصيل
          </button>
          <button
            className={`px-6 py-3 ${
              activeTab === 'location'
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('location')}
          >
            الموقع
          </button>
          <button
            className={`px-6 py-3 ${
              activeTab === 'reviews'
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            التقييمات
          </button>
        </div>

        <div className="py-6">
          {activeTab === 'description' && (
            <div className="space-y-6">
              <div className="whitespace-pre-wrap text-gray-700">
                {property.description}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">طرق الدفع المتاحة</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-50 rounded-lg text-center text-gray-700"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'location' && (
            <div className="h-[400px]">
              <PropertyMap
                properties={property && property.id ? [property as any] : []}
                selectedProperty={property && property.id ? property as any : undefined}
                googleMapsLoaded={googleMapsLoaded}
                singlePropertyView
              />
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {property.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Agent Information */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-6">
          <img
            src={property.agent.image}
            alt={property.agent.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{property.agent.name}</h3>
            <p className="text-gray-600 mb-2">{property.agent.agency}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400">★</span>
              <span>{property.agent.rating}</span>
              <span className="text-gray-600">•</span>
              <span>{property.agent.totalDeals} صفقة منجزة</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowEnquiryForm(true)}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                إرسال استفسار
              </button>
              <a
                href={`tel:${property.agent.phone}`}
                className="bg-white border border-primary text-primary px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                اتصال
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
            <EnquiryForm
              propertyId={property?.id ?? ''}
              onSubmit={handleEnquirySubmit}
              onClose={() => setShowEnquiryForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
