<template>
  <nav class="menu">
    <ul class="menu-list">
      <li class="menu-list__item"><a href="#" class="menu-list__link">Главная</a></li>
      <li class="menu-list__item"><a href="#" class="menu-list__link">Про гида</a></li>
      <li class="menu-list__item"><a href="#" class="menu-list__link">Программа тура</a></li>
      <li class="menu-list__item"><a href="#" class="menu-list__link">Стоимость</a></li>
      <li class="menu-list__item"><a href="#" class="menu-list__link">Блог</a></li>
      <li class="menu-list__item"><a href="#" class="menu-list__link">Контакты</a></li>
    </ul>
    <button class="consultation main-button">Консультация</button>
  </nav>
</template>

<script>
export default {
	name: "my-menu",
};
</script>

<style lang="scss">
.menu{
  display: none;
}
</style>
