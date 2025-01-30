<template>
  <section class="newsletter">
    <div class="container">
      <div class="newsletter-box">
        <section-title class="trends-title" :align="'center'" @click.prevent>
          <template #category> делимся впечатлениями </template>
          <template #title> Блог о путешествиях </template>
        </section-title>
        <subscribe-form />
      </div>
    </div>
  </section>
</template>

<script>
import SubscribeForm from './SubscribeForm.vue'

export default {
  name: 'subscribe-section',
  components: {
    SubscribeForm,
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/globals.scss';
.newsletter {
  padding-bottom: $mobile-section-padding;
  max-width: 460px;
  margin: auto;

  &-box {
    padding: 24px;
    border-radius: 6px;
    background: #fdfdfd;
    box-shadow: 0px 0px 15px 0px rgba(24, 18, 30, 0.12);
  }
  @media (width > 640px) {
    padding-bottom: $tablet-section-padding;
    max-width: 660px;
    &-box {
      padding: 24px 38px;
    }
  }
  @media (width > 1024px) {
    position: relative;
    max-width: unset;
    padding-bottom: 0;
    top: 100px;
    &-box {
      display: grid;
      grid-template-columns: 3fr 5fr;
      grid-template-rows: auto;
      padding: 40px 100px;
    }
  }
}
</style>
