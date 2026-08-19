'use client';

import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export default function MedicareLeadsPage() {
  return (
    <ServiceDetailTemplate
      title="Medicare Inbound Calls & Pre-Qualified Leads"
      tagline="MEDICARE ACQUISITION"
      heroDescription="High-intent inbound phone calls from eligible seniors actively seeking Medicare Advantage, Medicare Supplement (Medigap), and Part D coverage."
      image="/images/service_medicare.jpg"
      overviewTitle="Scale Medicare Advantage & Supplement Enrollments Year-Round"
      overviewText="Atlas Communication specializes in consumer-initiated inbound Medicare leads. Our compliance-driven campaigns generate live inbound phone calls from seniors seeking guidance on Medicare benefits, plan changes, and initial enrollment periods. Every call is filtered according to your specific geography, age requirement, and carrier criteria."
      bulletPoints={[
        '100% TCPA and CMS Third-Party Marketing compliant',
        'Live buffer call validation with custom duration billing',
        'Targeted state-by-state or nationwide delivery',
        'Dedicated account director to optimize close rates'
      ]}
      features={[
        { title: 'CMS Guideline Aligned', desc: 'All marketing creatives and disclaimers are reviewed against current CMS regulations to safeguard your licensing.', icon: 'fa-shield-halved' },
        { title: 'Real-Time Live Transfers', desc: 'Seniors stay on the line and are connected directly to your licensed Medicare agents in under 3 seconds.', icon: 'fa-phone-volume' },
        { title: 'AEP & SEP Ready', desc: 'Scale volume effortlessly during Annual Enrollment Period (AEP) or sustain steady year-round SEP call flow.', icon: 'fa-calendar-check' },
        { title: 'Transparent Call Logs', desc: 'Access full call recordings, duration timestamps, and disposition reports in your client portal.', icon: 'fa-chart-pie' }
      ]}
      faqs={[
        { q: 'What is the billable buffer duration for Medicare calls?', a: 'Standard call buffer durations range from 90 to 120 seconds, allowing your agents time to verify eligibility before charging.' },
        { q: 'Are all Medicare leads TCPA compliant?', a: 'Yes, 100% of our calls originate from opt-in digital landing pages with complete Jornaya or TrustedForm certificates.' },
        { q: 'Can we specify geographic targeting?', a: 'Absolutely. We support state-level, zip-code level, or regional campaign filtering.' }
      ]}
    />
  );
}
