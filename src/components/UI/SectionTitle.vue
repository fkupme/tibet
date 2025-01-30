<template>
  <div class="section noselect" :style="textAlign">
    <h2 class="section-category">
      <slot name="category"></slot>
    </h2>
    <h3 class="section-title">
      <slot name="title"></slot>
    </h3>
  </div>
</template>

<script>
import viewportWidth from '@/mixins/viewportWidth'

export default {
  name: 'section-title',
  mixins: [viewportWidth],
  props: {
    align: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    textAlign() {
      return { 'text-align': this.isMobile ? 'left' : this.align }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';
.section {
  &-category {
    @include font-mobile(16, #f2be22, 'regular');
    margin-bottom: 6px;
    text-transform: lowercase;
  }
  &-title {
    @include font-mobile(24, $color-dark-gray, 'extrabold');
  }
  @media (width>640px) {
    &-category {
      @include font-tablet(16, false, false);
    }
    &-title {
      @include font-tablet(24, false, false);
    }
  }
  @media (width>1024px) {
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
