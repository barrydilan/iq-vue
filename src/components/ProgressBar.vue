<template>
  <div class="progress-bar-container">
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true
    },
    totalSteps: {
      type: Number,
      required: true
    }
  },
  computed: {
    progress() {
      return (this.currentStep / this.totalSteps) * 100
    }
  }
}
</script>

<style scoped>
.progress-bar-container {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 10px;
  background-color: hsl(0, 0%, 95%);
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0;
}

.progress-bar {
  height: 100%;
  background-color: var(--accent-color-green);
  transition: width 0.3s ease;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
</style>
