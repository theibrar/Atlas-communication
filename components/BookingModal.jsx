'use client';

import { useState } from 'react';

export default function BookingModal({ isOpen, onClose, onShowToast }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vertical: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent double click / double submission
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        onClose();
        if (onShowToast) onShowToast(data.message);
        setFormData({ name: '', email: '', phone: '', vertical: '' });
      } else {
        if (onShowToast) onShowToast(data.error || 'Submission failed.');
      }
    } catch (err) {
      if (onShowToast) onShowToast('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class={`modal-backdrop ${isOpen ? 'open' : ''}`} id="booking-modal">
      <div class="modal-dialog">
        <button class="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div class="modal-header">
          <span class="badge-tag">RESERVE YOUR CALL</span>
          <h3 class="modal-title">Book a Free Strategy Session</h3>
          <p class="modal-subtitle">Speak directly with an Atlas Communication senior lead strategist.</p>
        </div>
        <form id="strategy-booking-form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label htmlFor="modal-name">Full Name</label>
            <input
              type="text"
              id="modal-name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="modal-email">Corporate Email</label>
            <input
              type="email"
              id="modal-email"
              placeholder="john@insuranceagency.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="modal-phone">Phone Number</label>
            <input
              type="tel"
              id="modal-phone"
              placeholder="+1 (512) 325-9363"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="modal-vertical">Target Vertical</label>
            <select
              id="modal-vertical"
              value={formData.vertical}
              onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
              required
            >
              <option value="" disabled>Select Insurance Vertical</option>
              <option value="medicare">Medicare Inbound Calls</option>
              <option value="aca">ACA &amp; Health Insurance</option>
              <option value="life">Final Expense &amp; Life</option>
              <option value="auto">Auto Insurance</option>
              <option value="home">Home Services</option>
              <option value="multi">Multiple Verticals</option>
            </select>
          </div>
          <button
            type="submit"
            class="btn btn-lime w-100 btn-lg mt-3"
            id="btn-submit-booking"
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Submitting...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
}
