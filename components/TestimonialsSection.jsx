'use client';

export default function TestimonialsSection() {
  return (
    <section class="section-padding bg-light" id="testimonials">
      <div class="container">
        {/* Top Tag & Header */}
        <div class="mb-5">
          <span class="badge-tag">CLIENT TESTIMONIALS</span>
          <h2 class="section-title">
            What Our Happy <span class="text-primary">Client's Says !</span>
          </h2>
          <p class="section-description">
            Experience how agencies achieve explosive high-volume growth with Atlas Communication's high-intent inbound calls and leads.
          </p>
        </div>

        <div class="testimonials-wrapper">
          {/* Left Column: Circular Percentage Gauges */}
          <div class="gauges-column">
            {/* Gauge 1: 95% Best Solution */}
            <div class="gauge-item">
              <div class="gauge-circle-wrap">
                <svg class="progress-ring" width="150" height="150">
                  <circle
                    class="progress-ring-bg"
                    stroke="rgba(27, 67, 50, 0.15)"
                    strokeWidth="12"
                    fill="transparent"
                    r="58"
                    cx="75"
                    cy="75"
                  />
                  <circle
                    class="progress-ring-bar"
                    id="gauge-bar-1"
                    stroke="#1b4332"
                    strokeWidth="12"
                    strokeDasharray="364.4"
                    strokeDashoffset="18.2"
                    strokeLinecap="round"
                    fill="transparent"
                    r="58"
                    cx="75"
                    cy="75"
                  />
                </svg>
                <div class="gauge-value" id="gauge-val-1">95%</div>
              </div>
              <h4 class="gauge-label">Best Solution</h4>
            </div>

            {/* Gauge 2: 80% Success Rate */}
            <div class="gauge-item">
              <div class="gauge-circle-wrap">
                <svg class="progress-ring" width="150" height="150">
                  <circle
                    class="progress-ring-bg"
                    stroke="rgba(27, 67, 50, 0.15)"
                    strokeWidth="12"
                    fill="transparent"
                    r="58"
                    cx="75"
                    cy="75"
                  />
                  <circle
                    class="progress-ring-bar"
                    id="gauge-bar-2"
                    stroke="#1b4332"
                    strokeWidth="12"
                    strokeDasharray="364.4"
                    strokeDashoffset="72.88"
                    strokeLinecap="round"
                    fill="transparent"
                    r="58"
                    cx="75"
                    cy="75"
                  />
                </svg>
                <div class="gauge-value" id="gauge-val-2">80%</div>
              </div>
              <h4 class="gauge-label">Success Rate</h4>
            </div>
          </div>

          {/* Right Column: 3 Testimonial Speech Cards */}
          <div class="testimonials-list">
            {/* Testimonial 1 */}
            <div class="testimonial-bubble" id="testimonial-1">
              <div class="bubble-avatar">
                <img src="/images/client_1.jpg" alt="Arthur Vance - Agency Director" />
              </div>
              <div class="bubble-body">
                <div class="quote-mark">“</div>
                <p class="bubble-text">
                  Atlas Communication consistently delivers high-quality Medicare calls. Our close rates improved, acquisition costs dropped, and conversions consistently exceeded expectations. A reliable long-term growth partner.
                </p>
              </div>
            </div>

            {/* Testimonial 2 (Featured #1b4332 Card) */}
            <div class="testimonial-bubble bubble-featured" id="testimonial-2">
              <div class="bubble-avatar">
                <img src="/images/client_2.jpg" alt="Elena Rostova - VP Sales" />
              </div>
              <div class="bubble-body">
                <div class="quote-mark">“</div>
                <p class="bubble-text">
                  Their inbound ACA and health leads deliver real, qualified buyers who are ready to enroll. Fast delivery, transparent metrics, and zero wasted time. The best lead source we've worked with in years.
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div class="testimonial-bubble" id="testimonial-3">
              <div class="bubble-avatar">
                <img src="/images/client_3.jpg" alt="David Sterling - Insurance Founder" />
              </div>
              <div class="bubble-body">
                <div class="quote-mark">“</div>
                <p class="bubble-text">
                  From onboarding to daily delivery, everything runs smoothly. The traffic quality is strong, reporting is transparent, and inbound leads convert at scale. Highly recommended for serious insurance agencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
