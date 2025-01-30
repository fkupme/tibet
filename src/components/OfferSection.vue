<template>
  <section class="offer">
    <div class="container offer-wrapper">
      <div class="offer-box">
        <section-title @click.prevent>
          <template #category> наше предложение </template>
          <template #title> Лучшие программы для тебя </template>
        </section-title>
        <p class="offer__text main-text">
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то
          есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
          из колледжа.
        </p>
        <offer-card class="offer__condition" @click.prevent>
          <template #icon>
            <img src="@/assets/svg/guide.svg" alt="" style="width: 100%" />
          </template>
          <template #title> Опытный гид </template>
          <template #description>
            Для современного мира базовый вектор развития предполагает
            независимые способы реализации соответствующих условий активизации.
          </template>
        </offer-card>
        <offer-card class="offer__condition">
          <template #icon>
            <img src="@/assets/svg/safe.svg" alt="" style="width: 100%" />
          </template>
          <template #title>Безопасный поход</template>
          <template #description
            >Для современного мира базовый вектор развития предполагает
            независимые способы реализации соответствующих условий
            активизации.</template
          >
        </offer-card>
        <offer-card class="offer__condition">
          <template #icon>
            <img src="@/assets/svg/price.svg" alt="" style="width: 100%" />
          </template>
          <template #title>Лояльные цены</template>
          <template #description
            >Для современного мира базовый вектор развития предполагает
            независимые способы реализации соответствующих условий
            активизации.</template
          >
        </offer-card>
        <main-button :align="'left'" class="offer__button"
          >Стоимость программ</main-button
        >
      </div>
      <ul class="offer-image-list noselect">
        <li class="offer-image-list__item">
          <a href="#" class="offer-image-list__link">
            <span class="visually-hidden">1</span>
            <img
              class="offer-image-list__image"
              src="@/assets/images/offer-1.png"
              alt=""
            />
          </a>
        </li>
        <li class="offer-image-list__item">
          <a href="#" class="offer-image-list__link">
            <span class="visually-hidden">1</span>
            <img
              class="offer-image-list__image"
              src="@/assets/images/offer-2.png"
              alt=""
            />
          </a>
        </li>
        <li class="offer-image-list__item">
          <a href="#" class="offer-image-list__link">
            <span class="visually-hidden">1</span>
            <img
              class="offer-image-list__image"
              src="@/assets/images/offer-3.png"
              alt=""
            />
          </a>
        </li>
        <li class="offer-image-list__item">
          <a href="#" class="offer-image-list__link">
            <span class="visually-hidden">1</span>
            <img
              class="offer-image-list__image"
              src="@/assets/images/offer-4.png"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import OfferCard from '@/components/OfferCard.vue'

export default {
  name: 'offer-section',
  components: {
    OfferCard,
  },
  data() {
    return {
      bindings: 'bindings',
    }
  },
  methods: {
    initSwipe() {},
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';
.condition_active {
  z-index: 10;
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}
.offer {
  position: relative;
  padding-block: $mobile-section-padding;
  background: #f3f5f4;
  width: 100%;
  &-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  &-image-list {
    display: none;
  }
  @media (width>640px) {
    padding-block: $tablet-section-padding;
  }
  @media (width>1024px) {
    padding-block: $desktop-section-padding;
    &__condition {
      transition: 0.3s ease-out;
    }
    &__condition:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in;
    }
    &-wrapper {
      display: flex;
      gap: 4.68vw;
    }
    &-box {
      width: 50%;
      gap: 20px;
    }
    &-image-list {
      width: 50%;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      &__item:first-child,
      &__item:nth-child(2) {
        display: inline-flex;
        align-items: flex-end;
      }
      &__image {
        width: 13vw;
      }
    }
  }
}
</style>
