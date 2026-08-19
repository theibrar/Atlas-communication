'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MobileDrawer from '@/components/MobileDrawer';
import CtaBannerSection from '@/components/CtaBannerSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function CompliancePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenModal={() => setModalOpen(true)}
      />

      <section class="hero-section text-center" style={{ padding: '80px 0 60px' }}>
        <div class="container">
          <span class="badge-tag tag-white-trans">BRAND PROTECTION</span>
          <h1 class="hero-title" style={{ fontSize: '3rem', marginBottom: '16px' }}>
            Compliance &amp; TCPA Standards
          </h1>
          <p class="hero-subtitle mx-auto" style={{ maxWidth: '720px' }}>
            Atlas Communication sets the gold standard for lead compliance, consumer privacy, TCPA verification, and CMS guidelines across all insurance verticals.
          </p>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="container">
          <div class="services-cards-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '60px' }}>
            <div class="service-card">
              <div class="card-icon-circle">
                <i class="fa-solid fa-certificate"></i>
              </div>
              <h3 class="card-title">Jornaya LeadID Verified</h3>
              <p class="card-desc">
                Every web interaction generates a unique Jornaya LeadID token capturing visual site certificates, user input timestamps, and explicit consent text.
              </p>
            </div>

            <div class="service-card card-featured">
              <div class="card-icon-circle icon-white">
                <i class="fa-solid fa-shield-cat"></i>
              </div>
              <h3 class="card-title text-white">TrustedForm Certified</h3>
              <p class="card-desc text-white-80">
                We capture full TrustedForm session replays proving un-coerced consumer consent prior to placing or transferring any phone call.
              </p>
            </div>

            <div class="service-card">
              <div class="card-icon-circle">
                <i class="fa-solid fa-file-shield"></i>
              </div>
              <h3 class="card-title">CMS Medicare Aligned</h3>
              <p class="card-desc">
                Medicare marketing materials and phone disclaimers conform strictly to Medicare Marketing Guidelines (MMG) for TPMOs.
              </p>
            </div>
          </div>

          <div class="about-container">
            <div class="about-content">
              <span class="badge-tag">RELIABLE INFRASTRUCTURE</span>
              <h2 class="section-title">Zero Tolerance for Uncompliant Traffic</h2>
              <p class="about-desc">
                We understand that brand protection is paramount for insurance agencies. Atlas Communication performs continuous internal audits, daily TCPA DNC (Do Not Call) registry scrubbing, and automated publisher monitoring.
              </p>
              <ul class="about-checklist" style={{ marginTop: '20px' }}>
                <li>
                  <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                  <span>National &amp; State DNC Registry scrubbing</span>
                </li>
                <li>
                  <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                  <span>Litigant list suppression filter</span>
                </li>
                <li>
                  <span class="check-icon"><i class="fa-solid fa-check"></i></span>
                  <span>TCPA 1-to-1 consent consent capture</span>
                </li>
              </ul>
            </div>
            <div class="about-media">
              <div style={{ padding: '36px', backgroundColor: '#1b4332', borderRadius: '18px', color: '#ffffff' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '16px' }}>Compliance Audit Request</h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', marginBottom: '24px' }}>
                  Require a LeadID certificate validation or compliance review for a past call transfer? Our compliance team responds within 2 business hours.
                </p>
                <button class="btn btn-white w-100" onClick={() => setModalOpen(true)}>
                  Request Compliance Record
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerSection onOpenModal={() => setModalOpen(true)} />

      <Footer />
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
