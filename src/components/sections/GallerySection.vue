<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Virtual } from 'swiper/modules'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import GalleryItem from '@/components/cards/GalleryItem.vue'
import { useIsMobile } from '@/composables/useMediaQuery'
import { galleryPhotos } from '@/data/gallery'

const isMobile = useIsMobile()
const modules = [Virtual, Pagination]
</script>

<template>
  <section class="gallery">
    <div class="container">
      <SectionTitle class="gallery-title" align="center">
        <template #category>фото-отчет</template>
        <template #title>Делимся впечатлениями</template>
      </SectionTitle>
      <Swiper
        v-if="isMobile"
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :style="{ '--swiper-pagination-color': '#fff' }"
        :pagination="{ clickable: true }"
        loop
        virtual
      >
        <SwiperSlide
          v-for="(photo, index) in galleryPhotos"
          :key="photo.id"
          :virtual-index="index"
        >
          <GalleryItem :photo="photo" />
        </SwiperSlide>
      </Swiper>
      <div v-else class="gallery-box">
        <GalleryItem
          v-for="photo in galleryPhotos"
          :key="photo.id"
          :photo="photo"
        />
      </div>
      <BaseButton class="gallery__button">Наш pinterest</BaseButton>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery {
  padding-block: $mobile-section-padding;

  &-title {
    margin-bottom: 32px;
  }

  @media (width > 640px) {
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

  @media (width > 1024px) {
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
