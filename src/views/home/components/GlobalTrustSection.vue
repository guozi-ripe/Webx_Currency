<template>
  <section class="trust" id="trust">
    <div class="container">
      <h2>{{ $t('trust.title') }}</h2>
      <p class="sub">{{ $t('trust.sub') }}</p>
      <div class="cards">
        <div class="card">
          <div class="icon">👥</div>
          <div class="title">{{ $t('trust.cards.social.title') }}</div>
          <div class="desc">{{ $t('trust.cards.social.desc') }}</div>
        </div>
        <div class="card">
          <div class="icon">🛡️</div>
          <div class="title">{{ $t('trust.cards.reliable.title') }}</div>
          <div class="desc">{{ $t('trust.cards.reliable.desc') }}</div>
        </div>
        <div class="card">
          <div class="icon">🔒</div>
          <div class="title">{{ $t('trust.cards.guarantee.title') }}</div>
          <div class="desc">{{ $t('trust.cards.guarantee.desc') }}</div>
        </div>
        <div class="card">
          <div class="icon">🌍</div>
          <div class="title">{{ $t('trust.cards.global.title') }}</div>
          <div class="desc">{{ $t('trust.cards.global.desc') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.trust {
  padding: 36px 24px;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.sub {
  color: var(--color-muted);
}

.cards {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 24px;
  transition: transform 180ms ease, box-shadow 180ms ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}

.icon {
  width: 92px;
  height: 92px;
  border-radius: 18px;
  background: linear-gradient(135deg, #eaf2ff 0%, #dbeafe 100%);
  border: 1px solid #cfe2ff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(10, 60, 159, 0.12);
  margin: 0 auto;
  font-size: 52px;
}

.title {
  margin-top: 8px;
  font-weight: 700;
  font-size: 20px;
}

.desc {
  margin-top: 6px;
  color: #555;
}

@media (max-width: 960px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
