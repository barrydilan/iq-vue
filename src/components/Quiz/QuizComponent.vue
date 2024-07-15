<template>
  <div>
    <QuizStep
      v-for="(question, index) in questions"
      :key="index"
      :question="question"
      :step="index"
      :currentStep="currentStep"
      @nextStep="nextStep"
      @prevStep="prevStep"
      @answer="answerQuestion"
    />
    <!-- <button @click="prevStep" :disabled="currentStep === 0">Previous</button>
    <button @click="nextStep" :disabled="currentStep === questions.length - 1">Next</button> -->
  </div>
</template>

<script>
import QuizStep from './QuizStep.vue';
import quizPic2 from '../../assets/quiz_pic-2.png';

export default {
  components: {
    QuizStep
  },
  data() {
    return {
      currentStep: 0,
      answers: [],
      questions: [
        // { type: 'text', text: 'Ваш пол:', options: ['Мужской', 'Женский'] },
        // { type: 'text', text: 'Укажите ваш возраст:', options: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36'] },
        // { type: 'text', text: 'Выбери лишнее:', options: ['Дом', 'Шалаш', 'Скамейка', 'Хижина'] },
        // { type: 'text', text: 'Продолжите числовой ряд: 18 20 24 32', options: ['62', '48', '74', '57', '60', '77'] },
        // { type: 'color', text: 'Выберите цвет, который сейчас наиболее Вам приятен:', options: ['grey', 'blue', 'green','red', 'yellow', 'brown','black', 'pink', 'teal'] },
        // { type: 'color', text: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:', options: ['grey', 'blue', 'green','red', 'yellow', 'brown','black', 'pink', 'teal'] },
        // { type: 'text', text: 'Какой из городов лишний?', options: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'] },
        // { type: 'text', text: 'Какой из городов лишний?', options: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'] },
        { type: 'text', text: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:', descriptionPicture: quizPic2, options: ['Оно остроконечное', 'Оно устойчиво', 'оно-находится в состоянии равновесия'] },
        { type: 'text', text: 'Вам привычнее и важнее:', options: ['Наслаждаться каждой минутой проведенного времени', 'Быть устремленными мыслями в будущее', 'Учитывать в ежедневной практике прошлый опыт'] },
      ]
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.questions.length - 1) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    answerQuestion(step, answer) {
      console.log("first")
      this.answers[step] = answer;
    }
  }
};
</script>
