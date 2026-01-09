import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';

export default function Terms() {
  return (
    <Layout>
      <PageHeader title="Terms and Conditions" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-blue max-w-none text-gray-600">
          <p>Last updated: January 2026</p>
          <p className="mt-4">
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the HostCompare website (the "Service") operated by HostCompare ("us", "we", or "our").
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h3>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Intellectual Property</h3>
          <p>
            The Service and its original content, features and functionality are and will remain the exclusive property of HostCompare and its licensors.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Links To Other Web Sites</h3>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by HostCompare. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
          </p>
        </div>
      </div>
    </Layout>
  );
}
