<template>
  <b-alert v-if="error" variant="danger" class="text-center" show>{{
    error
  }}</b-alert>
  <Loader v-else-if="loading" />
  <b-row v-else>
    <b-col class="mt-1" cols="12" md="4">
      <Session />
      <Partyfinder :user="user" />
    </b-col>
    <b-col class="mt-1" cols="12" md="8">
      <b-card no-body>
        <b-tabs v-model="tabIndex" fill card>
          <b-tab class="scrollable" title="Друзья" active>
            <FriendsTab />
          </b-tab>
          <b-tab class="scrollable" title="Матчи">
            <MatchTab :userId="user.id" />
          </b-tab>
          <b-tab class="scrollable" title="Статистика">
            <StatisticTab :userId="user.id" />
          </b-tab>
          <b-tab class="scrollable" title="Гильдия" :disabled="!user.guild">
            <GuildTab v-if="user.guild" :guildID="user.guild.id" />
          </b-tab>
          <b-tab title="Доп. информация" :disabled="!serverData.received">
          </b-tab>
        </b-tabs>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
//Blocks
import Session from '@/components/blocks/Session'
import Partyfinder from '@/components/blocks/Partyfinder'

//Tabs
import MatchTab from '@/components/tabs/MatchTab'
import FriendsTab from '@/components/tabs/FriendsTab'
import StatisticTab from '@/components/tabs/StatisticTab'
import GuildTab from '@/components/tabs/GuildTab'

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    Session,
    Partyfinder,
    //Tabs
    MatchTab,
    FriendsTab,
    StatisticTab,
    GuildTab
  },
  data() {
    return {
      loading: true,
      error: '',
      username: '',
      //todo, additional information
      serverData: {
        received: false
      }
    }
  },
  computed: {
    ...mapGetters(['user', '_tabIndex']),
    tabIndex: {
      get() {
        return this.tabIndexGetter
      },
      set(value) {
        this.setTabIndex(value)
      }
    }
  },
  methods: {
    ...mapActions(['getUser']),
    ...mapMutations(['setTabIndex', 'clearUser', 'setDefaultIndex']),
    async update() {
      this.loading = true
      this.error = ''

      this.username = this.$route.params.username

      await this.getUser(this.username)

      if (!this.user) this.error = 'Игрок не найден!'
      this.loading = false
    }
  },
  beforeDestroy() {
    this.clearUser()
    this.setDefaultIndex()
  },
  watch: {
    $route: 'update'
  },
  async created() {
    await this.update()
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
