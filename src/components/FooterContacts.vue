<template>
  <section class="contacts">
    <div class="container">
      <h3 class="contacts__title footer-title">{{ contacts.title }}</h3>
      <p class="contacts__text">{{ contacts.description }}</p>
      <ul class="contacts-list">
        <li class="contacts-list__item">
          <a :href="'mailto:' + contacts.email" class="contacts-list__link">
            {{ contacts.email }}
          </a>
        </li>
        <li class="contacts-list__item">
          <a :href="'tel:' + contacts.phone" class="contacts-list__link">
            {{ contacts.phone }}
          </a>
        </li>
      </ul>
      <ul class="social-media-list">
        <li
          v-for="(social, index) in contacts.socialMedia"
          :key="index"
          class="social-media-list__item"
        >
          <a :href="social.link" class="social-media-list__link">
            <img
              :src="require(`@/assets/svg/${social.icon}`)"
              :alt="social.alt"
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'footer-contacts',
  computed: {
    ...mapState({ contacts: (state) => state.footer.contacts }),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';
.footer-title {
  @include font-mobile(20, $color-light-gray, 'bold');
}

.contacts {
  text-align: left;

  &__title {
    margin-bottom: 17px;
  }

  &__text {
    @include font-mobile(14, #fff, 'regular');
    line-height: 1.42;
    margin-bottom: 30px;
  }
}

.contacts-list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  &__item {
    list-style-type: none;
  }

  &__link {
    @include font-mobile(14, #fff, 'bold');
  }
}

.social-media-list {
  display: flex;
  gap: 16px;

  &__item {
    list-style-type: none;
  }
}

@media (width > 640px) {
  .footer-title {
    @include font-tablet(22, false, false);
  }

  .contacts {
    &__text {
      @include font-tablet(14, false, false);
    }
  }

  .contacts-list__link {
    @include font-tablet(16, false, false);
  }

  .social-media-list {
    align-items: center;
  }
}

@media (width > 1024px) {
  .footer-title {
    @include font-desktop(20, false, false);
  }

  .contacts {
    width: calc(100% / 3);

    &__text {
      @include font-desktop(14, false, false);
    }
  }

  .contacts-list__link {
    @include font-desktop(14, false, false);
  }
}
</style>
