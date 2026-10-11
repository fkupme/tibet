<script setup>
import CloseButton from '@/components/ui/CloseButton.vue'
import { useEscapeKey } from '@/composables/useEscapeKey'
import { useScrollLock } from '@/composables/useScrollLock'

const props = defineProps({
  trend: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['close'])

const backgroundVars = {
  '--bg-mobile': `url(${props.trend.image.mobile})`,
  '--bg-desktop': `url(${props.trend.image.desktop})`,
}

useEscapeKey(() => emit('close'))
useScrollLock()
</script>

<template>
  <div class="trend-modal" @click.self="emit('close')">
    <article
      class="trend-active"
      :style="backgroundVars"
      role="dialog"
      aria-modal="true"
      :aria-label="trend.title"
    >
      <div class="trend-active-link trend-active-blur">
        <CloseButton class="trend-active-close" @click="emit('close')" />
        <div class="trend-active-name-price">
          <div class="name-wrapper">
            <p class="trend-active-name-price__footnote">
              {{ trend.footnote }}
            </p>
            <h3 class="trend-active-name-price__title">{{ trend.title }}</h3>
          </div>
        </div>
        <div class="trend-active-description">
          <p class="trend-active-description__text">
            {{ trend.description }}
          </p>
        </div>
        <ul class="trend-active-activities-list">
          <li
            v-for="activity in trend.activities"
            :key="activity"
            class="trend-active-activities-list__item"
          >
            {{ activity }}
          </li>
        </ul>
        <button type="button" class="trend-active-name-price__button">
          {{ trend.price }}$
        </button>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.trend-modal {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00000059;
}

.trend-active {
  position: relative;
  background-image: var(--bg-mobile);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 32px;
  aspect-ratio: 57 / 80;
  width: 95%;
  max-height: 95vh;
  text-align: left;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &-close {
    position: absolute;
    top: 20px;
    right: 10px;
  }

  &-blur {
    background: rgba(5, 0, 0, 0.457);
    backdrop-filter: blur(3px);
    transition: 0.1s ease-in;
    width: 100%;
  }

  &-link {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    position: absolute;
    inset: 0;
    padding: 15px 10px;
  }

  &-description__text {
    @include font-mobile(16, $color-light-gray, 'regular');
    width: 100%;
    line-height: 1.42;
    overflow: hidden;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.3);
    margin-inline: auto;
    margin-bottom: 20px;
  }

  &-name-price {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 24px;

    &__title {
      @include font-mobile(24, #f2be22, 'bold');
      text-decoration: underline;
    }

    &__footnote {
      @include font-mobile(12, $color-light-gray, 'regular');
      margin-bottom: 5px;
    }

    &__button {
      @include font-mobile(16, $color-light-gray, 'bold');
      padding: 6px 12px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.3);
      margin-inline: auto;
    }
  }

  &-activities-list {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.3);
    margin-inline: auto;
    margin-bottom: 20px;

    &__item {
      margin-right: 10px;
      margin-bottom: 10px;
      text-transform: lowercase;
      @include font-mobile(14, $color-light-gray, 'regular');

      &::before {
        content: '';
        background-image: url('@/assets/svg/star.svg');
        background-size: contain;
        width: 18px;
        aspect-ratio: 1;
        position: relative;
        top: 5px;
        display: inline-block;
      }
    }
  }

  @media (min-width: 640px) {
    background-image: var(--bg-desktop);
  }

  @media (width > 640px) {
    width: 60%;

    &-close {
      display: block;
    }

    &-description__text {
      @include font-tablet(16, false, false);
    }

    &-name-price {
      &__title {
        @include font-tablet(24, false, false);
      }

      &__footnote {
        @include font-tablet(12, false, false);
      }

      &__button {
        @include font-tablet(16, false, false);
      }
    }

    &-activities-list__item {
      @include font-tablet(14, false, false);

      &::before {
        width: 25px;
        top: 7px;
      }
    }
  }

  @media (width > 1024px) {
    width: 35%;

    // CloseButton hides itself on desktop; the modal still needs it
    &-close {
      display: block !important;
    }

    &-description__text {
      @include font-desktop(28, false, false);
    }

    &-name-price {
      &__title {
        @include font-desktop(46, false, false);
      }

      &__footnote {
        @include font-desktop(18, false, false);
      }

      &__button {
        @include font-desktop(36, false, false);
        transition: 0.3s ease-in;

        &:hover {
          background: #080000ab;
          color: #f2be22;
          transition: 0.3s ease-in;
        }
      }
    }

    &-activities-list__item {
      @include font-desktop(28, false, false);

      &::before {
        width: 30px;
        top: 7px;
      }
    }
  }
}
</style>
