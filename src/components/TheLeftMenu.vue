<template>
  <div class="slr2-page-settings__left-menu">
    <div class="slr2-page-settings__left-menu__item">Главная страница</div>
    <div class="slr2-page-settings__left-menu__item">Шапка</div>
    <div class="slr2-page-settings__left-menu__item">Верхнее меню</div>
    <div class="slr2-page-settings__left-menu__item">Корзина</div>
    <div class="slr2-page-settings__left-menu__item">Каталог</div>
  </div>
</template>

<style>
.slr2-page-settings__left-menu {
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: var(--slr2-background);
  padding: 20px;
  font-weight: bold;
  font-size: var(--ui-font-size-md);
}
.slr2-page-settings__left-menu__item {
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.slr2-page-settings__left-menu__item:hover {
  opacity: 0.7;
}
</style>
