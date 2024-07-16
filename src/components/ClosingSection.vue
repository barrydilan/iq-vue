<script setup>
import TakeTestBtn from '../components/TakeTestBtn.vue'
</script>

<template>
  <section class="closing_section">
    <img src="../assets/lightning_1.png" alt="lightning_1" class="lightning-img lightning-1" />
    <img src="../assets/lightning_2.png" alt="lightning_2" class="lightning-img lightning-2" />
    <p class="closing_section-title">
      Прохождение теста займет у вас не более
      <span class="text-accent text-accent-main">12 минут</span>, а его
      <span class="text-accent">результаты</span> вы сможете
      <span class="text-accent text-accent-main">использовать всю жизнь</span>.
    </p>
    <div class="closing_section-bg">
      Профессиональная интерпретация и детально
      <span class="text-accent">проработанные рекомендации</span> позволят вам качественно
      <span class="text-accent">изменить все аспекты своей жизни</span>: от финансового до
      любовного.
    </div>
    <TakeTestBtn class="closing_section-button" />
    <p class="closing_section-footer">2019</p>
  </section>
</template>

<style scoped>
.closing_section {
  background-image: url('../assets/bg_img.png');
  padding: 54px 12px 12px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.closing_section > p {
  font-family: 'Merriweather', serif;
}

.closing_section-bg {
  margin-top: 14px;
  margin-bottom: 33px;
  border-radius: 20px;
  background-color: rgba(243, 243, 242, 0.8);
  color: hsl(0, 0%, 9%);
  padding: 30px 15px;
}

.closing_section-button {
  margin: 0 auto;
  background-color: transparent;
  border: 1px solid white;
  color: white;
}

.text-accent {
  font-weight: bold;
}

.text-accent-main {
  color: #ffc700;
}

.closing_section-footer {
  margin-top: 52px;
  font-size: 10px;
  color: hsla(0, 0%, 100%, 0.5);
}

.lightning-img {
  position: absolute;
}

.lightning-1 {
  right: 0;
  top: 50px;
}

.lightning-2 {
  bottom: 50px;
  left: 0;
}
</style>
