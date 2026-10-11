<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import CloseButton from '@/components/ui/CloseButton.vue'
import { useEscapeKey } from '@/composables/useEscapeKey'
import { navigation } from '@/data/navigation'

// On mobile the menu is an overlay; from 1024px up it is a regular inline nav
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['close'])

useEscapeKey(() => {
  if (props.open) emit('close')
})
</script>

<template>
  <nav class="menu" :class="{ 'show-mask': open }" @click.self="emit('close')">
    <div class="menu-wrapper" :class="{ 'show-menu': open }">
      <ul class="menu-list">
        <li class="menu-list__close">
          <CloseButton @click="emit('close')" />
        </li>
        <li
          v-for="item in navigation"
          :key="item.label"
          class="menu-list__item"
        >
          <a :href="item.href" class="menu-list__link">{{ item.label }}</a>
        </li>
      </ul>
      <BaseButton class="menu__button">Консультация</BaseButton>
    </div>
  </nav>
</template>

<style lang="scss">
.menu {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000005e;
  backdrop-filter: blur(3px);
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition:
    transform,
    opacity,
    0.4s ease-in-out;

  &-wrapper {
    padding-left: 20px;
    width: 75vw;
    height: 85vh;
    background: #1a3e3e;
    display: flex;
    flex-direction: column;
    transform: scale(0) translate(80vw, -100vw);
    transition:
      opacity,
      transform 0.8s ease-in-out;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__close {
      display: flex;
      justify-content: flex-end;
    }

    &__item {
      padding-left: 18px;
      list-style-type: none;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        background-image: url('@/assets/svg/list-style.svg');
        background-repeat: no-repeat;
        width: 10px;
        height: 16px;
        left: 0;
      }
    }

    &__link {
      @include font-mobile(14, #fff, 'regular');
      text-decoration: none;
      @include hover-underline;
    }
  }

  div > &__button {
    display: none;
  }

  @media (width > 1024px) {
    position: static;
    display: block;
    inset: unset;
    background: transparent;
    backdrop-filter: none;
    visibility: visible;
    opacity: 1;
    transition: none;

    div > &__button {
      display: block;
      margin-top: 0;
    }

    &-wrapper {
      padding-left: 20px;
      height: auto;
      background: inherit;
      gap: 15px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 45vw;
      transform: scale(1);
      transition:
        opacity,
        transform 0.8s ease-in-out;
    }

    &-list {
      flex-direction: row;
      gap: 0;
      justify-content: space-between;
      width: 100%;

      &__close {
        display: none;
      }

      &__item {
        position: static;

        &::before {
          content: unset;
        }
      }

      &__link {
        @include font-desktop(18, false, 'semibold');
        white-space: nowrap;
      }
    }
  }
}

.show-mask {
  visibility: visible;
  opacity: 1;
  transition:
    opacity,
    transform 0.4s ease-in-out;
}

.show-menu {
  transform: scale(1) translate(0, 0);
  transition:
    opacity,
    transform 0.8s ease-in-out;
}
</style>
