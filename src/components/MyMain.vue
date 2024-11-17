<template>
	<main class="main">
		<about-section/>
		<offer-section/>
		<trends-section/>
	</main>
</template>

<script>
import AboutSection from '@/components/AboutSection.vue';
import OfferSection from '@/components/OfferSection.vue';
import TrendsSection from './TrendsSection.vue';

export default {
	components: {
		AboutSection,
		OfferSection,
		TrendsSection,
	},
	name: 'my-main',
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/globals.scss";
</style>
