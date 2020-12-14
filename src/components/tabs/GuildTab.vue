<template>
  <b-row>
    <b-col>
      <GuildInformation :guild="GuildFull" />
      <GuildMembers class="mt-2" :members="GuildMembers" />
    </b-col>
  </b-row>
</template>

<script>
import GuildInformation from '@/components/GuildInformation'
import GuildMembers from '@/components/GuildMembers'
import { getSessionsByIds, getGuildById } from '@/vimerequests'
export default {
  components: {
    GuildInformation,
    GuildMembers
  },
  data() {
    return {
      GuildFull: {},
      GuildMembers: {}
    }
  },
  async mounted() {
    const gettedGuild = await getGuildById(this.guild.id)
    if (gettedGuild) this.GuildFull = gettedGuild
    else console.error('Guild is null')

    let ids = []
    gettedGuild.members.map(member => ids.push(member.user.id))

    let customMembers = []

    const sessions = await getSessionsByIds(ids)

    gettedGuild.members.forEach((a, i) => {
      customMembers.push({
        username: a.user.username,
        rank: a.user.rank,
        online: sessions[i].online,
        status: a.status
      })
    })

    this.GuildMembers = customMembers
  },
  props: ['guild']
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
