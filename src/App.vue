<template>
  <my-header />
  <my-main />
  <my-footer />
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyMain from '@/components/MyMain.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  components: {
    MyHeader,
    MyMain,
    MyFooter,
  },
}
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
