/* eslint-disable */ 
<template>
		<article class="trend" :style="background" @mouseenter='toggle(true)' @mouseleave='toggle(true)' @focus='toggle' @focusout='toggle'>
			<a href="#" class="trend-link" :class="{'trend-blur' : show}" @click.prevent >
				<div class="trend-rating">
					<img src="@/assets/svg/star.svg" alt="" class="trend-rating__icon">
					<p class="trend-rating__number">{{ card.rating }}</p>
				</div>
				<div class="trend-description">
					<p class="trend-description__text" :class="{'trend-description__text_show' : show}">{{ card.description }}</p>
				</div>
				<div class="trend-name-price">
					<div class="name-wrapper">
						<h3 class="trend-name-price__title">{{ card.title }}</h3>
						<p class="trend-name-price__footnote">{{ card.footnote }}</p>
					</div>
					<button class="trend-name-price__button">{{ card.price }}$</button>
				</div>
			</a>
		</article>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';
import viewportWidth from '@/mixins/viewportWidth';

export default {
	mixins:[toggleMixin, viewportWidth],
	props: {
		card:{
			type: Object,
			required: true,
		}
	},
	methods:{
		setImageLink(){
			return this.width < 1024? this.card.image: this.card.desktopImage
		},
	},
	computed:{
		background() {
			return {
				backgroundImage: this.width<640? `url(${this.card.image})`: `url(${this.card.imageDesktop})`
			}
		},
	},
	mounted(){
		this.link = this.setImageLink();
	},
	name: 'trend-card',
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/globals.scss";
.trend{
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 32px;
		aspect-ratio: 57 / 80;
		position: relative;
		padding: 0;
		overflow: hidden;
		&-link {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		position: absolute;
		inset: 0 0 0 0;
		padding: 37px 0 0;
		width: 100%;
	}
	&-rating {
		display: flex;
		align-items: center;
		align-self: self-end;
		gap: 10px;
		padding: 4px 8px;
		border-radius: 4px 0 0 4px;
		background: rgba(253, 253, 253, 0.40);
		-webkit-backdrop-filter: blur(2px);
		-moz-backdrop-filter: blur(2px);
		backdrop-filter: blur(2px);
			&__number {
				color: #1A3E3E;
				font-family: nunito-bold;
				font-size: 14;
			}
	}
	&-description__text {
		@include font-mobile(14, $color-light-gray, "regular");
		width: 100%;
		line-height: 1.42;
		display: none;
		overflow: hidden;
	}
	&-name-price {
		text-align: left;
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-radius: 0px 0px 32px 32px;
		background: rgba(255, 255, 255, 0.20);
		-webkit-backdrop-filter: blur(3px);
		-moz-backdrop-filter: blur(3px);
		backdrop-filter: blur(3px);
		padding: 24px;
			&__title {
				@include font-mobile(18, $color-light-gray, "bold");
			}
			&__button {
				@include font-mobile(16, $color-light-gray, "bold");
				padding: 6px 12px;
				border-radius: 4px;
				background: rgba(255, 255, 255, 0.30);
			}
			&__footnote{
				display: none;
			}
	}
	@media (width>640px) {
		&-description__text{
			@include font-tablet(14, false, false);
			padding: 0 1px;
		}
		&-name-price {
			padding: 24px 14px;
			&__title{
				@include font-tablet(18, false, false);
				white-space: nowrap;
			}
			&__button{
				@include font-tablet(16, false, false);
			}
		}
	}
	@media (width>640px) {
		&-description__text{
			@include font-tablet(14, false, false);
			padding: 0 1px;
		}
		&-link{
			transition: 0.1s ease-in;
		}
		&-description{
			overflow: hidden;
			&__text {
				font-size: var(--desktop-font-size-16px);
				opacity: 0;
				display: block;
				position: relative;
				z-index: 2;
				transform: scale(0);
				transition: 0.2s ease-in;
				&_show{
					opacity: 1;
					transform: scale(1);
					transition: 0.2s ease-in;
				}
			}
		}
		&-name-price {
			margin-top: 20px;
			padding: 18px 26px;
			transition: 0.1s ease-in;
			flex-grow: 0;
			&__title{
				@include font-desktop(24, false, false);
				white-space: nowrap;
				overflow: hidden;
			}
			&__footnote{
				color: #FDFDFD;
				font-family: nunito-regular;
				font-size: var(--desktop-font-size-14px);
				@include font-desktop(14, $color-light-gray, 'regular');
				display: block;
				overflow: hidden;
			}
			&__button{
				@include font-desktop(20, false, false);
			}
		}
		&-blur{
			background: rgba(255, 255, 255, 0.20);
			-webkit-backdrop-filter: blur(3px);
			-moz-backdrop-filter: blur(3px);
			backdrop-filter: blur(3px);
			transition: 0.1s ease-in;
		}
	}
}
</style>
