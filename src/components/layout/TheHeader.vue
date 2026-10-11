<script setup>
import { ref } from 'vue'
import NavMenu from '@/components/layout/NavMenu.vue'
import SearchForm from '@/components/search/SearchForm.vue'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-area">
        <a href="#" class="logo">
          <img src="@/assets/svg/logo.svg" class="logo-img" alt="РумТибет" />
        </a>
        <button
          type="button"
          class="burger"
          aria-label="Открыть меню"
          @click="isMenuOpen = true"
        >
          <img src="@/assets/svg/burger.svg" alt="" class="burger-img" />
        </button>
        <NavMenu :open="isMenuOpen" @close="isMenuOpen = false" />
      </div>
      <div class="header-wrapper">
        <h1 class="header__title">
          Насладись прогулкой в горы с командой единомышленников
        </h1>
      </div>
      <SearchForm />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  background-image: url('@/assets/images/bg_header_mobile.png');
  text-align: left;
  background-position: center center;
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  padding: 20px 0 $mobile-section-padding;

  .burger {
    background-color: transparent;
  }

  &-area {
    display: flex;
    justify-content: space-between;
  }

  @media (width > 640px) {
    padding: 20px 0 $desktop-section-padding;
  }

  @media (width > 1024px) {
    background-image: url('@/assets/images/bg_header_desktop.png');

    .burger {
      display: none;
    }
  }

  &__title {
    margin-top: 234px;
    text-transform: uppercase;
    @include font-mobile(28, $color-light-gray, 'nabold');

    @media (width > 640px) {
      @include font-tablet(24, false, false);
    }

    @media (width > 1024px) {
      @include font-desktop(54, false, false);
    }
  }
}
</style>
