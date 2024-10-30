<template>
  <nav class="menu" :class='{"show-mask": show}'>
    <div class="menu-wrapper" :class='{"show-menu": show}'>
      <ul class="menu-list">
        <button type="button" @click='$emit("toggle", false)' class="menu-close-button"><img src="@/assets/svg/close_icon.svg" alt=""></button>
        <li class="menu-list__item"><a href="#" class="menu-list__link">Главная</a></li>
        <li class="menu-list__item"><a href="#" class="menu-list__link">Про гида</a></li>
        <li class="menu-list__item"><a href="#" class="menu-list__link">Программа тура</a></li>
        <li class="menu-list__item"><a href="#" class="menu-list__link">Стоимость</a></li>
        <li class="menu-list__item"><a href="#" class="menu-list__link">Блог</a></li>
        <li class="menu-list__item"><a href="#" class="menu-list__link">Контакты</a></li>
      </ul>
      <main-button class="menu__button">Консультация</main-button>
    </div>
  </nav>
</template>

<script>
export default {
	methods: {
	},
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
	name: "my-menu",
};
</script>

<style lang="scss">
@import "@/assets/styles/globals.scss";
.menu{
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000005e;
    -webkit-backdrop-filter: blur(3px);
    -moz-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transition: 0.4s ease-in-out;
  &-close-button {
    align-self: flex-end;
  }
  &-wrapper{
    padding-left: 20px;
    width: 75vw;
    height: 85vh;
    background: #1A3E3E;
    display: flex;
    flex-direction: column;
    transform: scale(0);
    transition: 0.8s ease-in-out;
  }
  &-list{
    display: flex;
    flex-direction: column;
    gap: 16px;
    &__item{
      padding-left: 18px;
      list-style-type: none;
      position: relative;
      &:before{
        content: '';
        position: absolute;
        background-image: url('@/assets/svg/list-style.svg');
        background-repeat: no-repeat;
        width: 10px;
        height: 16px;
        left: 0;
      }
    }
    &__link{
      @include font-mobile(14, #fff, "regular");
      color: #ffffff;
      text-decoration: none;
    }
  }
  &__button{
    display: none;
  }
  @media (width>640px) {

	}
	@media (width>1024px) {

	}
}
.show-mask {
  visibility: visible;
  opacity: 1;
  transition: 0.4s ease-in-out;
}

.show-menu {
  transform: scale(1);
  transition: 0.8s ease-in-out;
}
</style>
