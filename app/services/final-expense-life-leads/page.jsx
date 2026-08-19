'use client';

import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export default function FinalExpenseLifeLeadsPage() {
  return (
    <ServiceDetailTemplate
      title="Final Expense & Whole Life Insurance Inbound Calls"
      tagline="LIFE INSURANCE ACQUISITION"
      heroDescription="Direct inbound phone leads from seniors and families actively seeking affordable final expense life insurance, burial policies, and whole life coverage."
      image="/images/service_life.jpg"
      overviewTitle="Connect with Seniors Ready to Protect Their Loved Ones"
      overviewText="Final expense insurance is one of the highest converting life insurance verticals when buyers are connected via live phone transfers. Atlas Communication generates exclusive inbound calls from seniors (ages 50 to 85) seeking $5,000 to $50,000 burial policies to ease financial burdens on their families."
      bulletPoints={[
        'Targeted age filters (50-80+ years old)',
        'Decision-maker qualification prior to call transfer',
        'No shared leads — 100% exclusive inbound callers',
        'Consistent daily call flow for tele-sales teams'
      ]}
      features={[
        { title: 'Exclusive Buyer Focus', desc: 'Callers pick up their mobile device wanting information on whole life policy pricing and funeral coverage.', icon: 'fa-user-shield' },
        { title: 'High Policy Approval Rate', desc: 'Pre-screened against common medical knock-outs for simplified issue policies.', icon: 'fa-file-signature' },
        { title: 'Flexible Call Schedules', desc: 'Match incoming calls directly with your agency operating hours across all US time zones.', icon: 'fa-clock' },
        { title: 'Direct Broker ROI', desc: 'High close rates allow tele-sales agents to average 15-25% policy conversions per billable call.', icon: 'fa-arrow-up-right-dots' }
      ]}
      faqs={[
        { q: 'Are these leads shared with other agencies?', a: 'Never. Every inbound call is 100% exclusive and routed in real-time to a single buyer.' },
        { q: 'What is the average policy face amount requested?', a: 'Most callers inquire about $10,000 to $25,000 in whole life burial coverage.' }
      ]}
    />
  );
}
