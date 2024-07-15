<template>
  <div>
    <p>{{ question }}</p>
    <div
      v-for="color in options"
      :key="color"
      :style="{ backgroundColor: color, width: '50px', height: '50px', display: 'inline-block' }"
      @click="selectColor(color)"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    options: Array
  },
  methods: {
    selectColor(color) {
      this.$emit('answer', color)
    }
  }
}
</script>
