<template>
  <main class="main">
    <about-section />
    <offer-section />
    <trends-section />
    <blog-section />
    <gallery-section />
    <subscribe-section />
  </main>
</template>

<script>
import AboutSection from '@/components/AboutSection.vue'
import OfferSection from '@/components/OfferSection.vue'
import TrendsSection from '@/components/TrendsSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import SubscribeSection from '@/components/SubscribeSection.vue'

export default {
  name: 'my-main',
  components: {
    AboutSection,
    OfferSection,
    TrendsSection,
    BlogSection,
    GallerySection,
    SubscribeSection,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';
</style>
