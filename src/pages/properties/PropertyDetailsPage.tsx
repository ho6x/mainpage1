import { PropertyDetails } from '../../components/properties/PropertyDetails';

interface PropertyDetailsPageProps {
  googleMapsLoaded: boolean;
}

export const PropertyDetailsPage: React.FC<PropertyDetailsPageProps> = ({ googleMapsLoaded }) => {
  return (
    <div className="pt-20">
      <PropertyDetails googleMapsLoaded={googleMapsLoaded} />
    </div>
  );
};

export default PropertyDetailsPage;
