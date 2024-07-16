<template>
  <button :disabled="isDisabled">Далее</button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
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

button:disabled {
  background-color: var(--disabled-color);
  color: hsl(0, 0%, 56%);
  cursor: not-allowed;
}
</style>
