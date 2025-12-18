<template>
  <section class="sponsors" id="sponsors">
    <div class="container">
      <h3>團隊背景</h3>
      <div class="carousel">
        <div class="track" ref="track">
          <div v-for="(page, i) in pages" :key="i" class="slide">
            <div class="row">
              <div v-for="(item, j) in page" :key="j" class="logo-card">
                <div class="cover">
                  <img :src="item.src" :alt="item.title" />
                </div>
                <div class="title">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="dots">
          <div
            v-for="(p, i) in pages"
            :key="'d' + i"
            :class="['dot', current === i ? 'active' : '']"
            @click="go(i)"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import airbnb from "../../../assets/airbnb.svg";
import apple from "../../../assets/apple-colored.svg";
import netflix from "../../../assets/netflix.svg";
import spdr from "../../../assets/spdr-colored.svg";
import ishares from "../../../assets/ishares-colored.svg";
import webull from "../../../assets/webullglobal.svg";
import vueLogo from "../../../assets/vue.svg";
import ethereum from "../../../assets/ethereum.svg";
import polygon from "../../../assets/polygon.svg";
import chainlink from "../../../assets/chainlink.svg";

const logos: { src: string; title: string }[] = [
  { src: airbnb, title: "Airbnb" },
  { src: apple, title: "Apple" },
  { src: netflix, title: "Netflix" },
  { src: spdr, title: "SPDR" },
  { src: ishares, title: "iShares" },
  { src: webull, title: "Webull" },
  { src: vueLogo, title: "Vue" },
  { src: ethereum, title: "Ethereum" },
  { src: polygon, title: "Polygon" },
  { src: chainlink, title: "Chainlink" },
];

const track = ref<HTMLDivElement | null>(null);
const current = ref(0);
const isMobile = ref(
  typeof window !== "undefined" ? window.innerWidth <= 960 : false
);
const perSlide = computed(() => (isMobile.value ? 3 : 5));
const pages = computed(() => {
  const out: { src: string; title: string }[][] = [];
  const size = perSlide.value;
  for (let i = 0; i < logos.length; i += size) {
    out.push(logos.slice(i, i + size));
  }
  return out;
});

function go(i: number) {
  current.value = i;
  const el = track.value;
  if (!el) return;
  el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
}

let timer: number | undefined;
function start() {
  stop();
  if (pages.value.length <= 1) return;
  timer = window.setInterval(() => {
    const next = (current.value + 1) % pages.value.length;
    go(next);
  }, 3500);
}
function stop() {
  if (timer) {
    clearInterval(timer);
    timer = undefined;
  }
}

function handleResize() {
  isMobile.value = window.innerWidth <= 960;
  go(current.value);
}

onMounted(() => {
  start();
  window.addEventListener("resize", handleResize);
  const el = track.value;
  if (!el) return;
  el.addEventListener("mouseenter", stop);
  el.addEventListener("mouseleave", start);
  el.addEventListener("touchstart", stop, {
    passive: true,
  } as AddEventListenerOptions);
  el.addEventListener("touchend", start, {
    passive: true,
  } as AddEventListenerOptions);
});

onBeforeUnmount(() => {
  stop();
  window.removeEventListener("resize", handleResize);
  const el = track.value;
  if (!el) return;
  el.removeEventListener("mouseenter", stop);
  el.removeEventListener("mouseleave", start);
  el.removeEventListener("touchstart", stop as EventListener);
  el.removeEventListener("touchend", start as EventListener);
});
</script>

<style scoped lang="scss">
.sponsors {
  padding: 24px;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  align-items: center;
}

.logo-card {
  background: #fff;
  border: 1px solid #e5eaf2;
  border-radius: 12px;
  margin: 30px 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);
  transition: transform 180ms ease, box-shadow 180ms ease,
    border-color 180ms ease;
  position: relative;
}

.logo-card:hover {
  transform: translateY(-3px) translateZ(0);
  box-shadow: 0 12px 18px rgba(0, 0, 0, 0.08);
  outline: 1px solid var(--color-primary);
  z-index: 2;
}

.cover {
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.title {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #111;
}

.carousel {
  position: relative;
}

.track {
  display: flex;
  overflow-x: hidden;
  overflow-y: visible;
  scroll-snap-type: x mandatory;
}

.slide {
  min-width: 100%;
  scroll-snap-align: start;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e5e7eb;
  cursor: pointer;
}

.dot.active {
  background: var(--color-primary);
}

@media (max-width: 960px) {
  .row {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
