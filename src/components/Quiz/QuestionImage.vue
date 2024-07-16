<script setup>
import NextBtn from '../NextBtn.vue'
</script>

<template>
  <section>
    <div class="question-block">
      <h2>{{ question.text }}</h2>
      <div>
        <div>
          <img :src="question.imgSrc" alt="Question Image" class="question-image" />
        </div>
      </div>
      <div v-if="question.showSeparator" class="separator"></div>
      <div class="answer-options">
        <div
          class="answer-options--option"
          :class="{ selected: selectedOption === option }"
          v-for="(option, index) in question.options"
          :key="index"
          @click="selectOption(option)"
        >
          {{ option }}
        </div>
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
      selectedOption: ''
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option
    },
    submitAnswer() {
      this.$emit('answer', this.selectedOption)
    }
  }
}
</script>

<style scoped>
section {
  position: relative;
  height: 100vh;
}

h2 {
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
}

.question-block {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.separator {
  width: 100%;
  height: 3px;
  background-color: hsla(180, 4%, 95%, 0.251);
  margin-top: 20px;
}

.next_btn {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}

.answer-options {
  display: flex;
  gap: 5px;
  color: black;
  max-width: 300px;
  width: 80%;
  margin: 0 auto;
  margin-top: 23px;
  justify-content: space-between;
}

.answer-options--option {
  border: 6px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: white;
  height: 40px;
  text-align: center;
  width: 40px;
  padding: 5px;
}

.selected {
  border-color: var(--accent-color)
}
</style>
