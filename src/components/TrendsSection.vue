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
							'--swiper-pagination-bullets': 'black',
    				}"
						virtual
						navigation
						:pagination="{
							dynamicBullets: true
						}"
						keyboard
						loop
					>
						<swiper-slide
						v-for="(card, index) in cards"
						:key='card.id'
						:virtualIndex="card.id"
						>
								<trend-card
								v-parallax='0.2 + 0.01 * index' 
								@click='setIndex(index)'
								:card='card'
								/>
						</swiper-slide>
						
					</swiper>	
				<transition name="bubble">
					<trend-active class="trend-active" v-if="index!==null" @close='setIndex(null)' :card="cards[index]"/>
				</transition>
				</div>
			<button class="trends__button main-button">Рейтинг направлений</button>
		</section>
</template>
<script>
/* eslint-disable */ 
import { mapState } from 'vuex';
import { Swiper, SwiperSlide} from 'swiper/vue';
import { Virtual, Navigation, Pagination, Keyboard, Parallax} from 'swiper/modules';
import viewportWidth from '@/mixins/viewportWidth';
import TrendCard from '@/components/TrendCard.vue';
import TrendActive from '@/components/TrendActive.vue' 
import 'swiper/css'; 
import 'swiper/css/navigation';
export default {
	data() {
		return {
			modules: [Virtual, Navigation, Pagination, Keyboard, Parallax],
			index: null,
		};
	},
	mixins: [viewportWidth],
	components: {
		TrendCard,
		Swiper,
		SwiperSlide,
		TrendActive,
	},
	methods: {
		setIndex(index) {
      this.index = index;
    },
	},
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
};
</script>

<style lang='scss'>
@import "@/assets/styles/globals.scss";
.trends {
	.bubble-enter-active, .bubble-leave-active{
		transition: opacity 0.3s ease-in, transform 0.3s ease-in;
	}
	.bubble-enter-from, .bubble-leave-to{
		transform: scale(0);
    opacity: 0;		
	}
	padding-block: $mobile-section-padding;
	animation: bubble 0.5s ease-in;
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
