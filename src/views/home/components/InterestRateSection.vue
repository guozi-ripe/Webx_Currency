<template>
  <section class="interest" id="interest">
    <div class="container">
      <div class="content">
        <h2>{{ $t("interest.title") }}</h2>
        <p>{{ $t("interest.sub") }}</p>
        <div class="actions">
          <button class="primary">{{ $t("interest.join") }}</button>
          <button class="ghost">{{ $t("interest.more") }}</button>
        </div>
      </div>
      <div class="figure">
        <div class="big">10%</div>
        <div class="bars">
          <span style="height: 24px"></span>
          <span style="height: 38px"></span>
          <span style="height: 52px"></span>
          <span style="height: 68px"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.interest {
  padding: 40px 24px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;
}

.content h2 {
  font-size: 28px;
  margin: 0 0 8px;
}

.content p {
  color: var(--color-muted);
}

.actions {
  margin-top: 14px;
  display: flex;
  gap: 10px;
}

.primary {
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
}

.ghost {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 8px 14px;
  color: var(--color-primary);
}

.figure {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 18px;
}

.big {
  font-size: 80px;
  color: var(--color-primary);
  font-weight: 700;
  line-height: 1;
}

.bars {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.bars span {
  width: 12px;
  background: #dbeafe;
  border-radius: 4px;
  display: block;
}

@media (max-width: 960px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
