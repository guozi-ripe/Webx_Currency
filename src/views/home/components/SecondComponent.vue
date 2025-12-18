<template>
  <section class="hero-stats">
    <div class="stats">
      <div class="item">
        <img src="../../../assets/Award_default.svg" alt="">
        <div class="label">{{ $t('hero.stats.rating') }}</div>
      </div>
      <div class="item">
        <img src="../../../assets/Favorite_list_default.svg" alt="">
        <div class="label">{{ $t('hero.stats.investors') }}</div>
      </div>
      <div class="item">
        <img src="../../../assets/Friends_default.svg" alt="">
        <div class="label">{{ $t('hero.stats.projects') }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-stats {
  padding: 24px;
}

.stats {
  max-width: 1200px;
  margin: 15px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 20px 16px;
  font-size: 20px;
  color: #000;
  position: relative;
  z-index: 1;
}

.item {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #000;
  border-right: 1px solid rgba(255, 255, 255, 0.6);
}

.item:last-child {
  border-right: none;
}

.item img {
  width: 64px;
  height: 64px;
}

.label {
  font-weight: 700;
}

.phone {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: linear-gradient(135deg, #e2e8f0 0%, #9ca3af 100%);
}

.badge {
  position: absolute;
  background: #fff;
  border-radius: 12px;
  padding: 10px 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  font-weight: 600;
  border: 1px solid var(--color-border);
}

@media (max-width: 960px) {
  .container {
    grid-template-columns: 1fr;
  }

  .stats {
    padding: 10px 12px;
  }
}

@media (max-width: 600px) {
  .text h1 {
    font-size: 32px;
  }

  .sub {
    font-size: 14px;
  }

  .stats {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 8px 10px;
  }

  .item {
    flex: none;
    width: 100%;
    justify-content: flex-start;
    border-right: none;
  }
}
</style>
