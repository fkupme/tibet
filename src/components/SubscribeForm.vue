<template>
  <form class="form" @submit.prevent="handleSubmit">
    <label for="email-news" class="form__label">Введите e-mail адрес</label>
    <div class="form__input-group">
      <input
        id="email-news"
        v-model="formData.email"
        name="email-news"
        type="email"
        class="form__input"
        :class="{ form__input_error: errors.email }"
        placeholder="name@domain.com"
        required
        @blur="validateEmail"
      />
      <main-button
        class="form__button"
        :disabled="isSubmitting"
        @click.prevent="handleSubmit"
      >
        {{ isSubmitting ? 'Отправка...' : 'Подписаться' }}
      </main-button>
    </div>

    <span v-if="errors.email" class="form__error">
      {{ errors.email }}
    </span>
    <div class="form__terms">
      <label for="acceptTerms" class="form__checkbox-label">
        <input
          id="acceptTerms"
          v-model="formData.acceptTerms"
          type="checkbox"
          class="form__checkbox"
          @change="validateTerms"
        />
        <span
          >подписываясь на новости, вы автоматически соглашаетесь с
          <a href="#" class="form__link"
            >условиями обработки персональных данных</a
          >
          и
          <a href="#" class="form__link">правилами рекламных рассылок</a></span
        >
      </label>
      <span v-if="errors.acceptTerms" class="form__error">
        {{ errors.acceptTerms }}
      </span>
    </div>
  </form>
</template>

<script>
/* eslint-disable */
export default {
  name: 'subscribe-form',

  data() {
    return {
      formData: {
        email: '',
        acceptTerms: false,
      },
      errors: {
        email: '',
        acceptTerms: '',
      },
      isSubmitting: false,
    }
  },

  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const newError = !this.formData.email
        ? 'Email обязателен'
        : !emailRegex.test(this.formData.email)
          ? 'Введите корректный email'
          : ''

      if (this.errors.email !== newError) {
        this.errors.email = newError
      }
    },

    validateTerms() {
      const newError = !this.formData.acceptTerms
        ? 'Необходимо принять условия'
        : ''
      if (this.errors.acceptTerms !== newError) {
        this.errors.acceptTerms = newError
      }
    },

    validateForm() {
      this.validateEmail()
      this.validateTerms()
      return !this.errors.email && !this.errors.acceptTerms
    },

    async handleSubmit() {
      if (!this.validateForm()) return

      try {
        this.isSubmitting = true
        // fetch
        await this.submitForm()

        this.resetForm()
        this.$emit('subscribe-success')
        alert('Вы успешно подписались на рассылку!')
      } catch (error) {
        console.error('Ошибка при отправке формы:', error)
        this.$emit('subscribe-error', error)
      } finally {
        this.isSubmitting = false
      }
    },

    async submitForm() {
      // Имитация запроса к API
      return new Promise((resolve) => setTimeout(resolve, 1000))
    },

    resetForm() {
      this.formData = {
        email: '',
        acceptTerms: false,
      }
      this.errors = {
        email: '',
        acceptTerms: '',
      }
    },
  },

  watch: {
    'formData.email': {
      handler(newValue) {
        if (this.errors.email && newValue) {
          this.validateEmail()
        }
      },
    },
    'formData.acceptTerms': {
      handler(newValue) {
        if (this.errors.acceptTerms && newValue !== undefined) {
          this.validateTerms()
        }
      },
    },
  },

  emits: ['subscribe-success', 'subscribe-error'],
}
</script>

<style lang="scss">
@import '@/assets/styles/globals.scss';
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
  @media (width> 640px) {
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
  @media (width> 1024px) {
    grid-row: 1 / span 2;
    grid-column: 2;
    &__label {
      @include font-desktop(16, false, false);
    }
    &__input-group {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    &__input {
      @include font-desktop(14, false, false);
    }

    &__terms {
      @include font-desktop(14, false, false);
    }

    &__error {
      font-size: 10px;
    }
  }
}
</style>
