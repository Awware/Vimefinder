<template>
  <div class="d-flex justify-content-center">
    <div class="spinner-border" :class="spinnerColor" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    spinnerColor() {
      const colors = [
        'text-primary',
        'text-success',
        'text-danger',
        'text-warning'
      ]
      return colors[Math.floor(Math.random() * 4)]
    }
  }
}
</script>
