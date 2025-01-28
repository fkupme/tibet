<template>
	<main class="main">
		<about-section/>
		<offer-section/>
		<trends-section/>
		<blog-section/>
	</main>
</template>

<script>
import AboutSection from '@/components/AboutSection.vue';
import OfferSection from '@/components/OfferSection.vue';
import TrendsSection from '@/components/TrendsSection.vue';
import BlogSection from '@/components/BlogSection.vue'

export default {
	components: {
		AboutSection,
		OfferSection,
		TrendsSection,
		BlogSection
	},
	name: 'my-main',
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/globals.scss";
</style>
