import { useState } from 'react';
import { PropertyCard } from './PropertyCard';
import { PropertyListItem } from './PropertyListItem';
import PropertyMap from '../map/PropertyMap';

// Type definitions
interface Property {
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
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  logo: string;
  rating: {
    average: number;
    count: number;
  };
  features: string[];
  area: number;
  bedrooms: number;
  bathrooms: number;
  featured: boolean;
  addedDate: string;
}

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'rating';

interface PropertyListingsProps {
  googleMapsLoaded: boolean;
}

export const PropertyListings: React.FC<PropertyListingsProps> = ({ googleMapsLoaded }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showMap, setShowMap] = useState(false);

  // Temporary sample data
  const properties: Property[] = [
    {
      id: '1',
      title: 'شقة فاخرة في الموج مسقط',
      description: 'شقة حديثة مطلة على البحر مع مرافق متكاملة',
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
      },
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.5,
        count: 12,
      },
      features: ['3 غرف نوم', '2 حمام', 'موقف سيارات', 'مسبح'],
      area: 120,
      bedrooms: 3,
      bathrooms: 2,
      featured: true,
      addedDate: '2025-01-01',
    },
    {
      id: '2',
      title: 'فيلا فاخرة في صلالة',
      description: 'فيلا واسعة مع حديقة خاصة',
      price: {
        monthly: 800,
        yearly: 9600,
      },
      location: {
        city: 'صلالة',
        district: 'المطار',
        coordinates: {
          lat: 17.0154,
          lng: 54.0915,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.8,
        count: 8,
      },
      features: ['4 غرف نوم', '3 حمام', 'مسبح', 'حديقة'],
      area: 200,
      bedrooms: 4,
      bathrooms: 3,
      featured: true,
      addedDate: '2025-01-01',
    },
    {
      id: '3',
      title: 'شقة في قلب مسقط',
      description: 'شقة قريبة من جميع المرافق الأساسية',
      price: {
        monthly: 400,
        yearly: 4800,
      },
      location: {
        city: 'مسقط',
        district: 'الخوير',
        coordinates: {
          lat: 23.5880,
          lng: 58.3829,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.2,
        count: 15,
      },
      features: ['2 غرف نوم', '1 حمام', 'موقف سيارات'],
      area: 100,
      bedrooms: 2,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '4',
      title: 'استوديو في صحار',
      description: 'استوديو مثالي للطلاب أو الأفراد',
      price: {
        monthly: 300,
        yearly: 3600,
      },
      location: {
        city: 'صحار',
        district: 'المدينة',
        coordinates: {
          lat: 24.4664,
          lng: 56.7069,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.0,
        count: 10,
      },
      features: ['1 غرفة نوم', '1 حمام'],
      area: 50,
      bedrooms: 1,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '5',
      title: 'غرفة للإيجار في نزوى',
      description: 'غرفة للإيجار في موقع هادئ',
      price: {
        monthly: 200,
        yearly: 2400,
      },
      location: {
        city: 'نزوى',
        district: 'المدينة',
        coordinates: {
          lat: 22.9333,
          lng: 57.5000,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 3.8,
        count: 5,
      },
      features: ['غرفة واحدة', 'حمام مشترك'],
      area: 30,
      bedrooms: 1,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '6',
      title: 'محل تجاري في مسقط',
      description: 'محل تجاري في موقع استراتيجي',
      price: {
        monthly: 600,
        yearly: 7200,
      },
      location: {
        city: 'مسقط',
        district: 'القرم',
        coordinates: {
          lat: 23.6072,
          lng: 58.4172,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.5,
        count: 7,
      },
      features: ['مساحة كبيرة', 'موقع ممتاز'],
      area: 150,
      bedrooms: 0,
      bathrooms: 0,
      featured: true,
      addedDate: '2025-01-01',
    },
    {
      id: '7',
      title: 'شقة في بهلاء',
      description: 'شقة مريحة في منطقة هادئة',
      price: {
        monthly: 350,
        yearly: 4200,
      },
      location: {
        city: 'بهلاء',
        district: 'المدينة',
        coordinates: {
          lat: 22.9579,
          lng: 57.3133,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.1,
        count: 9,
      },
      features: ['2 غرف نوم', '1 حمام'],
      area: 90,
      bedrooms: 2,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '8',
      title: 'فيلا في بركاء',
      description: 'فيلا فاخرة مع حديقة كبيرة',
      price: {
        monthly: 900,
        yearly: 10800,
      },
      location: {
        city: 'بركاء',
        district: 'المدينة',
        coordinates: {
          lat: 23.6107,
          lng: 57.5834,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.7,
        count: 11,
      },
      features: ['4 غرف نوم', '3 حمام', 'مسبح'],
      area: 250,
      bedrooms: 4,
      bathrooms: 3,
      featured: true,
      addedDate: '2025-01-01',
    },
    {
      id: '9',
      title: 'استوديو في صلالة',
      description: 'استوديو مريح بالقرب من الشاطئ',
      price: {
        monthly: 400,
        yearly: 4800,
      },
      location: {
        city: 'صلالة',
        district: 'المدينة',
        coordinates: {
          lat: 17.0154,
          lng: 54.0915,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.3,
        count: 8,
      },
      features: ['1 غرفة نوم', '1 حمام'],
      area: 40,
      bedrooms: 1,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '10',
      title: 'غرفة للإيجار في مسقط',
      description: 'غرفة للإيجار في موقع مركزي',
      price: {
        monthly: 250,
        yearly: 3000,
      },
      location: {
        city: 'مسقط',
        district: 'الخوير',
        coordinates: {
          lat: 23.5880,
          lng: 58.3829,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 3.9,
        count: 6,
      },
      features: ['غرفة واحدة', 'حمام مشترك'],
      area: 20,
      bedrooms: 1,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '11',
      title: 'شقة في صلالة',
      description: 'شقة حديثة مع إطلالة على البحر',
      price: {
        monthly: 600,
        yearly: 7200,
      },
      location: {
        city: 'صلالة',
        district: 'المطار',
        coordinates: {
          lat: 17.0154,
          lng: 54.0915,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.4,
        count: 10,
      },
      features: ['2 غرف نوم', '2 حمام', 'مسبح'],
      area: 110,
      bedrooms: 2,
      bathrooms: 2,
      featured: true,
      addedDate: '2025-01-01',
    },
    {
      id: '12',
      title: 'فيلا في بهلاء',
      description: 'فيلا فاخرة مع حديقة خاصة',
      price: {
        monthly: 1000,
        yearly: 12000,
      },
      location: {
        city: 'بهلاء',
        district: 'المدينة',
        coordinates: {
          lat: 22.9579,
          lng: 57.3133,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.9,
        count: 15,
      },
      features: ['5 غرف نوم', '4 حمام', 'مسبح', 'حديقة'],
      area: 300,
      bedrooms: 5,
      bathrooms: 4,
      featured: true,
      addedDate: '2025-01-01',
    },
    {
      id: '13',
      title: 'شقة في صحار',
      description: 'شقة مريحة بالقرب من الشاطئ',
      price: {
        monthly: 450,
        yearly: 5400,
      },
      location: {
        city: 'صحار',
        district: 'المدينة',
        coordinates: {
          lat: 24.4664,
          lng: 56.7069,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.1,
        count: 9,
      },
      features: ['2 غرف نوم', '1 حمام'],
      area: 80,
      bedrooms: 2,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '14',
      title: 'غرفة للإيجار في بركاء',
      description: 'غرفة للإيجار في موقع هادئ',
      price: {
        monthly: 200,
        yearly: 2400,
      },
      location: {
        city: 'بركاء',
        district: 'المدينة',
        coordinates: {
          lat: 23.6107,
          lng: 57.5834,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 3.8,
        count: 5,
      },
      features: ['غرفة واحدة', 'حمام مشترك'],
      area: 15,
      bedrooms: 1,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '15',
      title: 'استوديو في نزوى',
      description: 'استوديو مريح بالقرب من الأسواق',
      price: {
        monthly: 300,
        yearly: 3600,
      },
      location: {
        city: 'نزوى',
        district: 'المدينة',
        coordinates: {
          lat: 22.9333,
          lng: 57.5000,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.0,
        count: 10,
      },
      features: ['1 غرفة نوم', '1 حمام'],
      area: 35,
      bedrooms: 1,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '16',
      title: 'فيلا في مسقط',
      description: 'فيلا فاخرة مع إطلالة على البحر',
      price: {
        monthly: 1200,
        yearly: 14400,
      },
      location: {
        city: 'مسقط',
        district: 'القرم',
        coordinates: {
          lat: 23.6072,
          lng: 58.4172,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.6,
        count: 12,
      },
      features: ['4 غرف نوم', '3 حمام', 'مسبح', 'حديقة'],
      area: 280,
      bedrooms: 4,
      bathrooms: 3,
      featured: true,
      addedDate: '2025-01-01',
    },
    {
      id: '17',
      title: 'شقة في بركاء',
      description: 'شقة مريحة بالقرب من الشاطئ',
      price: {
        monthly: 400,
        yearly: 4800,
      },
      location: {
        city: 'بركاء',
        district: 'المدينة',
        coordinates: {
          lat: 23.6107,
          lng: 57.5834,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.3,
        count: 9,
      },
      features: ['2 غرف نوم', '1 حمام'],
      area: 70,
      bedrooms: 2,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '18',
      title: 'غرفة للإيجار في صلالة',
      description: 'غرفة للإيجار في موقع مركزي',
      price: {
        monthly: 250,
        yearly: 3000,
      },
      location: {
        city: 'صلالة',
        district: 'المدينة',
        coordinates: {
          lat: 17.0154,
          lng: 54.0915,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 3.9,
        count: 6,
      },
      features: ['غرفة واحدة', 'حمام مشترك'],
      area: 10,
      bedrooms: 1,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '19',
      title: 'استوديو في صحار',
      description: 'استوديو مريح بالقرب من الأسواق',
      price: {
        monthly: 350,
        yearly: 4200,
      },
      location: {
        city: 'صحار',
        district: 'المدينة',
        coordinates: {
          lat: 24.4664,
          lng: 56.7069,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.1,
        count: 9,
      },
      features: ['1 غرفة نوم', '1 حمام'],
      area: 25,
      bedrooms: 1,
      bathrooms: 1,
      featured: false,
      addedDate: '2025-01-01',
    },
    {
      id: '20',
      title: 'فيلا في بهلاء',
      description: 'فيلا فاخرة مع حديقة خاصة',
      price: {
        monthly: 1000,
        yearly: 12000,
      },
      location: {
        city: 'بهلاء',
        district: 'المدينة',
        coordinates: {
          lat: 22.9579,
          lng: 57.3133,
        },
      },
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
      ],
      logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200',
      rating: {
        average: 4.9,
        count: 15,
      },
      features: ['5 غرف نوم', '4 حمام', 'مسبح', 'حديقة'],
      area: 320,
      bedrooms: 5,
      bathrooms: 4,
      featured: true,
      addedDate: '2025-01-01',
    },
  ];

  const getSortedProperties = () => {
    return [...properties].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price.monthly - b.price.monthly;
        case 'price-desc':
          return b.price.monthly - a.price.monthly;
        case 'rating':
          // Sort by rating first, then by number of ratings if ratings are equal
          if (b.rating.average === a.rating.average) {
            return b.rating.count - a.rating.count;
          }
          return b.rating.average - a.rating.average;
        case 'newest':
        default:
          // For demo purposes, we'll use the ID as a proxy for newness
          // In a real app, you'd use a timestamp
          return parseInt(b.id) - parseInt(a.id);
      }
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
  };

  const sortedProperties = getSortedProperties();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:justify-between mb-6">
        {/* View Controls */}
        <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded-lg">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
              viewMode === 'grid' 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>عرض شبكي</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
              viewMode === 'list' 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span>عرض قائمة</span>
          </button>
          <button
            onClick={() => setShowMap(!showMap)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
              showMap 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l4 4V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
            </svg>
            <span>{showMap ? 'إخفاء الخريطة' : 'البحث في الخريطة'}</span>
          </button>
        </div>

        {/* Sort Control */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-gray-600">ترتيب حسب:</label>
          <select 
            id="sort"
            className="form-select bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="newest">الأحدث</option>
            <option value="price-asc">السعر: من الأقل إلى الأعلى</option>
            <option value="price-desc">السعر: من الأعلى إلى الأقل</option>
            <option value="rating">التقييم الأعلى</option>
          </select>
        </div>
      </div>

      {showMap && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <div className="h-[400px]">
            <PropertyMap
              properties={sortedProperties}
              googleMapsLoaded={googleMapsLoaded}
            />
          </div>
        </div>
      )}

      <div className={`grid ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'grid-cols-1 gap-4'
      }`}>
        {sortedProperties.map((property) => (
          viewMode === 'grid' ? (
            <PropertyCard 
              key={property.id} 
              property={property}
            />
          ) : (
            <PropertyListItem 
              key={property.id} 
              property={property}
            />
          )
        ))}
      </div>
    </div>
  );
};
