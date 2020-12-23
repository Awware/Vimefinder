<template>
  <b-row class="justify-content-center">
    <Loader v-if="loading" />
    <Person
      v-else
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
  computed: {
    ...mapGetters(['friends']),
    loading() {
      return this.friends == undefined
    }
  },
  components: {
    Person: () => import('@/components/single/Person')
  }
}
</script>

<style scoped>
[v-cloak] > * {
  display: none;
}
* {
  padding: 0;
  margin: 0;
}
</style>
