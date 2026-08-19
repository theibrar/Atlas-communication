'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MobileDrawer from '@/components/MobileDrawer';
import CtaBannerSection from '@/components/CtaBannerSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Toast from '@/components/Toast';

export default function AboutUsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  return (
    <main>
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* Hero Banner Header */}
      <section class="hero-section text-center" style={{ padding: '80px 0 60px' }}>
        <div class="container">
          <span class="badge-tag tag-white-trans">ABOUT ATLAS COMMUNICATION</span>
          <h1 class="hero-title" style={{ fontSize: '3rem', marginBottom: '16px' }}>
            Transforming Customer Acquisition for Insurance Agencies
          </h1>
          <p class="hero-subtitle mx-auto" style={{ maxWidth: '720px' }}>
            We are a performance-driven lead generation agency delivering 100% compliant, consumer-initiated inbound calls and pre-qualified insurance leads nationwide.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section class="section-padding bg-white">
        <div class="container">
          <div class="about-container mb-5">
            <div class="about-media">
              <img
                src="/images/about_team.jpg"
                alt="Atlas Communication Team"
                class="about-main-img"
              />
            </div>
            <div class="about-content">
              <span class="badge-tag">OUR MISSION &amp; VISION</span>
              <h2 class="section-title">
                Connecting Motivated Buyers with Top Insurance Advisors
              </h2>
              <p class="about-desc">
                Founded on the principles of complete transparency, strict TCPA compliance, and performance metrics, Atlas Communication bridges the gap between consumers actively searching for insurance coverage and top-performing insurance agencies across the United States.
              </p>
              <p class="about-desc">
                Unlike traditional cold calling or shared lead brokers, every single phone lead delivered by Atlas Communication is live, consumer-initiated, and vetted for high intent.
              </p>
            </div>
          </div>

          {/* 4 Core Values Grid */}
          <div class="services-cards-grid mt-5" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {/* Card 1 */}
            <div class="service-card">
              <div class="card-icon-circle">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <h3 class="card-title">100% TCPA &amp; CMS Compliant</h3>
              <p class="card-desc">
                Every digital campaign and transfer standard strictly conforms to TCPA regulations and CMS guidelines to protect your agency brand reputation.
              </p>
            </div>

            {/* Card 2 (Featured #1b4332 Card) */}
            <div class="service-card card-featured">
              <div class="card-icon-circle icon-white">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <h3 class="card-title text-white">Performance Pricing Model</h3>
              <p class="card-desc text-white-80">
                You only pay for qualified inbound calls that meet agreed duration thresholds. Zero setup fees, zero hidden contracts, and pure ROI focus.
              </p>
            </div>

            {/* Card 3 */}
            <div class="service-card">
              <div class="card-icon-circle">
                <i class="fa-solid fa-headset"></i>
              </div>
              <h3 class="card-title">Dedicated Account Strategy</h3>
              <p class="card-desc">
                Our internal strategist team monitors your daily call volume, filter criteria, and conversion metrics to continuously optimize campaign profitability.
              </p>
            </div>

            {/* Card 4 (NEW 4th CARD) */}
            <div class="service-card">
              <div class="card-icon-circle">
                <i class="fa-solid fa-bolt"></i>
              </div>
              <h3 class="card-title">Real-Time Direct Transfers</h3>
              <p class="card-desc">
                Instant live phone transfers connecting pre-screened, motivated insurance buyers directly to your producers within 3 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Our Proprietary Technology & Infrastructure */}
      <section class="section-padding bg-light" style={{ borderTop: '1px solid rgba(27,67,50,0.15)' }}>
        <div class="container">
          <div class="about-container">
            <div class="about-content">
              <span class="badge-tag">NEXT-GEN INFRASTRUCTURE</span>
              <h2 class="section-title">
                Proprietary Lead Routing &amp; Live Transfer Technology
              </h2>
              <p class="about-desc">
                At Atlas Communication, we combine intelligent telephony routing with real-time compliance verification algorithms. Our proprietary platform filters every incoming call against strict geographic, age, and coverage parameters before routing the call directly to your available sales agents.
              </p>
              <ul class="about-checklist" style={{ marginTop: '20px' }}>
                <li>
                  <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                  <span>Automated Jornaya LeadID &amp; TrustedForm token verification</span>
                </li>
                <li>
                  <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                  <span>Skill-based IVR call routing and overflow management</span>
                </li>
                <li>
                  <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                  <span>Real-time portal dashboard with full call recordings</span>
                </li>
                <li>
                  <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                  <span>Direct API integration with RingCentral, VICIdial, and major CRMs</span>
                </li>
              </ul>
            </div>

            <div class="about-media">
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '3px solid #1b4332', boxShadow: '0 16px 36px rgba(27,67,50,0.2)' }}>
                <img
                  src="/images/about_tech_infrastructure.jpg"
                  alt="Atlas Communication High-Tech Telecom Routing Center"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: National Partner Ecosystem & Growth Impact */}
      <section class="section-padding bg-white">
        <div class="container">
          <div class="about-container" style={{ gridTemplateColumns: '1.05fr 0.95fr' }}>
            <div class="about-media">
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '3px solid #1b4332', boxShadow: '0 16px 36px rgba(27,67,50,0.2)' }}>
                <img
                  src="/images/commercial_insurance.jpg"
                  alt="Atlas Communication Corporate Agency Partnership"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div class="about-content">
              <span class="badge-tag">GROWTH &amp; SCALE</span>
              <h2 class="section-title">
                Empowering Over 110+ Active Insurance Agencies Nationwide
              </h2>
              <p class="about-desc">
                From regional agencies to national call centers operating in all 50 states, Atlas Communication powers predictable sales growth. We eliminate prospect chasing by delivering high-intent buyers who pick up their phones ready to discuss coverage options and enroll.
              </p>

              {/* Highlight Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '24px' }}>
                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1.5px solid #1b4332', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1b4332' }}>18K+</h4>
                  <p style={{ fontSize: '0.78rem', fontWeight: '700', color: '#1b4332' }}>Monthly Inbound Calls</p>
                </div>

                <div style={{ padding: '16px', backgroundColor: '#1b4332', borderRadius: '12px', color: '#ffffff', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff' }}>95%</h4>
                  <p style={{ fontSize: '0.78rem', fontWeight: '700', color: '#ffffff' }}>Partner Retention</p>
                </div>

                <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1.5px solid #1b4332', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1b4332' }}>&lt;3s</h4>
                  <p style={{ fontSize: '0.78rem', fontWeight: '700', color: '#1b4332' }}>Live Transfer Speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <CtaBannerSection onOpenModal={() => setModalOpen(true)} />

      <Footer />
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onShowToast={addToast}
      />
      <Toast toasts={toasts} />
    </main>
  );
}
