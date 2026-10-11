<script setup>
import { contacts } from '@/data/footer'
</script>

<template>
  <section class="contacts">
    <div class="container">
      <h3 class="contacts__title">{{ contacts.title }}</h3>
      <p class="contacts__text">{{ contacts.description }}</p>
      <ul class="contacts-list">
        <li class="contacts-list__item">
          <a :href="`mailto:${contacts.email}`" class="contacts-list__link">
            {{ contacts.email }}
          </a>
        </li>
        <li class="contacts-list__item">
          <a :href="`tel:${contacts.phone}`" class="contacts-list__link">
            {{ contacts.phone }}
          </a>
        </li>
      </ul>
      <ul class="social-media-list">
        <li
          v-for="social in contacts.socialMedia"
          :key="social.label"
          class="social-media-list__item"
        >
          <a :href="social.href" class="social-media-list__link">
            <img :src="social.icon" :alt="social.label" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  text-align: left;

  &__title {
    @include font-mobile(20, $color-light-gray, 'bold');
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

  &__link {
    @include font-mobile(14, #fff, 'bold');
  }
}

.social-media-list {
  display: flex;
  gap: 16px;
}

@media (width > 640px) {
  .contacts {
    &__title {
      @include font-tablet(22, false, false);
    }

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
  .contacts {
    width: calc(100% / 3);

    &__title {
      @include font-desktop(20, false, false);
    }

    &__text {
      @include font-desktop(14, false, false);
    }
  }

  .contacts-list__link {
    @include font-desktop(14, false, false);
  }
}
</style>
