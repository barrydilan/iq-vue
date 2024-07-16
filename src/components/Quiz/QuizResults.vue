<template>
  <section>
    <div v-if="!personData" class="wrapper">
      <img src="../../assets/lightning_1.png" alt="lightning_1" class="lightning-img lightning-1" />
      <img src="../../assets/lightning_2.png" alt="lightning_2" class="lightning-img lightning-2" />
      <h1>Ваш результат рассчитан:</h1>
      <p>
        <span class="undersore">Вы относитесь к 3% респондентов</span>, чей уровень интеллекта более
        чем на 15 пунктов отличается от среднего в большую или меньшую сторону!
      </p>
      <h2>Скорее получите свой результат!</h2>
      <div class="disclaimer">
        В целях защиты персональных данных результат теста, их подробная интерпретация и
        рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
      </div>
      <h3>
        Звоните скорее, запись доступна всего<br /><span class="countdown">{{ countdown }}</span>
        минут
      </h3>
      <button class="call-btn" @click="callResult">
        <img src="../../assets/phone.png" alt="" /><span>Позвонить и прослушать результат</span>
      </button>
    </div>
    <ResultDisplay v-if="personData" :personData="personData" />
  </section>
</template>

<script>
import ResultDisplay from '../ResultDisplay.vue'

export default {
  components: {
    ResultDisplay
  },
  data() {
    return {
      countdown: '10:00',
      intervalId: null,
      totalTime: 600,
      intervalDuration: 1000,
      personData: null
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
    },
    async callResult() {
      try {
        const response = await fetch('https://swapi.dev/api/people/1/')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        this.personData = data
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
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
.wrapper {
  max-width: 500px;
  margin: 0 auto;
}
section {
  background-image: url('../../assets/bg_img.png');
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 46px;
  position: relative;
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
  color: var(--accent-color-green);
  margin-bottom: 12px;
}

h3 {
  color: var(--accent-color-green);
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
  margin-left: auto;
  margin-right: auto;
}

.countdown {
  font-size: 20px;
}

.lightning-img {
  position: absolute;
  z-index: 0;
}

.lightning-1 {
  right: 0;
  bottom: 50px;
}

.lightning-2 {
  bottom: 50px;
  left: 0;
}
</style>
