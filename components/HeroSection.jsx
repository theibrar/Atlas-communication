'use client';

import { useState } from 'react';

export default function HeroSection({ onShowToast }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    onShowToast(`Success! Atlas Communication test leads info sent to ${email}. Our account director will reach out shortly.`);
    setEmail('');
  };

  return (
    <section class="hero-section" id="hero">
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Start Getting <br />
            <span class="text-white" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>
              Qualified Inbound Phone
            </span> <br />
            <span class="text-white">Leads Today</span>
          </h1>
          <p class="hero-subtitle">
            Atlas Communication delivers qualified inbound insurance leads powered by real buyers. Brand safe compliance standards, and performance-driven traffic – so your agents can spend more time closing policies and less time chasing unqualified prospects.
          </p>

          {/* Email / Lead Capture Input Bar */}
          <form class="hero-form" id="hero-lead-form" onSubmit={handleSubmit}>
            <div class="input-wrapper">
              <i class="fa-regular fa-envelope input-icon"></i>
              <input
                type="email"
                id="hero-email-input"
                placeholder="Enter a meeting email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" class="btn btn-lime hero-submit-btn" id="btn-hero-submit">
              GET STARTED
            </button>
          </form>

          {/* Social Proof Rating & Partner Badge */}
          <div class="hero-proof-row">
            <div class="proof-left">
              <div class="stars-group">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <span class="proof-text">Book a meeting today | Get one week of qualified insurance test leads.</span>
            </div>
            <div class="proof-badge">
              <div class="avatar-stack">
                <span class="avatar-dot"></span>
                <span class="avatar-dot"></span>
                <span class="avatar-dot"></span>
              </div>
              <div class="proof-metric">
                <strong>110+</strong>
                <span>Active Partners</span>
              </div>
            </div>
          </div>

          {/* Vertical Pill Category Tags */}
          <div class="hero-tags">
            <span class="tag-pill"><i class="fa-solid fa-house-chimney"></i> Home Insurance</span>
            <span class="tag-pill"><i class="fa-solid fa-notes-medical"></i> Health Insurance</span>
            <span class="tag-pill"><i class="fa-solid fa-car-side"></i> Auto Insurance</span>
          </div>
        </div>

        {/* Hero Image Card */}
        <div class="hero-media-wrapper">
          <div class="hero-card-container">
            <img
              src="/images/hero_agents.jpg"
              alt="Atlas Communication Professional Insurance Advisors"
              class="hero-main-img"
              id="hero-image"
            />
            <div class="hero-floating-badge" id="hero-floating-badge">
              <div class="badge-icon">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <div class="badge-content">
                <p>Trusted by</p>
                <h4>Top Insurance Agencies</h4>
                <p class="badge-sub">Nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
