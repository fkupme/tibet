<template>
  <button type="button" class="close-button noselect" aria-label="Закрыть">
    <img src="@/assets/svg/close_icon.svg" alt="" />
  </button>
</template>

<style lang="scss" scoped>
.close-button {
  align-self: flex-end;
  background-color: transparent;

  @media (width > 1024px) {
    display: none;
  }
}
</style>
