import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageHeader title="Privacy Policy" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <div className="prose prose-blue max-w-none text-gray-600">
          <p>Last updated: January 2026</p>
          <p className="mt-4">
            Your privacy is important to us. It is HostCompare's policy to respect your privacy regarding any information we may collect from you across our website.
          </p>
          {/* Add more privacy content as needed */}
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h3>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
          </p>
        </div>
      </div>
    </Layout>
  );
}
