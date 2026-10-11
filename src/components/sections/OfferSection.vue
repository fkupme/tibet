<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import OfferCard from '@/components/cards/OfferCard.vue'
import { offerPhotos, offers } from '@/data/offers'
</script>

<template>
  <section class="offer">
    <div class="container offer-wrapper">
      <div class="offer-box">
        <SectionTitle>
          <template #category>наше предложение</template>
          <template #title>Лучшие программы для тебя</template>
        </SectionTitle>
        <p class="offer__text main-text">
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то
          есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
          из колледжа.
        </p>
        <OfferCard
          v-for="offer in offers"
          :key="offer.title"
          class="offer__condition"
          :icon="offer.icon"
          :title="offer.title"
          :description="offer.description"
        />
        <BaseButton align="left" class="offer__button">
          Стоимость программ
        </BaseButton>
      </div>
      <ul class="offer-image-list noselect">
        <li
          v-for="(photo, index) in offerPhotos"
          :key="photo"
          class="offer-image-list__item"
        >
          <a href="#" class="offer-image-list__link">
            <img
              class="offer-image-list__image"
              :src="photo"
              :alt="`Фото из похода ${index + 1}`"
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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

  @media (width > 640px) {
    padding-block: $tablet-section-padding;
  }

  @media (width > 1024px) {
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
