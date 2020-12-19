<template>
  <b-row>
    <b-col>
      <GuildInformation :guild="guild" />
      <GuildMembers class="mt-2" :members="members" />
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import GuildInformation from '@/components/GuildInformation'
import GuildMembers from '@/components/GuildMembers'
export default {
  components: {
    GuildInformation,
    GuildMembers
  },
  methods: {
    ...mapActions(['getGuildAndMembers']),
    ...mapMutations(['clearGuild', 'clearMembers'])
  },
  computed: mapGetters(['guild', 'members']),
  async mounted() {
    await this.getGuildAndMembers(this.guildID)
  },
  beforeDestroy() {
    this.clearGuild()
    this.clearMembers()
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
