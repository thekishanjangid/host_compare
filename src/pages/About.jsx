import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { CheckCircle2, Users, Search, BarChart } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <PageHeader 
        title="About Us" 
        description="We are an independent platform dedicated to helping you find the best digital tools for your business."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Welcome to HostAdvisorPro. Founded in 2026, our mission is simple: to bring transparency to the often confusing world of web infrastructure. We are a team of developers, writers, and digital marketers who know how hard it can be to choose the right tools for a new project.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are not a hosting company. We are an educational resource that tests, reviews, and compares services to help you make an informed decision.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <Search className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">In-Depth Research</h3>
              <p className="text-gray-600">We dive deep into terms of service, pricing structures, and feature lists so you don't have to read the fine print.</p>
            </Card>
            <Card className="p-6">
              <BarChart className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Performance Testing</h3>
              <p className="text-gray-600">We monitor uptime, load speeds, and server response times to separate the fast hosts from the slow ones.</p>
            </Card>
          </div>
        </section>

        {/* Editorial Standards */}
        <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Editorial Standards</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700"><strong>Independence:</strong> Our reviews are written by our editorial team, not by advertisers.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700"><strong>Transparency:</strong> We clearly disclose our affiliate relationships and how we make money.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700"><strong>Accuracy:</strong> We regularly update our data to reflect current pricing and features.</span>
            </li>
          </ul>
        </section>

        {/* Team */}
        <section>
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-gray-900 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Our Commitment</h2>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            We believe that the best recommendation is an honest one. Whether you are launching a personal blog or scaling a SaaS startup, our goal is to point you toward the tools that will actually support your growth, not just the ones that pay the highest commission.
          </p>
        </section>
      </div>
    </Layout>
  );
}
