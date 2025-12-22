<template>
  <div class="home">
    <HeroSection />
    <!-- 項目概况 -->
    <ProjectOverview />
    <!-- 新聞資訊 -->
    <NewsInformation />
    <CopyTraderSection />
    <DownloadAppsSection />
    <SponsorsSection />
  </div>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import ProjectOverview from "./components/ProjectOverview.vue";
import NewsInformation from "./components/NewsInformation.vue";
import CopyTraderSection from "./components/CopyTraderSection.vue";
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
