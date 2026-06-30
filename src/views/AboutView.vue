<template>
  <main>
    <div class="page-hero">
      <div class="container page-hero-content">
        <p class="page-hero-label">Our Story</p>
        <h1>About AlphaMac</h1>
        <p>Precision pharmaceutical engineering driven by three decades of hands-on expertise.</p>
      </div>
    </div>

    <!-- Company Overview -->
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-img-wrap">
            <img src="/image/IMG_3997_final.jpg" alt="AlphaMac manufacturing facility" class="about-img" />
          </div>
          <div class="about-text">
            <p class="section-pre-label">Who We Are</p>
            <h2 class="section-title">Innovation in<br>Pharma Process Equipment</h2>
            <p class="para">
              AlphaMac Pharma Machinery was founded in 2020 with a clear mission: to engineer affordable, reliable, and GMP-compliant pharmaceutical process equipment for laboratory, pilot, and production scale operations.
            </p>
            <p class="para">
              We are a specialised mechanical engineering company focused on process equipment design, fabrication, and process integration. Our wide range covers drying, granulating, mixing, milling, size reducing, blending, tabletting, coating, pelletizing, pellet coating, stirring, homogenizing, vacuumised mixing, filtration, evaporation, containment, material conveying, cleaning, and fermentation.
            </p>
            <p class="para">
              At AlphaMac, we sincerely thank our customers for their continued trust and support — your confidence inspires us to consistently deliver excellence.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership -->
    <section class="section bg-gray">
      <div class="container">
        <div class="section-header centered">
          <p class="section-pre-label">Leadership</p>
          <h2 class="section-title">Meet the Founder</h2>
        </div>
        <div class="leader-card">
          <div class="leader-avatar">
            <div class="avatar-placeholder">MB</div>
          </div>
          <div class="leader-info">
            <h3 class="leader-name">Mr. Manoj Bhalodia</h3>
            <p class="leader-title">Proprietor &amp; Founder</p>
            <p class="leader-bio">
              Mr. Manoj Bhalodia is a seasoned technocrat with a total experience of <strong>30 years</strong> in pharmaceutical machinery design and engineering. His illustrious career spans three of India's foremost pharma machinery manufacturers:
            </p>
            <div class="career-timeline">
              <div class="career-item">
                <div class="career-dot"></div>
                <div>
                  <strong>Cadmach Machinery Pvt. Ltd.</strong>
                  <span>Design Department — 10 Years</span>
                </div>
              </div>
              <div class="career-item">
                <div class="career-dot"></div>
                <div>
                  <strong>Chamunda Pharma Machinery Co. Pvt. Ltd.</strong>
                  <span>Design Department — 5 Years</span>
                </div>
              </div>
              <div class="career-item">
                <div class="career-dot"></div>
                <div>
                  <strong>Prism Pharma Machinery</strong>
                  <span>Design Manager — 15 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="section">
      <div class="container">
        <div class="section-header centered">
          <p class="section-pre-label">What We Do</p>
          <h2 class="section-title">Manufacturing Capabilities</h2>
          <p class="section-subtitle">End-to-end pharmaceutical process solutions designed for real-world production environments.</p>
        </div>
        <div class="capabilities-grid">
          <div v-for="cap in capabilities" :key="cap.title" class="cap-card">
            <div class="cap-icon" v-html="cap.icon"></div>
            <h4 class="cap-title">{{ cap.title }}</h4>
            <p class="cap-desc">{{ cap.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="about-cta">
      <div class="container">
        <h2>Ready to Discuss Your Requirements?</h2>
        <p>Our engineering team is available to help you select or customise the right equipment for your process.</p>
        <div class="cta-btns">
          <RouterLink to="/contact" class="btn btn-red">Contact Us</RouterLink>
          <RouterLink to="/products" class="btn btn-secondary">View Products</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const capabilities = [
  {
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14"/><path d="M15.54 8.46a5 5 0 010 7.07M8.46 15.54a5 5 0 010-7.07"/></svg>`,
    title: 'Granulation Systems',
    desc: 'High shear mixers, fluid bed granulators, oscillating granulators, and roller compactors for all granulation processes.',
  },
  {
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>`,
    title: 'Drying Equipment',
    desc: 'Fluid bed dryers, tray dryers, and vacuum tray dryers for precise moisture removal across all product types.',
  },
  {
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    title: 'Milling & Size Reduction',
    desc: 'Cone mills, multi mills, ball mills, colloid mills, and triple roller mills for fine particle size reduction.',
  },
  {
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
    title: 'Coating Machines',
    desc: 'Automatic film coaters and conventional coating pans for sugar and film coating of tablets and pellets.',
  },
  {
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    title: 'Mixing & Blending',
    desc: 'Mass mixers, sigma mixers, all-shape blenders, ultra mixers, and stirrers for every blending application.',
  },
  {
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    title: 'Compression & Compaction',
    desc: 'Tablet presses, roller compactors, dry compaction systems, extruders, and spheronizers for solid dosage forms.',
  },
]
</script>

<style scoped>
/* About grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

.about-img-wrap {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.about-img {
  width: 100%;
  height: 420px;
  object-fit: cover;
}

.section-pre-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 10px;
}

.para {
  font-size: 0.95rem;
  color: var(--gray-600);
  line-height: 1.78;
  margin-bottom: 16px;
}

/* Leader card */
.leader-card {
  display: flex;
  gap: 48px;
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-200);
  max-width: 900px;
  margin: 0 auto;
  align-items: flex-start;
}

.avatar-placeholder {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--navy), var(--blue));
  color: var(--white);
  font-size: 1.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.leader-name {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 4px;
}

.leader-title {
  font-size: 0.85rem;
  color: var(--blue);
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 16px;
}

.leader-bio {
  font-size: 0.93rem;
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: 20px;
}

.career-timeline {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.career-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 0.88rem;
}

.career-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--blue);
  flex-shrink: 0;
  margin-top: 4px;
}

.career-item div strong {
  display: block;
  color: var(--gray-800);
  font-weight: 600;
}

.career-item div span {
  color: var(--gray-500);
}

/* Capabilities */
.bg-gray { background: var(--gray-50); }

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cap-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  padding: 28px 24px;
  transition: transform 0.25s, box-shadow 0.25s;
}

.cap-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.cap-icon {
  width: 48px;
  height: 48px;
  background: #e0eeff;
  color: var(--blue);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.cap-title {
  font-size: 0.97rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 8px;
}

.cap-desc {
  font-size: 0.84rem;
  color: var(--gray-500);
  line-height: 1.6;
}

/* CTA */
.about-cta {
  background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy-light) 100%);
  padding: 72px 0;
  text-align: center;
}

.about-cta h2 {
  font-size: 1.9rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 12px;
}

.about-cta p {
  color: rgba(255,255,255,0.68);
  font-size: 1rem;
  margin-bottom: 32px;
}

.cta-btns {
  display: flex;
  gap: 12px;
  justify-content: center;
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 36px; }
  .about-img { height: 250px; }
  .leader-card { flex-direction: column; gap: 24px; padding: 28px 24px; }
  .capabilities-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .capabilities-grid { grid-template-columns: 1fr; }
  .cta-btns { flex-direction: column; align-items: center; }
}
</style>
