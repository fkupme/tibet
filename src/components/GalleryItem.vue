<template>
  <div class="gallery__item">
    <a href="#" class="gallery__link">
      <span class="visually-hidden">item</span>
      <picture>
        <source :srcset="item.mobile" media="(max-width: 639px)" />
        <source :srcset="item.desktop" media="(min-width: 640px)" />
        <img :src="item.mobile" alt="" class="gallery__image" />
      </picture>
    </a>
  </div>
</template>

<script>
export default {
  name: 'gallery-item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.gallery__item {
  display: block;
  width: 100%;
}
.gallery__image {
  width: 100%;
}
</style>
