'use client';

import Link from 'next/link';

export default function Header({ onOpenDrawer }) {
  return (
    <header class="site-header" id="site-header">
      <div class="container header-container">
        <Link href="/" class="brand-logo" id="header-logo">
          <img
            src="/images/logo_white.png"
            alt="Atlas Communications"
            class="brand-logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav class="main-nav" id="main-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <Link href="/" class="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/about-us" class="nav-link">
                About Us
              </Link>
            </li>
            <li class="nav-item has-dropdown">
              <Link href="/services" class="nav-link">
                Inbound Services <i class="fa-solid fa-chevron-down nav-arrow"></i>
              </Link>
              <ul class="dropdown-menu">
                <li><Link href="/services/medicare-leads">Medicare Leads</Link></li>
                <li><Link href="/services/aca-health-insurance">ACA &amp; Health Insurance</Link></li>
                <li><Link href="/services/final-expense-life-leads">Final Expense &amp; Life Leads</Link></li>
                <li><Link href="/services/auto-insurance-leads">Auto Insurance Leads</Link></li>
                <li><Link href="/services/home-services-leads">Home Services Leads</Link></li>
                <li><Link href="/services/commercial-insurance">Commercial Insurance</Link></li>
                <li><Link href="/services/medicare-supplement">Medicare Supplement</Link></li>
                <li><Link href="/services/inbound-call-center">Inbound Call Center</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link href="/compliance" class="nav-link">
                Compliance
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contact" class="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Header CTA Button */}
        <div class="header-actions">
          <Link href="/contact" class="btn-outline-header" id="btn-header-contact">
            Contact Us
          </Link>
          <button
            class="mobile-toggle"
            id="mobile-toggle"
            onClick={onOpenDrawer}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
