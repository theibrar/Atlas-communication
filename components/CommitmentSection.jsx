'use client';

import { useEffect, useState } from 'react';

export default function CommitmentSection() {
  const [stats, setStats] = useState({
    exp: 11,
    calls: 18,
    partners: 132,
    clients: 73,
    years: 4,
  });

  return (
    <section class="commitment-section" id="commitment">
      <div class="container">
        {/* Center Header */}
        <div class="commitment-header">
          <span class="badge-tag tag-white-trans">OUR COMMITMENT</span>
          <h2 class="commitment-title">
            We help businesses connect with motivated customers and turn demand into measurable growth.
          </h2>
          <p class="commitment-subtitle">
            We generate qualified inbound calls and leads that connect businesses with motivated customers, helping agencies increase conversions, lower acquisition costs, and achieve consistent, scalable growth across multiple insurance and service verticals.
          </p>
        </div>

        {/* 4 Features around Team Graphic */}
        <div class="commitment-grid">
          {/* Left Column Features */}
          <div class="commitment-col col-left">
            <div class="feature-item">
              <h3 class="feature-title">High-Intent Inbound Phone Leads That Convert</h3>
              <p class="feature-text">
                Connect with exclusive, pre-qualified callers actively seeking coverage, so your agents speak only to buyers ready to convert.
              </p>
            </div>
            <div class="feature-item">
              <h3 class="feature-title">Exclusive Pre-Screened Inbound Calls</h3>
              <p class="feature-text">
                We deliver real-time, pre-qualified inbound callers directly to your agents, ensuring smoother conversations and higher conversion rates.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div class="commitment-center-media">
            <div class="commitment-img-card">
              <img
                src="/images/commitment_team.jpg"
                alt="Dedicated Atlas Communication Insurance Advisory Team"
                class="commitment-img"
              />
            </div>
          </div>

          {/* Right Column Features */}
          <div class="commitment-col col-right">
            <div class="feature-item">
              <h3 class="feature-title">TCPA &amp; CMS Compliant Leads</h3>
              <p class="feature-text">
                Every campaign follows strict TCPA and CMS guidelines, using verified sources to protect your brand.
              </p>
            </div>
            <div class="feature-item">
              <h3 class="feature-title">Real-Time Conversion &amp; ROI Tracking</h3>
              <p class="feature-text">
                Track every call and lead performance metrics using transparent dashboards to measure ROI and optimize campaigns.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats Counter Bar */}
        <div class="stats-counter-bar">
          <div class="stat-col">
            <div class="stat-value" id="stat-calls"><span class="num">{stats.calls}</span>K+</div>
            <div class="stat-label">Qualified Inbound Calls Delivered Monthly</div>
          </div>
          <div class="stat-col">
            <div class="stat-value" id="stat-partners"><span class="num">{stats.partners}</span>+</div>
            <div class="stat-label">Registered &amp; Trusted Partners</div>
          </div>
          <div class="stat-col">
            <div class="stat-value" id="stat-clients"><span class="num">{stats.clients}</span>+</div>
            <div class="stat-label">Active Clients</div>
          </div>
          <div class="stat-col">
            <div class="stat-value" id="stat-years"><span class="num">{stats.years}</span></div>
            <div class="stat-label">Years of Experience &amp; Scale</div>
          </div>
        </div>
      </div>
    </section>
  );
}
