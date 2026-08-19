'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MobileDrawer from '@/components/MobileDrawer';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function PrivacyPolicyPage() {
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
          <span class="badge-tag tag-white-trans">LEGAL &amp; PRIVACY</span>
          <h1 class="hero-title" style={{ fontSize: '2.75rem' }}>Privacy Policy</h1>
          <p class="hero-subtitle mx-auto">
            Last Updated: August 2026 | Atlas Communication (www.atlascommunication.us)
          </p>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="container" style={{ maxWidth: '860px' }}>
          <div style={{ color: '#790708', lineHeight: '1.8', fontSize: '1.02rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>1. Information We Collect</h3>
            <p style={{ marginBottom: '24px' }}>
              Atlas Communication collects information that identifies, relates to, describes, or is capable of being associated with individual consumers. This includes contact details (name, corporate email, phone number), target insurance coverage preferences, TCPA consent logs, IP addresses, and session interaction metrics.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>2. TCPA &amp; Consent Standard Compliance</h3>
            <p style={{ marginBottom: '24px' }}>
              We strictly adhere to the Telephone Consumer Protection Act (TCPA). By filling out forms on our website or partner web properties, consumers provide express written consent to be contacted by Atlas Communication and our licensed insurance agency partners via telephone calls, automated dialing systems, artificial voice, or SMS text messages.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>3. How We Use Information</h3>
            <p style={{ marginBottom: '24px' }}>
              We utilize collected consumer data to route live inbound phone transfers, match insurance inquiries with licensed agency partners, verify lead authenticity using Jornaya LeadID and TrustedForm tokens, and maintain operational compliance reporting.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>4. Data Protection &amp; Security</h3>
            <p style={{ marginBottom: '24px' }}>
              We employ 256-bit SSL encryption, restricted database access controls, and quarterly vulnerability audits to safeguard data integrity against unauthorized access or disclosure.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>5. Contact Privacy Officer</h3>
            <p style={{ marginBottom: '24px' }}>
              For privacy inquiries or data removal requests, please email us directly at <strong>info@atlascommunication.us</strong> or call <strong>+1 (512) 325-9363</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
