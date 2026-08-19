'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MobileDrawer from '@/components/MobileDrawer';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Toast from '@/components/Toast';

export default function ServiceDetailTemplate({
  title,
  tagline,
  heroDescription,
  image,
  overviewTitle,
  overviewText,
  bulletPoints,
  features,
  faqs,
}) {
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

      {/* Hero Header */}
      <section class="hero-section" style={{ padding: '80px 0 60px' }}>
        <div class="container hero-container">
          <div class="hero-content">
            <span class="badge-tag tag-white-trans">{tagline}</span>
            <h1 class="hero-title" style={{ fontSize: '2.75rem', marginBottom: '16px' }}>
              {title}
            </h1>
            <p class="hero-subtitle">{heroDescription}</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="/contact" class="btn btn-lime btn-lg">
                Get Started Now
              </Link>
            </div>
          </div>
          <div class="hero-media-wrapper">
            <img
              src={image}
              alt={title}
              class="hero-main-img"
              style={{ maxHeight: '420px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Overview & Key Highlights */}
      <section class="section-padding bg-white">
        <div class="container">
          <div class="about-container mb-5">
            <div class="about-content">
              <span class="badge-tag">SERVICE OVERVIEW</span>
              <h2 class="section-title">{overviewTitle}</h2>
              <p class="about-desc">{overviewText}</p>
              <ul class="about-checklist" style={{ marginTop: '24px' }}>
                {bulletPoints.map((pt, idx) => (
                  <li key={idx}>
                    <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div class="about-media">
              <div style={{ borderRadius: '18px', overflow: 'hidden', border: '3px solid #1b4332', boxShadow: '0 16px 36px rgba(27,67,50,0.2)' }}>
                <img src={image} alt={overviewTitle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* Key Advantages Grid */}
          <div class="mt-5">
            <div class="text-center mb-5">
              <span class="badge-tag">WHY CHOOSE ATLAS COMMUNICATION</span>
              <h2 class="section-title">Key Advantages &amp; Delivery Standards</h2>
            </div>
            <div class="services-cards-grid">
              {features.map((feat, idx) => (
                <div key={idx} class={`service-card ${idx === 1 ? 'card-featured' : ''}`}>
                  <div class={`card-icon-circle ${idx === 1 ? 'icon-white' : ''}`}>
                    <i class={`fa-solid ${feat.icon}`}></i>
                  </div>
                  <h3 class={`card-title ${idx === 1 ? 'text-white' : ''}`}>{feat.title}</h3>
                  <p class={`card-desc ${idx === 1 ? 'text-white-80' : ''}`}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion Section */}
          {faqs && faqs.length > 0 && (
            <div class="mt-5" style={{ paddingTop: '40px' }}>
              <div class="text-center mb-5">
                <span class="badge-tag">FREQUENTLY ASKED QUESTIONS</span>
                <h2 class="section-title">Got Questions About {title}?</h2>
              </div>
              <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '24px',
                      borderRadius: '12px',
                      border: '1.5px solid rgba(27,67,50,0.2)',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <h4 style={{ color: '#1b4332', fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>
                      <i class="fa-solid fa-circle-question" style={{ marginRight: '10px' }}></i>
                      {faq.q}
                    </h4>
                    <p style={{ color: 'rgba(27,67,50,0.85)', fontSize: '0.95rem', lineHeight: '1.6' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-banner-section">
        <div class="container">
          <div class="cta-banner-card">
            {/* Left Column Heading */}
            <div class="cta-left">
              <h2 class="cta-heading">
                Launch Your<br />
                <span class="text-white" style={{ textDecoration: 'underline' }}>Campaign Today</span>
              </h2>
            </div>

            {/* Center Column Cutout Advisor Image */}
            <div class="cta-center-media">
              <img
                src="/images/cta_woman.jpg"
                alt="Atlas Communication Senior Advisor"
                class="cta-person-img"
              />
            </div>

            {/* Right Column Details & Action */}
            <div class="cta-right">
              <p class="cta-description">
                Connect with high-intent buyers, custom target parameters, and real-time live transfer leads in {title} with Atlas Communication.
              </p>
              <div class="cta-btn-wrap">
                <Link href="/contact" class="btn btn-lime btn-lg">
                  Book Free Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
