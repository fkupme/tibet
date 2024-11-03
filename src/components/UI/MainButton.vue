<template>
	<button @click.prevent class="main-button noselect">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'main-button',
};
</script>

<style lang='scss'>
@import "@/assets/styles/globals.scss";

.main-button {
	display: block;
	padding: 12px 24px;
	border-radius: 4px;
	background: #1A3E3E;
	@include font-mobile(16, $color-light-gray, "semibold");
	letter-spacing: 0.192px;
	align-self: center;
	@media (width>640px) {
		@include font-tablet(18, $color-light-gray, "semibold");
	}
	@media (width>1024px) {
		@include font-desktop(16, $color-light-gray, "semibold");
		transition: 0.3s ease-in-out;
		&:hover{
			background-color: #F2BE22;
			color: #1A3E3E;
			transition: 0.3s ease-in-out;
		}
	}
}
</style>
