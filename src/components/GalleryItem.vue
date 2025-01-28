<template>
  <li class="gallery-list__item gallery-slider__slide swiper-slide">
    <a href="#" class="gallery-list__link">
      <picture>
        <source :srcset="item.mobile" media="(max-width: 1023px)" />
        <source :srcset="item.desktop" media="(min-width: 1024px)" />
        <img :src="item.mobile" alt="" class="gallery-list__image" />
      </picture>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Ваши стили */
</style>