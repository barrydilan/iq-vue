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
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
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

/* Menu Styles */
.menu {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  padding: 50px 20px;
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
  color: #000;
  font-size: 18px;
}
</style>
