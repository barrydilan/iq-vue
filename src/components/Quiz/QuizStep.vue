<template>
  <div v-if="step === currentStep">
    <QuestionText v-if="question.type === 'text'" :question="question" @answer="answer" />
    <QuestionColor
      v-else-if="question.type === 'color'"
      :question="question.text"
      :options="question.options"
      @answer="answer"
    />
    <QuestionImage v-else-if="question.type === 'image'" :question="question" @answer="answer" />
  </div>
</template>

<script>
import QuestionText from './QuestionText.vue'
import QuestionColor from './QuestionColor.vue'
import QuestionImage from './QuestionImage.vue'

export default {
  components: {
    QuestionText,
    QuestionColor,
    QuestionImage
  },
  props: {
    question: Object,
    step: Number,
    currentStep: Number
  },
  methods: {
    answer(answer) {
      this.$emit('answer', this.step, answer)
      this.$emit('nextStep')
    }
  }
}
</script>
