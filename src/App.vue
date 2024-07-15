<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterView name="navbar" class="view order-1 w-full"></RouterView>
    <div class="wrapper">
    </div>
    <RouterView name="footer" class="view order-1 w-full"></RouterView>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
