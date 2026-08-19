'use client';

import Link from 'next/link';

export default function MobileDrawer({ isOpen, onClose, onOpenModal }) {
  return (
    <>
      <div class={`mobile-drawer ${isOpen ? 'open' : ''}`} id="mobile-drawer">
        <div class="drawer-header">
          <Link href="/" class="brand-logo" onClick={onClose}>
            <img
              src="/images/logo_white.png"
              alt="Atlas Communications"
              class="brand-logo-img-drawer"
            />
          </Link>
          <button class="drawer-close" id="drawer-close" onClick={onClose}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul class="drawer-nav">
          <li><Link href="/" class="drawer-link" onClick={onClose}>Home</Link></li>
          <li><Link href="/about-us" class="drawer-link" onClick={onClose}>About Us</Link></li>
          <li><Link href="/services" class="drawer-link" onClick={onClose}>All Services</Link></li>
          <li><Link href="/services/medicare-leads" class="drawer-link" onClick={onClose}>Medicare Leads</Link></li>
          <li><Link href="/services/aca-health-insurance" class="drawer-link" onClick={onClose}>ACA &amp; Health</Link></li>
          <li><Link href="/services/final-expense-life-leads" class="drawer-link" onClick={onClose}>Final Expense &amp; Life</Link></li>
          <li><Link href="/services/auto-insurance-leads" class="drawer-link" onClick={onClose}>Auto Insurance</Link></li>
          <li><Link href="/services/home-services-leads" class="drawer-link" onClick={onClose}>Home Services</Link></li>
          <li><Link href="/services/commercial-insurance" class="drawer-link" onClick={onClose}>Commercial Insurance</Link></li>
          <li><Link href="/services/medicare-supplement" class="drawer-link" onClick={onClose}>Medicare Supplement</Link></li>
          <li><Link href="/services/inbound-call-center" class="drawer-link" onClick={onClose}>Call Center Services</Link></li>
          <li><Link href="/compliance" class="drawer-link" onClick={onClose}>Compliance</Link></li>
          <li><Link href="/contact" class="drawer-link" onClick={onClose}>Contact Us</Link></li>
        </ul>
        <div class="drawer-cta">
          <Link
            href="/contact"
            class="btn btn-white w-100"
            onClick={onClose}
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
      <div
        class={`drawer-backdrop ${isOpen ? 'open' : ''}`}
        id="drawer-backdrop"
        onClick={onClose}
      ></div>
    </>
  );
}
