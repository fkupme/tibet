<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Keyboard, Navigation, Pagination, Virtual } from 'swiper/modules'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import TrendCard from '@/components/cards/TrendCard.vue'
import TrendModal from '@/components/cards/TrendModal.vue'
import { breakpoints } from '@/composables/useMediaQuery'
import { trends } from '@/data/trends'

const modules = [Virtual, Navigation, Pagination, Keyboard]

// One card on mobile, two on tablet, three on desktop
const swiperBreakpoints = {
  0: { slidesPerView: 1 },
  [breakpoints.tablet + 1]: { slidesPerView: 2 },
  [breakpoints.desktop + 1]: { slidesPerView: 3 },
}

// Swiper applies breakpoints after building the loop, which shifts the first
// slide. Starting with the value for the current width avoids that.
const initialSlidesPerView = Object.entries(swiperBreakpoints).findLast(
  ([minWidth]) => window.innerWidth >= Number(minWidth)
)[1].slidesPerView

const selectedTrend = ref(null)
</script>

<template>
  <section class="trends">
    <div class="container">
      <SectionTitle class="trends-title" align="center">
        <template #category>по версии отдыхающих</template>
        <template #title>Популярные направления</template>
      </SectionTitle>
      <Swiper
        :modules="modules"
        :slides-per-view="initialSlidesPerView"
        :breakpoints="swiperBreakpoints"
        :space-between="30"
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :pagination="{ dynamicBullets: true }"
        virtual
        navigation
        keyboard
        loop
      >
        <SwiperSlide
          v-for="trend in trends"
          :key="trend.id"
          :virtual-index="trend.id"
        >
          <TrendCard :trend="trend" @select="selectedTrend = trend" />
        </SwiperSlide>
      </Swiper>
    </div>
    <BaseButton class="trends__button">Рейтинг направлений</BaseButton>

    <Teleport to="body">
      <Transition name="bubble">
        <TrendModal
          v-if="selectedTrend"
          :trend="selectedTrend"
          @close="selectedTrend = null"
        />
      </Transition>
    </Teleport>
  </section>
</template>

<style lang="scss">
.trends {
  padding-block: $mobile-section-padding;

  &-title {
    margin-bottom: 32px;
  }

  @media (width > 640px) {
    padding-block: $tablet-section-padding;
  }

  @media (width > 1024px) {
    padding-block: $desktop-section-padding;
  }
}

.bubble-enter-active,
.bubble-leave-active {
  transition:
    opacity 0.3s ease-in,
    transform 0.3s ease-in;
}

.bubble-enter-from,
.bubble-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
