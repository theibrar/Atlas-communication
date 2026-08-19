'use client';

import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export default function HomeServicesLeadsPage() {
  return (
    <ServiceDetailTemplate
      title="Exclusive Home Services Inbound Leads & Calls"
      tagline="HOME SERVICES ACQUISITION"
      heroDescription="Connect contractors and home service providers directly with homeowners seeking solar, HVAC, roofing, pest control, remodeling, and restoration services."
      image="/images/commitment_team.jpg"
      overviewTitle="High-Ticket Home Improvement & Repair Leads"
      overviewText="Atlas Communication generates exclusive inbound phone leads for high-ticket home improvement, installation, and repair contractors nationwide. We connect homeowners needing immediate assistance with qualified localized pros."
      bulletPoints={[
        'Solar, Roofing, HVAC, Pest Control & Water Damage verticals',
        'Zip code level geographic radius targeting',
        'Verified homeownership status prior to live transfer',
        'Pay-per-qualified call performance pricing'
      ]}
      features={[
        { title: 'Verified Homeowners', desc: 'Pre-screened to ensure callers own their property and hold decision-making authority.', icon: 'fa-house-chimney' },
        { title: 'High Project Values', desc: 'Inbound callers inquiry about major installations and emergency repairs averaging $3,000+ per ticket.', icon: 'fa-sack-dollar' },
        { title: 'Hyper-Local Targeting', desc: 'Define your exact service radius down to specific zip codes and counties.', icon: 'fa-location-dot' },
        { title: 'Real-Time Dispatch', desc: 'Transfer urgent repair and consultation calls directly to your sales team or dispatch team.', icon: 'fa-truck-fast' }
      ]}
      faqs={[
        { q: 'Which home service trades do you cover?', a: 'Solar, Roofing, HVAC, Water Restoration, Plumbing, Pest Control, Windows & Doors, and Home Remodeling.' }
      ]}
    />
  );
}
