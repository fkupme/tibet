<template>
  <my-header />
</template>

<script>
import MyHeader from './components/MyHeader.vue';

export default {
	components: {
		MyHeader,
	},
};
</script>

<style lang="scss">
#app {
  font-family: nunito-regular, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
