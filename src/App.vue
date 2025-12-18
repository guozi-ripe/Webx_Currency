<script setup>
import Navbar from './components/Navbar.vue'
import FooterLegalSection from './views/home/components/FooterLegalSection.vue'
</script>

<template>
  <div class="app">
    <!-- 导航栏 -->
    <Navbar />
    <!-- 路由视图 -->
    <router-view></router-view>
  <FooterLegalSection />

  </div>
</template>

<style scoped>
</style>
