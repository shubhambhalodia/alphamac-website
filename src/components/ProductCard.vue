<template>
  <RouterLink :to="`/products/${product.id}`" class="product-card">
    <div class="card-image">
      <img :src="`/image/${product.image}`" :alt="product.fullName" loading="lazy" />
      <div class="card-overlay">
        <span class="view-label">View Details →</span>
      </div>
    </div>
    <div class="card-body">
      <span class="badge badge-blue card-category">{{ product.category }}</span>
      <h3 class="card-title">{{ product.name }}</h3>
      <p class="card-full-name">{{ product.fullName }}</p>
      <p class="card-desc">{{ product.description }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
})
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-200);
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: var(--gray-100);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  padding: 12px;
  transition: transform 0.4s ease;
}

.product-card:hover .card-image img {
  transform: scale(1.04);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(11, 20, 55, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.product-card:hover .card-overlay {
  opacity: 1;
}

.view-label {
  color: var(--white);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  padding: 10px 22px;
  border: 2px solid rgba(255,255,255,0.7);
  border-radius: 24px;
}

.card-body {
  padding: 18px 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.card-category {
  align-self: flex-start;
  margin-bottom: 2px;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--navy);
  letter-spacing: -0.01em;
}

.card-full-name {
  font-size: 0.8rem;
  color: var(--gray-500);
  font-weight: 500;
}

.card-desc {
  font-size: 0.84rem;
  color: var(--gray-600);
  line-height: 1.55;
  margin-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
