import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProviderLogo } from '../components/ui/ProviderLogo';
import { ProviderDetailModal } from '../components/providers/ProviderDetailModal';
import { providers } from '../data/providers';
import { Check, ExternalLink, Trophy, Info } from 'lucide-react';

export default function TopPicks() {
  const [selectedProvider, setSelectedProvider] = useState(null);

  const picks = [
    {
      title: 'Best Domain Registrar for Beginners',
      description: 'Namecheap is our top choice for beginners due to its intuitive interface, transparent pricing, and excellent support documentation that makes managing your first domain a breeze.',
      providerId: 'namecheap'
    },
    {
      title: 'Best Budget Web Hosting',
      description: 'Hostinger offers unbeatable value. Their custom hPanel is user-friendly, and their LiteSpeed servers ensure your site loads fast despite the low price point.',
      providerId: 'hostinger'
    },
    {
      title: 'Best VPS Hosting',
      description: 'Cloudways simplifies cloud hosting. You get the power of DigitalOcean or AWS without needing to be a sysadmin. It is the perfect balance of power and ease of use.',
      providerId: 'cloudways'
    },
    {
      title: 'Best All-in-One Solution',
      description: 'Bluehost provides the most seamless "from zero to launch" experience. Their WordPress integration is second to none for getting a basic site up in minutes.',
      providerId: 'bluehost'
    }
  ];

  const getProvider = (id) => providers.find(p => p.id === id) || providers[0];

  return (
    <Layout>
      <PageHeader 
        title="Our Top Picks" 
        description="Editorial recommendations based on rigorous testing and specific user needs."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-12 text-sm text-yellow-800">
          <strong>Disclaimer:</strong> These picks are based on our own research and editorial criteria. We may earn a commission if you purchase through our links.
        </div>

        <div className="space-y-12">
          {picks.map((pick, idx) => {
            const provider = getProvider(pick.providerId);
            return (
              <Card key={idx} className="p-8 border-l-4 border-l-brand-600">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4 flex flex-col items-center text-center">
                    <ProviderLogo 
                      providerId={provider.id} 
                      name={provider.name} 
                      className="max-h-16 mb-4" 
                    />
                    <Badge variant="brand" className="mb-2">{provider.rating} / 5</Badge>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                       <Trophy className="w-5 h-5 text-yellow-500" />
                       <h3 className="text-xl font-bold text-gray-900">{pick.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {pick.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {provider.features.slice(0, 4).map((f, i) => (
                         <div key={i} className="flex items-center text-sm text-gray-500">
                           <Check className="w-3 h-3 text-green-500 mr-2" />
                           {f}
                         </div>
                      ))}
                    </div>

                    <Button onClick={() => setSelectedProvider(provider)}>
                      Know More Details <Info className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <ProviderDetailModal 
        provider={selectedProvider} 
        isOpen={!!selectedProvider} 
        onClose={() => setSelectedProvider(null)} 
      />
    </Layout>
  );
}
