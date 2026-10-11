<script setup>
import { reactive, ref, watch } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const form = reactive({ email: '', acceptTerms: false })
const errors = reactive({ email: '', acceptTerms: '' })
const isSubmitting = ref(false)

function validateEmail() {
  if (!form.email) errors.email = 'Email обязателен'
  else if (!EMAIL_PATTERN.test(form.email))
    errors.email = 'Введите корректный email'
  else errors.email = ''
}

function validateTerms() {
  errors.acceptTerms = form.acceptTerms ? '' : 'Необходимо принять условия'
}

// Once a field shows an error, re-check it as the user fixes it
watch(
  () => form.email,
  () => errors.email && validateEmail()
)
watch(
  () => form.acceptTerms,
  () => errors.acceptTerms && validateTerms()
)

// There is no backend yet, so the request is simulated
const subscribe = () => new Promise((resolve) => setTimeout(resolve, 1000))

async function onSubmit() {
  validateEmail()
  validateTerms()
  if (errors.email || errors.acceptTerms) return

  isSubmitting.value = true
  try {
    await subscribe(form.email)
    Object.assign(form, { email: '', acceptTerms: false })
    alert('Вы успешно подписались на рассылку!')
  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form class="form" novalidate @submit.prevent="onSubmit">
    <label for="email-news" class="form__label">Введите e-mail адрес</label>
    <div class="form__input-group">
      <input
        id="email-news"
        v-model.trim="form.email"
        name="email-news"
        type="email"
        class="form__input"
        :class="{ form__input_error: errors.email }"
        placeholder="name@domain.com"
        autocomplete="email"
        required
        @blur="validateEmail"
      />
      <BaseButton type="submit" class="form__button" :disabled="isSubmitting">
        {{ isSubmitting ? 'Отправка...' : 'Подписаться' }}
      </BaseButton>
    </div>

    <span v-if="errors.email" class="form__error">{{ errors.email }}</span>

    <div class="form__terms">
      <label for="acceptTerms" class="form__checkbox-label">
        <input
          id="acceptTerms"
          v-model="form.acceptTerms"
          type="checkbox"
          class="form__checkbox"
          @change="validateTerms"
        />
        <span>
          подписываясь на новости, вы автоматически соглашаетесь с
          <a href="#" class="form__link"
            >условиями обработки персональных данных</a
          >
          и
          <a href="#" class="form__link">правилами рекламных рассылок</a>
        </span>
      </label>
      <span v-if="errors.acceptTerms" class="form__error">
        {{ errors.acceptTerms }}
      </span>
    </div>
  </form>
</template>

<style lang="scss">
.form {
  max-width: 400px;

  &__label {
    @include font-mobile(16, #000, 'regular');
    display: block;
    margin-bottom: 8px;
    text-align: left;
  }

  &__input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  &__input {
    @include font-mobile(14, #000, 'regular');
    width: 100%;
    padding: 16px 0 16px 12px;
    border-radius: 4px;
    background: #f3f5f4;
    border: none;
    margin: 0;
    height: 3vw;
    transition: border-color 0.3s;

    &_error {
      border-color: #ff4444;
    }

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }

  div > &__button {
    padding: 9px 16px;
    margin: 0;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.3s;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  &__terms {
    @include font-mobile(14, #000, 'semibold');
    text-align: left;
    margin-top: 16px;
  }

  &__checkbox-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  &__checkbox {
    margin: 0;
  }

  &__link {
    text-decoration: underline;
    color: inherit;

    &:hover {
      opacity: 0.8;
    }
  }

  &__error {
    color: #ff4444;
    font-size: 12px;
    display: block;
    margin-top: 4px;
    text-align: center;
  }

  @media (width > 640px) {
    &__label {
      @include font-tablet(16, false, false);
    }

    &__input {
      @include font-tablet(16, false, false);
    }

    &__terms {
      @include font-tablet(16, false, false);
    }

    &__error {
      font-size: 10px;
    }
  }

  @media (width > 1024px) {
    grid-row: 1 / span 2;
    grid-column: 2;

    &__label {
      @include font-desktop(16, false, false);
    }

    &__input-group {
      flex-direction: row;
    }

    &__input {
      @include font-desktop(14, false, false);
    }

    &__terms {
      @include font-desktop(14, false, false);
    }
  }
}
</style>
