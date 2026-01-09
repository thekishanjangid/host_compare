import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';

export default function AffiliateDisclosure() {
  return (
    <Layout>
      <PageHeader title="Affiliate Disclosure" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-blue max-w-none text-gray-600">
          <p className="mb-4">
            Comparison sites like ours require significant time, effort, and resources to maintain. To keep this service free for our readers, we may receive a commission when you click on some of the links on our website and make a purchase.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">How it Works</h3>
          <p className="mb-4">
            When you click a link for a provider on our site (e.g., Bluehost or SiteGround), we may earn a referral fee. This helps cover our server costs, writer fees, and testing tools.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Does it Cost You More?</h3>
          <p className="mb-4">
            <strong>No, absolutely not.</strong> In fact, in many cases, our partnership with these providers allows us to offer you exclusive discounts that you wouldn't get by going directly to their site.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Promise</h3>
          <p className="mb-4">
            We strive to keep our reviews and comparisons fair and balanced. A provider paying us a higher commission does not guarantee them a top spot. We rank based on performance, features, support, and value for money.
          </p>
        </div>
      </div>
    </Layout>
  );
}
