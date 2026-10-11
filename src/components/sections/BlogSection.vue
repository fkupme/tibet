<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Virtual } from 'swiper/modules'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import BlogCard from '@/components/cards/BlogCard.vue'
import { useIsMobile } from '@/composables/useMediaQuery'
import { blogPosts } from '@/data/blog'

const isMobile = useIsMobile()
const modules = [Virtual]
</script>

<template>
  <section class="blog">
    <div class="container">
      <SectionTitle class="blog-title" align="center">
        <template #category>делимся впечатлениями</template>
        <template #title>Блог о путешествиях</template>
      </SectionTitle>
      <div class="blog-box">
        <Swiper
          v-if="isMobile"
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          :style="{ '--swiper-pagination-color': '#fff' }"
          virtual
          loop
        >
          <SwiperSlide
            v-for="(post, index) in blogPosts"
            :key="post.id"
            :virtual-index="index"
          >
            <BlogCard :post="post" />
          </SwiperSlide>
        </Swiper>
        <div v-else class="blog-grid">
          <BlogCard
            v-for="post in blogPosts"
            :key="post.id"
            :post="post"
            class="blog-grid__item"
          />
        </div>
      </div>
    </div>
    <BaseButton class="blog__button">Другие материалы</BaseButton>
  </section>
</template>

<style lang="scss" scoped>
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
    padding-block: $desktop-section-padding;

    &-grid {
      gap: 20px;
    }
  }
}
</style>
