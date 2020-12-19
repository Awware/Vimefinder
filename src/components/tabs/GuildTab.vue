<template>
  <b-row>
    <b-col>
      <GuildInformation :guild="guild" />
      <GuildMembers class="mt-2" :members="members" />
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
import GuildInformation from '@/components/GuildInformation'
import GuildMembers from '@/components/GuildMembers'
export default {
  components: {
    GuildInformation,
    GuildMembers
  },
  computed: {
    ...mapGetters(['guild', 'members'])
  },
  async mounted() {
    await this.$store.dispatch('getGuildAndMembers', this.guildID)
  },
  beforeDestroy() {
    this.$store.commit('clearGuild')
    this.$store.commit('clearMembers')
  },
  props: ['guildID']
}
</script>

<style scoped>
* {
  font-family: Roboto;
  margin: 0;
  padding: 0;
}
hr {
  padding: 0;
  margin: 0;
  margin-top: 3px;
  margin-bottom: 5px;
}
</style>
