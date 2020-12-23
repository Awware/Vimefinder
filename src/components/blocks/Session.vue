<template>
  <b-list-group>
    <b-list-group-item style="border-bottom: none;">
      <Face :username="user.username" />
      <VimetopLogo :username="user.username" />
      <Base
        :usr="{
          username: user.username,
          lvl: user.level,
          lvlperc: user.lvlperc,
          rank: user.rank
        }"
      />
    </b-list-group-item>
    <SessionSkeleton v-model="loading">
      <SessionItems />
    </SessionSkeleton>
  </b-list-group>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Face from './additional/Face'
import SessionSkeleton from '@/components/blocks/skeletons/SessionSkeleton'
import SessionItems from '@/components/blocks/additional/SessionItems'

import VimetopLogo from './additional/VimetopLogo'

//Базовая информация в виде [RANK] USERNAME | LVL
import Base from './additional/Base'
export default {
  components: {
    Face,
    Base,
    SessionSkeleton,
    SessionItems,
    VimetopLogo
  },
  data() {
    return {
      loading: true
    }
  },
  computed: mapGetters(['user']),
  async created() {
    await this.getSession(this.user.id)
    await this.getFriends(this.user.id)
    this.loading = false
  },
  methods: {
    ...mapActions(['getSession', 'getFriends']),
    ...mapMutations(['clearSession', 'clearFriends'])
  },
  beforeDestroy() {
    this.clearSession()
    this.clearFriends()
  }
}
</script>
