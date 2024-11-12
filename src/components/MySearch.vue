<template>
	<section >
          <form class="search" :class='{"search_active":show && isMobile}'>
						<close-button class="search-close" v-show="show && isMobile" @click.prevent="toggle(true)" />
						<my-select :class='{"select-label_active":show && isMobile}' v-model='location' :options='locationOptions' :id='locationID'>выберите из списка</my-select>
						<label :class='{"select-label_active":show && isMobile}' for="date" class="select-label">
							<input id="date" class="select-field" type="date" v-model="date"/>
							укажите диапазон</label
						>
						<my-select :class='{"select-label_active":show && isMobile}' v-model='team' :options='teamOptions' :id='teamID'>минимум 4 человека</my-select>
						<button
						class="search__button"
						v-show="isMobile"
						:class='{
							"search__button_active":!show
							}'
							@click.prevent='toggle(isMobile)'
							>Найти программу</button>
						<button
						class="search__button"
						:class='{"search__button_active":!isMobile || show}'
						@click.prevent='getData; toggle(isMobile);'
						>Найти программу</button>
					</form>
        </section>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';
import viewportWidth from '@/mixins/viewportWidth';
import { mapState } from "vuex";

export default {
	mixins: [
		toggleMixin,
		viewportWidth,
	],
	data() {
		return {
			location: 'Локация',
			date: '',
			team: '4',
		};
	},
	name: "my-search",
	methods: {
		getData() {
			if (!this.location || !this.date || !this.team) {
				alert("Все поля должны быть заполнены!");
			}
			const data = {
				location: this.location,
				date: this.date,
				team: this.team,
			};
			this.location = 'Локация';
			this.date = '';
			this.team = '4';
			return data;
		},
	},
	computed: {
		...mapState({
			locationOptions: (state) => state.search.locationOptions,
			locationID: (state) => state.search.locationID,
			teamOptions: (state) => state.search.teamOptions,
			teamID: (state) => state.search.teamID,
		}),
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/globals.scss";
@import '@/assets/styles/fieldStyles.scss';
.search {
	display: inline-flex;
	@keyframes rotate {
		from{transform: rotateY(0)}
		50%{
			transform: rotateY(0.5turn);
		}
		to{
			transform: rotateY(0);
		}
	}
		margin-top: 32px;
		transition: 0.5s ease-in;
		&-close{
			position: absolute;
      top: -10px;
      right: -10px;
      padding: 8px;
		}
		&_active{
			position: absolute;
			inset: 0 0 50px 0;
			margin-inline: auto;
			display: flex;
			flex-direction: column;
			gap: 10px;
			width: 75%;
			border-radius: 10px;
			background: rgba(255, 255, 255, 0.20);
			backdrop-filter: blur(3px);
			padding: 30px 15px;
			justify-content: space-evenly;
			transition: 0.3s ease-in;
		}
		&__button{
		@include font-mobile(16, #1A3E3E, "bold");
		padding: 16px 36px;
		border-radius: 4px;
		background: #FDFDFD;
		position: absolute;
		opacity: 0;
		visibility: hidden;
				&_active{
					position: static;
					opacity: 1;
					visibility: visible;
					animation: rotate 0.3s normal none;
				}
		}
		@media(width>640px){
			width: 100%;
			border-radius: 10px;
			background: rgba(255, 255, 255, 0.20);
			backdrop-filter: blur(3px);
			padding: 30px 15px;
			display: flex;
			column-gap: 5px;
			&__button{
				@include font-tablet(11, #1A3E3E, "bold");
				padding: 8px 16px;
				white-space: nowrap;
				height: 5vw;
				&:hover{
					background: #1A3E3E;
					color: #FDFDFD;
					transition: 0.3s ease-in;}
			}
		}
		@media(width>1024px){
			&__button{
				@include font-desktop(14, #1A3E3E, 'bold');
				white-space: nowrap;
				padding: 8px 16px;
				height: 2.86vw;;
				transition: 0.3s ease-in;
			}
		}
	}
</style>
