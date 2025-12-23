<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "../i18n";

const menuOpen = ref(false);
const isMobile = ref(false);
const { locale, setLocale, t } = useI18n();
const isEn = computed(() => locale.value === "zh");
const isAtTop = ref(true); // 是否在页面顶部
// 添加语言相关的间距计算
const linksGap = computed(() => {
  // 中文状态下保持6vw，非中文状态下改为4vw
  return isEn.value ? "clamp(32px, 6vw, 120px)" : "clamp(32px, 4vw, 120px)";
});

// 吸顶相关状态
const isSticky = ref(false);
const lastScrollY = ref(0);
const isHidden = ref(false);
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
// 检测屏幕尺寸
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 960;
};

function toggleLang() {
  setLocale(isEn.value ? "en" : "zh");
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  menuOpen.value = false;
};

// 点击菜单项后关闭菜单
const handleMenuItemClick = () => {
  if (isMobile.value) {
    closeMobileMenu();
  }
};

// 滚动处理函数
const handleScroll = () => {
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  // iOS设备需要不同的阈值处理
  const scrollDelta = Math.abs(scrollTop - lastScrollY.value);
  const minDelta = isIOS ? 3 : 1;

  // 更新是否在顶部状态
  isAtTop.value = scrollTop <= 78;

  if (scrollDelta < minDelta) return;

  // 向下滚动且超过一定距离时隐藏导航栏
  if (scrollTop > lastScrollY.value && scrollTop > 100) {
    isHidden.value = true;
    isSticky.value = false;
  }
  // 向上滚动时显示并固定导航栏
  else if (scrollTop < lastScrollY.value && scrollTop > 78) {
    isHidden.value = false;
    isSticky.value = true;
  }
  // 滚动到顶部时恢复初始状态
  else if (scrollTop <= 78) {
    isHidden.value = false;
    isSticky.value = false;
  }

  lastScrollY.value = scrollTop;
};

// 生命周期
onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    class="navbar"
    :class="{
      'navbar-sticky': isSticky,
      'navbar-hidden': isHidden,
      'navbar-blur': isSticky && !isAtTop,
    }"
  >
    <div class="container">
      <div class="brand">
        <img class="logo" src="../assets/WebX-logo.svg" alt="Logo" />
      </div>

      <div class="actions" @click="toggleLang">
        <div v-if="isEn == true">
          <img src="@/assets/home/中.png" alt="" />
        </div>
        <div v-else>
          <img src="@/assets/home/EN .png" alt="" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
html,
body {
  height: 100%;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch; /* 移动端平滑滚动 */
}

/* 导航栏占位符，防止页面内容被遮挡 */
.navbar-placeholder {
  height: 64px; /* 与导航栏高度一致 */

  @media (max-width: 600px) {
    height: 56px; /* 移动端高度 */
  }
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
}

/* 吸顶状态样式 */
.navbar-sticky {
  position: fixed;
  top: 0;
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.3s ease;
}

/* 隐藏状态样式 */
.navbar-hidden {
  transform: translateY(-100%);
  box-shadow: none;
}

/* 下滑动画 */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 21px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 130px;
  height: 52px;
  cursor: pointer;
}

.actions {
  img {
    width: 28px;
    height: 28px;
  }
}

/* 毛玻璃效果 */
.navbar-blur {
  background: rgba(var(--color-bg-rgb, 255, 255, 255), 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(var(--color-border-rgb, 229, 231, 235), 0.6);

  /* Safari 兼容性 */
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    background: rgba(var(--color-bg-rgb, 255, 255, 255), 0.75);
  }

  /* 暗色模式适配 */
  @media (prefers-color-scheme: dark) {
    background: rgba(var(--color-bg-rgb, 17, 24, 39), 0.85);
    border-bottom: 1px solid rgba(var(--color-border-rgb, 55, 65, 81), 0.6);
  }
}
.navbar-blur .logo {
  transform: scale(0.95);
}

/* 动画效果 */
.slide-fade-enter-active {
  animation: slide-fade-in 0.4s ease;
}

.slide-fade-leave-active {
  animation: slide-fade-out 0.3s ease;
}

@keyframes slide-fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}

/* 响应式设计 */
@media (max-width: 960px) {
  .navbar-placeholder {
    height: 56px;
  }

  .logo {
    width: 78px;
    height: 42px;
  }

  .container {
    padding: 0 24px;
    justify-content: flex-start;
    height: 56px;
  }
}

@media (max-width: 600px) {
  .navbar-placeholder {
    height: 56px;
  }

  .container {
    height: 56px;
    justify-content: space-between;
  }

  .logo {
    width: 78px;
    height: 42px;
  }
}
</style>
