<template>
  <section class="hero" id="hero">
    <div
      class="background-carousel"
      :style="{
        backgroundImage: `url(${backgroundImageUrl})`,
      }"
    ></div>
    <div class="container">
      <div class="text-content">
        <h1>{{ $t("hero.title") }}</h1>
        <h3>{{ $t("hero.title2") }}</h3>
        <p class="subtitle">{{ $t("hero.sub") }}</p>
        <div class="actions">
          <button class="primary">{{ $t("hero.ctaPrimary") }}</button>
          <button class="ghost">{{ $t("hero.ctaSecondary") }}</button>
        </div>
      </div>
      <div class="banner_img" v-if="!isMobile">
        <div class="banner01">
          <div class="imgLogo"><img src="@/assets/new/diqiu.gif" alt="" /></div>

          <div class="img_logo2">
            <img src="@/assets/new/logo.png" alt="" />
          </div>
        </div>
        <div class="banner02">
          <img class="img1" src="@/assets/new/游戏logo@2x.png" alt="" />
          <img class="img2" src="@/assets/new/购物.png" alt="" />
          <img class="img3" src="@/assets/new/logo@2x.png" alt="" />
          <img class="img4" src="@/assets/new/比特币@2x.png" alt="" />
          <img class="img5" src="@/assets/new/webxlogo@2x.png" alt="" />
          <img class="img6" src="@/assets/new/tlogo@2x.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// 响应式数据：是否为移动设备（包括平板）
const isMobile = ref(false);
const viewportWidth = ref(window.innerWidth);

// 改进的设备检测函数
const checkDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const width = viewportWidth.value;

  // 方法1：通过屏幕宽度判断（最可靠）
  const isPhone = width <= 768; // 手机
  const isTabletByWidth = width > 768 && width <= 1024; // 平板宽度范围

  // 方法2：通过用户代理字符串判断
  const isIOS = /iphone|ipad|ipod/i.test(userAgent);
  const isAndroid = /android/i.test(userAgent);
  const isMobileUserAgent =
    isIOS ||
    isAndroid ||
    /webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  // 方法3：检测触摸支持（辅助判断）
  const hasTouchSupport =
    "ontouchstart" in window ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);

  // 综合判断：如果是手机，或者屏幕宽度在平板范围内且具备移动设备特征
  isMobile.value =
    isPhone || (isTabletByWidth && (isMobileUserAgent || hasTouchSupport));
};

// 动态背景图片URL
const backgroundImageUrl = ref("");

const updateBackgroundImage = () => {
  backgroundImageUrl.value = isMobile.value
    ? new URL("../../../assets/new_m/banner2@2x.png", import.meta.url).href
    : new URL("../../../assets/new/banner@2x.png", import.meta.url).href;
};

// 防抖函数
const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// 处理窗口变化
const handleResize = () => {
  viewportWidth.value = window.innerWidth;
  checkDevice();
  updateBackgroundImage();
};

const debouncedHandleResize = debounce(handleResize, 250);

onMounted(() => {
  handleResize();
  window.addEventListener("resize", debouncedHandleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", debouncedHandleResize);
});
</script>

<style scoped lang="scss">
.hero {
  padding: 0px 16px 30px;
  position: relative;
  color: #000;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  .background-carousel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1; /* 确保背景在内容下层 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* 确保背景图固定，营造沉浸感（可选） */
    // background-attachment: fixed;
  }
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
}

.container {
  max-width: 1200px;
  padding: 40px 24px;
  width: 100%;
  margin: 0 auto;
  padding-top: 127px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.banner_img {
  position: relative;
  .banner01 {
    position: relative;

    .img_logo2 {
      position: absolute;
      top: -160px;
      right: -100px;
      // 呼吸动效
      animation: breathing 2s ease-in-out infinite;
      img {
        width: 341px;
        height: 140px;
      }
    }
  }
  .banner02 {
    position: absolute;
    width: 800px; /* 例如，大于最右图片的 left + width */
    height: 300px; /* 例如，大于最下图片的 top + height */
    .img1 {
      position: absolute;
      top: -40px;
      left: -55px;
      width: 97px;
      height: 97px;
    }
    .img2 {
      position: absolute;
      top: 10px;
      left: 80px;
      width: 90px;
      height: 90px;
    }
    .img3 {
      position: absolute;
      top: 70px;
      left: -210px;
      width: 103px;
      height: 103px;
    }
    .img4 {
      position: absolute;
      top: 160px;
      left: -10px;
      width: 115px;
      height: 116px;
    }
    .img5 {
      position: absolute;
      top: 200px;
      left: 240px;
      width: 108px;
      height: 109px;
    }
    .img6 {
      position: absolute;
      top: 130px;
      left: 500px;
      width: 109px;
      height: 110px;
    }
  }
}

.imgLogo {
  position: absolute;
  bottom: -120px;
  right: -130px;
  width: 401px !important;
  height: 401px;
  img {
    width: 100%;
    height: 100%;
  }
}
.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  h1 {
    line-height: 1.2;
    margin: 0 0 28px;
    font-weight: bold;
    font-size: 80px;
    color: #000000;
    max-width: 600px;
  }
  h3 {
    font-weight: 400;
    font-size: 60px;
    color: #000000;

    margin-bottom: 39px;
  }
  p {
    width: 507px;
    margin-bottom: 88px;
  }
}

.subtitle {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 24px;
  max-width: 90%;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.primary {
  background: var(--color-primary);
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 10px 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
}

.ghost {
  background: transparent;
  border: 2px solid var(--color-primary);
  border-radius: 6px;
  padding: 10px 18px;
  color: var(--color-primary);
  cursor: pointer;
  font-weight: 400;
  font-size: 24px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary);
    color: #fff;
    transform: translateY(-2px);
  }
}

.visual-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
}

@media (max-width: 1440px) and (min-width: 1025px) {
  .text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    h1 {
      line-height: 1.2;
      margin: 0 0 28px;
      font-weight: bold;
      font-size: 50px;
      color: #000000;
      max-width: 600px;
    }
    h3 {
      font-weight: 400;
      font-size: 40px;
      color: #000000;

      margin-bottom: 39px;
    }
    p {
      width: 507px;
      margin-bottom: 88px;
    }
  }
  .subtitle {
    font-size: 14px;
  }

  .primary {
    font-weight: 400;
    font-size: 20px;
  }

  .ghost {
    font-weight: 400;

    font-size: 20px;
  }
  .banner_img {
    transform: scale(0.9);
    transform-origin: right center;
    .banner02 {
      position: absolute;
      width: 800px; /* 例如，大于最右图片的 left + width */
      height: 300px; /* 例如，大于最下图片的 top + height */
      .img1 {
        position: absolute;
        top: -20px;
        left: -155px;
        width: 97px;
        height: 97px;
      }
      .img2 {
        position: absolute;
        top: 10px;
        left: -20px;
        width: 90px;
        height: 90px;
      }
      .img3 {
        position: absolute;
        top: 70px;
        left: -260px;
        width: 103px;
        height: 103px;
      }
      .img4 {
        position: absolute;
        top: 160px;
        left: -30px;
        width: 115px;
        height: 116px;
      }
      .img5 {
        position: absolute;
        top: 170px;
        left: 180px;
        width: 108px;
        height: 109px;
      }
      .img6 {
        position: absolute;
        top: 120px;
        left: 320px;
        width: 109px;
        height: 110px;
      }
    }
  }
  .imgLogo {
    bottom: -130px;
    right: -30px;
    width: 381px !important;
    height: 381px;
  }
  .banner_img .banner01 .img_logo2 {
    top: -130px;
    right: 0px;
    img {
      width: 301px;
      height: 140px;
    }
  }
}
/* 平板设备适配 (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    max-width: 90%;
    padding: 0;
  }

  .text-content {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-content h1 {
    font-size: 56px;
    text-align: center;
    width: 100%;
  }

  .subtitle {
    text-align: left;
    font-size: 26px;
    max-width: 100%;
    margin: 0 0 20px;
    width: 100%;
    color: #000;
  }

  .actions {
    justify-content: center;
    width: 100%;
  }
}

/* 移动端适配 (小于768px) */
@media (max-width: 767px) {
  .hero {
    padding: 15px 12px 20px;
    min-height: 100vh;
    padding-top: 60px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .container {
    gap: 15px;
    padding-top: 0 !important;
    text-align: center;
    position: static;
    display: flex;
    flex-direction: column;
    overflow: visible;
    min-height: calc(100vh - 60px);
    width: 100%;
    /* 使用Flexbox弹性布局确保内容分布合理 */
    flex: 1;
  }

  .text-content {
    padding: 0 5px;
    width: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    /* 关键修改：使用flex布局将按钮推到底部 */
    flex: 1;
    justify-content: space-between; /* 让内容均匀分布，按钮自然到底部 */

    h1 {
      font-weight: bold;
      font-size: 46px;
      color: #000000;
      line-height: 1.2;
      padding-top: 59px;
      margin-bottom: 20px;
    }

    h3 {
      font-weight: 400;
      font-size: 28px;
      color: #000000;
      margin-bottom: 30px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      color: #808080;
      width: 100%;
      max-width: 240px;
      margin: 0 auto 30px;
      flex: 1;
    }
  }

  .actions {
    display: block !important;
    gap: 12px;
    margin: 20px 0 10px;
    padding: 15px 0;
    position: relative;
    z-index: 10;
    flex-shrink: 0;
    width: 100%;
    padding-bottom: 50px;
    .primary,
    .ghost {
      flex: 1;
      min-width: 140px;
      position: relative;
      z-index: 31;
      opacity: 1 !important;
      visibility: visible !important;
      font-size: 18px;
      padding: 12px 20px;

      margin: 10px;
      /* 添加底部边距确保不被遮挡 */
      margin-bottom: env(safe-area-inset-bottom, 10px); /* 考虑iOS安全区域 */
    }

    .ghost {
      background-color: #fff;
      border: var(--color-primary) solid 1px !important;
    }
  }
}
// 呼吸动效
@keyframes breathing {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
