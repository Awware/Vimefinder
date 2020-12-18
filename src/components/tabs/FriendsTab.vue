<template>
  <b-row class="justify-content-center">
    <Person v-for="person in friends" :key="person.id" :person="person" />
  </b-row>
</template>

<script>
export default {
  computed: {
    friends() {
      return this.$store.getters.friends
    }
  },
  components: {
    Person: () => import('@/components/single/Person')
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
* {
  padding: 0;
  margin: 0;
}
</style>
