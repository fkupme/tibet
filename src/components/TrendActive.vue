<template>
  <div class="wrapper">
    <article class="trend-active" :style="background">
      <div href="#" class="trend-active-link trend-active-blur" @click.prevent>
        <close-button
          class="trend-active-close"
          @click="$emit('close', null)"
        />
        <div class="trend-active-name-price">
          <div class="name-wrapper">
            <p class="trend-active-name-price__footnote">{{ card.footnote }}</p>
            <h3 class="trend-active-name-price__title">{{ card.title }}</h3>
          </div>
        </div>
        <div class="trend-active-description">
          <p
            class="trend-active-description__text"
            :class="{ 'trend-active-description__text_show': show }"
          >
            {{ card.description }}
          </p>
        </div>
        <ul class="trend-active-activities-list">
          <li
            v-for="activity in card.activities"
            :key="activity"
            class="trend-active-activities-list__item"
          >
            {{ activity }}
          </li>
        </ul>
        <button class="trend-active-name-price__button">
          {{ card.price }}$
        </button>
      </div>
    </article>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'
import viewportWidth from '@/mixins/viewportWidth'

export default {
  name: 'trend-active',
  mixins: [toggleMixin, viewportWidth],
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    background() {
      return {
        backgroundImage:
          this.width < 640
            ? `url(${this.card.image})`
            : `url(${this.card.imageDesktop})`,
      }
    },
  },
  methods: {
    close() {
      this.index = null
    },
  },
  emits: ['close'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';
.wrapper {
  position: absolute;
  inset: 0 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00000059;
  z-index: 1;
}
.trend-active {
  position: fixed;
  margin: auto;
  z-index: 2;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 32px;
  aspect-ratio: calc(57 / 80);
  width: 95%;
  text-align: left;
  overflow-y: scroll;
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
    -webkit-backdrop-filter: blur(3px);
    -moz-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    transition: 0.1s ease-in;
    width: 100%;
  }
  &-link {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    position: absolute;
    inset: 0 0 0 0;
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
      &:before {
        content: '';
        background-image: url('../assets/svg/star.svg');
        background-size: contain;
        width: 18px;
        aspect-ratio: 1;
        position: relative;
        top: 5px;
        display: inline-block;
      }
    }
  }
  @media (width>640px) {
    width: 60%;
    &-close {
      position: absolute;
      display: block;
      top: 20px;
      right: 10px;
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
    &-activities-list {
      &__item {
        @include font-tablet(14, false, false);
        &:before {
          width: 25px;
          top: 7px;
        }
      }
    }
  }
  @media (width>1024px) {
    width: 35%;
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
    &-activities-list {
      &__item {
        @include font-desktop(28, false, false);
        &:before {
          width: 30px;
          top: 7px;
        }
      }
    }
  }
}
</style>
