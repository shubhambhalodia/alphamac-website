<template>
  <main>
    <HeroCarousel />
    <StatsCounter />

    <!-- About Preview -->
    <section class="section about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-image-wrap">
            <img src="/image/IMG_3997_final.jpg" alt="AlphaMac Pharma Machinery factory" class="about-image" />
            <div class="about-badge">
              <span class="badge-num">2020</span>
              <span class="badge-txt">Founded</span>
            </div>
          </div>
          <div class="about-content">
            <p class="section-pre-label">Who We Are</p>
            <h2 class="section-title">Built on Decades of<br>Pharma Engineering</h2>
            <p class="about-para">
              AlphaMac Pharma Machinery was founded in 2020 and specialises in manufacturing process equipment for
              pharmaceutical production, pilot &amp; laboratory scale operations. We are known as innovative
              manufacturers of processing systems covering drying, granulating, mixing, milling, size reducing,
              blending, tabletting, coating, pelletizing, stirring, homogenizing, and more.
            </p>
            <p class="about-para">
              Led by <strong>Mr. Manoj Bhalodia</strong> — a technocrat with 30 years of industry experience including
              tenures at Cadmach Machinery, Chamunda Pharma Machinery, and Prism Pharma Machinery as Design Manager —
              AlphaMac focuses on specialised mechanical and process engineering, along with automation solutions.
            </p>
            <RouterLink to="/about" class="btn btn-primary">Learn More About Us</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="section bg-gray">
      <div class="container">
        <div class="section-header centered">
          <p class="section-pre-label">Our Equipment</p>
          <h2 class="section-title">Featured Products</h2>
          <p class="section-subtitle">
            Explore our range of laboratory and pilot scale pharmaceutical process equipment — built for precision, durability, and GMP compliance.
          </p>
        </div>
        <div class="products-grid">
          <ProductCard v-for="product in featured" :key="product.id" :product="product" />
        </div>
        <div class="view-all-wrap">
          <RouterLink to="/products" class="btn btn-outline">
            View All {{ totalProducts }} Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-content">
            <h2 class="cta-title">Need Custom Equipment?</h2>
            <p class="cta-desc">We design and manufacture to your specifications. Get in touch with our engineering team for a consultation.</p>
          </div>
          <div class="cta-actions">
            <RouterLink to="/contact" class="btn btn-red">Request a Quote</RouterLink>
            <a href="tel:+919429133147" class="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.77 9.6 19.79 19.79 0 01.7 1.13 2 2 0 012.68.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.82 7.82a16 16 0 006.04 6.04l1.18-1.18a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Snapshot -->
    <section class="section">
      <div class="container">
        <div class="section-header centered">
          <p class="section-pre-label">Get In Touch</p>
          <h2 class="section-title">Find Us</h2>
        </div>
        <div class="contact-cards">
          <div class="contact-card">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h4>Factory Office</h4>
            <p>Vatva, Ahmedabad – 382445<br>Gujarat, India</p>
          </div>
          <div class="contact-card">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h4>Registered Office</h4>
            <p>Vastral, Ahmedabad – 382418<br>Gujarat, India</p>
          </div>
          <div class="contact-card">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.77 9.6 19.79 19.79 0 01.7 1.13 2 2 0 012.68.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.82 7.82a16 16 0 006.04 6.04l1.18-1.18a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <h4>Phone</h4>
            <p><a href="tel:+919429133147">+91 94291 33147</a></p>
          </div>
          <div class="contact-card">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h4>Email</h4>
            <p><a href="mailto:alphamacmachinery@gmail.com">alphamacmachinery@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeroCarousel from '@/components/HeroCarousel.vue'
import StatsCounter from '@/components/StatsCounter.vue'
import ProductCard from '@/components/ProductCard.vue'
import { getFeaturedProducts, products } from '@/data/products.js'

const featured = getFeaturedProducts()
const totalProducts = products.length
</script>

<style scoped>
/* About section */
.about-section {
  background: var(--white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

.about-image-wrap {
  position: relative;
}

.about-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.about-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--navy);
  color: var(--white);
  padding: 20px 24px;
  border-radius: var(--radius-md);
  text-align: center;
  box-shadow: var(--shadow-md);
}

.badge-num {
  display: block;
  font-size: 1.6rem;
  font-weight: 800;
}

.badge-txt {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.6);
}

.section-pre-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 10px;
}

.about-para {
  color: var(--gray-600);
  line-height: 1.75;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

/* Products section */
.bg-gray {
  background: var(--gray-50);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.view-all-wrap {
  display: flex;
  justify-content: center;
}

/* CTA Banner */
.cta-section {
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
  padding: 64px 0;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.cta-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.cta-desc {
  color: rgba(255,255,255,0.7);
  font-size: 0.97rem;
  max-width: 420px;
}

.cta-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

/* Contact cards */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.contact-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  padding: 28px 24px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.25s, transform 0.25s;
}

.contact-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.contact-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: #e0eeff;
  color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.contact-card h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 8px;
}

.contact-card p {
  font-size: 0.84rem;
  color: var(--gray-600);
  line-height: 1.6;
}

.contact-card a {
  color: var(--blue);
  text-decoration: none;
}

.contact-card a:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .about-grid { gap: 48px; }
  .contact-cards { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-image { height: 280px; }
  .about-badge { bottom: -16px; right: 16px; }
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-inner { flex-direction: column; text-align: center; }
  .cta-actions { justify-content: center; }
}

@media (max-width: 500px) {
  .products-grid { grid-template-columns: 1fr; }
  .contact-cards { grid-template-columns: 1fr; }
}
</style>
