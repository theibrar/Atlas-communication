'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer class="site-footer" id="contact">
      <div class="container">
        <div class="footer-top-grid">
          {/* Col 1: Brand & Disclaimer */}
          <div class="footer-col footer-col-brand">
            <Link href="/" class="brand-logo footer-logo">
              <img
                src="/images/logo_white.png"
                alt="Atlas Communications"
                class="brand-logo-img"
              />
            </Link>
            <p class="footer-brand-desc">
              Atlas Communication is a performance marketing agency specializing in qualified insurance leads and inbound calls. All rights reserved.
            </p>
          </div>

          {/* Col 2: Insurance Services */}
          <div class="footer-col">
            <h4 class="footer-heading">Insurance</h4>
            <ul class="footer-links">
              <li><Link href="/services/medicare-leads"><i class="fa-solid fa-chevron-right"></i> Medicare Leads</Link></li>
              <li><Link href="/services/aca-health-insurance"><i class="fa-solid fa-chevron-right"></i> ACA &amp; Health Insurance</Link></li>
              <li><Link href="/services/final-expense-life-leads"><i class="fa-solid fa-chevron-right"></i> Final Expense &amp; Life Leads</Link></li>
              <li><Link href="/services/auto-insurance-leads"><i class="fa-solid fa-chevron-right"></i> Auto Insurance Leads</Link></li>
              <li><Link href="/services/home-services-leads"><i class="fa-solid fa-chevron-right"></i> Home Services Leads</Link></li>
              <li><Link href="/services/commercial-insurance"><i class="fa-solid fa-chevron-right"></i> Commercial Insurance</Link></li>
              <li><Link href="/services/medicare-supplement"><i class="fa-solid fa-chevron-right"></i> Medicare Supplement</Link></li>
              <li><Link href="/services/inbound-call-center"><i class="fa-solid fa-chevron-right"></i> Inbound Call Center</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div class="footer-col">
            <h4 class="footer-heading">Company</h4>
            <ul class="footer-links">
              <li><Link href="/"><i class="fa-solid fa-chevron-right"></i> Home</Link></li>
              <li><Link href="/about-us"><i class="fa-solid fa-chevron-right"></i> About Us</Link></li>
              <li><Link href="/services"><i class="fa-solid fa-chevron-right"></i> Services</Link></li>
              <li><Link href="/privacy-policy"><i class="fa-solid fa-chevron-right"></i> Privacy Policy</Link></li>
              <li><Link href="/terms-of-service"><i class="fa-solid fa-chevron-right"></i> Terms of Service</Link></li>
              <li><Link href="/compliance"><i class="fa-solid fa-chevron-right"></i> Compliance</Link></li>
              <li><Link href="/contact"><i class="fa-solid fa-chevron-right"></i> Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div class="footer-col">
            <h4 class="footer-heading">Contact Us</h4>
            <ul class="footer-contact-info">
              <li>
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+15123259363" class="text-white">+1 (512) 325-9363</a>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:info@atlascommunication.us" class="text-white">info@atlascommunication.us</a>
              </li>
              <li>
                <i class="fa-solid fa-globe"></i>
                <a href="https://www.atlascommunication.us" target="_blank" rel="noreferrer" class="text-white">www.atlascommunication.us</a>
              </li>
              <li>
                <i class="fa-solid fa-clock"></i>
                <span>Mon - Fri: 8:00 AM - 6:00 PM EST</span>
              </li>
            </ul>
            <div class="footer-social-links">
              <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div class="footer-bottom-bar">
          <p class="copyright-text">
            &copy; 2026 Atlas Communication. All Rights Reserved. Performance Leads.
          </p>
          <div class="footer-legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-service">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
