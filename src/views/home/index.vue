<template>
  <div class="home">
    <HeroSection />
    <EducationSection />
    <SecondComponent />
    <PromoBanner />
    <InterestRateSection />
    <AssetGridSection />
    <CryptoBestStateSection />
    <CopyTraderSection />
    <PartnersSection />
    <GlobalTrustSection />
    <DownloadAppsSection />
    <SponsorsSection />
  </div>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import SecondComponent from "./components/SecondComponent.vue";
import PromoBanner from "./components/PromoBanner.vue";
import InterestRateSection from "./components/InterestRateSection.vue";
import AssetGridSection from "./components/AssetGridSection.vue";
import CryptoBestStateSection from "./components/CryptoBestStateSection.vue";
import CopyTraderSection from "./components/CopyTraderSection.vue";
import EducationSection from "./components/EducationSection.vue";
import PartnersSection from "./components/PartnersSection.vue";
import GlobalTrustSection from "./components/GlobalTrustSection.vue";
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
