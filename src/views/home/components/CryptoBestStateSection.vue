<template>
  <section class="crypto" id="crypto">
    <div class="container">
      <div class="icons">
        <img src="../../../assets/crypto2x.svg" alt="" />
      </div>
      <div class="text">
        <h2>{{ $t("crypto.title") }}</h2>
        <p>{{ $t("crypto.desc") }}</p>
        <button class="primary">{{ $t("crypto.search") }}</button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.crypto {
  padding: 48px 24px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
}

.icons {
  max-width: 400px;
  max-height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

.cell {
  height: 100px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #1f2937;
  border: 1px solid var(--color-border);
}

.text h2 {
  margin: 0 0 8px;
}

.text p {
  color: var(--color-muted);
}

.primary {
  margin-top: 14px;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
}

@media (max-width: 960px) {
  .container {
    grid-template-columns: 1fr;
  }

  .icons {
    max-width: 480px;
  }

  .cell {
    height: 80px;
  }
}
</style>
