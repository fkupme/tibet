<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  // [{ text, href, isNew? }]
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="footer-links">
    <div class="container">
      <h3 class="footer-links__title">{{ title }}</h3>
      <ul class="footer-links__list">
        <li v-for="item in items" :key="item.text" class="footer-links__item">
          <a :href="item.href" class="footer-links__link">
            {{ item.text }}
            <span v-if="item.isNew" class="footer-links__badge">NEW</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer-links {
  &__title {
    text-align: left;
    @include font-mobile(20, $color-white, 'regular');
    margin-bottom: 20px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
    padding-left: 18px;
    position: relative;
    text-align: left;

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
    @include font-mobile(14, $color-white, 'regular');
  }

  &__badge {
    padding: 2px 10px;
    border-radius: 5px;
    background: #fff;
    color: $color-dark-green;
    @include font-mobile(12, false, 'bold');
    text-transform: lowercase;
    margin-left: 18px;
  }

  @media (width > 640px) {
    &__title {
      @include font-tablet(22, false, false);
    }

    &__link {
      @include font-tablet(16, false, false);
    }

    &__badge {
      @include font-tablet(10, false, false);
    }
  }

  @media (width > 1024px) {
    width: calc(100% / 3);

    &__title {
      @include font-desktop(20, false, false);
    }

    &__link {
      @include font-desktop(14, false, false);
      @include hover-underline;
    }

    &__badge {
      margin-left: 8px;
    }
  }
}
</style>
