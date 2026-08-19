'use client';

import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export default function MedicareSupplementPage() {
  return (
    <ServiceDetailTemplate
      title="Medicare Supplement (Medigap) Inbound Leads"
      tagline="MEDIGAP ACQUISITION"
      heroDescription="Exclusive inbound call campaigns connecting senior insurance specialists with beneficiaries seeking Plan G, Plan N, and Medigap rate quotes."
      image="/images/medicare_supplement.jpg"
      overviewTitle="High-Retention Medigap Call Flow for Senior Specialists"
      overviewText="Medicare Supplement (Medigap) policies represent some of the highest lifetime commission value products in senior insurance. Atlas Communication delivers inbound calls from seniors who already hold Original Medicare Part A & B and want gap coverage for out-of-pocket expenses."
      bulletPoints={[
        'Targeting Plan G and Plan N price comparisons',
        'Senior callers with active Medicare Part A & B in place',
        'Year-round enrollment availability outside of AEP restrictions',
        '100% compliant Third-Party Marketing disclaimers'
      ]}
      features={[
        { title: 'High Retention Rates', desc: 'Medigap policyholders maintain their coverage for an average of 7+ years.', icon: 'fa-handshake' },
        { title: 'Year-Round Production', desc: 'Medigap policies can be written 365 days a year with medical underwriting.', icon: 'fa-calendar' },
        { title: 'Pre-Screened Underwriting', desc: 'Callers are screened for major medical conditions to ensure underwriting eligibility.', icon: 'fa-notes-medical' },
        { title: 'Exclusive Real-Time Delivery', desc: 'Direct live phone transfers straight to your licensed senior insurance producers.', icon: 'fa-phone' }
      ]}
      faqs={[
        { q: 'Do these leads require medical underwriting screening?', a: 'Yes, we pre-screen callers for basic health questions unless they are in their Open Enrollment Period.' }
      ]}
    />
  );
}
