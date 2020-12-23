<template>
  <b-container style="max-width: 1450px">
    <Navbar />
    <router-view />
  </b-container>
</template>

<script>
import Navbar from '@/components/single/Navbar'
export default {
  name: 'main-layout',
  components: {
    Navbar
  }
}
</script>

<style></style>
