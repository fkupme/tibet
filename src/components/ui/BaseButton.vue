<script setup>
defineProps({
  // Horizontal alignment on desktop; on smaller screens the button is centered
  align: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value),
  },
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<template>
  <button
    :type="type"
    class="main-button noselect"
    :class="`main-button--${align}`"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.main-button {
  display: block;
  padding: 12px 24px;
  border-radius: 4px;
  background: #1a3e3e;
  @include font-mobile(16, $color-light-gray, 'semibold');
  letter-spacing: 0.192px;
  margin: 32px auto 0;

  @media (width > 640px) {
    @include font-tablet(18, $color-light-gray, 'semibold');
  }

  @media (width > 1024px) {
    @include font-desktop(16, $color-light-gray, 'semibold');
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #f2be22;
      color: #1a3e3e;
      transition: 0.3s ease-in-out;
    }
  }

  @media (min-width: 1024px) {
    &.main-button--left {
      margin-right: auto;
    }

    &.main-button--right {
      margin-left: auto;
    }

    &.main-button--center {
      margin-inline: auto;
    }
  }
}
</style>
