import { PropertyManagementForm } from '../../components/property-management/PropertyManagementForm';

export const PropertyManagementPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">طلب إدارة عقار</h1>
          <p className="text-gray-600">قم بتقديم طلب لإدارة عقارك بكل سهولة وأمان</p>
        </div>
      </div>
      <PropertyManagementForm />
    </div>
  );
};

export default PropertyManagementPage;
