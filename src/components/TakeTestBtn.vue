<template>
  <button @click="openUrl">Пройти тест</button>
</template>

<script>
export default {
  methods: {
    openUrl() {
      this.$router.push('quiz')
    }
  }
}
</script>

<style scoped>
button {
  font-size: 14px;
  font-weight: bold;
  color: black;
  background-color: var(--accent-color);
  width: 190px;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 20px;
  font-family: 'Merriweather', serif;
}
</style>
