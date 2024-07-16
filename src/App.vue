<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="root">
    <BurgerMenu />
    <header><RouterView name="navbar" class="view order-1 w-full"></RouterView></header>
    <main><RouterView /></main>
    <footer><RouterView name="footer" class="view order-1 w-full"></RouterView></footer>
  </div>
</template>

<script>
import BurgerMenu from './components/BurgerMenu.vue'

export default {
  components: {
    BurgerMenu
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  height: 46px;
  width: 100%;
  background-color: hsl(0, 0%, 9%);
  z-index: 10;
}
</style>
