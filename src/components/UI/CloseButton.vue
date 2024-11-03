<template>
	<button class="close-button noselect">
	<img src="@/assets/svg/close_icon.svg" alt="close">
	</button>
</template>

<script>
export default {
	name: 'close-button',
};
</script>

<style lang="scss" scoped>
  .close-button {
    align-self: flex-end;
		background-color: transparent;
		@media (width>1024px){
			display: none;
		}
  }
</style>
