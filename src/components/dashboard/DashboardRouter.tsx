import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { UserType } from '../../types/user';
import { PropertyOwnerDashboard } from './PropertyOwnerDashboard';
import { PropertySeekerDashboard } from './PropertySeekerDashboard';
import { ServiceProviderDashboard } from './ServiceProviderDashboard';

export const DashboardRouter = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">عذراً</h1>
        <p className="text-gray-600">يجب تسجيل الدخول للوصول إلى لوحة التحكم</p>
      </div>
    );
  }

  switch (user.userType) {
    case UserType.PROPERTY_OWNER:
      return <PropertyOwnerDashboard />;
    case UserType.PROPERTY_SEEKER:
      return <PropertySeekerDashboard />;
    case UserType.SERVICE_PROVIDER:
      return <ServiceProviderDashboard />;
    default:
      return (
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">خطأ</h1>
          <p className="text-gray-600">نوع المستخدم غير معروف</p>
        </div>
      );
  }
};
