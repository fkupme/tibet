<template>
  <button :style="margin" class="main-button noselect" @click.prevent>
    <slot></slot>
  </button>
</template>

<script>
import viewportWidth from '@/mixins/viewportWidth'
export default {
  name: 'main-button',
  mixins: [viewportWidth],
  props: {
    align: {
      type: String,
      default: 'center',
    },
  },
  computed: {
    margin() {
      if (this.isMobile || this.isTablet) return null
      const margins = {
        right: 'margin-left: auto;',
        left: 'margin-right: auto;',
      }
      return margins[this.align] || 'margin-inline: auto;'
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/globals.scss';

.main-button {
  display: block;
  padding: 12px 24px;
  border-radius: 4px;
  background: #1a3e3e;
  @include font-mobile(16, $color-light-gray, 'semibold');
  letter-spacing: 0.192px;
  margin: 32px auto 0;
  @media (width>640px) {
    @include font-tablet(18, $color-light-gray, 'semibold');
  }
  @media (width>1024px) {
    @include font-desktop(16, $color-light-gray, 'semibold');
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #f2be22;
      color: #1a3e3e;
      transition: 0.3s ease-in-out;
    }
  }
}
</style>
