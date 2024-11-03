<template>
  <nav class="menu" :class='{"show-mask": show}'>
    <div class="menu-wrapper" :class='{"show-menu": show}'>
      <ul class="menu-list">
        <close-button @click='$emit("toggle", false)' />
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
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: transform, opacity, 0.4s ease-in-out;
  &-wrapper{
    padding-left: 20px;
    width: 75vw;
    height: 85vh;
    background: #1A3E3E;
    display: flex;
    flex-direction: column;
    transform: scale(0) translate(80vw, -100vw);
    transition: opacity, transform 0.8s ease-in-out;
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
      text-decoration: none;
    }
  }
  &__button{
    display: none;
  }
  // ------------------------------------------
	@media (width>640px) {

	}
  @media (width>1024px) {
      position: static;
      display: block;
      inset: unset;
      background: transparent;
      -webkit-backdrop-filter: none;
      -moz-backdrop-filter: none;
      backdrop-filter: none;
      visibility: visible;
      opacity: 1;
      transition: none;
  &-wrapper{
    padding-left: 20px;
    width: auto;
    height: auto;
    background: inherit;
    gap: 15px;
    flex-direction: row;
    justify-content: space-between;
		align-items: center;
		width: 45vw;
    transform: scale(1);
    transition: opacity, transform 0.8s ease-in-out;
  }
  &-list{
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
		width: 100%;
    &__item{
      padding-left: 18px;
      list-style-type: none;
      position: static;
      &:before{
        content: unset;
        position: absolute;
        background-image: none;
        background-repeat: no-repeat;
        width: unset;
        height: unset;
        left: unset;
      }
    }
    &__link{
      @include font-desktop(18, false, "semibold");
      white-space: nowrap;
    }
  }
  .menu > .menu__button{
    display: none;
  }
	}
}
.show-mask {
  visibility: visible;
  opacity: 1;
  transition: opacity, transform 0.4s ease-in-out;
}

.show-menu {
  transform: scale(1) translate(0, 0);
  transition: opacity, transform 0.8s ease-in-out;
}
</style>
