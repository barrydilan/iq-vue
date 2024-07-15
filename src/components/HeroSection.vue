<script setup>
import TakeTestBtn from "../components/TakeTestBtn.vue";
</script>

<template>
    <section class="hero_section">
      <p class="hero_section--text">Пройдите точный и быстрый</p>
      <div class="hero_section_content">
        <h1 class="hero_section_content--title">Тест на определение IQ</h1>
        <TakeTestBtn class="hero_section--button" />
      </div>
      <p class="hero_section--text hero_section--subtext">
        <span class="accent-text">И получите рекомендации по развитию своего интеллекта</span> и улучшению финансового благосостояния
        и личной жизни
      </p>
      <div class="hero_section_more">
        <img src="../assets/arrow_up.png">
        <a class="hero_section_more--link">Подробнее</a>
      </div>
    </section>
</template>

<style scoped>
.hero_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../assets/bg_img.png');
  height: 100%;
  padding: 27px;
  text-align: center;
}

.hero_section_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px 0px;
  padding-left: 48px;
  padding-right: 48px;
}

.hero_section--button {
  margin-bottom: 22px;
}

.hero_section_content--title {
  font-size: 30px;
  letter-spacing: 3%;
  line-height: 30px;
  font-family: "Yeseva One", serif;
  font-weight: 400;
  font-style: normal;
  margin-top: 40px;
  font-weight: semibold;
  color: var(--accent-color);
  text-transform: uppercase;
}

.hero_section--text {
  letter-spacing: 5%;
}

.hero_section--subtext {
  font-size: 15px;
  font-weight: bold;
  line-height: 19px;
  margin-bottom: 11px;
}

.accent-text {
  font-weight: bold;
}

.hero_section_more {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 8px;
  letter-spacing: 5%;
}

.hero_section_more > img {
  width: 16px;
  height: 16px;
}

</style>
