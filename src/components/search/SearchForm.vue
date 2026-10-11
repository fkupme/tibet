<script setup>
import { computed, ref } from 'vue'
import CloseButton from '@/components/ui/CloseButton.vue'
import SearchField from '@/components/search/SearchField.vue'
import { useIsMobile } from '@/composables/useMediaQuery'
import { locationOptions, teamOptions } from '@/data/search'

const isMobile = useIsMobile()

// On mobile only the "find" button is shown; tapping it unfolds the form into a panel
const isOpen = ref(false)
const isPanel = computed(() => isMobile.value && isOpen.value)
const showOpenButton = computed(() => isMobile.value && !isOpen.value)

const initialForm = () => ({
  location: '',
  date: '',
  team: teamOptions[0].value,
})
const form = ref(initialForm())

function onSubmit() {
  const { location, date, team } = form.value
  if (!location || !date || !team) {
    alert('Все поля должны быть заполнены!')
    return
  }
  // There is no backend yet: this is where the search request would go
  form.value = initialForm()
  isOpen.value = false
}
</script>

<template>
  <section>
    <form
      class="search"
      :class="{ search_active: isPanel }"
      @submit.prevent="onSubmit"
    >
      <CloseButton
        v-if="isPanel"
        class="search-close"
        @click="isOpen = false"
      />
      <SearchField
        id="search-location"
        v-model="form.location"
        :options="locationOptions"
        :active="isPanel"
        hint="выберите из списка"
      />
      <SearchField
        id="search-date"
        v-model="form.date"
        type="date"
        :active="isPanel"
        hint="укажите диапазон"
      />
      <SearchField
        id="search-team"
        v-model="form.team"
        :options="teamOptions"
        :active="isPanel"
        hint="минимум 4 человека"
      />
      <button
        v-if="showOpenButton"
        type="button"
        class="search__button"
        @click="isOpen = true"
      >
        Найти программу
      </button>
      <button v-else type="submit" class="search__button">
        Найти программу
      </button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
@keyframes rotate {
  from {
    transform: rotateY(0);
  }

  50% {
    transform: rotateY(0.5turn);
  }

  to {
    transform: rotateY(0);
  }
}

.search {
  display: inline-flex;
  margin-top: 32px;
  transition: 0.5s ease-in;

  &-close {
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 8px;
  }

  &_active {
    position: absolute;
    inset: 0 0 50px 0;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 75%;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(3px);
    padding: 30px 15px;
    justify-content: space-evenly;
    transition: 0.3s ease-in;
  }

  &__button {
    @include font-mobile(16, #1a3e3e, 'bold');
    padding: 16px 36px;
    border-radius: 4px;
    background: #fdfdfd;
    animation: rotate 0.3s normal none;
  }

  @media (width > 640px) {
    width: 100%;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(3px);
    padding: 30px 15px;
    display: flex;
    column-gap: 5px;

    &__button {
      @include font-tablet(11, #1a3e3e, 'bold');
      padding: 8px 16px;
      white-space: nowrap;
      height: 5vw;

      &:hover {
        background: #1a3e3e;
        color: #fdfdfd;
        transition: 0.3s ease-in;
      }
    }
  }

  @media (width > 1024px) {
    &__button {
      @include font-desktop(14, #1a3e3e, 'bold');
      white-space: nowrap;
      padding: 8px 16px;
      height: 2.86vw;
      transition: 0.3s ease-in;
    }
  }
}
</style>
