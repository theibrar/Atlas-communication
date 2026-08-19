'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MobileDrawer from '@/components/MobileDrawer';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function TermsOfServicePage() {
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

      <section class="hero-section text-center" style={{ padding: '70px 0 50px' }}>
        <div class="container">
          <span class="badge-tag tag-white-trans">LEGAL AGREEMENT</span>
          <h1 class="hero-title" style={{ fontSize: '2.75rem' }}>Terms of Service</h1>
          <p class="hero-subtitle mx-auto">
            Last Updated: August 2026 | Atlas Communication (www.atlascommunication.us)
          </p>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="container" style={{ maxWidth: '860px' }}>
          <div style={{ color: '#790708', lineHeight: '1.8', fontSize: '1.02rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>1. Agreement to Terms</h3>
            <p style={{ marginBottom: '24px' }}>
              By accessing www.atlascommunication.us or engaging Atlas Communication for performance marketing services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the services.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>2. Performance Lead Delivery Services</h3>
            <p style={{ marginBottom: '24px' }}>
              Atlas Communication provides B2B performance marketing, live transfer call routing, and pre-screened insurance lead delivery. All call buffer billing thresholds, geographic filters, and campaign parameters are governed by individual insertion orders.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>3. TCPA &amp; Regulatory Responsibilities</h3>
            <p style={{ marginBottom: '24px' }}>
              Atlas Communication certifies that inbound calls are generated in compliance with federal TCPA and CMS regulations. Buyers agree to maintain proper insurance licensing and telemarketing registration required by state and federal laws when speaking with consumers.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>4. Intellectual Property</h3>
            <p style={{ marginBottom: '24px' }}>
              All brand assets, logos, website software, content, and proprietary call routing technology remain the exclusive property of Atlas Communication.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>5. Contact Legal Team</h3>
            <p style={{ marginBottom: '24px' }}>
              Questions regarding these Terms of Service should be sent to <strong>info@atlascommunication.us</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
