<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <RouterLink to="/" class="footer-logo-link">
              <img src="/image/logo.jpg" alt="AlphaMac Logo" class="footer-logo" />
              <span class="footer-brand-name">AlphaMac</span>
            </RouterLink>
            <p class="footer-about">
              Manufacturers of precision pharmaceutical process equipment for laboratory, pilot, and production scale operations.
              GMP compliant machinery since 2020.
            </p>
            <a href="mailto:alphamacmachinery@gmail.com" class="footer-email">
              alphamacmachinery@gmail.com
            </a>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-links">
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/products">Products</RouterLink></li>
              <li><RouterLink to="/about">About Us</RouterLink></li>
              <li><RouterLink to="/contact">Contact</RouterLink></li>
              <li><a href="/Brochure.pdf" target="_blank">Download Brochure</a></li>
            </ul>
          </div>

          <!-- Product Categories -->
          <div class="footer-col">
            <h4 class="footer-heading">Equipment</h4>
            <ul class="footer-links">
              <li><RouterLink to="/products">Granulation</RouterLink></li>
              <li><RouterLink to="/products">Drying</RouterLink></li>
              <li><RouterLink to="/products">Milling</RouterLink></li>
              <li><RouterLink to="/products">Coating</RouterLink></li>
              <li><RouterLink to="/products">Mixing & Blending</RouterLink></li>
              <li><RouterLink to="/products">Compression</RouterLink></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-col">
            <h4 class="footer-heading">Contact</h4>
            <ul class="footer-contact">
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Factory: Vatva, Ahmedabad – 382445, Gujarat</span>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>Regd. Office: Vastral, Ahmedabad – 382418</span>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.77 9.6 19.79 19.79 0 01.7 1.13 2 2 0 012.68.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.82 7.82a16 16 0 006.04 6.04l1.18-1.18a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:+919429133147">+91 94291 33147</a>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:alphamacmachinery@gmail.com">alphamacmachinery@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          <p>© {{ year }} AlphaMac Pharma Machinery. All rights reserved.</p>
          <p class="footer-domain">www.alphamacmachinery.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--navy-dark);
  color: rgba(255,255,255,0.65);
}

.footer-top {
  padding: 64px 0 48px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
}

.footer-logo-link {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  text-decoration: none;
}

.footer-logo {
  width: 38px;
  height: 38px;
  border-radius: 6px;
  object-fit: contain;
}

.footer-brand-name {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--white);
}

.footer-about {
  font-size: 0.85rem;
  line-height: 1.7;
  margin-bottom: 16px;
}

.footer-email {
  font-size: 0.84rem;
  color: #60a5fa;
  text-decoration: none;
}

.footer-email:hover {
  text-decoration: underline;
}

.footer-heading {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 18px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-size: 0.87rem;
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--white);
}

.footer-contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.84rem;
  line-height: 1.5;
}

.footer-contact svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: #60a5fa;
}

.footer-contact a {
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-contact a:hover {
  color: var(--white);
}

.footer-bottom {
  padding: 20px 0;
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.35);
}

.footer-domain {
  font-weight: 500;
}

@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
  .footer-brand { grid-column: 1 / -1; }
}

@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-brand { grid-column: auto; }
  .footer-bottom-inner { flex-direction: column; gap: 6px; text-align: center; }
}
</style>
