<template>
  <section class="assets" id="assets">
    <div class="container">
      <div class="content">
        <div>
          <h2>{{ $t("assets.title") }}</h2>
          <p class="sub">{{ $t("assets.sub") }}</p>
        </div>
        <div class="canvas" ref="canvas">
          <div
            v-for="(c, i) in cards"
            :key="i"
            class="card"
            :style="cardStyle(i, c)"
          >
            <div class="top">
              <img :src="c.logo" alt="" class="icon" />
              <div class="percent">{{ c.percent }}</div>
            </div>
            <div class="bar"></div>
            <div class="label">{{ c.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import airbnb from "../../../assets/airbnb.svg";
import appleColored from "../../../assets/apple-colored.svg";
import bitcoin from "../../../assets/bitcoin1.svg";
import ethereum from "../../../assets/ethereum1.svg";
import spdrColored from "../../../assets/spdr-colored.svg";
import isharesColored from "../../../assets/ishares-colored.svg";
import netflix from "../../../assets/netflix.svg";

const cards = [
  { label: "Apple", percent: "30%", logo: appleColored, color: "#0f1224" },
  { label: "iShares", percent: "10%", logo: isharesColored, color: "#1b1f36" },
  { label: "Airbnb", percent: "18%", logo: airbnb, color: "#3a3e53" },
  { label: "Bitcoin", percent: "7%", logo: bitcoin, color: "#f2b705" },
  { label: "SPDR", percent: "14%", logo: spdrColored, color: "#39c26a" },
  { label: "Ethereum", percent: "5%", logo: ethereum, color: "#6b7280" },
  { label: "Netflix", percent: "16%", logo: netflix, color: "#ff4b5c" },
];

const targetsDesktop = [
  { x: 400, y: 120, r: -15 },
  { x: 40, y: -40, r: -10 },
  { x: 300, y: -60, r: -18 },
  { x: 240, y: 10, r: 12 },
  { x: 400, y: 240, r: 12 },
  { x: 20, y: 120, r: 5 },
  { x: 160, y: 260, r: 12 },
];
const targetsMobile = [
  { x: 150, y: 40, r: -12 },
  { x: 20, y: -30, r: -10 },
  { x: 100, y: -50, r: -16 },
  { x: 60, y: 0, r: 10 },
  { x: 180, y: 160, r: 12 },
  { x: 10, y: 100, r: 5 },
  { x: 90, y: 200, r: 12 },
];
const isMobile = ref(
  typeof window !== "undefined" ? window.innerWidth <= 960 : false
);

const canvas = ref(null);
const progress = ref(0);

function computeProgress() {
  const el = canvas.value;
  if (!el) return;
  isMobile.value = window.innerWidth <= 960;
  const rect = el.getBoundingClientRect();
  const viewport = window.innerHeight;
  const start = Math.min(viewport, rect.height) * 0.2;
  const end = rect.height * 0.8;
  const visible = viewport - rect.top;
  const p = Math.max(0, Math.min(1, (visible - start) / end));
  progress.value = p;
}

function cardStyle(i, c) {
  const tarr = isMobile.value ? targetsMobile : targetsDesktop;
  const t = tarr[i] || { x: 0, y: 0, r: 0 };
  const el = canvas.value;
  const rect = el ? el.getBoundingClientRect() : { width: 320, height: 420 };
  const baseW = isMobile.value ? 320 : 600;
  const baseH = isMobile.value ? 360 : 420;
  const sx = rect.width / baseW;
  const sy = rect.height / baseH;
  const tx = t.x * sx;
  const ty = t.y * sy;
  const startX = tx * 1.6;
  const startY = ty - 220 * sy;
  const x = startX + (tx - startX) * progress.value;
  const y = startY + (ty - startY) * progress.value;
  const r = t.r * progress.value;
  const o = Math.max(0, progress.value);
  return {
    transform: `translate(${x}px, ${y}px) rotate(${r}deg)`,
    opacity: o,
    background: c.color,
    boxShadow: `0 30px 40px rgba(0,0,0,${0.1 + 0.2 * progress.value})`,
  };
}

onMounted(() => {
  computeProgress();
  window.addEventListener("scroll", computeProgress, { passive: true });
  window.addEventListener("resize", computeProgress);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", computeProgress);
  window.removeEventListener("resize", computeProgress);
});
</script>

<style scoped lang="scss">
.assets {
  display: flex;
  padding: 60px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 120px;
}

.sub {
  color: var(--color-muted);
}

.canvas {
  transform: translate(-50%, 30%);
  left: 20%;
  height: 420px;
  width: 50%;
  position: relative;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  border-radius: 16px;
}

.card {
  position: absolute;
  width: 220px;
  height: 140px;
  border-radius: 18px;
  color: #fff;
  padding: 16px;
  overflow: hidden; /* 1. 隐藏所有溢出内容 */
  word-wrap: break-word; /* 2. 允许长单词或URL在中间换行 */
}
.top,
.label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.top {
  display: flex;
  justify-content: space-between;
  min-width: 0;
}

.icon {
  width: 28px;
  height: 28px;
  filter: brightness(1.2);
}

.percent {
  font-weight: 800;
}

.bar {
  height: 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.6);
  margin: 10px 0 8px;
  position: relative;
}

.bar::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40%;
  background: #fff;
  border-radius: 6px;
}

.label {
  font-size: 12px;
  opacity: 0.9;
}

@media (max-width: 960px) {
  .assets {
    padding: 60px 16px;
    margin: 0 auto;
  }
  .card {
    width: 130px;
    height: 90px;
  }
  .sub {
    white-space: wrap;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .canvas {
    transform: translate(-50%, 20%);
    left: 48%;
    width: 100%;
    max-width: 500px !important;
    height: 360px;
    position: relative;
    background: linear-gradient(180deg, #ffffff, #f8fafc);
    border-radius: 16px;
  }
}
</style>
