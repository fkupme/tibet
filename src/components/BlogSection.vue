<template>
  <section class="blog">
    <div class="container">
      <section-title class="blog-title" align="center">
        <template #category> делимся впечатлениями </template>
        <template #title> Блог о путешествиях </template>
      </section-title>
      <div class="blog-box">
        <swiper
          v-if="isMobile"
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :style="{
            '--swiper-pagination-color': '#fff',
            '--swiper-pagination-bullets': 'black',
          }"
          virtual
          loop
        >
          <swiper-slide
            v-for="(card, index) in cards"
            :key="index"
            :virtual-index="index"
          >
            <blog-card :slide="card" />
          </swiper-slide>
        </swiper>
        <div v-else class="blog-grid">
          <blog-card
            v-for="(card, index) in cards"
            :key="index"
            :slide="card"
            class="blog-grid__item"
          />
        </div>
      </div>
    </div>
    <main-button class="blog__button">Другие материалы</main-button>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import BlogCard from '@/components/BlogCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Virtual } from 'swiper/modules'
import viewportWidth from '@/mixins/viewportWidth'
import 'swiper/css'

export default {
  name: 'blog-section',
  components: {
    BlogCard,
    Swiper,
    SwiperSlide,
  },
  mixins: [viewportWidth],
  data() {
    return {
      modules: [Virtual],
    }
  },
  computed: {
    ...mapState({ cards: (state) => state.blog.slides }),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';
.blog {
  background-color: #f3f5f4;
  padding-block: $mobile-section-padding;
  text-align: center;

  &-title {
    margin-bottom: 32px;
  }
  @media (width > 640px) {
    padding-block: $tablet-section-padding;
    &-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }
  }
  @media (width > 1024px) {
    div &-title {
      text-align: center;
    }
    &-grid {
      gap: 20px;
    }
    padding-block: $desktop-section-padding;
  }
}
</style>
