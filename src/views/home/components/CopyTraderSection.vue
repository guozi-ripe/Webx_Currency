<template>
  <section class="promo-dark" id="promo">
    <div class="inner">
      <h2 class="heading">{{ $t("promo.title") }}</h2>
      <p class="sub">{{ $t("promo.desc") }}</p>
      <div class="chips-wrapper" ref="chipsWrapperRef">
        <div
          class="chips-container"
          ref="chipsContainerRef"
          :class="{ 'auto-scrolling': state.isMobile && !state.isPaused }"
          :style="containerStyle"
        >
          <div
            v-for="(t, i) in displayTokens"
            :key="t.code + '-' + i"
            class="chip"
          >
            <div class="chip-icon" v-if="t.icon">
              <img :src="t.icon" :alt="t.label" loading="lazy" />
            </div>
            <div class="chip-text">
              <span class="label">{{ t.label }}</span>
              <span class="code">{{ t.code }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PartnerSection
      :title="'合作伙伴'"
      :section-index="7"
      :is-mobile-device="isMobileDevice"
    />
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive, computed } from "vue";
import bitcoin from "../../../assets/bitcoin.svg";
import ethereum from "../../../assets/ethereum.svg";
import ethereumClassic from "../../../assets/ethereum-classic.svg";
import bitcoinCash from "../../../assets/bitcoin-cash.svg";
import polygon from "../../../assets/polygon.svg";
import solana from "../../../assets/solana.svg";
import stellar from "../../../assets/stellar.svg";
import doge from "../../../assets/doge.svg";
import tron from "../../../assets/tron.svg";
import algorand from "../../../assets/algorand.svg";
import aave from "../../../assets/aave.svg";
import cosmos from "../../../assets/cosmos.svg";
import litecoin from "../../../assets/litecoin.svg";
import avalanche from "../../../assets/avalanche.svg";
import compound from "../../../assets/compound.svg";
import uniswap from "../../../assets/uniswap.svg";
import PartnerSection from "./PartnerSection.vue";
const isMobileDevice = ref(false);
const tokens = [
  { label: "比特币", code: "BTC", icon: bitcoin },
  { label: "以太坊", code: "ETH", icon: ethereum },
  { label: "以太坊经典", code: "ETC", icon: ethereumClassic },
  { label: "比特币现金", code: "BCH", icon: bitcoinCash },
  { label: "MATIC", code: "MATIC", icon: polygon },
  { label: "索拉纳", code: "SOL", icon: solana },
  { label: "Stellar", code: "XLM", icon: stellar },
  { label: "狗狗币", code: "DOGE", icon: doge },
  { label: "TRX", code: "TRX", icon: tron },
  { label: "Algorand", code: "ALGO", icon: algorand },
  { label: "Aave", code: "AAVE", icon: aave },
  { label: "宇宙", code: "ATOM", icon: cosmos },
  { label: "莱特币", code: "LTC", icon: litecoin },
  { label: "雪崩", code: "AVAX", icon: avalanche },
  { label: "化合物", code: "COMP", icon: compound },
  { label: "Uniswap", code: "UNI", icon: uniswap },
];

const chipsWrapperRef = ref(null);
const chipsContainerRef = ref(null);

// 状态管理
const state = reactive({
  currentPosition: 0,
  isPaused: false,
  isMobile: false,
  chipWidth: 0,
  containerWidth: 0,
  totalWidth: 0,
  scrollTimer: null,
});

// 配置参数
const CONFIG = {
  scrollSpeed: 2, // 滚动速度
  scrollInterval: 16, // 约60fps
};

const prefersReducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

// PC端使用原始数据，移动端使用单组重复数据
const displayTokens = computed(() => {
  return state.isMobile ? [...tokens] : tokens;
});

// 计算容器样式 - 只在移动端应用transform
const containerStyle = computed(() => {
  if (!state.isMobile) {
    return {};
  }

  return {
    transform: `translateX(${-state.currentPosition}px)`,
    transition: "transform 0.4s ease",
  };
});

// 初始化尺寸计算
function initSizes() {
  if (!chipsWrapperRef.value || !chipsContainerRef.value) return;

  state.containerWidth = chipsWrapperRef.value.clientWidth;

  // 计算单个chip宽度
  const chipElement = chipsContainerRef.value.querySelector(".chip");
  if (chipElement) {
    const style = getComputedStyle(chipElement);
    const width = chipElement.offsetWidth;
    const marginRight = parseFloat(style.marginRight) || 0;
    state.chipWidth = width + marginRight;
    state.totalWidth = state.chipWidth * tokens.length;
  }

  state.isMobile = window.matchMedia("(max-width: 768px)").matches;
}

// 核心滚动函数 - 只在移动端生效
function smoothScroll() {
  if (!state.isMobile || state.isPaused || prefersReducedMotion) return;

  state.currentPosition += CONFIG.scrollSpeed;

  // 循环逻辑：到达末尾时回到起点
  if (state.currentPosition >= state.totalWidth + 100) {
    state.currentPosition = -state.containerWidth;
  }
}

// 启动平滑滚动
function startSmoothScroll() {
  if (!state.isMobile || state.scrollTimer) return;

  state.scrollTimer = setInterval(() => {
    smoothScroll();
  }, CONFIG.scrollInterval);
}

// 停止滚动
function stopSmoothScroll() {
  if (state.scrollTimer) {
    clearInterval(state.scrollTimer);
    state.scrollTimer = null;
  }
}

// 交互控制
function pauseAutoPlay() {
  state.isPaused = true;
  stopSmoothScroll();
}

function resumeAutoPlay() {
  state.isPaused = false;
  if (state.isMobile) {
    setTimeout(() => {
      startSmoothScroll();
    }, 1000);
  }
}

// 事件处理 - 条件化执行
const onMouseEnter = () => {
  if (state.isMobile) pauseAutoPlay();
};

const onMouseLeave = () => {
  if (state.isMobile) resumeAutoPlay();
};

const onTouchStart = () => {
  if (state.isMobile) pauseAutoPlay();
};

const onTouchEnd = () => {
  if (state.isMobile) {
    setTimeout(() => {
      resumeAutoPlay();
    }, 800);
  }
};

// 响应式处理
function handleResize() {
  initSizes();
  if (state.isMobile && !prefersReducedMotion) {
    resumeAutoPlay();
  } else {
    pauseAutoPlay();
    state.currentPosition = 0;
  }
}

onMounted(() => {
  if (typeof window === "undefined") return;

  initSizes();

  const wrapper = chipsWrapperRef.value;
  if (wrapper) {
    wrapper.addEventListener("mouseenter", onMouseEnter);
    wrapper.addEventListener("mouseleave", onMouseLeave);
    wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
    wrapper.addEventListener("touchend", onTouchEnd, { passive: true });
  }

  const mediaQuery = window.matchMedia("(max-width: 768px)");
  mediaQuery.addEventListener("change", (e) => {
    state.isMobile = e.matches;
    handleResize();
  });

  window.addEventListener("resize", handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  stopSmoothScroll();

  const wrapper = chipsWrapperRef.value;
  if (wrapper) {
    wrapper.removeEventListener("mouseenter", onMouseEnter);
    wrapper.removeEventListener("mouseleave", onMouseLeave);
    wrapper.removeEventListener("touchstart", onTouchStart);
    wrapper.removeEventListener("touchend", onTouchEnd);
  }

  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped lang="scss">
.promo-dark {
  padding: 48px 24px;
  color: #d1d5db;
}

.inner {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.heading {
  font-weight: bold;
  font-size: 38px;
  color: #343434;
}

.sub {
  font-weight: bold;
  font-size: 30px;
  color: #343434;
}

.chips-wrapper {
  width: 100%;
  overflow: visible;
  position: relative;
}

.chips-container {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  width: auto;
  padding: 6px 0;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0a3c9f;
  border-radius: 999px;
  padding: 10px 14px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.06);
  min-height: 40px;
  animation: chip-enter 0.4s ease-out both;
  transition: transform 180ms ease, box-shadow 180ms ease;
  flex-shrink: 0;
}

.chip:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: inset 0 0 0 1px #374151, 0 6px 18px rgba(10, 60, 159, 0.25);
}

.chip-icon img {
  width: 24px;
  height: 24px;
  display: block;
  transition: transform 180ms ease;
}

.chip:hover .chip-icon img {
  transform: rotate(-4deg) scale(1.05);
}

.chip-text {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.label {
  color: #e5e7eb;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.code {
  color: #9ca3af;
  font-weight: 600;
  font-size: 12px;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .promo-dark .inner .heading {
    font-weight: bold;
    font-size: 28px;
    color: #343434;
  }
  .promo-dark .inner .sub {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #343434;
  }
  .promo-dark {
    padding: 48px 24px 0;
    color: #d1d5db;
  }

  .inner {
    margin: 0 auto;
    text-align: center;
  }
  .chips-wrapper {
    overflow: hidden;
    padding: 6px 16px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .chips-container {
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: max-content;
    gap: 12px;
    will-change: transform;
  }

  .chips-container.auto-scrolling {
    cursor: grabbing;
  }

  .chip {
    padding: 10px 12px;
    min-width: 120px;
    animation: none;
  }

  .chip-icon img {
    width: 22px;
    height: 22px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .chip {
    animation: none;
    transition: none;
  }

  .chip:hover {
    transform: none;
    box-shadow: inset 0 0 0 1px #374151;
  }

  .chip-icon img {
    transition: none;
  }

  .chips-container {
    transition: none;
  }
}
</style>
