'use client';

export default function AboutSection({ onOpenModal }) {
  return (
    <section class="section-padding bg-white" id="about-us">
      <div class="container about-container">
        {/* Left Media Collage */}
        <div class="about-media">
          <div class="about-image-wrapper">
            <img
              src="/images/about_team.jpg"
              alt="Atlas Communication Team Collaborating"
              class="about-main-img"
              id="about-image"
            />
            <div class="about-floating-chip">
              <i class="fa-solid fa-certificate"></i>
              <span>100% TCPA Compliant</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div class="about-content">
          <span class="badge-tag">ABOUT ATLAS COMMUNICATION</span>
          <h2 class="section-title">
            A Trusted Partner for High-Quality <span class="text-primary">Inbound Insurance Leads</span>
          </h2>
          <p class="about-desc">
            Atlas Communication is a performance lead generation agency focused on delivering qualified inbound insurance leads and calls to agencies nationwide. We connect agencies with real consumers seeking Medicare, ACA, Auto, Life, Final Expense, and Home Services coverage. Our model operates with complete transparency and TCPA compliant generation campaigns and strict TCPA standards, designed to improve close rates, lower acquisition costs, and support long-term, scalable growth.
          </p>

          <div class="about-bullets-stat-wrapper">
            <ul class="about-checklist">
              <li>
                <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                <span>Consumer-initiated inbound insurance calls only</span>
              </li>
              <li>
                <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                <span>Medicare &amp; ACA campaigns aligned with CMS guidelines</span>
              </li>
              <li>
                <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                <span>TCPA &amp; compliance-first traffic sources</span>
              </li>
              <li>
                <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                <span>Real-time call delivery and transparent reporting</span>
              </li>
              <li>
                <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                <span>Trusted by 100+ active insurance agencies nationwide</span>
              </li>
            </ul>

            {/* Highlight Experience Card */}
            <div class="experience-card" id="exp-card">
              <div class="exp-number" id="counter-exp">11</div>
              <div class="exp-label">
                YEARS OF<br />EXPERIENCE
              </div>
            </div>
          </div>

          <div class="about-btn-wrap">
            <button class="btn btn-lime" onClick={onOpenModal}>
              MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
