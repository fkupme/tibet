<template>
	<main class="main">
		<about-section/>
		<offer-section/>
	</main>
</template>

<script>
import AboutSection from '@/components/AboutSection.vue';
import OfferSection from '@/components/OfferSection.vue';

export default {
	components: {
		AboutSection,
		OfferSection,
	},
	name: 'my-main',
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/globals.scss";
</style>
