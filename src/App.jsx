import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import Terms from './pages/Terms';
import ProviderCategory from './pages/ProviderCategory';
import Blog from './pages/Blog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/disclosure" element={<AffiliateDisclosure />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/blog" element={<Blog />} />
      
      {/* Category Routes */}
      <Route 
        path="/domains" 
        element={
          <ProviderCategory 
            title="Best Domain Registrars 2026" 
            description="Find the perfect domain name for your business with the most reliable registrars."
            filterType="domain"
          />
        } 
      />
      <Route 
        path="/hosting" 
        element={
          <ProviderCategory 
            title="Best Web Hosting Providers 2026" 
            description="Top-rated hosting solutions for speed, reliability, and support."
            filterType="hosting"
          />
        } 
      />
      <Route 
        path="/vps" 
        element={
          <ProviderCategory 
            title="Cheap VPS & Cloud Hosting" 
            description="Scalable power for growing websites and applications."
            filterType="vps"
          />
        } 
      />

      {/* Fallback */}
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center text-center p-4">
          <div>
             <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
             <a href="/" className="text-brand-600 hover:underline mt-4 inline-block">Return Home</a>
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;
