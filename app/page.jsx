'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MobileDrawer from '@/components/MobileDrawer';
import HeroSection from '@/components/HeroSection';
import WhatWeDeliver from '@/components/WhatWeDeliver';
import AboutSection from '@/components/AboutSection';
import CommitmentSection from '@/components/CommitmentSection';
import ServicesGrid from '@/components/ServicesGrid';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaBannerSection from '@/components/CtaBannerSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Toast from '@/components/Toast';

export default function Home() {
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
      <Header
        onOpenDrawer={() => setDrawerOpen(true)}
        onOpenModal={() => setModalOpen(true)}
      />
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenModal={() => setModalOpen(true)}
      />
      <HeroSection onShowToast={addToast} />
      <WhatWeDeliver />
      <AboutSection onOpenModal={() => setModalOpen(true)} />
      <CommitmentSection />
      <ServicesGrid onOpenModal={() => setModalOpen(true)} />
      <TeamSection />
      <TestimonialsSection />
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
