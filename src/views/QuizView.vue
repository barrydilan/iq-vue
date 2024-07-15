<script setup>
import QuizComponent from "../components/Quiz/QuizComponent.vue";
</script>

<template>
  <main class="quiz-view">
    <QuizComponent />
  </main>
</template>

<style scoped>
  .quiz-view {
    height: 100vh;
    background-image: url('../assets/bg_img.png');
  }
</style>
