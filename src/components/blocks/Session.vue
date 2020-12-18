<template>
  <!-- Todo skeleton loading -->
  <b-list-group>
    <b-list-group-item>
      <Face :username="user.username" />
      <a
        class="vimetop_logo"
        :href="'https://vimetop.ru/player/' + user.username"
        target="_blank"
      >
        <img src="https://vimetop.ru/favicon.ico" alt="Vimetop" />
      </a>
      <Base
        :usr="{
          username: user.username,
          lvl: user.level,
          lvlperc: user.lvlperc,
          rank: user.rank
        }"
      />
    </b-list-group-item>
    <SessionSkeleton v-model="loading" />
  </b-list-group>
</template>

<script>
import Face from './additional/Face'
import SessionSkeleton from '@/components/skeletons/SessionSkeleton'

//Базовая информация в виде [RANK] USERNAME | LVL
import Base from './additional/Base'
export default {
  components: {
    Face,
    Base,
    SessionSkeleton
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  async mounted() {
    await this.$store.dispatch('getSession', this.user.id)
    await this.$store.dispatch('getFriends', this.user.id)
    this.loading = false
  },
  beforeDestroy() {
    this.$store.commit('clearSession')
    this.$store.commit('clearFriends')
    this.$store.commit('clearLoaded')
  }
}
</script>

<style scoped>
.vimetop_logo {
  position: absolute;
  display: block;
  width: 24px;
  height: 24px;
  right: 5px;
  top: 5px;
}

.vimetop_logo img {
  width: 24px;
  height: 24px;
}
</style>
