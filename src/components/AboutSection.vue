<template>
			<section class="about">
			<div class="container">
				<div class="about-wrapper">
					<div class="about-box">
						<section-title>
							<template v-slot:category>о нашем походе</template>
							<template v-slot:title>Исследуйте все горные массивы мира вместе с нами</template>
						</section-title>
						<p class="about__text main-text">Его корни уходят в один фрагмент классической латыни 45 года
							н.э.,
							то есть
							более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа
							Hampden-Sydney,
							штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur" и занялся его
							поисками в классической латинской литературе.</p>
						<main-button>Программа тура</main-button>
					</div>
					<div class="about-video">
						<div class="about-video-wrapper">
							<video
							class="about-video__player"
							src="#"
							poster="../assets/images/about-video.png"
							controls
							>
								<track kind="captions"/>
								<source/>
							</video>
						</div>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
export default {
	name: 'about-section',
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/globals.scss";
.about{
	padding-block: $mobile-section-padding;
	&-box{
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&-video{
		margin-top: 40px;
		&__player{
			border-radius: 32px;
			width: 100%;
		}
		&-wrapper{
		}
	}

	@media(width>640px){
		padding-block: $tablet-section-padding;
		&-video__player{
			object-fit: cover;
			height: 90vw;
		}
	}
	@media(width>1024px){
		padding-block: $desktop-section-padding;
		&-wrapper{
			padding: 64px 0;
			display: flex;
			flex-direction: row-reverse;
			gap: 6.25vw;
		}
		&-box{
			width: 50%;
		}
		&-video{
			position: relative;
			margin-top: 0;
			width: calc(50% - 120px);
			display: flex;
			align-items: flex-end;
			justify-content: flex-end;
			&__player{
				position: relative;
				aspect-ratio: auto 35 / 40;
				border-radius: 32px;
				width: 18.2vw;
				height: 20vw;
				margin-left: auto;
			}
			&-wrapper{
				position: relative;
				&::before{
					position: absolute;
					content: '';
					width: 18.2vw;
					height: 20vw;
					top: -15%;
					left: -33%;
					background-image: url('../assets/images/video-bg.png');
					aspect-ratio: auto 35 / 40;
					background-repeat: no-repeat;
					background-size: cover;
					border-radius: 32px;
				}
			}
		}
	}
}
</style>
