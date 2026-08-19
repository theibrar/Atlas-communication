'use client';

import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export default function InboundCallCenterPage() {
  return (
    <ServiceDetailTemplate
      title="Turnkey Inbound Call Center & Warm Transfer Services"
      tagline="CALL CENTER OPERATIONS"
      heroDescription="Professional 24/7 call answering, lead qualification, appointment scheduling, and warm transfer validation for insurance agencies and service providers."
      image="/images/call_center_ops.jpg"
      overviewTitle="Fully Managed Call Answering & Verification Solutions"
      overviewText="Atlas Communication operates state-of-the-art inbound call center infrastructure. Our US-based and bilingual phone agents handle call screening, script verification, CRM entry, and warm live transfers to maximize your internal sales team efficiency."
      bulletPoints={[
        '24/7 365 live answering and overflow handling',
        'Custom script verification and compliance recording',
        'Seamless CRM integration (Salesforce, HubSpot, Zapier, RingCentral)',
        'Bilingual English & Spanish call agents'
      ]}
      features={[
        { title: '24/7 Live Answering', desc: 'Never miss an after-hours inbound lead or weekend customer inquiry.', icon: 'fa-clock-rotate-left' },
        { title: 'Custom Script Execution', desc: 'Our trained agents follow your exact qualification script and data collection steps.', icon: 'fa-list-check' },
        { title: 'Warm Live Transfers', desc: 'We pre-qualify the prospect on the line and stay on until your producer accepts.', icon: 'fa-headset' },
        { title: 'CRM Data Syncing', desc: 'Call data, recordings, and lead disposition post automatically to your platform.', icon: 'fa-database' }
      ]}
      faqs={[
        { q: 'Can your call center integrate directly with our CRM?', a: 'Yes, we support native webhooks and integrations with major CRMs and dialers.' }
      ]}
    />
  );
}
