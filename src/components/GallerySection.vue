<template>
  <section class="gallery">
    <div class="container">
      <section-title class="trends-title" :align="'center'" @click.prevent>
        <template #category> фото-отчет </template>
        <template #title> Делимся впечатлениями </template>
      </section-title>
      <swiper
        v-if="isMobile"
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :style="{ '--swiper-pagination-color': '#fff' }"
        :pagination="{ clickable: true }"
        :loop="true"
        virtual
      >
        <swiper-slide
          v-for="(item, index) in items"
          :key="index"
          :virtual-index="index"
        >
          <GalleryItem :item="item" />
        </swiper-slide>
      </swiper>
      <div v-else class="gallery-box">
        <gallery-item
          v-for="(item, index) in items"
          :key="index"
          class="gallery__item"
          :item="item"
        />
      </div>
      <main-button class="gallery__button">Наш pinterest</main-button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  Virtual,
  Navigation,
  Pagination,
  Keyboard,
  Parallax,
} from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import GalleryItem from '@/components/GalleryItem.vue'
import viewportWidth from '@/mixins/viewportWidth'

export default {
  name: 'gallery-section',
  components: {
    Swiper,
    SwiperSlide,
    GalleryItem,
  },
  mixins: [viewportWidth],
  data() {
    return {
      modules: [Virtual, Navigation, Pagination, Keyboard, Parallax],
    }
  },
  computed: {
    ...mapState({ items: (state) => state.gallery.galleryItems }),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';
.gallery {
  padding-block: $mobile-section-padding;
  &__box {
  }
  @media (width>640px) {
    padding-block: $tablet-section-padding;
    &-box {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 20px;
    }
    &__item:first-child {
      grid-column: 1 / span 2;
    }
    &__item:nth-child(5) {
      grid-column: 1 / span 2;
      order: 4;
    }
  }
  @media (width>1024px) {
    padding-block: $desktop-section-padding;
    &-box {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
    &__item:first-child {
      grid-column: 1 / span 2;
    }
    &__item:nth-child(5) {
      grid-column: 2 / span 2;
      order: unset;
    }
  }
}
</style>
