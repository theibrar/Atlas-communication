'use client';

export default function ServicesGrid({ onOpenModal }) {
  return (
    <section class="section-padding bg-light" id="services-grid">
      <div class="container">
        {/* Section Header */}
        <div class="text-center max-w-750 mx-auto mb-5">
          <span class="badge-tag">PERFORMANCE SERVICES</span>
          <h2 class="section-title">
            Customer Acquisition <span class="text-primary">Services</span> That Drive Growth
          </h2>
          <p class="section-description text-center">
            We deliver high-intent inbound calls and exclusive leads across key insurance and home service verticals, delivering tailored campaigns, dedicated account reps, and real-time conversion-focused growth.
          </p>
        </div>

        {/* Acquisition Services Layout (5 Featured Service Cards) */}
        <div class="acquisition-grid">
          {/* Top Left: ACA Health Leads */}
          <div class="acq-card" id="acq-aca">
            <div class="acq-card-header">
              <div class="acq-badge-icon"><i class="fa-solid fa-briefcase-medical"></i></div>
              <h3 class="acq-title">ACA Health Leads &amp; Inbound Calls</h3>
            </div>
            <p class="acq-text">
              Atlas Communication delivers conversion-ready ACA health insurance inbound leads using real-time targeting, structured filtering, and transparent reporting to connect agencies with active buyers.
            </p>
          </div>

          {/* Top Right: Inbound Call Center Services */}
          <div class="acq-card" id="acq-center">
            <div class="acq-card-header">
              <div class="acq-badge-icon"><i class="fa-solid fa-headset"></i></div>
              <h3 class="acq-title">Inbound Call Center Services</h3>
            </div>
            <p class="acq-text">
              Atlas Communication provides professional inbound call center support, including customer service, appointment scheduling, order processing, and round-the-clock live call answering agents.
            </p>
          </div>

          {/* Center Featured Card: Health Insurance (with Circular Doctor Image) */}
          <div class="acq-card acq-featured-card" id="acq-health">
            <div class="acq-circle-img-wrap">
              <img src="/images/service_health.jpg" alt="Health Insurance Specialist" class="acq-circle-img" />
            </div>
            <h3 class="acq-title text-center">Health Insurance Leads &amp; Inbound Calls</h3>
            <p class="acq-text text-center">
              Atlas Communication provides exclusive ACA and Health Insurance inbound leads and calls, connecting agents with compliant, high-intent consumers ready to enroll.
            </p>
          </div>

          {/* Bottom Left: Life Insurance (with Circular Family Image) */}
          <div class="acq-card acq-with-img" id="acq-life">
            <div class="acq-circle-img-wrap">
              <img src="/images/service_life.jpg" alt="Life Insurance Family Protection" class="acq-circle-img" />
            </div>
            <h3 class="acq-title">Life Insurance Leads &amp; Inbound Calls</h3>
            <p class="acq-text">
              Atlas Communication delivers exclusive life insurance inbound leads and calls from motivated consumers, connecting agents with compliant, purchase-ready prospects nationwide.
            </p>
          </div>

          {/* Bottom Right: Medicare (with Circular Senior Image) */}
          <div class="acq-card acq-with-img" id="acq-medicare">
            <div class="acq-circle-img-wrap">
              <img src="/images/service_medicare.jpg" alt="Medicare Guidance & Enrollment" class="acq-circle-img" />
            </div>
            <h3 class="acq-title">Medicare Leads &amp; Inbound Calls</h3>
            <p class="acq-text">
              Atlas Communication delivers qualified Medicare inbound calls from seniors actively seeking coverage, helping agencies increase enrollments and revenue year-round.
            </p>
          </div>
        </div>

        {/* Center View All Services Button */}
        <div class="text-center mt-5">
          <button class="btn btn-lime" onClick={onOpenModal}>
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  );
}
