'use client';

export default function WhatWeDeliver() {
  return (
    <section class="section-padding bg-light" id="services-overview">
      <div class="container">
        {/* Section Header */}
        <div class="section-header-split">
          <div class="header-left">
            <span class="badge-tag">WHAT WE DELIVER</span>
            <h2 class="section-title">
              High-Intent <span class="text-primary">Inbound</span> Insurance Calls That <span class="text-primary">Convert</span>
            </h2>
          </div>
          <div class="header-right">
            <p class="section-description">
              Atlas Communication connects call centers and agencies with qualified consumers looking for Medicare, ACA, Auto, Life, and Home Services insurance coverage. Our all-compliant campaigns are built to maximize conversion standards and performance-driven metrics, providing system power, lower acquisition costs, and predictable growth across every multiple insurance vertical.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div class="services-cards-grid">
          {/* Card 1 */}
          <div class="service-card" id="card-medicare">
            <div class="card-icon-circle">
              <i class="fa-solid fa-heart-pulse"></i>
            </div>
            <h3 class="card-title">Medicare Leads &amp; Inbound Calls</h3>
            <p class="card-desc">
              Every day, over 10,000 Americans become eligible for Medicare. We deliver qualified inbound phone leads and high-intent calls from seniors actively seeking coverage, helping agencies scale more policies with zero prospect chasing.
            </p>
          </div>

          {/* Card 2 */}
          <div class="service-card" id="card-life">
            <div class="card-icon-circle">
              <i class="fa-solid fa-hands-holding-child"></i>
            </div>
            <h3 class="card-title">Final Expense &amp; Life Insurance Inbound Calls</h3>
            <p class="card-desc">
              Atlas Communication provides direct inbound calls and exclusive final expense leads from consumers actively looking for affordable life and burial coverage. Keeping your agents connect with qualified, compliance-approved buyers prepared to move forward.
            </p>
          </div>

          {/* Card 3 (Highlighted #1b4332 Card) */}
          <div class="service-card card-featured" id="card-auto">
            <div class="card-icon-circle icon-white">
              <i class="fa-solid fa-car"></i>
            </div>
            <h3 class="card-title text-white">Auto Insurance Leads &amp; Inbound Calls</h3>
            <p class="card-desc text-white-80">
              Atlas Communication connects your agency with high-intent drivers actively searching for auto coverage, lowering your acquisition costs and driving consistent, predictable revenue every single month.
            </p>
          </div>

          {/* Card 4 */}
          <div class="service-card" id="card-homeservices">
            <div class="card-icon-circle">
              <i class="fa-solid fa-house-chimney-user"></i>
            </div>
            <h3 class="card-title">Home Services Leads &amp; Inbound Calls</h3>
            <p class="card-desc">
              Atlas Communication provides qualified inbound leads and calls for home improvement and home services, including solar, HVAC, roofing, pest control, appliances, remodeling, and water restoration, helping providers grow with compliant, real-time opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Banner Row */}
        <div class="services-bottom-row">
          <span class="mission-statement">Your Growth. Our Mission. Real Results.</span>
          <a href="#services-grid" class="btn btn-lime btn-sm">MORE SERVICES</a>
        </div>
      </div>
    </section>
  );
}
