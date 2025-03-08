import { useEffect, useRef } from 'react';

interface Property {
  id: string;
  title: string;
  location: {
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  price: {
    monthly: number;
  };
  images: string[];
}

interface PropertyMapProps {
  properties: Property[];
  selectedProperty?: Property;
  onPropertySelect?: (property: Property) => void;
  googleMapsLoaded: boolean;
  singlePropertyView?: boolean;
}

const PropertyMap: React.FC<PropertyMapProps> = ({
  properties,
  selectedProperty,
  onPropertySelect,
  googleMapsLoaded,
  singlePropertyView = false
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<{ [key: string]: google.maps.Marker }>({});
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  useEffect(() => {
    if (!googleMapsLoaded || !mapRef.current) return;

    try {
      // تهيئة الخريطة
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: singlePropertyView ? 15 : 12,
        center: selectedProperty
          ? {
              lat: selectedProperty.location.coordinates.lat,
              lng: selectedProperty.location.coordinates.lng
            }
          : { lat: 23.5880, lng: 58.3829 }, // مسقط
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
      });

      googleMapRef.current = map;

      // إنشاء نافذة المعلومات
      infoWindowRef.current = new window.google.maps.InfoWindow();

      // إضافة العلامات
      properties.forEach((property) => {
        const marker = new window.google.maps.Marker({
          position: {
            lat: property.location.coordinates.lat,
            lng: property.location.coordinates.lng
          },
          map,
          title: property.title,
          animation: window.google.maps.Animation.DROP
        });

        markersRef.current[property.id] = marker;

        if (!singlePropertyView) {
          // إضافة مستمع للنقر على العلامة
          marker.addListener('click', () => {
            if (onPropertySelect) {
              onPropertySelect(property);
            }

            // عرض نافذة المعلومات
            if (infoWindowRef.current) {
              infoWindowRef.current.setContent(`
                <div class="p-2 text-right">
                  <h3 class="font-bold">${property.title}</h3>
                  <img src="${property.images[0]}" style="width: 100%; height: 100px; object-fit: cover; margin: 8px 0;" />
                  <p class="text-primary">${property.price.monthly} ر.ع / شهرياً</p>
                  <p>${property.location.city}, ${property.location.district}</p>
                </div>
              `);
              infoWindowRef.current.open(map, marker);
            }
          });
        }
      });

      // تحديث العلامة المحددة
      if (selectedProperty) {
        const marker = markersRef.current[selectedProperty.id];
        if (marker) {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
          setTimeout(() => {
            marker.setAnimation(null);
          }, 1500);
        }
      }
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      // تنظيف العلامات عند إزالة المكون
      Object.values(markersRef.current).forEach(marker => {
        marker.setMap(null);
      });
      markersRef.current = {};
      if (infoWindowRef.current) {
        infoWindowRef.current.close();
      }
    };
  }, [googleMapsLoaded, properties, selectedProperty, onPropertySelect, singlePropertyView]);

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-lg overflow-hidden"
      style={{ minHeight: '400px' }}
    />
  );
};

export default PropertyMap;
