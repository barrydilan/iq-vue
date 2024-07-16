<template>
  <div>
    <nav>
      <div class="burger-icon" @click="toggleMenu">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </div>
    </nav>
    <div :class="['menu', { 'menu-active': isActive }]">
      <ul>
        <li @click="toggleMenu"><a href="/iq-vue//">Главная</a></li>
        <li @click="toggleMenu"><a href="/iq-vue//#info">Информация о тесте</a></li>
        <li @click="toggleMenu"><a id="active" href="/iq-vue//quiz">Пройти тест</a></li>
      </ul>
      <img class="close-icon" src="../assets/icon.png" alt="close-icon" @click="toggleMenu" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)

const toggleMenu = () => {
  isActive.value = !isActive.value
}
</script>

<style scoped>
nav {
  height: 100%;
  position: relative;
}

#active {
  color: var(--accent-color);
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

.menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: black;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  padding: 110px 20px;
  z-index: 1000;
}

.menu-active {
  left: 0;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu ul li {
  margin: 20px 0;
}

.menu ul li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 300;
}

.close-icon {
  position: absolute;
  right: 15px;
  top: 15px;
}
</style>
