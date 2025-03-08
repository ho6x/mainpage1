import { PropertyListings } from '../../components/properties/PropertyListings';

interface PropertiesPageProps {
  googleMapsLoaded: boolean;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ googleMapsLoaded }) => {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">العقارات المتاحة</h1>
          <p className="text-gray-600">اكتشف مجموعة متنوعة من العقارات المتاحة للإيجار في عُمان</p>
        </div>
      </div>
      <PropertyListings googleMapsLoaded={googleMapsLoaded} />
    </div>
  );
};

export default PropertiesPage;
