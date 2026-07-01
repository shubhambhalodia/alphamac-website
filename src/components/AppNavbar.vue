<template>
  <header class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="navbar-inner container">
      <RouterLink to="/" class="navbar-brand" @click="menuOpen = false">
        <img src="/image/logo.jpg" alt="AlphaMac Logo" class="brand-logo" />
        <div class="brand-text">
          <span class="brand-name">AlphaMac</span>
          <span class="brand-tagline">Pharma Machinery</span>
        </div>
      </RouterLink>

      <nav class="navbar-nav" :class="{ open: menuOpen }">
        <RouterLink to="/" class="nav-link" exact-active-class="active" @click="menuOpen = false">Home</RouterLink>
        <RouterLink to="/products" class="nav-link" active-class="active" @click="menuOpen = false">Products</RouterLink>
        <RouterLink to="/about" class="nav-link" active-class="active" @click="menuOpen = false">About Us</RouterLink>
        <RouterLink to="/contact" class="nav-link" active-class="active" @click="menuOpen = false">Contact</RouterLink>
        <RouterLink to="/contact" class="btn btn-red nav-cta" @click="menuOpen = false">Request Quote</RouterLink>
      </nav>

      <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--navbar-height);
  background: transparent;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.navbar.scrolled,
.navbar.menu-open {
  background: var(--navy-dark);
  box-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Brand */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-logo {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  object-fit: contain;
  background: rgba(255,255,255,0.1);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-name {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -0.01em;
}

.brand-tagline {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.55);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* Nav */
.navbar-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link {
  padding: 8px 14px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255,255,255,0.82);
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--white);
  background: rgba(255,255,255,0.1);
}

.nav-cta {
  margin-left: 8px;
  padding: 9px 20px;
  font-size: 0.85rem;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .hamburger { display: flex; }

  .navbar-nav {
    display: none;
    position: absolute;
    top: var(--navbar-height);
    left: 0;
    right: 0;
    background: var(--navy-dark);
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
    gap: 4px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }

  .navbar-nav.open {
    display: flex;
  }

  .nav-link {
    padding: 12px 16px;
    font-size: 1rem;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 8px;
    text-align: center;
    justify-content: center;
  }
}
</style>
