import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  propertyType: string;
  location: string;
}

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "أحمد العامري",
      role: "مستأجر",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
      content: "تجربة رائعة مع كنف! وجدت الشقة المثالية في مسقط بسهولة تامة. الخدمة ممتازة والتواصل سريع.",
      rating: 5,
      propertyType: "شقة سكنية",
      location: "الموج، مسقط"
    },
    {
      id: 2,
      name: "مريم البلوشي",
      role: "مالكة عقار",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100",
      content: "منصة احترافية لإدارة العقارات. ساعدتني في تأجير شقتي بسرعة وبأفضل سعر. أنصح بها بشدة!",
      rating: 5,
      propertyType: "فيلا",
      location: "المعبيلة، مسقط"
    },
    {
      id: 3,
      name: "سالم الحبسي",
      role: "مستأجر",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100",
      content: "الشفافية والمصداقية في التعامل ميزة رائعة في كنف. وجدت منزلي الجديد بسهولة وبسعر معقول.",
      rating: 4,
      propertyType: "شقة مفروشة",
      location: "القرم، مسقط"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-gray-600">آراء حقيقية من مستخدمي منصة كنف</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-700 text-lg mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{testimonial.propertyType}</span>
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* نقاط التنقل */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors duration-200 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`انتقل إلى التقييم ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
