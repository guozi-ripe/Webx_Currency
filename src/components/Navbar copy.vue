<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "../i18n";

const menuOpen = ref(false);
const isMobile = ref(false);
const { locale, setLocale, t } = useI18n();
const isEn = computed(() => locale.value === "zh");

// 添加语言相关的间距计算
const linksGap = computed(() => {
  // 中文状态下保持6vw，非中文状态下改为4vw
  return isEn.value ? "clamp(32px, 6vw, 120px)" : "clamp(32px, 4vw, 120px)";
});

// 吸顶相关状态
const isSticky = ref(false);
const lastScrollY = ref(0);
const isHidden = ref(false);
const isAtTop = ref(true); // 是否在页面顶部

// 触摸事件相关
const touchStartY = ref(0);
const isScrolling = ref(false);
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

// 检测屏幕尺寸
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 960;
};

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

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

// 触摸事件处理
const handleTouchStart = (event: TouchEvent) => {
  touchStartY.value = event.touches[0].clientY;
  isScrolling.value = true;
};

const handleTouchMove = (event: TouchEvent) => {
  if (!isScrolling.value) return;

  const touchY = event.touches[0].clientY;
  const deltaY = touchStartY.value - touchY;

  if (Math.abs(deltaY) > 10) {
    handleScroll();
  }
};

const handleTouchEnd = () => {
  isScrolling.value = false;
};

// 生命周期
onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
  window.addEventListener("scroll", handleScroll, { passive: true });

  // 添加触摸事件监听
  document.addEventListener("touchstart", handleTouchStart, { passive: true });
  document.addEventListener("touchmove", handleTouchMove, { passive: true });
  document.addEventListener("touchend", handleTouchEnd, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
  window.removeEventListener("scroll", handleScroll);

  // 移除触摸事件监听
  document.removeEventListener("touchstart", handleTouchStart);
  document.removeEventListener("touchmove", handleTouchMove);
  document.removeEventListener("touchend", handleTouchEnd);
});
</script>

<template>
  <!-- 添加一个占位符，防止页面内容被导航栏遮挡 -->
  <div class="navbar-placeholder"></div>

  <nav
    class="navbar"
    :class="{
      'navbar-sticky': isSticky,
      'navbar-hidden': isHidden,
      'navbar-blur': isSticky && !isAtTop,
    }"
  >
    <div v-if="isMobile" class="brand">
      <img class="logo" src="../assets/WebX-logo.svg" alt="Logo" />
    </div>
    <div class="container">
      <!-- 移动端汉堡按钮 - 只在移动端显示 -->
      <div v-if="isMobile" class="mobile" @click="toggleMenu">
        <div class="hamburger" :class="{ active: menuOpen }">
          <img src="../assets/lang_m.svg" alt="" />
        </div>
      </div>
      <div v-if="!isMobile" class="brand">
        <img class="logo" src="../assets/WebX-logo.svg" alt="Logo" />
      </div>

      <!-- 桌面端导航菜单 -->
      <ul v-if="!isMobile" class="links" :style="{ gap: linksGap }">
        <li>
          <a href="#overview" @click="handleMenuItemClick">{{
            t("nav.項目簡介")
          }}</a>
        </li>
        <li>
          <a href="#docs" @click="handleMenuItemClick">{{
            t("nav.項目優勢")
          }}</a>
        </li>
        <li>
          <a href="#team" @click="handleMenuItemClick">{{
            t("nav.生態系統")
          }}</a>
        </li>
        <li>
          <a href="#sponsors" @click="handleMenuItemClick">{{
            t("nav.團隊背景")
          }}</a>
        </li>
        <li>
          <a href="#contact" @click="handleMenuItemClick">{{
            t("nav.聯係我們")
          }}</a>
        </li>
      </ul>

      <div class="actions">
        <button class="lang-switch" @click="toggleLang">
          <span class="globe">
            <img src="../assets/lang.svg" alt="语言" />
          </span>
          <span class="text">{{ isEn ? "中" : "EN" }}</span>
        </button>
      </div>
    </div>

    <!-- 移动端全屏下拉菜单 -->
    <transition name="slide-fade">
      <div
        v-if="isMobile && menuOpen"
        class="mobile-menu-fullscreen"
        @click="closeMobileMenu"
      >
        <div class="mobile-menu-content" @click.stop>
          <div class="menu-header">
            <div class="brand-mobile">
              <img
                class="logo-mobile"
                src="../assets/WebX-logo.svg"
                alt="Logo"
              />
            </div>
            <div class="menu-close" @click="closeMobileMenu">
              <span class="close-icon">×</span>
            </div>
          </div>

          <ul class="mobile-menu-list">
            <li class="mobile-menu-item">
              <a
                href="#overview"
                @click="handleMenuItemClick"
                class="menu-link"
              >
                <span class="menu-icon">📋</span>
                <span class="menu-text">{{ t("nav.項目簡介") }}</span>
              </a>
            </li>
            <li class="mobile-menu-item">
              <a href="#docs" @click="handleMenuItemClick" class="menu-link">
                <span class="menu-icon">⭐</span>
                <span class="menu-text">{{ t("nav.項目優勢") }}</span>
              </a>
            </li>
            <li class="mobile-menu-item">
              <a href="#team" @click="handleMenuItemClick" class="menu-link">
                <span class="menu-icon">🌐</span>
                <span class="menu-text">{{ t("nav.生態系統") }}</span>
              </a>
            </li>
            <li class="mobile-menu-item">
              <a
                href="#sponsors"
                @click="handleMenuItemClick"
                class="menu-link"
              >
                <span class="menu-icon">👥</span>
                <span class="menu-text">{{ t("nav.團隊背景") }}</span>
              </a>
            </li>
            <li class="mobile-menu-item">
              <a href="#contact" @click="handleMenuItemClick" class="menu-link">
                <span class="menu-icon">📞</span>
                <span class="menu-text">{{ t("nav.聯係我們") }}</span>
              </a>
            </li>
          </ul>

          <div class="menu-footer">
            <div class="language-switch-mobile">
              <button class="lang-btn-mobile" @click="toggleLang">
                <span class="lang-text">{{ isEn ? "English" : "中文" }}</span>
                <span class="lang-arrow">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
  transform: translateZ(0); /* 触发硬件加速 */
  -webkit-transform: translateZ(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, backdrop-filter;
}

/* 吸顶状态样式 */
.navbar-sticky {
  position: fixed;
  top: 0;
  transform: translateY(0) translateZ(0);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

/* 隐藏状态样式 */
.navbar-hidden {
  transform: translateY(-100%);
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

/* 下滑动画 */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
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
  padding: 0 24px;
  position: relative;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 122px;
  height: 28px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.navbar-blur .logo {
  transform: scale(0.95);
}

.links {
  list-style: none;
  display: flex;
  gap: clamp(32px, 6vw, 120px); /* 默认值，将被动态覆盖 */
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

/* 为非中文语言添加响应式调整 */
:global([lang="en"]) .links,
:global([lang="ja"]) .links,
:global([lang="ko"]) .links {
  gap: clamp(32px, 4vw, 120px);
}

/* 确保中文状态保持6vw */
:global([lang="zh-CN"]) .links,
:global([lang="zh-TW"]) .links,
:global([lang="zh-HK"]) .links {
  gap: clamp(32px, 6vw, 120px);
}

.links a {
  text-decoration: none;
  white-space: nowrap;
  color: var(--color-text);
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 8px 0;
}

.links a:hover,
.links a.router-link-active {
  color: var(--color-primary);
}

.links a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.links a:hover::after,
.links a.router-link-active::after {
  width: 100%;
}

.navbar-blur .links a {
  color: rgba(var(--color-text-rgb, 17, 24, 39), 0.9);

  @media (prefers-color-scheme: dark) {
    color: rgba(var(--color-text-rgb, 243, 244, 246), 0.9);
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;

  .text {
    color: var(--color-bg);
  }
}

.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  max-width: 100px;
  width: 120px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  background: var(--color-primary);
}

.navbar-blur .lang-switch {
  background: rgba(var(--color-primary-rgb, 59, 130, 246), 0.9);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(var(--color-border-rgb, 229, 231, 235), 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.lang-switch:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.globe {
  font-size: 16px;

  img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
  }
}

.navbar-blur .globe img {
  transform: scale(0.9);
}

/* 汉堡按钮样式 */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--color-text);
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.active .hamburger-line:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.hamburger.active .hamburger-line:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.navbar-blur .hamburger-line {
  background-color: rgba(var(--color-text-rgb, 17, 24, 39), 0.9);
}


/* 移动端全屏菜单样式 */
.mobile-menu-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-content {
  width: 90%;
  max-width: 400px;
  height: 80%;
  max-height: 600px;
  background: var(--color-bg);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--color-border);
}

.brand-mobile .logo-mobile {
  width: 100px;
  height: 24px;
}

.menu-close {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  background: var(--color-gray);
  transition: all 0.3s ease;
}

.menu-close:hover {
  background: var(--color-primary);
  transform: scale(1.1);
}

.brand-mobile .logo-mobile {
  width: 100px;
  height: 24px;
}

.menu-close {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  background: var(--color-gray);
  transition: all 0.3s ease;
}

.menu-close:hover {
  background: var(--color-primary);
  transform: scale(1.1);
}

.close-icon {
  font-size: 24px;
  color: var(--color-text);
}

.mobile-menu-list {
  list-style: none;
  margin: 0;
  padding: 20px 0;
  flex: 1;
  overflow-y: auto;
}

.mobile-menu-item {
  margin: 0 20px 10px;
}

.menu-link {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  text-decoration: none;
  color: var(--color-text);
  border-radius: 12px;
  transition: all 0.3s ease;
  background: transparent;
}

.menu-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateX(5px);
}

.menu-icon {
  font-size: 20px;
  margin-right: 15px;
  width: 24px;
  text-align: center;
}

.menu-text {
  font-size: 16px;
  font-weight: 500;
}

.menu-footer {
  padding: 20px;
  border-top: 1px solid var(--color-border);
}

.lang-btn-mobile {
  width: 100%;
  padding: 12px 20px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.lang-btn-mobile:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slide-fade-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
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

  .links {
    display: none;
  }

  .mobile {
    display: block;
  }

  .lang-switch {
    padding: 6px 10px;
    gap: 6px;
    margin-left: auto;
  }

  .brand {
    position: static;
    transform: none;
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

  .lang-switch {
    padding: 3px 6px;
    width: 100px;
  }

  .mobile-menu-content {
    width: 95%;
    height: 85%;
  }
}

@media (max-width: 480px) {
  .navbar {
    position: fixed;
    .brand img {
      position: absolute; /* 绝对定位的图片 */
      left: 50%; /* 向左偏移50% */
      transform: translate(
        -50%,
        65%
      ); /* 向上和向左偏移自身宽高的50%，实现完全居中 */
    }
  }

  .globe {
    font-size: 14px;

    img {
      width: 20px;
      height: 20px;
    }
  }
  .container {
    padding: 0 16px;
  }

  .lang-switch {
    width: 60px;

    .text {
      font-size: 12px;
    }
  }

  .menu-link {
    padding: 14px 16px;
  }

  .menu-icon {
    margin-right: 12px;
  }
}

/* 滚动条样式 */
.mobile-menu-list::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu-list::-webkit-scrollbar-track {
  background: transparent;
}

.mobile-menu-list::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 2px;
}

.mobile-menu-list::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}
</style>
