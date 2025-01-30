<template>
  <article class="blog-card">
    <div class="blog-card__image">
      <picture>
        <source :srcset="slide.image.mobile" media="(max-width: 1023px)" />
        <source :srcset="slide.image.desktop" media="(min-width: 1024px)" />
        <img :src="slide.image.mobile" alt="" class="blog-card-image" />
      </picture>
    </div>
    <div class="blog-card-text">
      <h3 class="blog-card__title">{{ slide.title }}</h3>
      <p class="blog-card__description">{{ slide.description }}</p>
      <div class="blog-card-date-continue">
        <span class="blog-card__date">{{ slide.date }}</span>
        <a :href="slide.link" class="blog-card__link">читать статью</a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    slide: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';
.blog-card {
  &-text {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__title {
    @include font-mobile(20, $color-dark-gray, 'bold');
  }
  &-text {
    text-align: left;
  }
  &__description {
    overflow: hidden;
    @include font-mobile(14, $color-dark-gray, 'regular');
    line-height: 1.42;
  }
  &-date-continue {
    display: flex;
    justify-content: space-between;
  }
  &__date {
    @include font-mobile(14, #f2be22, 'regular');
    line-height: 1.42;
  }
  &__link {
    @include font-mobile(14, #1a3e3e, 'bold');
    line-height: 1.42;
  }
  @media (width>640px) {
    padding-inline: 29px;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(24, 18, 30, 0.12);
    background: rgb(253, 253, 253);
    &-image {
      width: 100%;
    }
    &__title {
      @include font-tablet(20, false, false);
      transition: 0.3s ease-in-out;
      &:hover {
        color: #f2be22;
        transition: 0.3s ease-in-out;
        cursor: pointer;
      }
    }
    &__description {
      @include font-tablet(14, false, false);
    }
    &__date {
      @include font-tablet(12, false, false);
    }
    &__link {
      @include font-tablet(12, false, false);
      transition: 0.3s ease-in-out;
      &:hover {
        color: #f2be22;
        border-bottom: 1px solid #18121e;
        transition: 0.3s ease-in-out;
      }
    }
  }
  @media (width>1024px) {
    gap: 16px;
    width: 100%;
    display: flex;
    &-image {
      width: 100%;
    }
    &__title {
      @include font-desktop(20, false, false);
    }
    &__description {
      @include font-desktop(14, false, false);
    }
    &__date {
      @include font-desktop(12, false, false);
    }
    &__link {
      @include font-desktop(12, false, false);
    }
  }
}
</style>
