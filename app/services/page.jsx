'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MobileDrawer from '@/components/MobileDrawer';
import CtaBannerSection from '@/components/CtaBannerSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Toast from '@/components/Toast';

export default function AllServicesPage() {
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

  const servicesList = [
    {
      title: 'Medicare Inbound Leads & Calls',
      desc: 'Consumer-initiated calls from seniors seeking Medicare Advantage, Supplement, and Part D coverage.',
      link: '/services/medicare-leads',
      icon: 'fa-heart-pulse',
      img: '/images/service_medicare.jpg',
    },
    {
      title: 'ACA & Health Insurance Leads',
      desc: 'High-intent individuals looking for Obamacare, ACA subsidy plans, and private health coverage.',
      link: '/services/aca-health-insurance',
      icon: 'fa-briefcase-medical',
      img: '/images/service_health.jpg',
    },
    {
      title: 'Final Expense & Life Leads',
      desc: 'Exclusive inbound calls for whole life, term life, and burial protection from pre-screened buyers.',
      link: '/services/final-expense-life-leads',
      icon: 'fa-hands-holding-child',
      img: '/images/service_life.jpg',
    },
    {
      title: 'Auto Insurance Leads',
      desc: 'Connect with active drivers seeking policy comparisons, lower premiums, and comprehensive auto protection.',
      link: '/services/auto-insurance-leads',
      icon: 'fa-car',
      img: '/images/hero_agents.jpg',
    },
    {
      title: 'Home Services Leads',
      desc: 'High-ticket inbound calls for solar, HVAC, roofing, plumbing, pest control, and home renovation.',
      link: '/services/home-services-leads',
      icon: 'fa-house-chimney-user',
      img: '/images/commitment_team.jpg',
    },
    {
      title: 'Commercial Insurance Leads',
      desc: 'B2B general liability, workers comp, commercial auto, and property coverage leads for corporate brokers.',
      link: '/services/commercial-insurance',
      icon: 'fa-building',
      img: '/images/commercial_insurance.jpg',
    },
    {
      title: 'Medicare Supplement Leads',
      desc: 'Medigap Plan G and Plan N inbound leads for senior insurance specialists nationwide.',
      link: '/services/medicare-supplement',
      icon: 'fa-user-nurse',
      img: '/images/medicare_supplement.jpg',
    },
    {
      title: 'Inbound Call Center Services',
      desc: 'Turnkey 24/7 call center answering, appointment scheduling, and warm transfer validation.',
      link: '/services/inbound-call-center',
      icon: 'fa-headset',
      img: '/images/call_center_ops.jpg',
    },
  ];

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
          <span class="badge-tag tag-white-trans">OUR SERVICES</span>
          <h1 class="hero-title" style={{ fontSize: '3rem', marginBottom: '16px' }}>
            High-Volume Customer Acquisition Solutions
          </h1>
          <p class="hero-subtitle mx-auto" style={{ maxWidth: '720px' }}>
            Explore Atlas Communication’s portfolio of exclusive inbound phone leads, real-time transfers, and custom call center campaigns across major vertical markets.
          </p>
        </div>
      </section>

      <section class="section-padding bg-light">
        <div class="container">
          <div class="services-cards-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {servicesList.map((srv, idx) => (
              <div key={idx} class="service-card" style={{ padding: '24px' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', height: '180px', marginBottom: '20px' }}>
                  <img src={srv.img} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div class="card-icon-circle">
                  <i class={`fa-solid ${srv.icon}`}></i>
                </div>
                <h3 class="card-title">{srv.title}</h3>
                <p class="card-desc" style={{ marginBottom: '20px' }}>{srv.desc}</p>
                <Link href={srv.link} class="btn btn-lime btn-sm w-100 mt-auto">
                  View Service Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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
