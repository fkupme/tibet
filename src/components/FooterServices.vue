<template>
  <section class="services">
    <div class="container">
      <h3 class="services__title footer-title">{{ services.title }}</h3>
      <ul class="services-list">
        <li
          v-for="(item, index) in services.items"
          :key="index"
          class="services-list__item"
        >
          <a :href="item.link" class="services-list__link">
            {{ item.text }}
            <span v-if="item.isNew" class="new">NEW</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'footer-services',
  computed: {
    ...mapState({ services: (state) => state.footer.services }),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';

.services {
  &__title {
    text-align: left;
    @include font-mobile(20, $color-white, 'regular');
    margin-bottom: 20px;
  }
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__item {
    padding-left: 18px;
    list-style-type: none;
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
}

.new {
  padding: 2px 10px;
  border-radius: 5px;
  background: #fff;
  color: $color-dark-green;
  @include font-mobile(12, false, 'bold');
  text-transform: lowercase;
  margin-left: 18px;
}

@media (width > 640px) {
  .services__title {
    @include font-tablet(22, false, false);
  }
  .services-list__link {
    @include font-tablet(16, false, false);
  }

  .new {
    @include font-tablet(10, false, false);
  }
}

@media (width > 1024px) {
  .services {
    width: calc(100% / 3);
    &__title {
      @include font-desktop(20, false, false);
    }
  }

  .services-list__link {
    @include font-desktop(14, false, false);
    @include hover-underline;
  }

  .new {
    margin-left: 8px;
  }
}
</style>
