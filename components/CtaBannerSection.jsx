'use client';

import Link from 'next/link';

export default function CtaBannerSection() {
  return (
    <section class="cta-banner-section" id="strategy-call">
      <div class="container">
        <div class="cta-banner-card">
          {/* Left Column Heading */}
          <div class="cta-left">
            <h2 class="cta-heading">
              Book a Free<br />
              <span class="text-white" style={{ textDecoration: 'underline' }}>Strategy Call</span>
            </h2>
          </div>

          {/* Center Column Presenting Executive in Circular Frame */}
          <div class="cta-center-media">
            <img
              src="/images/cta_woman.jpg"
              alt="Atlas Communication Strategy Advisor"
              class="cta-person-img"
              id="cta-image"
            />
          </div>

          {/* Right Column Details & Action */}
          <div class="cta-right">
            <p class="cta-description">
              Schedule a call with our team to discover how our high-converting inbound leads, strict compliance, and transparent pricing help your agency scale. Get qualified phone leads in Medicare, ACA, final expense, health insurance, and home services.
            </p>
            <div class="cta-btn-wrap">
              <Link href="/contact" class="btn btn-lime btn-lg" id="btn-open-modal">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
