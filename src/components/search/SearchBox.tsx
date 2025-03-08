import { useState, FormEvent } from 'react';

interface SearchBoxProps {
  onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  location: string;
  propertyType: string;
  priceMin: string;
  priceMax: string;
  period: string;
  bedrooms: string;
  bathrooms: string;
  facilities: string[];
}

export const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    propertyType: '',
    priceMin: '',
    priceMax: '',
    period: 'monthly',
    bedrooms: '',
    bathrooms: '',
    facilities: []
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const toggleFacility = (facility: string) => {
    setFilters(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter(f => f !== facility)
        : [...prev.facilities, facility]
    }));
  };

  return (
    <div className="search-box bg-white p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Location */}
          <div className="form-group">
            <label className="block text-gray-700 mb-2">المحافظة</label>
            <select
              className="form-select w-full"
              value={filters.location}
              onChange={e => setFilters(prev => ({ ...prev, location: e.target.value }))}
            >
              <option value="">اختر المحافظة</option>
              <option value="muscat">مسقط</option>
              <option value="dhofar">ظفار</option>
              <option value="musandam">مسندم</option>
            </select>
          </div>

          {/* Property Type */}
          <div className="form-group">
            <label className="block text-gray-700 mb-2">نوع العقار</label>
            <select
              className="form-select w-full"
              value={filters.propertyType}
              onChange={e => setFilters(prev => ({ ...prev, propertyType: e.target.value }))}
            >
              <option value="">اختر النوع</option>
              <option value="apartment">شقة</option>
              <option value="villa">فيلا</option>
              <option value="office">مكتب</option>
              <option value="studio">استوديو</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="form-group">
            <label className="block text-gray-700 mb-2">السعر</label>
            <div className="flex space-x-2 space-x-reverse">
              <input
                type="number"
                placeholder="من"
                className="form-input w-1/2"
                value={filters.priceMin}
                onChange={e => setFilters(prev => ({ ...prev, priceMin: e.target.value }))}
              />
              <input
                type="number"
                placeholder="إلى"
                className="form-input w-1/2"
                value={filters.priceMax}
                onChange={e => setFilters(prev => ({ ...prev, priceMax: e.target.value }))}
              />
            </div>
          </div>

          {/* Rental Period */}
          <div className="form-group">
            <label className="block text-gray-700 mb-2">مدة الإيجار</label>
            <select
              className="form-select w-full"
              value={filters.period}
              onChange={e => setFilters(prev => ({ ...prev, period: e.target.value }))}
            >
              <option value="daily">يومي</option>
              <option value="monthly">شهري</option>
              <option value="yearly">سنوي</option>
            </select>
          </div>
        </div>

        {/* Additional Filters */}
        <div className="mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Bedrooms */}
            <div className="form-group">
              <label className="block text-gray-700 mb-2">غرف النوم</label>
              <select
                className="form-select w-full"
                value={filters.bedrooms}
                onChange={e => setFilters(prev => ({ ...prev, bedrooms: e.target.value }))}
              >
                <option value="">الكل</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div className="form-group">
              <label className="block text-gray-700 mb-2">الحمامات</label>
              <select
                className="form-select w-full"
                value={filters.bathrooms}
                onChange={e => setFilters(prev => ({ ...prev, bathrooms: e.target.value }))}
              >
                <option value="">الكل</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-4">
          <label className="block text-gray-700 mb-2">المرافق</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['parking', 'pool', 'gym', 'security'].map(facility => (
              <label key={facility} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={filters.facilities.includes(facility)}
                  onChange={() => toggleFacility(facility)}
                />
                <span className="mr-2">
                  {facility === 'parking' && 'موقف سيارات'}
                  {facility === 'pool' && 'مسبح'}
                  {facility === 'gym' && 'صالة رياضية'}
                  {facility === 'security' && 'أمن'}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-6">
          <i className="fas fa-search ml-2"></i>
          بحث
        </button>
      </form>
    </div>
  );
};
