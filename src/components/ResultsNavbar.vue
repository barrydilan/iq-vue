<template>
  <div>
    <BurgerMenu />
    <div class="test-name">
      <img class="brain_ico" src="../assets/brain_ico.png" alt="brain_ico" />
      <h2>Готово!</h2>
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
nav {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.burger-icon {
  position: absolute;
  top: 15px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3px;
  cursor: pointer;
}
.burger-line {
  display: block;
  height: 2px;
  width: 20px;
  background: hsl(0, 0%, 41%);
}

h2 {
  color: var(--accent-color);
  font-family: 'Yeseva One';
  font-size: 20px;
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
