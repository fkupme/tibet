<template>
	<section class="offer">
			<div class="container offer-wrapper">
				<div class="offer-box">
					<section-title @click.prevent>
						<template v-slot:category>
							наше предложение
						</template>
							<template v-slot:title>
								Лучшие программы для тебя
							</template>
					</section-title>
					<p class="offer__text main-text">Его корни уходят в один фрагмент классической латыни 45 года
						н.э.,
						то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.</p>
					<offer-card @click.prevent>
						<template v-slot:icon>
							<img src="@/assets/svg/guide.svg" alt="" style="width: 100%;">
						</template>
						<template v-slot:title>
							Опытный гид
						</template>
						<template v-slot:description>
								Для современного 		мира базовый вектор развития
								предполагает
								независимые способы реализации соответствующих условий активизации.
						</template>
					</offer-card>
					<offer-card>
						<template v-slot:icon>
							<img src="@/assets/svg/safe.svg" alt="" style="width: 100%;">
						</template>
						<template v-slot:title>Безопасный поход</template>
						<template v-slot:description>Для современного мира базовый вектор развития
								предполагает
								независимые способы реализации соответствующих условий активизации.</template>
					</offer-card>
					<offer-card>
						<template v-slot:icon>
							<img src="@/assets/svg/price.svg" alt="" style="width: 100%;">
						</template>
						<template v-slot:title>Лояльные цены</template>
						<template v-slot:description>Для современного мира базовый вектор развития
								предполагает
								независимые способы реализации соответствующих условий активизации.</template>
					</offer-card>
					<main-button class="offer__button main-button">Стоимость программ</main-button>
				</div>
				<ul class="offer-image-list">
					<li class="offer-image-list__item">
						<a href="#" class="offer-image-list__link ">
							<span class="visually-hidden">1</span>
							<img src="@/assets/images/offer-1.png" alt="">
						</a>
					</li>
					<li class="offer-image-list__item">
						<a href="#" class="offer-image-list__link ">
							<span class="visually-hidden">1</span>
							<img
								src="@/assets/images/offer-2.png" alt="">
						</a>
					</li>
					<li class="offer-image-list__item">
						<a href="#" class="offer-image-list__link ">
							<span class="visually-hidden">1</span>
							<img
								src="@/assets/images/offer-3.png" alt="">
						</a>
					</li>
					<li class="offer-image-list__item">
						<a href="#" class="offer-image-list__link ">
							<span class="visually-hidden">1</span>
							<img src="@/assets/images/offer-4.png" alt="">
						</a>
					</li>
				</ul>
			</div>
		</section>
</template>

<script>
import OfferCard from '@/components/OfferCard.vue';

export default {
	data() {
		return {
			bindings: 'bindings',
		};
	},
	components: {
		OfferCard,
	},
	methods: {
		initSwipe() {},
	},
	name: 'offer-section',
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/globals.scss";
	.condition_active{
		z-index: 10;
		background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
	}
	.offer {
	position: relative;
	padding-block: $mobile-section-padding;
	background: #F3F5F4;
	width: 100%;
	&-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
	&-image-list {
		display: none;
	}
	@media (width>640px) {
		padding-block: $tablet-section-padding;
	}
	@media (width>1024px) {
		padding-block: $desktop-section-padding;
		&-wrapper{
			display: flex;
			gap: 4.68vw;
		}
		&-box{
			width: 50%;
			gap: 40px;
		}
		&-image-list {
		width: 50%;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}
	}
}
</style>
