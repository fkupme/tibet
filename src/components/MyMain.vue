<template>
	<main class="main">
		<about-section/>
	</main>
</template>

<script>
import AboutSection from '@/components/AboutSection.vue';

export default {
	components: {
		AboutSection,
	},
	name: 'my-main',
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/globals.scss";
</style>
