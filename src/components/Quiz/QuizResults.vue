<template>
  <section>
    <h1>Ваш результат рассчитан:</h1>
    <p>
      <span class="undersore">Вы относитесь к 3% респондентов</span>, чей уровень интеллекта более
      чем на 15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <h2>Скорее получите свой результат!</h2>
    <div class="disclaimer">
      В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации
      доступны в виде голосового сообщения по звонку с вашего мобильного телефона
    </div>
    <h3>
      Звоните скорее, запись доступна всего<br /><span class="countdown">{{ countdown }}</span>
      минут
    </h3>
    <button class="call-btn">
      <img src="../../assets/phone.png" alt="" /><span>Позвонить и прослушать результат</span>
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      countdown: '10:00',
      intervalId: null,
      totalTime: 600,
      intervalDuration: 1000
    }
  },
  methods: {
    startCountdown() {
      this.intervalId = setInterval(() => {
        if (this.totalTime > 0) {
          this.totalTime--
          this.updateCountdown()
        } else {
          clearInterval(this.intervalId)
        }
      }, this.intervalDuration)
    },
    updateCountdown() {
      const minutes = Math.floor(this.totalTime / 60)
      const seconds = this.totalTime % 60
      this.countdown = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
  },
  mounted() {
    this.startCountdown()
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>
section {
  background-image: url('../../assets/bg_img.png');
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-right: 25px;
  padding-left: 25px;
}
h1 {
  margin-top: 18px;
  margin-bottom: 13px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}

p {
  font-size: 14px;
}

h2 {
  margin-top: 22px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  color: hsl(144, 71%, 55%);
  margin-bottom: 12px;
}

h3 {
  color: hsl(144, 71%, 55%);
  font-size: 11px;
}

.disclaimer {
  background-color: hsl(222, 40%, 18%);
  font-size: 8px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  padding: 15px 12px;
  text-transform: uppercase;
  border-radius: 6px;
  margin-bottom: 6px;
}

.undersore {
  text-decoration: underline;
}

.call-btn {
  padding: 30px 15px 20px 15px;
  font-size: 15px;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  background-color: hsl(7, 100%, 46%);
  display: flex;
  align-items: center;
  margin-top: 6px;
  border-radius: 5px;
}

.countdown {
  font-size: 20px;
}
</style>
