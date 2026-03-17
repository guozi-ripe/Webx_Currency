<template>
  <div class="home">
    <HeroSection />
    <!-- 項目概况 -->
    <ProjectOverview />
    <!-- 新聞資訊 -->
    <NewsInformation />
    <!-- 加密货币 -->
    <CopyTraderSection />
    <GlobalTrust />
    <!-- 項目摘要 -->
    <DownloadAppsSection />
    <!-- 團隊背景 -->
    <!-- <SponsorsSection /> -->
  </div>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import ProjectOverview from "./components/ProjectOverview.vue";
import NewsInformation from "./components/NewsInformation.vue";
import CopyTraderSection from "./components/CopyTraderSection.vue";
import GlobalTrust from "./components/GlobalTrust.vue";
import SponsorsSection from "./components/SponsorsSection.vue";
import DownloadAppsSection from "./components/DownloadAppsSection.vue";
</script>

<style scoped lang="scss">
.home {
  text-align: left;
}

.home > section {
  margin-bottom: 56px;
  scroll-margin-top: 80px;
}

.home > section:last-of-type {
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .home > section {
    margin-bottom: 36px;
  }
}
</style>
