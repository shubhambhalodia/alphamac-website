<template>
  <section class="hero">
    <div class="hero-slides">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="hero-slide"
        :class="{ active: i === current }"
        :style="{ backgroundImage: `url(${slide.image})` }"
      ></div>
    </div>
    <div class="hero-overlay"></div>

    <div class="hero-content container">
      <span class="hero-label animate-up">GMP Compliant Pharmaceutical Equipment</span>
      <h1 class="hero-title animate-up">
        Precision Engineering<br>for Pharma Excellence
      </h1>
      <p class="hero-desc animate-up">
        Laboratory &amp; Pilot Scale process equipment for drying, granulating, milling, coating and more —
        trusted by pharma professionals since 2020.
      </p>
      <div class="hero-actions animate-up">
        <RouterLink to="/products" class="btn btn-primary">Explore Products</RouterLink>
        <a href="/Brochure.pdf" target="_blank" class="btn btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          Download Brochure
        </a>
      </div>
    </div>

    <div class="hero-indicators">
      <button
        v-for="(_, i) in slides"
        :key="i"
        class="indicator"
        :class="{ active: i === current }"
        @click="goTo(i)"
        :aria-label="`Slide ${i + 1}`"
      ></button>
    </div>

    <button class="hero-arrow prev" @click="prev" aria-label="Previous slide">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button class="hero-arrow next" @click="next" aria-label="Next slide">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  { image: '/image/LAB_High_Shear_Mixer_Granulator1.jpg' },
  { image: '/image/Lab_Multi_Mill1.jpg' },
  { image: '/image/Lab_Blender1.jpg' },
  { image: '/image/Lab_Mill1.jpg' },
]

const current = ref(0)
let timer = null

const goTo = (i) => {
  current.value = i
  resetTimer()
}

const next = () => {
  current.value = (current.value + 1) % slides.length
  resetTimer()
}

const prev = () => {
  current.value = (current.value - 1 + slides.length) % slides.length
  resetTimer()
}

const resetTimer = () => {
  clearInterval(timer)
  timer = setInterval(next, 4000)
}

onMounted(() => { timer = setInterval(next, 4000) })
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 560px;
  max-height: 900px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-slides {
  position: absolute;
  inset: 0;
}

.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease;
}

.hero-slide.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(6, 12, 36, 0.85) 0%,
    rgba(11, 20, 55, 0.65) 50%,
    rgba(6, 12, 36, 0.75) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 680px;
  padding-top: var(--navbar-height);
}

.hero-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #60a5fa;
  background: rgba(96, 165, 250, 0.12);
  border: 1px solid rgba(96, 165, 250, 0.25);
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.6rem);
  font-weight: 800;
  color: var(--white);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-desc {
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  color: rgba(255,255,255,0.75);
  max-width: 520px;
  line-height: 1.7;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

/* Indicators */
.hero-indicators {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
}

.indicator {
  width: 28px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255,255,255,0.35);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.3s, width 0.3s;
}

.indicator.active {
  background: var(--white);
  width: 44px;
}

/* Arrows */
.hero-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  backdrop-filter: blur(4px);
}

.hero-arrow:hover {
  background: rgba(255,255,255,0.22);
}

.hero-arrow.prev { left: 24px; }
.hero-arrow.next { right: 24px; }

@media (max-width: 768px) {
  .hero { height: 85vh; max-height: 700px; }
  .hero-actions { flex-direction: column; }
  .hero-arrow { display: none; }
}
</style>
