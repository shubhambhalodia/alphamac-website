<template>
  <section class="stats">
    <div class="container">
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <div class="stat-icon" v-html="stat.icon"></div>
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    value: '30+ Years',
    label: 'Industry Experience',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
    value: '25+ Products',
    label: 'Equipment Range',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    value: 'GMP',
    label: 'Compliant Design',
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
    value: 'Expert',
    label: 'Design & Support',
  },
]
</script>

<style scoped>
.stats {
  background: var(--navy);
  padding: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat-item {
  padding: 36px 24px;
  text-align: center;
  border-right: 1px solid rgba(255,255,255,0.08);
  transition: background 0.25s;
}

.stat-item:last-child {
  border-right: none;
}

.stat-item:hover {
  background: rgba(255,255,255,0.04);
}

.stat-icon {
  color: #60a5fa;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}

.stat-value {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.5);
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .stat-item:nth-child(2) { border-right: none; }
  .stat-item:nth-child(3) { border-bottom: none; }
  .stat-item { border-bottom: 1px solid rgba(255,255,255,0.08); }
}

@media (max-width: 400px) {
  .stats-grid { grid-template-columns: 1fr; }
  .stat-item { border-right: none; }
}
</style>
