<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import OfferSection from '@/components/sections/OfferSection.vue'
import TrendsSection from '@/components/sections/TrendsSection.vue'
import BlogSection from '@/components/sections/BlogSection.vue'
import GallerySection from '@/components/sections/GallerySection.vue'
import SubscribeSection from '@/components/sections/SubscribeSection.vue'
</script>

<template>
  <TheHeader />
  <main class="main">
    <AboutSection />
    <OfferSection />
    <TrendsSection />
    <BlogSection />
    <GallerySection />
    <SubscribeSection />
  </main>
  <TheFooter />
</template>

<style lang="scss">
#app {
  position: relative;
  font-family: nunito-regular, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
