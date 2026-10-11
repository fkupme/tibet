<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="condition">
    <div class="condition__icon">
      <img :src="icon" alt="" class="condition__icon-image" />
    </div>
    <div class="condition-text">
      <h3 class="condition-text__title">
        <a href="#" class="condition-text__link">{{ title }}</a>
      </h3>
      <p class="condition-text__description">{{ description }}</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.condition {
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 10%;

  &__icon {
    width: 40%;
  }

  &__icon-image {
    width: 100%;
  }

  &-text {
    &__title {
      @include font-mobile(18, $color-dark-gray, 'bold');
      letter-spacing: 0.216px;
    }

    &__description {
      @include font-mobile(14, $color-black, 'regular');
      width: 100%;
      line-height: 1.42;
    }
  }

  @media (width > 640px) {
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(24, 18, 30, 0.12);
    background: rgb(253, 253, 253);

    &__icon {
      width: 60%;
    }

    &-text {
      &__title {
        @include font-tablet(20, false, false);
      }

      &__description {
        @include font-tablet(16, false, false);
      }
    }
  }

  @media (width > 1024px) {
    &-text {
      &__title {
        @include font-desktop(18, false, false);
      }

      &__description {
        @include font-desktop(14, false, false);
      }

      &__link {
        transition: 0.3s ease-in-out;

        &:hover {
          color: #f2be22;
          transition: 0.3s ease-in-out;
        }
      }
    }
  }
}
</style>
