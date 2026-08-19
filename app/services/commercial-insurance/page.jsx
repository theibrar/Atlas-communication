'use client';

import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export default function CommercialInsurancePage() {
  return (
    <ServiceDetailTemplate
      title="B2B Commercial Insurance Leads & Calls"
      tagline="COMMERCIAL LINES ACQUISITION"
      heroDescription="High-value commercial policy leads connecting corporate brokers with business owners seeking General Liability, Workers Comp, Commercial Auto, and Property insurance."
      image="/images/commercial_insurance.jpg"
      overviewTitle="Scale Commercial Premium Volume with B2B Decision Makers"
      overviewText="Atlas Communication generates targeted B2B commercial insurance leads from business owners, contractors, and corporate executives actively reviewing company policies. Expand your commercial division with high-premium, multi-line policy opportunities."
      bulletPoints={[
        'General Liability, Workers Compensation, Commercial Auto & Cyber Liability',
        'Filter by company employee size, industry classification, and annual revenue',
        'Exclusive inbound transfers directly to commercial producers',
        'Verified corporate contact and business entity detail logs'
      ]}
      features={[
        { title: 'Multi-Line Opportunities', desc: 'Commercial decision makers seeking bundled policies (BOP, Workers Comp, Umbrella).', icon: 'fa-briefcase' },
        { title: 'Corporate Officers & Owners', desc: 'Connect exclusively with authorized business signers and risk managers.', icon: 'fa-user-tie' },
        { title: 'High Policy Premium Values', desc: 'Target commercial policies generating $5,000 to $100,000+ in annual premium.', icon: 'fa-coins' },
        { title: 'Industry Specific Targeting', desc: 'Filter by construction, trucking, retail, medical, or manufacturing SIC codes.', icon: 'fa-industry' }
      ]}
      faqs={[
        { q: 'Can we specify minimum company size or annual premium target?', a: 'Yes, commercial campaigns allow filtering by headcount, payroll size, and policy expiration dates.' }
      ]}
    />
  );
}
