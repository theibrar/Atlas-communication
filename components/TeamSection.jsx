'use client';

export default function TeamSection() {
  return (
    <section class="team-section" id="team-section">
      <div class="container">
        {/* Header */}
        <div class="team-header text-center">
          <span class="badge-tag tag-white-trans">LEADERSHIP &amp; EXPERTS</span>
          <h2 class="team-title">
            Stronger Together. One <span class="text-white" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Team</span>, Driving Your Success Beyond Limits.
          </h2>
        </div>

        {/* 5 Team Members in a Row */}
        <div class="team-grid">
          {/* Member 1: Oliver Stewart */}
          <div class="team-card" id="team-oliver">
            <div class="team-avatar-container">
              <div class="avatar-circle">
                <svg viewBox="0 0 120 120" class="team-vector-avatar" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="58" fill="#1b4332"/>
                  <circle cx="60" cy="45" r="22" fill="#ffffff"/>
                  <path d="M40 38C40 25 50 18 60 18C70 18 80 25 80 38C80 40 76 34 60 34C44 34 40 40 40 38Z" fill="#1b4332"/>
                  <circle cx="51" cy="45" r="7" fill="none" stroke="#1b4332" strokeWidth="2.5"/>
                  <circle cx="69" cy="45" r="7" fill="none" stroke="#1b4332" strokeWidth="2.5"/>
                  <line x1="58" y1="45" x2="62" y2="45" stroke="#1b4332" strokeWidth="2.5"/>
                  <path d="M54 56Q60 62 66 56" stroke="#1b4332" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M30 105C30 85 45 74 60 74C75 74 90 85 90 105Z" fill="#ffffff"/>
                  <path d="M54 74L60 84L66 74" fill="#1b4332"/>
                </svg>
              </div>
            </div>
            <div class="team-name-card">
              <h4>Oliver<br />Stewart</h4>
            </div>
          </div>

          {/* Member 2: Jason Bradley */}
          <div class="team-card" id="team-jason">
            <div class="team-avatar-container">
              <div class="avatar-circle">
                <svg viewBox="0 0 120 120" class="team-vector-avatar" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="58" fill="#1b4332"/>
                  <circle cx="60" cy="45" r="22" fill="#ffffff"/>
                  <path d="M38 36C38 23 50 18 60 18C70 18 82 23 82 36C82 40 76 33 60 33C44 33 38 40 38 36Z" fill="#1b4332"/>
                  <path d="M43 48C43 65 52 70 60 70C68 70 77 65 77 48C74 54 68 56 60 56C52 56 46 54 43 48Z" fill="#1b4332"/>
                  <circle cx="52" cy="44" r="2.5" fill="#1b4332"/>
                  <circle cx="68" cy="44" r="2.5" fill="#1b4332"/>
                  <path d="M55 58Q60 62 65 58" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                  <path d="M28 105C28 85 45 74 60 74C75 74 92 85 92 105Z" fill="#ffffff"/>
                  <path d="M53 74L60 82L67 74" fill="#1b4332"/>
                </svg>
              </div>
            </div>
            <div class="team-name-card">
              <h4>Jason<br />Bradley</h4>
            </div>
          </div>

          {/* Member 3: Mason Hayes */}
          <div class="team-card" id="team-mason">
            <div class="team-avatar-container">
              <div class="avatar-circle">
                <svg viewBox="0 0 120 120" class="team-vector-avatar" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="58" fill="#1b4332"/>
                  <circle cx="60" cy="45" r="22" fill="#ffffff"/>
                  <path d="M42 36C42 24 50 20 60 20C70 20 78 24 78 36C78 38 74 32 60 32C46 32 42 38 42 36Z" fill="#1b4332"/>
                  <rect x="44" y="39" width="13" height="11" rx="3" fill="none" stroke="#1b4332" strokeWidth="2.2"/>
                  <rect x="63" y="39" width="13" height="11" rx="3" fill="none" stroke="#1b4332" strokeWidth="2.2"/>
                  <line x1="57" y1="44" x2="63" y2="44" stroke="#1b4332" strokeWidth="2.2"/>
                  <path d="M54 56Q60 61 66 56" stroke="#1b4332" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M28 105C28 85 45 74 60 74C75 74 92 85 92 105Z" fill="#ffffff"/>
                  <path d="M54 74L60 84L66 74" fill="#1b4332"/>
                </svg>
              </div>
            </div>
            <div class="team-name-card">
              <h4>Mason<br />Hayes</h4>
            </div>
          </div>

          {/* Member 4: Mark Miller */}
          <div class="team-card" id="team-mark">
            <div class="team-avatar-container">
              <div class="avatar-circle">
                <svg viewBox="0 0 120 120" class="team-vector-avatar" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="58" fill="#1b4332"/>
                  <circle cx="60" cy="45" r="22" fill="#ffffff"/>
                  <path d="M40 38C40 24 50 18 60 18C70 18 80 24 80 38C76 28 66 26 60 26C54 26 44 28 40 38Z" fill="#1b4332"/>
                  <circle cx="51" cy="44" r="2.5" fill="#1b4332"/>
                  <circle cx="69" cy="44" r="2.5" fill="#1b4332"/>
                  <path d="M53 56Q60 62 67 56" stroke="#1b4332" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M28 105C28 85 45 74 60 74C75 74 92 85 92 105Z" fill="#ffffff"/>
                  <path d="M52 74L60 85L68 74" fill="#1b4332"/>
                </svg>
              </div>
            </div>
            <div class="team-name-card">
              <h4>Mark<br />Miller</h4>
            </div>
          </div>

          {/* Member 5: Sarah Jenkins */}
          <div class="team-card" id="team-sarah">
            <div class="team-avatar-container">
              <div class="avatar-circle">
                <svg viewBox="0 0 120 120" class="team-vector-avatar" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="58" fill="#1b4332"/>
                  <path d="M34 40C34 22 46 16 60 16C74 16 86 22 86 40C86 64 82 82 82 82C78 76 74 58 74 58L46 58C46 58 42 76 38 82C38 82 34 64 34 40Z" fill="#1b4332"/>
                  <circle cx="60" cy="45" r="21" fill="#ffffff"/>
                  <path d="M42 36C45 28 55 24 60 24C65 24 75 28 78 36C70 30 60 30 42 36Z" fill="#1b4332"/>
                  <rect x="44" y="40" width="13" height="10" rx="3" fill="none" stroke="#1b4332" strokeWidth="2"/>
                  <rect x="63" y="40" width="13" height="10" rx="3" fill="none" stroke="#1b4332" strokeWidth="2"/>
                  <line x1="57" y1="45" x2="63" y2="45" stroke="#1b4332" strokeWidth="2"/>
                  <path d="M53 56Q60 62 67 56" stroke="#1b4332" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M28 105C28 85 45 74 60 74C75 74 92 85 92 105Z" fill="#ffffff"/>
                  <circle cx="60" cy="80" r="3" fill="#1b4332"/>
                </svg>
              </div>
            </div>
            <div class="team-name-card">
              <h4>Sarah<br />Jenkins</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
