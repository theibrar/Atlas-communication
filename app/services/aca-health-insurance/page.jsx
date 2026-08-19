'use client';

import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export default function ACAHealthInsurancePage() {
  return (
    <ServiceDetailTemplate
      title="ACA & Health Insurance Inbound Leads"
      tagline="HEALTH INSURANCE ACQUISITION"
      heroDescription="Exclusive inbound call campaigns connecting licensed health insurance brokers with individuals seeking Affordable Care Act (Obamacare) subsidy plans and private health coverage."
      image="/images/service_health.jpg"
      overviewTitle="High-Intent Consumers Looking for Subsidized ACA Plans"
      overviewText="With expanding federal subsidies and ongoing open enrollment periods, millions of Americans actively search for affordable health coverage. Atlas Communication routes pre-screened inbound callers who are seeking lower premiums, doctor network verification, and subsidy qualification."
      bulletPoints={[
        'Income and state subsidy pre-qualification filtering',
        'Open Enrollment Period (OEP) & Special Enrollment Period (SEP) volume',
        'Direct live phone transfers with minimal wait times',
        'Strict TCPA compliance with verifiable lead provenance'
      ]}
      features={[
        { title: 'Custom Income Filters', desc: 'Pre-screen callers based on estimated annual income to match Federal Poverty Level (FPL) subsidy tiers.', icon: 'fa-filter' },
        { title: 'High Conversion Intent', desc: 'Our ads target consumers who are actively seeking immediate health insurance enrollment.', icon: 'fa-bullseye' },
        { title: 'Scalable Call Volume', desc: 'Capable of delivering 50 to 5,000+ inbound ACA calls daily depending on your agent capacity.', icon: 'fa-layer-group' },
        { title: 'Performance Pricing', desc: 'Pay strictly for qualified inbound transfers exceeding your agreed call duration threshold.', icon: 'fa-hand-holding-dollar' }
      ]}
      faqs={[
        { q: 'How are ACA callers generated?', a: 'Calls are generated through consumer-initiated search ads, mobile click-to-call banners, and verified financial wellness web properties.' },
        { q: 'Can we pause or scale call volume dynamically?', a: 'Yes, your portal allows schedule-based capping, pause toggles, and daily quota adjustments.' }
      ]}
    />
  );
}
