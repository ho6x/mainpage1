export enum UserType {
  PROPERTY_OWNER = 'PROPERTY_OWNER',
  PROPERTY_SEEKER = 'PROPERTY_SEEKER',
  SERVICE_PROVIDER = 'SERVICE_PROVIDER'
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  phone: string;
  userType: UserType;
  serviceTypes?: string[];
  customService?: string;
  additionalSkills?: string;
  preferredLocations?: string[];
  createdAt: Date;
  updatedAt: Date;
}
