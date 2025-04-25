interface MapSearchProps {
  onLocationSelect: (location: { lat: number; lng: number }) => void;
}

export const MapSearch = ({ onLocationSelect }: MapSearchProps) => {
  // Temporary placeholder for map functionality
  const handleManualLocationSelect = () => {
    // Default to Muscat coordinates
    onLocationSelect({ lat: 23.5880, lng: 58.3829 });
  };

  return (
    <div className="map-search">
      <div className="w-full h-[400px] rounded-lg shadow-sm bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">سيتم إضافة خريطة جوجل قريباً</p>
          <button
            onClick={handleManualLocationSelect}
            className="btn btn-primary"
          >
            <i className="fas fa-map-marker-alt ml-2"></i>
            اختر موقع افتراضي (مسقط)
          </button>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <i className="fas fa-info-circle ml-2"></i>
        قريباً: البحث على الخريطة وتحديد الموقع
      </div>
    </div>
  );
};
