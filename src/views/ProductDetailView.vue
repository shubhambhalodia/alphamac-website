<template>
  <main v-if="product">
    <!-- Hero -->
    <div class="page-hero">
      <div class="container page-hero-content">
        <p class="page-hero-label">{{ product.category }}</p>
        <h1>{{ product.name }}</h1>
        <p>{{ product.fullName }}</p>
        <nav class="breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span class="breadcrumb-sep">/</span>
          <RouterLink to="/products">Products</RouterLink>
          <span class="breadcrumb-sep">/</span>
          <span>{{ product.name }}</span>
        </nav>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="detail-grid">
          <!-- Left: Image & Quick Info -->
          <div class="detail-left">
            <div class="product-image-wrap">
              <img :src="`/image/${product.image}`" :alt="product.fullName" class="product-main-image" />
            </div>

            <div class="quick-info">
              <div class="qi-row">
                <span class="qi-label">Category</span>
                <span class="badge badge-blue">{{ product.category }}</span>
              </div>
              <div class="qi-row">
                <span class="qi-label">Product Code</span>
                <span class="qi-value">{{ product.specs.headers[1] || 'Contact Us' }}</span>
              </div>
              <div class="qi-row">
                <span class="qi-label">MOC</span>
                <span class="qi-value">SS 316L (Contact Parts)</span>
              </div>
              <div class="qi-row">
                <span class="qi-label">Compliance</span>
                <span class="badge badge-green">GMP Compliant</span>
              </div>
            </div>

            <RouterLink to="/contact" class="btn btn-red quote-btn">Request a Quote</RouterLink>
            <a href="/Brochure.pdf" target="_blank" class="btn btn-outline brochure-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download Brochure
            </a>
          </div>

          <!-- Right: Details -->
          <div class="detail-right">
            <div class="detail-section">
              <h2 class="detail-heading">Application &amp; Process</h2>
              <p class="detail-process">{{ product.process }}</p>
            </div>

            <div class="detail-section">
              <h2 class="detail-heading">Technical Specifications</h2>
              <div class="spec-table-wrap">
                <table class="spec-table">
                  <thead>
                    <tr>
                      <th v-for="h in product.specs.headers" :key="h">{{ h }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in product.specs.rows" :key="row[0]">
                      <td v-for="(cell, ci) in row" :key="ci">{{ cell }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p v-if="product.note" class="spec-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {{ product.note }}
              </p>
            </div>
          </div>
        </div>

        <!-- Related Products -->
        <div v-if="related.length" class="related-section">
          <h2 class="related-title">Related Equipment</h2>
          <div class="related-grid">
            <ProductCard v-for="p in related" :key="p.id" :product="p" />
          </div>
        </div>
      </div>
    </section>
  </main>

  <main v-else class="not-found">
    <div class="container">
      <h2>Product not found</h2>
      <RouterLink to="/products" class="btn btn-primary">Back to Products</RouterLink>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import { getProductBySlug, getRelatedProducts } from '@/data/products.js'

const route = useRoute()
const product = computed(() => getProductBySlug(route.params.slug))
const related = computed(() =>
  product.value ? getRelatedProducts(product.value.id, product.value.category) : []
)
</script>

<style scoped>
.detail-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 48px;
  align-items: start;
}

/* Left column */
.product-image-wrap {
  background: var(--gray-100);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 20px;
  aspect-ratio: 4 / 3;
}

.product-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.quick-info {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  padding: 20px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.qi-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.qi-label {
  color: var(--gray-500);
  font-weight: 500;
}

.qi-value {
  color: var(--gray-800);
  font-weight: 600;
  font-size: 0.83rem;
}

.quote-btn {
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
}

.brochure-btn {
  width: 100%;
  justify-content: center;
}

/* Right column */
.detail-section {
  margin-bottom: 40px;
}

.detail-heading {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--gray-200);
}

.detail-process {
  color: var(--gray-600);
  line-height: 1.8;
  font-size: 0.95rem;
}

.spec-note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 16px;
  font-size: 0.82rem;
  color: var(--gray-500);
  background: var(--gray-50);
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--blue);
}

.spec-note svg {
  flex-shrink: 0;
  margin-top: 1px;
  color: var(--blue);
}

/* Related */
.related-section {
  margin-top: 56px;
  padding-top: 40px;
  border-top: 1px solid var(--gray-200);
}

.related-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 24px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Not found */
.not-found {
  margin-top: var(--navbar-height);
  padding: 80px 0;
  text-align: center;
}

.not-found h2 {
  margin-bottom: 24px;
  color: var(--navy);
}

@media (max-width: 900px) {
  .detail-grid { grid-template-columns: 1fr; }
  .related-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 500px) {
  .related-grid { grid-template-columns: 1fr; }
}
</style>
