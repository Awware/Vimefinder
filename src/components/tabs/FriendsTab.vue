<template>
  <b-row class="justify-content-center">
    <Person
      v-cloak
      v-for="person in friends"
      :key="person.id"
      :person="person"
    />
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['friends']),
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
