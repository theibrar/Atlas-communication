'use client';

import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export default function AutoInsuranceLeadsPage() {
  return (
    <ServiceDetailTemplate
      title="High-Intent Auto Insurance Inbound Leads & Calls"
      tagline="AUTO INSURANCE ACQUISITION"
      heroDescription="Drive scalable policy volume with live inbound phone calls from active drivers seeking lower auto insurance rates and comprehensive vehicle coverage."
      image="/images/hero_agents.jpg"
      overviewTitle="Capture Drivers Actively Looking to Switch Carriers"
      overviewText="Auto insurance rate increases drive millions of vehicle owners to shop for competitive quotes every month. Atlas Communication delivers consumer-initiated inbound calls from drivers who want immediate rate quotes, multicar discounts, and commercial vehicle policies."
      bulletPoints={[
        'Filter by state, driver history, and current coverage status',
        'High conversion rates for captive and independent agencies',
        'Real-time delivery with zero delay or cold outreach',
        'Full TCPA compliance with Jornaya LeadID'
      ]}
      features={[
        { title: 'Currently Insured Drivers', desc: 'Optionally target drivers who already maintain continuous coverage for higher lifetime value retention.', icon: 'fa-car-side' },
        { title: 'Instant Live Transfer', desc: 'No outbound dialing required—your producers answer inbound calls from motivated rate shoppers.', icon: 'fa-headset' },
        { title: 'Lower Acquisition Cost', desc: 'Predictable cost per acquisition (CPA) built around transparent buffer timeframes.', icon: 'fa-dollar-sign' },
        { title: 'Custom Operating Hours', desc: 'Schedule call delivery during peak producer hours for immediate quote delivery.', icon: 'fa-calendar-days' }
      ]}
      faqs={[
        { q: 'Can we filter out uninsured drivers or high-risk drivers?', a: 'Yes, custom campaign filters can specify current insurance status and clean driving record requirements.' }
      ]}
    />
  );
}
