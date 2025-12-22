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
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// 响应式数据：是否为移动端
const isMobile = ref(false);
// 响应式数据：当前视口宽度
const viewportWidth = ref(window.innerWidth);

// 检测设备类型函数
const checkDevice = () => {
  const userAgent = navigator.userAgent;
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  isMobile.value = mobileRegex.test(userAgent);
};

// 动态背景图片URL
const backgroundImageUrl = ref("");

// 根据设备类型更新背景图
const updateBackgroundImage = () => {
  backgroundImageUrl.value = isMobile.value
    ? new URL("../../../assets/new/banner @2x.png", import.meta.url).href
    : new URL("../../../assets/new/banner @2x.png", import.meta.url).href;
};

// 防抖函数：确保频繁触发的事件不会导致性能问题[6,7](@ref)
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

// 处理窗口变化的函数
const handleResize = () => {
  // 更新视口宽度[1,7](@ref)
  viewportWidth.value =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  // 检测设备类型
  checkDevice();
  // 更新背景图
  updateBackgroundImage();
};

// 创建防抖后的处理函数（250ms延迟）
const debouncedHandleResize = debounce(handleResize, 250);

// 生命周期
onMounted(() => {
  // 初始检测
  handleResize();
  // 使用 addEventListener 替代直接赋值 onresize，避免监听器被覆盖[8](@ref)
  window.addEventListener("resize", debouncedHandleResize);
});

onUnmounted(() => {
  // 组件卸载时务必移除监听器，防止内存泄漏[2,8](@ref)
  window.removeEventListener("resize", debouncedHandleResize);
});
</script>

<style scoped lang="scss">
.hero {
  padding: 20px 16px 30px;
  position: relative;
  color: #000;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  box-sizing: border-box;
  padding-top: 0px; /* 默认PC端头部高度 */
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
    background-attachment: fixed;
  }
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 157px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;
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

/* 平板设备适配 (768px - 1024px) */
@media (max-width: 1024px) {
  .hero {
    padding-top: 70px; /* 平板端头部高度调整 */
  }

  .container {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .text-content {
    order: 2; /* 文字内容在下 */
    justify-content: flex-start; /* 确保内容从顶部开始 */
  }

  .visual-content {
    order: 1; /* 视觉内容在上 */
    max-height: 40vh;
  }

  .text-content h1 {
    font-size: 36px;
  }

  .subtitle {
    font-size: 15px;
    max-width: 100%;
    margin: 0 0 20px;
  }
}

/* 移动端适配 (小于768px) */
@media (max-width: 767px) {
  .hero {
    padding: 15px 12px 20px;
    min-height: 100vh;
    padding-top: 60px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* 确保容器不溢出 */
    overflow: hidden;
  }

  .container {
    grid-template-columns: 1fr;
    gap: 15px; /* 减少间隙 */
    text-align: center;
    position: static;
    height: auto;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* 关键修复：防止内容溢出 */
    min-height: 0;
    overflow: visible; /* 允许内容显示 */
  }

  .text-content {
    order: 2;
    padding: 0 5px; /* 减少内边距 */
    width: 100%;
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* 内容靠底部 */
  }

  .visual-content {
    order: 1;
    max-height: 30vh; /* 减少视觉区域高度 */
    flex: 0 0 auto;
    min-height: 0;
  }

  .actions {
    display: flex;
    gap: 8px;
    flex-wrap: nowrap; /* 防止换行导致遮挡 */
    justify-content: center;
    align-items: center;
    margin: 15px 0 10px;
    padding: 10px 0;
    position: relative;
    z-index: 10;
    flex-shrink: 0;
    padding-bottom: 40px;
    .ghost {
      background-color: #fff;
      border: var(--color-primary) solid 1px !important;
    }
    /* 确保两个按钮都可见 */
    .primary,
    .ghost {
      flex: 0 0 auto;
      min-width: 140px;
      position: relative;
      z-index: 31;
      opacity: 1 !important; /* 强制显示 */
      visibility: visible !important; /* 强制可见 */
      margin-top: auto; /* 将按钮组推到容器底部 */
      z-index: -11;
    }
  }
}

/* 小屏手机适配 (小于480px) */
@media (max-width: 479px) {
  .hero {
    padding: 10px 8px 15px;
    padding-top: 56px; /* 小屏手机头部高度 */
  }

  .container {
    min-height: calc(100vh - 206px);
  }

  .text-content h1 {
    font-size: 24px;
  }

  .subtitle {
    font-size: 13px;
  }

  .actions {
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .primary,
  .ghost {
    width: 100%;
    max-width: 240px;
  }
}

/* 超小屏手机适配 (小于360px) */
@media (max-width: 359px) {
  .hero {
    padding-top: 50px;
  }

  .container {
    min-height: calc(100vh - 50px);
  }

  .text-content h1 {
    font-size: 22px;
  }

  .subtitle {
    font-size: 12px;
  }
}
</style>
