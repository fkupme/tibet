<template>
  <section class="gallery">
    <div class="container">
      <p class="gallery__category main-category">делимся впечатлениями</p>
      <h2 class="gallery__title main-title">Блог о путешествиях</h2>
      <div class="gallery-swiper swiper">
        <swiper
					v-if='isMobile'
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :pagination="{ clickable: true }"
          :loop="true"
          virtual
        >
          <swiper-slide v-for="(item, index) in items" :key="index" :virtualIndex="index">
            <GalleryItem :item="item" />
          </swiper-slide>
        </swiper>
      </div>
      <button class="gallery__button main-button">Наш pinterest</button>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Virtual, Navigation, Pagination, Keyboard, Parallax } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import GalleryItem from '@/components/GalleryItem.vue';
import viewportWidth from '@/mixins/viewportWidth';

export default {
  components: {
    Swiper,
    SwiperSlide,
    GalleryItem,
  },
  data() {
    return {
      modules: [Virtual, Navigation, Pagination, Keyboard, Parallax],
      items: [
        { mobile: 'images/gallery-1.png', desktop: 'images/gallery-1-desktop.png' },
        { mobile: 'images/gallery-2.png', desktop: 'images/gallery-2-desktop.png' },
        { mobile: 'images/gallery-3.png', desktop: 'images/gallery-3-desktop.png' },
        { mobile: 'images/gallery-4.png', desktop: 'images/gallery-4-desktop.png' },
        { mobile: 'images/gallery-5.png', desktop: 'images/gallery-5-desktop.png' },
        { mobile: 'images/gallery-6.png', desktop: 'images/gallery-6-desktop.png' },
      ],
    };
  },
};
</script>

<style scoped>
/* Ваши стили */
</style>