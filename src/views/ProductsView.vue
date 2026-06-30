<template>
  <main>
    <div class="page-hero">
      <div class="container page-hero-content">
        <p class="page-hero-label">Our Equipment Range</p>
        <h1>Pharmaceutical Process Equipment</h1>
        <p>Laboratory &amp; Pilot Scale machinery engineered for precision, durability, and GMP compliance.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <!-- Category Filter -->
        <div class="filter-bar">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
            <span class="filter-count">{{ getCategoryCount(cat) }}</span>
          </button>
        </div>

        <!-- Results info -->
        <p class="results-info">
          Showing {{ filtered.length }} product{{ filtered.length !== 1 ? 's' : '' }}
          <span v-if="activeCategory !== 'All'"> in <strong>{{ activeCategory }}</strong></span>
        </p>

        <!-- Products Grid -->
        <Transition name="fade" mode="out-in">
          <div class="products-grid" :key="activeCategory">
            <ProductCard
              v-for="product in filtered"
              :key="product.id"
              :product="product"
            />
          </div>
        </Transition>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { products, getCategoryList, getProductsByCategory } from '@/data/products.js'

const categories = getCategoryList()
const activeCategory = ref('All')

const filtered = computed(() => getProductsByCategory(activeCategory.value))

const getCategoryCount = (cat) =>
  cat === 'All' ? products.length : products.filter(p => p.category === cat).length
</script>

<style scoped>
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 0.85rem;
  font-weight: 500;
  background: var(--gray-100);
  color: var(--gray-700);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  background: var(--gray-200);
  color: var(--gray-800);
}

.filter-btn.active {
  background: var(--navy);
  color: var(--white);
  border-color: var(--navy);
}

.filter-count {
  font-size: 0.72rem;
  background: rgba(255,255,255,0.2);
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: 600;
}

.filter-btn:not(.active) .filter-count {
  background: var(--gray-300);
  color: var(--gray-600);
}

.results-info {
  font-size: 0.88rem;
  color: var(--gray-500);
  margin-bottom: 28px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .products-grid { grid-template-columns: 1fr; }
}
</style>
