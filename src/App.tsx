import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AdvancedSearch } from './components/search/AdvancedSearch';
import { AdditionalServices } from './components/services/AdditionalServices';
import { FeaturedProperties } from './components/properties/FeaturedProperties';
import { Features } from './components/features/Features';
import { Testimonials } from './components/testimonials/Testimonials';
import { AuthProvider } from './components/auth/AuthContext';
import { AuthModal } from './components/auth/AuthModal';
import { useAuth } from './components/auth/AuthContext';
import { useEffect, useState } from 'react';
import { Hero } from './components/home/Hero';
import { About } from './components/static/About';
import { Privacy } from './components/static/Privacy';
import { Terms } from './components/static/Terms';
import { BlogPage } from './components/blog/BlogPage';
import { BlogPostPage } from './pages/blog/BlogPost';
import { NotFound } from './components/static/NotFound';
import { ChatBot } from './components/chat/ChatBot';
import { DashboardRouter } from './components/dashboard/DashboardRouter';
import { PropertiesPage } from './pages/properties/PropertiesPage';
import { PropertyDetailsPage } from './pages/properties/PropertyDetailsPage';
import { PropertyManagementPage } from './pages/property-management/PropertyManagementPage';

const Home = ({ googleMapsLoaded }: { googleMapsLoaded: boolean }) => (
  <div>
    <Hero googleMapsLoaded={googleMapsLoaded} />
    <div className="container mx-auto px-4">
      <FeaturedProperties />
      <Features />
      <Testimonials />
    </div>
  </div>
);

declare global {
  interface Window {
    initMap: () => void;
  }
}

function AppContent() {
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const { showAuthPrompt, setShowAuthPrompt } = useAuth();

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      return new Promise<void>((resolve) => {
        window.initMap = () => {
          setIsGoogleMapsLoaded(true);
          resolve();
        };

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      });
    };

    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      setIsGoogleMapsLoaded(true);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home googleMapsLoaded={isGoogleMapsLoaded} />} />
          <Route path="/search" element={<AdvancedSearch googleMapsLoaded={isGoogleMapsLoaded} />} />
          <Route path="/properties" element={<PropertiesPage googleMapsLoaded={isGoogleMapsLoaded} />} />
          <Route path="/property/:id" element={<PropertyDetailsPage googleMapsLoaded={isGoogleMapsLoaded} />} />
          <Route path="/services" element={<AdditionalServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/manage-property" element={<PropertyManagementPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/dashboard/*" element={<DashboardRouter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {showAuthPrompt && <AuthModal onClose={() => setShowAuthPrompt(false)} />}
      <ChatBot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
