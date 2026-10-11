<script setup>
defineProps({
  // { mobile, desktop } image URLs
  photo: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="gallery__item">
    <a href="#" class="gallery__link">
      <picture>
        <source :srcset="photo.desktop" media="(min-width: 640px)" />
        <img :src="photo.mobile" alt="Фото из похода" class="gallery__image" />
      </picture>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.gallery__item {
  display: block;
  width: 100%;
}

.gallery__image {
  width: 100%;
}
</style>
