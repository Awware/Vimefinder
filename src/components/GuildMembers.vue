<template>
  <b-card no-body>
    <b-card-title class="text-center mt-1 mb-1">
      <h2>Участники</h2>
      <hr />
    </b-card-title>
    <b-card-body style="padding: 0;" class="scrollable">
      <b-row class="justify-content-center mb-1" v-cloak>
        <Person
          v-for="person in members"
          pWidth="9rem"
          guildCompat
          :key="person.id"
          :person="person"
        />
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import Person from '@/components/single/Person'
export default {
  components: {
    Person
  },
  props: ['members']
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
