<template>
  <section>
    <form class="search" :class="{ search_active: show && isMobile }">
      <close-button
        v-show="show && isMobile"
        class="search-close"
        @click.prevent="toggle(true)"
      />
      <my-select
        :id="locationID"
        v-model="location"
        type="dropdown"
        :class="{ 'select-label_active': show && isMobile }"
        :options="locationOptions"
        >выберите из списка</my-select
      >

      <my-select
        :id="dateID"
        v-model="date"
        :class="{ 'select-label_active': show && isMobile }"
        type="date"
        >укажите диапазон</my-select
      >

      <my-select
        :id="teamID"
        v-model="team"
        :class="{ 'select-label_active': show && isMobile }"
        :options="teamOptions"
        type="dropdown"
        >минимум 4 человека</my-select
      >

      <button
        v-show="isMobile"
        class="search__button"
        :class="{
          search__button_active: !show,
        }"
        @click.prevent="toggle(isMobile)"
      >
        Найти программу
      </button>
      <button
        class="search__button"
        :class="{ search__button_active: !isMobile || show }"
        @click.prevent="handler"
      >
        Найти программу
      </button>
    </form>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import toggleMixin from '@/mixins/toggleMixin'
import viewportWidth from '@/mixins/viewportWidth'

export default {
  name: 'my-search',
  mixins: [toggleMixin, viewportWidth],
  data() {
    return {
      location: 'Локация',
      date: '',
      team: '4',
    }
  },
  computed: {
    ...mapState({
      locationOptions: (state) => state.search.locationOptions,
      locationID: (state) => state.search.locationID,
      teamOptions: (state) => state.search.teamOptions,
      teamID: (state) => state.search.teamID,
    }),
    dateID() {
      return 'date'
    },
  },
  methods: {
    getData() {
      if (!this.location || !this.date || !this.team) {
        alert('Все поля должны быть заполнены!')
      }
      const data = {
        location: this.location,
        date: this.date,
        team: this.team,
      }
      this.location = 'Локация'
      this.date = ''
      this.team = '4'
      return data
    },
    handler() {
      getData
      toggle(isMobile)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';
.search {
  display: inline-flex;
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
    position: absolute;
    opacity: 0;
    visibility: hidden;
    &_active {
      position: static;
      opacity: 1;
      visibility: visible;
      animation: rotate 0.3s normal none;
    }
  }
  @media (width>640px) {
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
  @media (width>1024px) {
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
