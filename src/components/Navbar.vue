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

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
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

      <div class="actions" @click="toggleLang">
        <div v-if="isEn == true">
          <img src="@/assets/home/中.png" alt="" />
        </div>
        <div v-else>
          <img src="@/assets/home/EN .png" alt="" />
        </div>
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
  // padding: 0 24px;
  position: relative;
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

.links {
  list-style: none;
  display: flex;
  gap: clamp(32px, 5vw, 120px);
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

.links a {
  text-decoration: none;
  white-space: nowrap;
  color: var(--color-text);
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
}

.links a:hover,
.links a.router-link-active {
  color: var(--color-primary);
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
  padding: 4px 12px;
  max-width: 100px;
  width: 90px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  background: var(--color-primary);
}

.lang-switch:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.globe {
  font-size: 16px;

  img {
    width: 25px;
    height: 25px;
  }
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

.navbar-blur .links a {
  color: rgba(var(--color-text-rgb, 17, 24, 39), 0.9);

  @media (prefers-color-scheme: dark) {
    color: rgba(var(--color-text-rgb, 243, 244, 246), 0.9);
  }
}
/* ==================== 移动端全屏菜单样式  ==================== */
.mobile-menu-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: stretch; /* 改为stretch以填充整个屏幕 */
  justify-content: center;
  /* iOS Safari兼容性 */
  -webkit-overflow-scrolling: touch;
}

.mobile-menu-content {
  width: 100%;
  min-height: 100vh;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0; /* 移除圆角，实现全屏 */
  box-shadow: none; /* 移除阴影 */
}
/* 当菜单打开时，禁止body滚动 */
body.menu-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
}
.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px 16px;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0; /* 防止头部被压缩 */
}

.brand-mobile .logo-mobile {
  width: 120px;
  height: 28px;
}

.menu-close {
  width: 44px;
  height: 44px;
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
  font-size: 28px;
  color: var(--color-text);
  line-height: 1;
}

.mobile-menu-list {
  list-style: none;
  margin: 0;
  padding: 24px 0;
  flex: 1; /* 填充剩余空间 */
  overflow-y: auto;
}

.mobile-menu-item {
  margin: 0 16px 12px;
}

.menu-link {
  display: flex;
  align-items: center;
  padding: 18px 20px;
  text-decoration: none;
  color: var(--color-text);
  border-radius: 12px;
  transition: all 0.3s ease;
  background: transparent;
  font-size: 18px;
}

.menu-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateX(5px);
}

.menu-icon {
  font-size: 24px;
  margin-right: 16px;
  width: 28px;
  text-align: center;
}

.menu-text {
  font-size: 18px;
  font-weight: 500;
}

.menu-footer {
  padding: 24px 20px;
  border-top: 1px solid var(--color-border);
  flex-shrink: 0; /* 防止底部被压缩 */
}

.lang-btn-mobile {
  width: 100%;
  padding: 18px 20px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
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
}

@media (max-width: 480px) {
  .navbar {
    position: fixed;
    .brand img {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 65%);
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

  /* 移动端弹窗在小屏幕上的优化 */
  .menu-header {
    padding: 20px 16px 12px;
  }

  .mobile-menu-item {
    margin: 0 12px 8px;
  }

  .menu-link {
    padding: 16px 18px;
    font-size: 16px;
  }

  .menu-icon {
    font-size: 22px;
    margin-right: 14px;
  }

  .menu-text {
    font-size: 16px;
  }

  .menu-footer {
    padding: 20px 16px;
  }

  .lang-btn-mobile {
    padding: 16px 18px;
    font-size: 16px;
  }

  .brand-mobile .logo-mobile {
    width: 100px;
    height: 24px;
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
