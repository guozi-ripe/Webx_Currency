<template>
  <section class="partners" id="partners">
    <div class="container">
      <h2>{{ $t("partners.title") }}</h2>
      <p class="sub">{{ $t("partners.sub") }}</p>
      <div class="logos">
        <div class="logo">J.P. Morgan</div>
        <div class="logo">UBS</div>
        <div class="logo">Citi</div>
        <div class="logo">Deutsche Bank</div>
        <div class="logo">Coutts</div>
        <div class="logo">J. Safra Sarasin</div>
        <div class="logo">PICTET</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.partners {
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

.logos {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.logo {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 18px;
  font-weight: 600;
  transition: transform 180ms ease, box-shadow 180ms ease,
    border-color 180ms ease;
}

.logo:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.06);
  border-color: var(--color-primary);
}

@media (max-width: 960px) {
  .logos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .logos {
    grid-template-columns: 1fr;
  }
}
</style>
