<template>
  <header class="header">
    <div class="container">
      <div class="header-area">
        <a href="#" class="logo">
          <img src="@/assets/svg/logo.svg" class="logo-img" alt="logo" />
          <span class="visually-hidden">logo</span>
        </a>
  <button class="burger">
    <img src="@/assets/svg/burger.svg" alt="burger" class="burger-img" /><span
      class="visually-hidden"
      >burger-menu</span
    >
  </button>
        <my-menu/>
      </div>
      <div class="header-wrapper">
        <h1 id="header__title" class="header__title">
          Насладись прогулкой в горы с командой единомышленников
        </h1>
      </div>
			<my-search/>
    </div>
  </header>
</template>

<script>
import MyMenu from "./MyMenu.vue";
import MySearch from "./MySearch.vue";

export default {
	name: "my-header",
	components: {
		MyMenu,
		MySearch,
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/globals.scss";

.header {
  background-image: url("@/assets/images/bg_header_mobile.png");
	text-align: left;
	background-position: center center;
	background-size: cover;
	width: 100%;
	background-repeat: no-repeat;
	padding: 20px 0 $mobile-section-padding;
		&-area{
			display: flex;
			justify-content: space-between;
		}
	@media (width>640px) {
    padding: 20px 0 $tablet-section-padding;
  }
	@media (width>640px) {
		padding: 20px 0 $desktop-section-padding;
	}
	@media (width>1024px) {
		background-image: url("@/assets/images/bg_header_desktop.png");
		}

  &__title {
		margin-top: 234px;
		text-transform: uppercase;
    @include font-mobile(28, $color-light-gray, "nabold");
		@media (width>640px) {
			@include font-tablet(24, $color-light-gray, "nabold");
		}
		@media (width>1024px) {
			@include font-desktop(54, $color-light-gray, "nabold");
		}
  }
}
</style>
