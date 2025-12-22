<template>
  <!-- 合作伙伴 -->
  <div
    class="partner"
    :class="sectionClass"
    :ref="(el) => setSectionRef(el, 6)"
    :style="{ '--section-index': 6 }"
  >
    <div class="title">
      <div>{{ "common.合作伙伴" }}</div>
    </div>

    <!-- 内容 - 优化后的走马灯 -->
    <div class="scroll-container">
      <!-- 第一行：从左向右 -->
      <div class="scroll-row">
        <div class="scroll-content">
          <div
            class="item"
            v-for="(item, index) in partnerLogos1"
            :key="`logo1-${index}`"
          >
            <img :src="getSmartImageUrl(item)" alt="合作伙伴" />
          </div>
          <div
            class="item"
            v-for="(item, index) in partnerLogos1"
            :key="`logo1-dup-${index}`"
          >
            <img :src="getSmartImageUrl(item)" alt="合作伙伴" />
          </div>
        </div>
      </div>

      <!-- 第二行：从右向左 -->
      <div class="scroll-row">
        <div class="scroll-content reverse">
          <div
            class="item"
            v-for="(item, index) in partnerLogos2"
            :key="`logo2-${index}`"
          >
            <img :src="getSmartImageUrl(item)" alt="合作伙伴" />
          </div>
          <div
            class="item"
            v-for="(item, index) in partnerLogos2"
            :key="`logo2-dup-${index}`"
          >
            <img :src="getSmartImageUrl(item)" alt="合作伙伴" />
          </div>
        </div>
      </div>

      <!-- 第三行：从左向右 -->
      <div class="scroll-row">
        <div class="scroll-content">
          <div
            class="item"
            v-for="(item, index) in partnerLogos3"
            :key="`logo3-${index}`"
          >
            <img :src="getSmartImageUrl(item)" alt="合作伙伴" />
          </div>
          <div
            class="item"
            v-for="(item, index) in partnerLogos3"
            :key="`logo3-dup-${index}`"
          >
            <img :src="getSmartImageUrl(item)" alt="合作伙伴" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 定义props接收父组件传递的数据
const props = defineProps({
  isMobileDevice: Boolean,
  isAutoScrollEnabled: Boolean,
  sectionIndex: {
    type: Number,
    default: 6,
  },
  title: {
    type: String,
    default: "合作伙伴",
  },
  setSectionRef: {
    type: Function,
    default: () => {},
  },
});

import { computed, getCurrentInstance, onMounted } from "vue";
// import { getSmartImageUrl } from "../utils/assetHelper";
const getSmartImageUrl = (imagePath) => {
  return new URL(`../assets/${imagePath}`, import.meta.url).href;
};
// import { useI18n } from "vue-i18n";
const instance = getCurrentInstance();
// const { t } = useI18n();
// 合作伙伴logo数据 - 现在在组件内部定义，确保数据独立性和可复用性[3](@ref)
const partnerLogos1 = [
  "home/Carousel_1.png",
  "home/Carousel_2.png",
  "home/Carousel_3.png",
  "home/Carousel_4.png",
  "home/Carousel_5.png",
];

const partnerLogos2 = [
  "home/Carousel_1-1.png",
  "home/Carousel_1-2.png",
  "home/Carousel_1-3.png",
  "home/Carousel_1-4.png",
  "home/Carousel_1-5.png",
  // "home/Carousel_1-6.png",
  "home/Carousel_1-7.png",
];

const partnerLogos3 = [
  // "home/Carousel_2-1.png",
  "home/Carousel_2-2.png",
  "home/Carousel_2-3.png",
  "home/Carousel_2-4.png",
  "home/Carousel_2-5.png",
  "home/Carousel_2-6.png",
  "home/Carousel_2-7.png",
];
const sectionClass = computed(() => {
  return {
    partner: true,
    "section-item": !props.isMobileDevice && props.isAutoScrollEnabled,
  };
});
onMounted(() => {});
</script>

<style scoped lang="scss">
// 为每个板块设置动画延迟
.section-item {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-in-out;

  &:nth-child(1) {
    transition-delay: 0.1s;
  }
  &:nth-child(2) {
    transition-delay: 0.2s;
  }
  &:nth-child(3) {
    transition-delay: 0.3s;
  }
  &:nth-child(4) {
    transition-delay: 0.4s;
  }
  &:nth-child(5) {
    transition-delay: 0.5s;
  }
  &:nth-child(6) {
    transition-delay: 0.6s;
  }
  &:nth-child(7) {
    transition-delay: 0.7s;
  }
}
.title {
  display: flex;
  align-items: center;
  gap: 22px;
  justify-content: center;
  font-weight: 400;
  font-size: 40px;
  color: #010101;
  margin-bottom: 81px;
}
.partner {
  margin-bottom: 176px;
  padding: 48px 24px;
  .scroll-container {
    overflow: hidden;
    width: 100%;

    .scroll-row {
      overflow: hidden;
      margin: 15px 0;
    }

    .scroll-content {
      display: flex;
      animation: scroll-left 30s linear infinite;
      will-change: transform;

      &:hover {
        animation-play-state: paused;
      }

      &.reverse {
        animation-name: scroll-right;
      }
    }

    .item {
      min-width: 160px;
      text-align: center;
      padding: 15px;
      box-sizing: border-box;
      margin-right: 10px;
      flex-shrink: 0;

      img {
        width: 244px;
        height: auto;
        filter: grayscale(100%);
        transition: filter 0.3s ease;

        &:hover {
          filter: grayscale(0%);
          transform: scale(1.05);
        }
      }
    }
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%); /* 起始位置向左偏移50%，让重复的内容立刻接上 */
  }
  100% {
    transform: translateX(0%); /* 结束位置回到初始状态 */
  }
}

@media (max-width: 768px) {
  .partner {
    margin-bottom: 100px;

    .scroll-container {
      .item {
        min-width: 120px;
        padding: 10px;
        margin-right: 5px;

        img {
          width: 100px;
        }
      }
    }
  }
}
</style>
