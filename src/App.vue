<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterView name="navbar" class="view order-1 w-full"></RouterView>
    <RouterView />
    <RouterView name="footer" class="view order-1 w-full"></RouterView>
  </header>
</template>

<style scoped></style>
