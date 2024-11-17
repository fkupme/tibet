<template>
	<section class="trends">
			<div class="container">
				<section-title class="trends-title" @click.prevent>
						<template v-slot:category>
							по версии отдыхающих
						</template>
							<template v-slot:title>
								Популярные направления
							</template>
					</section-title>
					<swiper
						:modules="modules"
						:slides-per-view="slidesPewView"
						:space-between="30"
						:style="{
      				'--swiper-navigation-color': '#fff',
      				'--swiper-pagination-color': '#fff',
    				}"
						virtual
						speed='600'
						navigation
						pagination
						keyboard
						loop
					>
						<swiper-slide
						v-for="card in cards"
						:key='card.id'
						:virtualIndex="card.id"
						>
							<trend-card :card='card'/>
						</swiper-slide>
						
					</swiper>
				</div>
			<button class="trends__button main-button">Рейтинг направлений</button>
		</section>
</template>
<script>
/* eslint-disable */ 
import { mapState } from 'vuex';
import { Swiper, SwiperSlide} from 'swiper/vue';
import { Virtual, Navigation, Pagination, Keyboard } from 'swiper/modules';
import viewportWidth from '@/mixins/viewportWidth';
import TrendCard from './TrendCard.vue';
import 'swiper/css';
import 'swiper/css/navigation';
export default {
	components: {
		TrendCard,
		Swiper,
		SwiperSlide,
	},
	mixins: [viewportWidth],
	computed: {
		...mapState({
			cards: state => state.trends.trends,
		}),
		slidesPewView(){
			
			if (this.width > 1024) {
				return 3;
			} else if (this.width > 640) {
				return 2;
			}
			return 1
		}
		
	},
	name: 'trends-section',
	data() {
		return {
			modules: [Virtual, Navigation, Pagination, Keyboard],
		};
	},
};
</script>

<style lang='scss'>
@import "@/assets/styles/globals.scss";
.trends {
	padding-block: $mobile-section-padding;
	&-title{
		margin-bottom: 32px;
	}
	&__button {
		margin: 32px auto 0;
	}
	@media (width>640px) {
		padding-block: $tablet-section-padding;
	}
	@media (width>1024px) {
		padding-block: $desktop-section-padding;
		&-title{
			text-align: center !important;
		}
	}
}
</style>
