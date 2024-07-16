<script setup>
import NextBtn from '../NextBtn.vue'
</script>

<template>
  <section>
    <div class="text-options">
      <h2 :class="{'title-withPicture': question.descriptionPicture}">{{ question.text }}</h2>
      <img
        v-if="question.descriptionPicture"
        :src="question.descriptionPicture"
        alt="Description"
        class="description-picture"
      />
      <div
        v-for="(option, index) in question.options"
        :key="index"
        :class="[
          'text-option',
          'radio-group',
          { 'selected': selectedOption === option },
          { 'small-padding': question.options.length >= 6 }
        ]"
      >
        <input
          type="radio"
          :id="option"
          :value="option"
          v-model="selectedOption"
          name="options"
          class="circle-radio"
        />
        <label :for="option">{{ option }}</label>
      </div>
    </div>
    <NextBtn :disabled="!selectedOption" @click="submitAnswer" class="next_btn" />
  </section>
</template>

<script>
export default {
  props: {
    question: Object
  },
  data() {
    return {
      selectedOption: ''
    }
  },
  methods: {
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
  margin-bottom: 40px;
  font-size: 20px;
  text-align: center;
  max-width: 80%;
}

.title-withPicture {
  margin-bottom: 5px;
  font-size: 16px;
}

.text-options {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text-option {
  background: hsl(180, 4%, 95%, 0.3);
  padding: 10px 30px;
}
.radio-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.circle-radio {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: auto;
  height: auto;
  min-width: 20px;
  min-height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin-right: 8px;
  position: relative;
}

.circle-radio:checked::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-color: hsl(225, 65%, 46%);
  border: hsl(225, 65%, 46%);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
}

.circle-radio:checked {
  border: 1px solid black;
}

.circle-label {
  padding: 5px 10px;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.selected {
  background-color: var(--accent-color);
  color: black;
}

.next_btn {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}

.small-padding {
  padding: 8px 8px;
  margin-bottom: 0px;
}

.description-picture {
  max-width: 160px;
  height: auto;
  margin: 10px auto;
}
</style>
