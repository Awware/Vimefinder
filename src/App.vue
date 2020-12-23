<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: { EmptyLayout, MainLayout }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.scrollable {
  flex-wrap: nowrap;
  white-space: nowrap;
  max-height: 810px;
  /* Scrollbar */
  overflow-x: none;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #bebebe #f2f2f2;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #f2f2f2;
}
::-webkit-scrollbar-thumb {
  background: #bebebe;
}
</style>
