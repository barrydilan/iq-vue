<script setup>
import TakeTestBtn from '../components/TakeTestBtn.vue'
</script>

<template>
  <section class="brain_section">
    <p>
      Также по результатам теста <span class="text-bold">вы получите</span> подробные
      <span class="text-bold">cоветы</span> по определению наиболее перспективной
      <span class="text-bold">для вашего типа интеллекта сферы деятельности</span>, которая принесет
      вам скорейший финансовый результат.
    </p>
    <img src="../assets/brain.png" alt="brain_image" />
    <TakeTestBtn />
  </section>
</template>

<style scoped>
.brain_section {
  color: hsl(0, 0%, 15%);
  background: hsl(0, 0%, 100%);
  line-height: 24px;
  letter-spacing: 0.8px;
  padding: 38px 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
}
.text-bold {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
