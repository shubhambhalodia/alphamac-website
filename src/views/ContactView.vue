<template>
  <main>
    <div class="page-hero">
      <div class="container page-hero-content">
        <p class="page-hero-label">Get in Touch</p>
        <h1>Contact Us</h1>
        <p>We're here to help you find the right pharmaceutical equipment for your needs.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="contact-layout">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2 class="info-heading">Get in Touch</h2>
            <p class="info-sub">
              Whether you need a quotation, technical information, or after-sales support — our team is ready to assist.
            </p>

            <div class="info-cards">
              <div class="info-card" v-for="item in contactItems" :key="item.label">
                <div class="info-icon" v-html="item.icon"></div>
                <div class="info-details">
                  <h4>{{ item.label }}</h4>
                  <div v-for="line in item.lines" :key="line.text">
                    <a v-if="line.href" :href="line.href" class="info-link">{{ line.text }}</a>
                    <p v-else class="info-text">{{ line.text }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="enquiry-note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <p>For quotation requests, please mention your product of interest, required capacity, and any specific technical requirements.</p>
            </div>

            <a href="/Brochure.pdf" target="_blank" class="brochure-download">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download Company Brochure (PDF)
            </a>
          </div>

          <!-- Contact CTA Panel -->
          <div class="contact-cta-panel">
            <div class="cta-header">
              <h3>Request a Quote</h3>
              <p>Fill out your requirements and our team will respond within 24 hours.</p>
            </div>

            <div class="cta-form">
              <div class="form-group">
                <label>Full Name</label>
                <input v-model="form.name" type="text" placeholder="Your full name" />
              </div>
              <div class="form-group">
                <label>Company / Organisation</label>
                <input v-model="form.company" type="text" placeholder="Company name" />
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input v-model="form.email" type="email" placeholder="your@email.com" />
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input v-model="form.phone" type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div class="form-group">
                <label>Equipment of Interest</label>
                <input v-model="form.equipment" type="text" placeholder="e.g. Lab RMG, Fluid Bed Dryer..." />
              </div>
              <div class="form-group">
                <label>Message / Requirements</label>
                <textarea v-model="form.message" rows="4" placeholder="Describe your process requirements, capacity, and any specific technical needs..."></textarea>
              </div>
              <a
                :href="mailtoHref"
                class="btn btn-red submit-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Send Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  equipment: '',
  message: '',
})

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`Enquiry from ${form.value.name || 'Website Visitor'} — ${form.value.equipment || 'AlphaMac Equipment'}`)
  const body = encodeURIComponent(
    `Name: ${form.value.name}\nCompany: ${form.value.company}\nEmail: ${form.value.email}\nPhone: ${form.value.phone}\nEquipment: ${form.value.equipment}\n\nMessage:\n${form.value.message}`
  )
  return `mailto:alphamacmachinery@gmail.com?subject=${subject}&body=${body}`
})

const contactItems = [
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    label: 'Factory Office',
    lines: [
      { text: 'Vatva, Ahmedabad – 382445' },
      { text: 'Gujarat, India' },
    ],
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    label: 'Registered Office',
    lines: [
      { text: 'Vastral, Ahmedabad – 382418' },
      { text: 'Gujarat, India' },
    ],
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.77 9.6 19.79 19.79 0 01.7 1.13 2 2 0 012.68.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.82 7.82a16 16 0 006.04 6.04l1.18-1.18a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
    label: 'Phone',
    lines: [
      { text: '+91 94291 33147', href: 'tel:+919429133147' },
    ],
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    label: 'Email',
    lines: [
      { text: 'alphamacmachinery@gmail.com', href: 'mailto:alphamacmachinery@gmail.com' },
    ],
  },
]
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}

/* Info side */
.info-heading {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 12px;
}

.info-sub {
  font-size: 0.93rem;
  color: var(--gray-500);
  line-height: 1.7;
  margin-bottom: 32px;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 28px;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  padding: 18px 20px;
  transition: box-shadow 0.2s;
}

.info-card:hover {
  box-shadow: var(--shadow-sm);
}

.info-icon {
  width: 44px;
  height: 44px;
  background: #e0eeff;
  color: var(--blue);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-details h4 {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--gray-500);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.info-text {
  font-size: 0.9rem;
  color: var(--gray-700);
  line-height: 1.5;
}

.info-link {
  font-size: 0.9rem;
  color: var(--blue);
  text-decoration: none;
  font-weight: 500;
}

.info-link:hover { text-decoration: underline; }

.enquiry-note {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  margin-bottom: 24px;
  font-size: 0.84rem;
  color: #92400e;
  line-height: 1.6;
}

.enquiry-note svg { color: #d97706; flex-shrink: 0; margin-top: 1px; }

.brochure-download {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--blue);
  text-decoration: none;
  border: 2px solid var(--blue);
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
}

.brochure-download:hover {
  background: var(--blue);
  color: var(--white);
}

/* CTA Panel */
.contact-cta-panel {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.cta-header {
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  padding: 28px 32px;
}

.cta-header h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 6px;
}

.cta-header p {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.65);
}

.cta-form {
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--gray-700);
  letter-spacing: 0.02em;
}

.form-group input,
.form-group textarea {
  font-family: inherit;
  font-size: 0.9rem;
  padding: 10px 14px;
  border: 1.5px solid var(--gray-300);
  border-radius: var(--radius-sm);
  color: var(--gray-800);
  background: var(--white);
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(26,109,212,0.12);
}

.submit-btn {
  width: 100%;
  justify-content: center;
  margin-top: 4px;
  padding: 13px 24px;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .contact-layout { grid-template-columns: 1fr; gap: 40px; }
}
</style>
