<template>
  <b-row class="justify-content-center">
    <Loader v-if="loading" />
    <Person
      v-else-if="!loading && friends.length > 0"
      v-cloak
      v-for="person in friends"
      :key="person.id"
      :person="person"
    />
    <b-alert v-else variant="danger" class="no-friends" show
      >У пользователя нет друзей ;(</b-alert
    >
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
* {
  padding: 0;
  margin: 0;
}
.no-friends {
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
