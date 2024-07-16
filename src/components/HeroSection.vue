<template>
  <section class="hero-section">
    <p class="hero-section__text">Пройдите точный и быстрый</p>
    <div class="hero-section__content">
      <h1 class="hero-section__title">Тест на определение IQ</h1>
      <img src="@/assets/brain_ico.png" class="hero-section__image" alt="brain_image" />
      <TakeTestBtn class="hero-section__button" />
    </div>
    <p class="hero-section__text hero-section__subtext">
      <span class="accent-text">И получите рекомендации по развитию своего интеллекта</span> и
      улучшению финансового благосостояния и личной жизни
    </p>
    <div class="hero-section__more">
      <img src="@/assets/arrow_up.png" />
      <a href="#" class="hero-section__more-link">Подробнее</a>
    </div>
  </section>
</template>

<script setup>
import TakeTestBtn from '../components/TakeTestBtn.vue'
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('@/assets/bg_img.png');
  height: 100%;
  padding: 27px;
  padding-top: 56px;
  text-align: center;
}

.hero-section__image {
  width: 150px;
  height: 150px;
}

.hero-section__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0px;
  padding: 0 48px;
}

.hero-section__button {
  margin-bottom: 22px;
}

.hero-section__title {
  font-size: 30px;
  letter-spacing: 3%;
  line-height: 36px;
  font-family: 'Yeseva One', serif;
  font-weight: semibold;
  color: var(--accent-color);
  text-transform: uppercase;
}

.hero-section__text {
  letter-spacing: 5%;
}

.hero-section__subtext {
  font-size: 15px;
  font-weight: bold;
  line-height: 19px;
  margin-bottom: 11px;
}

.accent-text {
  font-weight: bold;
}

.hero-section__more {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 8px;
  letter-spacing: 5%;
}

.hero-section__more > img {
  width: 16px;
  height: 16px;
}

.hero-section__more-link {
  text-decoration: none;
  color: inherit;
}
</style>
