<script setup>
import NextBtn from '../NextBtn.vue'
</script>

<template>
  <section>
    <div class="question-content">
      <h2>{{ question }}</h2>
      <div class="colors-grid">
        <div
          v-for="color in options"
          :key="color"
          :style="{
            backgroundColor: color,
            width: '80px',
            height: '80px',
            display: 'inline-block'
          }"
          class="color-option"
          :class="{ selected: selectedColor === color }"
          @click="selectColor(color)"
        ></div>
      </div>
    </div>
    <NextBtn @click="submitAnswer" class="next_btn" />
  </section>
</template>

<script>
export default {
  props: {
    question: String,
    options: Array
  },
  data() {
    return {
      selectedColor: ''
    }
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
    },
    submitAnswer() {
      this.$emit('answer', this.selectedColor)
    }
  }
}

</script>

<style scoped>
section {
  position: relative;
  height: 100vh;
}

.question-content {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h2 {
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
  max-width: 80%;
}

.colors-grid {
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;
}
.next_btn {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}

.color-option {
  width: 80px;
  height: 80px;
  display: inline-block;
  cursor: pointer;
  border: 4px solid transparent;
}

.color-option.selected {
  border-color: var(--accent-color);
}
</style>
