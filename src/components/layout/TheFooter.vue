<script setup>
import FooterContacts from '@/components/footer/FooterContacts.vue'
import FooterLinks from '@/components/footer/FooterLinks.vue'
import { services, travelTips } from '@/data/footer'
</script>

<template>
  <footer class="footer">
    <div class="lists">
      <FooterContacts />
      <FooterLinks :title="services.title" :items="services.items" />
      <FooterLinks :title="travelTips.title" :items="travelTips.items" />
    </div>
    <div class="privacy">
      <a href="#" class="privacy__link">
        Политика обработки персональных данных
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.lists {
  background-color: $color-dark-green;
  padding: 50px 0 80px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.privacy {
  padding: 33px 0;
  background-color: #18121e;

  &__link {
    display: block;
    text-align: center;
    @include font-mobile(14, #fff, 'semibold');
    text-decoration-line: underline;
  }
}

@media (min-width: 640px) {
  .lists {
    padding: $tablet-section-padding 0 50px;
  }

  .privacy__link {
    @include font-tablet(16, #fff, 'semibold');
  }
}

@media (min-width: 1024px) {
  .lists {
    padding: 170px 0 80px;
    flex-direction: row;
    gap: 0;
    justify-content: space-around;
  }

  .privacy__link {
    @include font-desktop(14, #fff, 'semibold');
  }
}
</style>
