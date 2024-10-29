<template>
	<section class="search">
          <my-select v-model='location' :options='locationOptions' :id='locationID'>выберите из списка</my-select>
          <label for="date" class="select-label">
            <input id="date" class="select-field" type="date" v-model="date"/>
            укажите диапазон</label
          >
					<my-select v-model='team' :options='teamOptions' :id='teamID'>минимум 4 человека</my-select>
          <button class="search__button" @click.prevent='getData'>Найти программу</button>
        </section>
</template>

<script>
import { mapState } from "vuex";

export default {
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
			} else {
				return {
					location: this.location,
					date: this.date,
					team: this.team,
				};
			}
			return false;
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
		margin-top: 32px;
		&__button{
		@include font-mobile(16, #1A3E3E, "bold");
		padding: 16px 36px;
		border-radius: 4px;
		background: #FDFDFD;
		}
		@media(width>640px){
			width: 100%;
			border-radius: 10px;
			background: rgba(255, 255, 255, 0.20);
			backdrop-filter: blur(3px);
			padding: 30px 15px;
			display: flex;
			justify-content: space-evenly;
			&__button{
				@include font-tablet(12, #1A3E3E, "bold");
				padding: 8px 16px;
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
				height: 2.86vw;;
			}
		}
	}
</style>
