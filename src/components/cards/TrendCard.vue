<script setup>
const props = defineProps({
  trend: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['select'])

// The breakpoint picks the image in CSS, see `background-image` below
const backgroundVars = {
  '--bg-mobile': `url(${props.trend.image.mobile})`,
  '--bg-desktop': `url(${props.trend.image.desktop})`,
}
</script>

<template>
  <article
    class="trend"
    :style="backgroundVars"
    tabindex="0"
    @click="emit('select')"
    @keydown.enter="emit('select')"
  >
    <div class="trend-link">
      <div class="trend-rating">
        <img src="@/assets/svg/star.svg" alt="" class="trend-rating__icon" />
        <p class="trend-rating__number">{{ trend.rating }}</p>
      </div>
      <div class="trend-description">
        <p class="trend-description__text">{{ trend.description }}</p>
      </div>
      <div class="trend-name-price">
        <div class="name-wrapper">
          <h3 class="trend-name-price__title">{{ trend.title }}</h3>
          <p class="trend-name-price__footnote">{{ trend.footnote }}</p>
        </div>
        <button type="button" class="trend-name-price__button">
          {{ trend.price }}$
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.trend {
  background-image: var(--bg-mobile);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 32px;
  aspect-ratio: 57 / 80;
  position: relative;
  padding: 0;
  overflow: hidden;
  cursor: pointer;

  &-link {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    inset: 0;
    padding: 37px 0 0;
    width: 100%;
  }

  &-rating {
    display: flex;
    align-items: center;
    align-self: self-end;
    gap: 10px;
    padding: 4px 8px;
    border-radius: 4px 0 0 4px;
    background: rgba(253, 253, 253, 0.4);
    backdrop-filter: blur(2px);

    &__number {
      color: #1a3e3e;
      font-family: nunito-bold;
    }
  }

  &-description__text {
    @include font-mobile(14, $color-light-gray, 'regular');
    width: 100%;
    line-height: 1.42;
    display: none;
    overflow: hidden;
  }

  &-name-price {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0px 0px 32px 32px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(3px);
    padding: 24px;

    &__title {
      @include font-mobile(18, $color-light-gray, 'bold');
    }

    &__button {
      @include font-mobile(16, $color-light-gray, 'bold');
      padding: 6px 12px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.3);
    }

    &__footnote {
      display: none;
    }
  }

  @media (min-width: 640px) {
    background-image: var(--bg-desktop);
  }

  @media (width > 640px) {
    &-description__text {
      @include font-tablet(14, false, false);
      padding: 0 1px;
    }

    &-name-price {
      padding: 24px 14px;

      &__title {
        @include font-tablet(18, false, false);
        white-space: nowrap;
      }

      &__button {
        @include font-tablet(16, false, false);
      }
    }
  }

  @media (width > 1024px) {
    &-description__text {
      @include font-tablet(14, false, false);
      padding: 0 1px;
    }

    &-link {
      transition: 0.1s ease-in;
    }

    &-description {
      overflow: hidden;

      &__text {
        font-size: inherit;
        opacity: 0;
        display: block;
        position: relative;
        z-index: 2;
        transform: scale(0);
        transition: 0.2s ease-in;
      }
    }

    &-name-price {
      margin-top: 20px;
      padding: 18px 26px;
      transition: 0.1s ease-in;
      flex-grow: 0;

      &__title {
        @include font-desktop(24, false, false);
        white-space: nowrap;
        overflow: hidden;
      }

      &__footnote {
        @include font-desktop(14, $color-light-gray, 'regular');
        display: block;
        overflow: hidden;
      }

      &__button {
        @include font-desktop(20, false, false);
      }
    }

    // Hover / keyboard focus reveals the description over a blurred card
    &:hover,
    &:focus-visible {
      .trend-link {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(3px);
        transition: 0.1s ease-in;
      }

      .trend-description__text {
        opacity: 1;
        transform: scale(1);
        transition: 0.2s ease-in;
      }
    }
  }
}
</style>
