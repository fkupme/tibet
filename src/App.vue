<template>
  <my-header/>
  <my-main/>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyMain from '@/components/MyMain.vue';

export default {
	components: {
		MyHeader,
		MyMain,
	},
};
</script>

<style lang="scss">
#app {
  position: relative;
  font-family: nunito-regular, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
