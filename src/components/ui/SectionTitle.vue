<script setup>
defineProps({
  // Alignment from tablet up; on mobile titles are always left-aligned
  align: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'center', 'right'].includes(value),
  },
})
</script>

<template>
  <div class="section noselect" :class="`section--${align}`">
    <h2 class="section-category">
      <slot name="category" />
    </h2>
    <h3 class="section-title">
      <slot name="title" />
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.section {
  text-align: left;

  &-category {
    @include font-mobile(16, #f2be22, 'regular');
    margin-bottom: 6px;
    text-transform: lowercase;
  }

  &-title {
    @include font-mobile(24, $color-dark-gray, 'extrabold');
  }

  @media (min-width: 640px) {
    &--center {
      text-align: center;
    }

    &--right {
      text-align: right;
    }
  }

  @media (width > 640px) {
    &-category {
      @include font-tablet(16, false, false);
    }

    &-title {
      @include font-tablet(24, false, false);
    }
  }

  @media (width > 1024px) {
    &-category {
      @include font-desktop(24, false, false);
    }

    &-title {
      @include font-desktop(24, false, false);

      &:hover {
        color: #f2be22;
        transition: 0.3s ease-in-out;
      }
    }
  }
}
</style>
