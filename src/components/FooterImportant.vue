<template>
  <section class="importantly">
    <div class="container">
      <h3 class="importantly__title footer-title">{{ important.title }}</h3>
      <ul class="importantly-list">
        <li
          v-for="(item, index) in important.items"
          :key="index"
          class="importantly-list__item"
        >
          <a :href="item.link" class="importantly-list__link">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'footer-important',
  computed: {
    ...mapState({ important: (state) => state.footer.important }),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';

.importantly {
  &__title {
    margin-bottom: 20px;
  }
}

.importantly-list {
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
    @include font-mobile(14, #fff, 'regular');
  }
}

@media (width > 640px) {
  .importantly-list__link {
    @include font-tablet(16, false, false);
  }
}

@media (width > 1024px) {
  .importantly {
    width: calc(100% / 3);
  }

  .importantly-list__link {
    position: relative;
    @include font-desktop(14, false, false);
    @include hover-underline;
  }
}
</style>
