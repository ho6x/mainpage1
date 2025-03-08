import { useState, useEffect, useRef } from 'react';
import { MapSearch } from './MapSearch';

interface SearchFilters {
  location: string;
  mapLocation: { lat: number; lng: number } | null;
  propertyType: string;
  priceMin: string;
  priceMax: string;
  rentalPeriod: string;
  bedrooms: string;
  bathrooms: string;
  sortBy: string;
  facilities: string[];
}

interface SearchLocation {
  lat: number;
  lng: number;
  radius: number;
}

interface AdvancedSearchProps {
  googleMapsLoaded: boolean;
}

export const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ googleMapsLoaded }) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isMapView, setIsMapView] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    mapLocation: null,
    propertyType: '',
    priceMin: '',
    priceMax: '',
    rentalPeriod: 'monthly',
    bedrooms: '',
    bathrooms: '',
    sortBy: 'newest',
    facilities: []
  });

  const [location, setLocation] = useState<SearchLocation>({
    lat: 23.5880, // مسقط
    lng: 58.3829,
    radius: 5000 // 5 كيلومتر
  });
  
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const circleRef = useRef<google.maps.Circle | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  // تهيئة الخريطة
  useEffect(() => {
    if (!googleMapsLoaded || !mapRef.current || mapInitialized || !isMapView) return;

    try {
      // إنشاء الخريطة
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: location.lat, lng: location.lng },
        zoom: 12,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
      });

      googleMapRef.current = map;

      // إضافة علامة قابلة للسحب
      const marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        draggable: true,
        title: 'اسحب لتحديد الموقع',
      });

      markerRef.current = marker;

      // إضافة دائرة لتحديد نطاق البحث
      const circle = new window.google.maps.Circle({
        map,
        center: { lat: location.lat, lng: location.lng },
        radius: location.radius,
        fillColor: '#FF0000',
        fillOpacity: 0.2,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        editable: true,
      });

      circleRef.current = circle;

      // تحديث الموقع عند سحب العلامة
      marker.addListener('dragend', () => {
        const newPos = marker.getPosition();
        if (newPos) {
          const newLat = newPos.lat();
          const newLng = newPos.lng();
          setLocation(prev => ({
            ...prev,
            lat: newLat,
            lng: newLng
          }));
          circle.setCenter(newPos);
        }
      });

      // تحديث نصف القطر عند تغيير حجم الدائرة
      circle.addListener('radius_changed', () => {
        setLocation(prev => ({
          ...prev,
          radius: circle.getRadius()
        }));
      });

      // تحديث الموقع عند تحريك الدائرة
      circle.addListener('center_changed', () => {
        const newCenter = circle.getCenter();
        if (newCenter) {
          const newLat = newCenter.lat();
          const newLng = newCenter.lng();
          setLocation(prev => ({
            ...prev,
            lat: newLat,
            lng: newLng
          }));
          marker.setPosition(newCenter);
        }
      });

      setMapInitialized(true);

      // تحديث حجم الخريطة
      window.google.maps.event.trigger(map, 'resize');
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [googleMapsLoaded, isMapView, location.lat, location.lng, mapInitialized]);

  // تنظيف الخريطة عند إزالة المكون
  useEffect(() => {
    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
      if (circleRef.current) {
        circleRef.current.setMap(null);
        circleRef.current = null;
      }
      if (googleMapRef.current) {
        googleMapRef.current = null;
      }
    };
  }, []);

  // إعادة تهيئة الخريطة عند تغيير وضع العرض
  useEffect(() => {
    if (isMapView && !mapInitialized) {
      setMapInitialized(false);
    }
  }, [isMapView, mapInitialized]);

  const handleSearch = () => {
    console.log('Search filters:', {
      ...filters,
      location: {
        lat: location.lat,
        lng: location.lng,
        radius: location.radius
      }
    });
  };

  return (
    <div className="search-container relative z-10">
      {/* Simple Search Bar */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <input
              type="text"
              className="form-input"
              placeholder="ابحث عن موقع أو نوع العقار..."
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>
          <button className="btn btn-primary px-6" onClick={handleSearch}>
            <i className="fas fa-search ml-2"></i>
            بحث
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          >
            <i className={`fas fa-chevron-${isAdvancedOpen ? 'up' : 'down'} ml-2`}></i>
            بحث متقدم
          </button>
        </div>
      </div>

      {/* Advanced Search Panel */}
      <div className={`advanced-search-panel bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ${isAdvancedOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">خيارات البحث المتقدم</h2>
          <div className="flex gap-2">
            <button
              className={`btn ${!isMapView ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setIsMapView(false)}
            >
              <i className="fas fa-list ml-2"></i>
              بحث عادي
            </button>
            <button
              className={`btn ${isMapView ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setIsMapView(true)}
            >
              <i className="fas fa-map-marker-alt ml-2"></i>
              بحث على الخريطة
            </button>
          </div>
        </div>

        {isMapView ? (
          <div className="col-span-full">
            <div 
              ref={mapRef} 
              className="w-full h-[400px] rounded-lg overflow-hidden"
              style={{ 
                border: '1px solid #e2e8f0',
                display: 'block'  // Ensure the map container is visible
              }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  نوع العقار
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={filters.propertyType}
                  onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                >
                  <option value="">الكل</option>
                  <option value="apartment">شقة</option>
                  <option value="villa">فيلا</option>
                  <option value="house">منزل</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  عدد الغرف
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={filters.bedrooms}
                  onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                >
                  <option value="">الكل</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  السعر الأدنى
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md"
                  placeholder="السعر الأدنى"
                  value={filters.priceMin}
                  onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  السعر الأعلى
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md"
                  placeholder="السعر الأعلى"
                  value={filters.priceMax}
                  onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="form-group">
              <label className="form-label">المدينة</label>
              <select
                className="form-select"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                <option value="">اختر المدينة</option>
                <option value="muscat">مسقط</option>
                <option value="salalah">صلالة</option>
                <option value="sohar">صحار</option>
                <option value="nizwa">نزوى</option>
                <option value="sur">صور</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">نوع العقار</label>
              <select
                className="form-select"
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
              >
                <option value="">اختر النوع</option>
                <option value="apartment">شقة</option>
                <option value="villa">فيلا</option>
                <option value="office">مكتب</option>
                <option value="studio">استوديو</option>
                <option value="room">غرفة</option>
                <option value="shop">محل تجاري</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">السعر</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className="form-input w-1/2"
                  placeholder="من"
                  value={filters.priceMin}
                  onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                />
                <input
                  type="number"
                  className="form-input w-1/2"
                  placeholder="إلى"
                  value={filters.priceMax}
                  onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">مدة الإيجار</label>
              <select
                className="form-select"
                value={filters.rentalPeriod}
                onChange={(e) => setFilters({ ...filters, rentalPeriod: e.target.value })}
              >
                <option value="daily">يومي</option>
                <option value="monthly">شهري</option>
                <option value="yearly">سنوي</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">عدد الغرف</label>
              <select
                className="form-select"
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
              >
                <option value="">الكل</option>
                <option value="studio">استوديو</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">عدد الحمامات</label>
              <select
                className="form-select"
                value={filters.bathrooms}
                onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
              >
                <option value="">الكل</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">ترتيب حسب</label>
              <select
                className="form-select"
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              >
                <option value="newest">الأحدث</option>
                <option value="price_low">السعر: من الأقل</option>
                <option value="price_high">السعر: من الأعلى</option>
                <option value="rating">الأعلى تقييماً</option>
              </select>
            </div>
          </div>
        )}

        <div className="mt-6">
          <label className="form-label mb-3">المرافق الإضافية</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'parking', label: 'موقف سيارات', icon: 'car' },
              { id: 'pool', label: 'مسبح', icon: 'swimming-pool' },
              { id: 'gym', label: 'صالة رياضية', icon: 'dumbbell' },
              { id: 'security', label: 'أمن', icon: 'shield-alt' },
              { id: 'elevator', label: 'مصعد', icon: 'elevator' },
              { id: 'internet', label: 'إنترنت', icon: 'wifi' },
              { id: 'ac', label: 'تكييف', icon: 'snowflake' },
              { id: 'furnished', label: 'مفروش', icon: 'couch' }
            ].map(facility => (
              <label key={facility.id} className="facility-checkbox">
                <input
                  type="checkbox"
                  checked={filters.facilities.includes(facility.id)}
                  onChange={(e) => {
                    const newFacilities = e.target.checked
                      ? [...filters.facilities, facility.id]
                      : filters.facilities.filter(f => f !== facility.id);
                    setFilters({ ...filters, facilities: newFacilities });
                  }}
                />
                <span className="facility-label">
                  <i className={`fas fa-${facility.icon}`}></i>
                  {facility.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <button className="btn btn-primary w-full" onClick={handleSearch}>
            <i className="fas fa-search ml-2"></i>
            بحث متقدم
          </button>
        </div>
      </div>
    </div>
  );
};
