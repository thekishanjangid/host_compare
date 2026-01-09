import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';

export default function About() {
  return (
    <Layout>
      <PageHeader 
        title="About Us" 
        description="We are dedicated to helping you find the perfect home for your website."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-blue max-w-none text-gray-600">
          <p className="text-lg leading-relaxed mb-6">
            HostCompare was founded with a simple mission: to cut through the noise of the web hosting industry and provide honest, data-driven comparisons.
          </p>
          <p className="mb-6">
            We know how overwhelming it can be to choose between hundreds of providers, all claiming to be the "fastest" or "cheapest". That's why we actually test them. We buy plans, set up test sites, easier uptime, and reach out to support anonymously.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Methodology</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Uptime Monitoring:</strong> We track availability 24/7.</li>
            <li><strong>Speed Tests:</strong> We test load times from multiple global locations.</li>
            <li><strong>Support Checks:</strong> We ask technical questions to evaluate support quality.</li>
            <li><strong>User Experience:</strong> We rate the ease of use of their control panels.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
