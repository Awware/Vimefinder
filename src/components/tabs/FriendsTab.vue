<template>
  <b-row class="justify-content-center" v-cloak>
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
  },
  async mounted() {}
}
</script>

<style scoped></style>
