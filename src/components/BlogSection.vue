<template>
  <section class="blog">
    <div class="container">
      <section-title @click.prevent class="blog-title">
        <template v-slot:category>
          делимся впечатлениями
        </template>
        <template v-slot:title>
          Блог о путешествиях
        </template>
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
            :virtualIndex="index"
          >
            <BlogCard :slide="card" />
          </swiper-slide>
        </swiper>
					<div v-else class="blog-grid">
							<BlogCard
							v-for="(card, index) in cards"
							:key="index"
							:slide="card" 
							class='blog-grid__item'
							/>
					</div>
      </div>
    </div>
    <button class="blog__button main-button">Другие материалы</button>
  </section>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex';
import BlogCard from '@/components/BlogCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Virtual, Navigation, Pagination, Keyboard, Parallax } from 'swiper/modules';
import viewportWidth from '@/mixins/viewportWidth';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  data() {
    return {
      modules: [Virtual, Navigation, Pagination, Keyboard],
    };
  },
  mixins: [viewportWidth],
  components: {
    BlogCard,
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState({ cards: state => state.blog.slides }),
    isSwiper() {
      return this.width < 768;
    }
  },
  name: 'blog-section',
  mounted() {
    if (!this.isSwiper && this.swiperInstance) {
      this.disableSwiper();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';
.blog {
  background-color: #F3F5F4;
  padding-block: $mobile-section-padding;
	text-align: center;

  &-title {
    margin-bottom: 32px;
  }
	&__button {
		margin: 32px auto 0;
	}
	@media( width > 640px ) {
		padding-block: $tablet-section-padding;
		&-grid{
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 32px;
		}
	}
	@media( width > 1024px ) {
		div &-title {
			text-align: center;
		}
		&-grid{
			gap: 20px;
		}
		padding-block: $desktop-section-padding;
		
	}
}
</style>