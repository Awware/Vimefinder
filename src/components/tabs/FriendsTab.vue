<template>
  <b-row class="justify-content-center" v-cloak>
    <Person v-for="person in friends" :key="person.id" :person="person" />
  </b-row>
</template>

<script>
import Person from '@/components/single/Person'
export default {
  props: {
    friends: {
      type: Array,
      required: true
    }
  },
  components: {
    Person
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
