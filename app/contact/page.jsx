'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MobileDrawer from '@/components/MobileDrawer';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Toast from '@/components/Toast';

export default function ContactPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent double submission
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        addToast(data.message);
        setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        addToast(data.error || 'Failed to submit form.');
      }
    } catch (err) {
      addToast('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
          <span class="badge-tag tag-white-trans">CONTACT ATLAS COMMUNICATION</span>
          <h1 class="hero-title" style={{ fontSize: '3rem', marginBottom: '16px' }}>
            Get in Touch with Our Lead Strategists
          </h1>
          <p class="hero-subtitle mx-auto" style={{ maxWidth: '720px' }}>
            Ready to scale your agency call volume? Speak with our team to customize your inbound insurance filter rules and start receiving high-intent leads today.
          </p>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="container">
          <div class="about-container" style={{ alignItems: 'flex-start' }}>
            {/* Left Contact Info Column */}
            <div>
              <span class="badge-tag">REACH US DIRECTLY</span>
              <h2 class="section-title">Corporate Headquarters &amp; Support</h2>
              <p class="about-desc" style={{ marginBottom: '32px' }}>
                Our senior strategists are available Monday through Friday to discuss campaign volume, insertion orders, and custom integrations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div class="card-icon-circle" style={{ margin: 0 }}>
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.85rem', color: 'rgba(27,67,50,0.7)', textTransform: 'uppercase' }}>Direct Line</h5>
                    <a href="tel:+15123259363" style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1b4332' }}>
                      +1 (512) 325-9363
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div class="card-icon-circle" style={{ margin: 0 }}>
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.85rem', color: 'rgba(27,67,50,0.7)', textTransform: 'uppercase' }}>Corporate Email</h5>
                    <a href="mailto:info@atlascommunication.us" style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1b4332' }}>
                      info@atlascommunication.us
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div class="card-icon-circle" style={{ margin: 0 }}>
                    <i class="fa-solid fa-globe"></i>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.85rem', color: 'rgba(27,67,50,0.7)', textTransform: 'uppercase' }}>Official Website</h5>
                    <a href="https://www.atlascommunication.us" target="_blank" rel="noreferrer" style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1b4332' }}>
                      www.atlascommunication.us
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div class="card-icon-circle" style={{ margin: 0 }}>
                    <i class="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.85rem', color: 'rgba(27,67,50,0.7)', textTransform: 'uppercase' }}>Operating Hours</h5>
                    <p style={{ fontSize: '1rem', fontWeight: '700', color: '#1b4332' }}>
                      Mon - Fri: 8:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div style={{ padding: '36px', borderRadius: '18px', border: '2px solid #1b4332', backgroundColor: '#ffffff', boxShadow: '0 12px 36px rgba(27,67,50,0.15)' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#1b4332', marginBottom: '8px' }}>
                Send Us a Message
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(27,67,50,0.8)', marginBottom: '24px' }}>
                Fill out the form below to request a campaign consultation or test lead package.
              </p>

              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label htmlFor="c-name">Your Full Name</label>
                  <input
                    type="text"
                    id="c-name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div class="form-group">
                    <label htmlFor="c-email">Work Email</label>
                    <input
                      type="email"
                      id="c-email"
                      placeholder="john@agency.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label htmlFor="c-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="c-phone"
                      placeholder="+1 (512) 325-9363"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label htmlFor="c-company">Agency / Business Name</label>
                  <input
                    type="text"
                    id="c-company"
                    placeholder="Apex Insurance Group"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    required
                  />
                </div>

                <div class="form-group">
                  <label htmlFor="c-service">Target Vertical</label>
                  <select
                    id="c-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    required
                  >
                    <option value="" disabled>Select Primary Insurance Vertical</option>
                    <option value="Medicare Leads">Medicare Inbound Calls</option>
                    <option value="ACA & Health">ACA &amp; Health Insurance</option>
                    <option value="Final Expense & Life">Final Expense &amp; Life</option>
                    <option value="Auto Insurance">Auto Insurance</option>
                    <option value="Home Services">Home Services</option>
                    <option value="Commercial Insurance">Commercial Insurance</option>
                    <option value="Medicare Supplement">Medicare Supplement</option>
                    <option value="Inbound Call Center">Inbound Call Center</option>
                  </select>
                </div>

                <div class="form-group">
                  <label htmlFor="c-msg">Message / Campaign Volume Needs</label>
                  <textarea
                    id="c-msg"
                    rows="4"
                    placeholder="Describe your current agent capacity and desired daily call volume..."
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid rgba(27,67,50,0.2)', fontSize: '0.92rem', color: '#1b4332', fontFamily: 'inherit' }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="btn btn-lime w-100 btn-lg mt-3"
                  disabled={loading}
                  style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? 'Submitting Request...' : 'Submit Contact Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onShowToast={addToast} />
      <Toast toasts={toasts} />
    </main>
  );
}
