<template>
  <section class="centered-section">
    <div class="wrapper">
      <h2>Обработка результатов</h2>
      <div><img src="../../assets/loading.png" alt="loading" /></div>
      <div>
        <p>Определение стиля мышления</p>
        <p>{{ text }}</p>
      </div>
    </div>
    <NextBtn @click="submitAnswer" class="next_btn" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      originalText: '',
      text: '',
      intervalId: null,
      dotCount: 0,
      maxDots: 40,
      intervalDuration: 50
    }
  },
  methods: {
    startTextAnimation() {
      this.text = this.originalText
      this.intervalId = setInterval(() => {
        if (this.dotCount < this.maxDots) {
          this.text += '.'
          this.dotCount++
        } else {
          clearInterval(this.intervalId)
          this.redirect()
        }
      }, this.intervalDuration)
    },
    redirect() {
      this.$router.push('results')
    }
  },
  mounted() {
    this.startTextAnimation()
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>
.centered-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.wrapper {
  display: flex;
  row-gap: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 23px;
}
</style>
