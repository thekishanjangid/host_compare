import { useState } from 'react';

// Use import for assets for reliable bundling
import namecheapLogo from '../../assets/logo/namecheap-vertical.svg';
import godaddyLogo from '../../assets/logo/godaddy.svg';
import dynadotLogo from '../../assets/logo/Dynadot_logo.svg.png';
import porkbunLogo from '../../assets/logo/Porkbun-Logo-for-Feature.jpg';
import googleDomainsLogo from '../../assets/logo/Google_Domains_logo.svg.png';
import ionosLogo from '../../assets/logo/Ionos_Logo_2022.svg.png';
import domainComLogo from '../../assets/logo/Domain.com_Network_Solutions.svg';
import hoverLogo from '../../assets/logo/og_hover-d417ccd759bb8d67585d.png';
import bluehostLogo from '../../assets/logo/Bluehost_logo.svg.png';
import hostingerLogo from '../../assets/logo/hostinger.svg';
import sitegroundLogo from '../../assets/logo/siteground-vertical.svg';
import a2Logo from '../../assets/logo/a2hosting-review.jpg';
import dreamhostLogo from '../../assets/logo/dreamhost-vertical.svg';
import inmotionLogo from '../../assets/logo/inmotion-vertical.svg';
import greengeeksLogo from '../../assets/logo/GreenGeeks.png';
import cloudwaysLogo from '../../assets/logo/cloudways-vertical.svg';

const logoMap = {
  'namecheap': namecheapLogo,
  'godaddy': godaddyLogo,
  'dynadot': dynadotLogo,
  'porkbun': porkbunLogo,
  'google-domains': googleDomainsLogo,
  'ionos': ionosLogo,
  'domain-com': domainComLogo,
  'hover': hoverLogo,
  'bluehost': bluehostLogo,
  'hostinger': hostingerLogo,
  'siteground': sitegroundLogo,
  'a2-hosting': a2Logo,
  'dreamhost': dreamhostLogo,
  'inmotion': inmotionLogo,
  'greengeeks': greengeeksLogo,
  'cloudways': cloudwaysLogo,
};

// Simple SVG placeholder for fallback
const FallbackLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#9CA3AF" strokeWidth="2" className="w-full h-full opacity-50">
        <rect x="10" y="30" width="80" height="40" rx="4" />
        <path d="M30 50h40M50 30v40" strokeLinecap="round" />
    </svg>
);

export function ProviderLogo({ providerId, name, className }) {
  const [error, setError] = useState(false);
  const logoSrc = logoMap[providerId];

  // If no logo mapped or error occurred, show fallback
  if (!logoSrc || error) {
    return (
      <div className={`flex items-center justify-center bg-gray-50 rounded ${className}`}>
        <FallbackLogo />
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt={`${name} logo`}
      className={`object-contain ${className}`}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
