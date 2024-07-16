<template>
  <div>
    <BurgerMenu />
    <div class="test-name">
      <img class="brain_ico" src="../assets/brain_ico.png" alt="brain_ico" />
      <h2>Тест на определение IQ</h2>
    </div>
  </div>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue'

export default {
  components: {
    BurgerMenu
  }
}
</script>

<style scoped>
h2 {
  color: var(--accent-color);
  font-family: 'Yeseva One';
  font-size: 12px;
  text-transform: uppercase;
}

.brain_ico {
  height: 45px;
  width: 45px;
}

.test-name {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
}
</style>
