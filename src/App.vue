<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="root">
    <!-- <header><RouterView name="navbar" class="view order-1 w-full"></RouterView></header> -->
    <main><RouterView /></main>
    <footer><RouterView name="footer" class="view order-1 w-full"></RouterView></footer>
  </div>
</template>

<style scoped></style>
