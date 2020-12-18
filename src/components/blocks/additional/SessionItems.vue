<template>
  <div>
    <b-list-group-item>
      ID: <span class="text-success">{{ user.id }}</span>
    </b-list-group-item>
    <b-list-group-item>
      Статус:
      <span :style="{ color: session.online ? '#4FBC66' : '#D35858' }">{{
        session.onlineMsg
      }}</span>
    </b-list-group-item>
    <b-list-group-item>
      Друзей:
      <span class="text-muted">{{ friends.length }}</span>
    </b-list-group-item>
    <b-list-group-item>
      Проведено времени в игре:
      <span class="text-muted">{{ user.hours }}ч.</span>
    </b-list-group-item>
    <b-list-group-item>
      Последний вход:
      <span class="text-muted">{{ user.lastSeen | toLocaleDate }}</span>
    </b-list-group-item>
    <b-list-group-item>
      Гильдия:
      <span v-if="user.guild">
        <a @click.prevent="$store.commit('setTabIndex', 3)" href="#"
          >{{ user.guild.tag && `[${user.guild.tag}] |` }}
          {{ user.guild.name }}</a
        >
      </span>
      <span class="text-muted" v-else>
        Не состоит в гильдии
      </span>
    </b-list-group-item>
  </div>
</template>
<script>
import { toLocaleDate } from '@/filters'
export default {
  filters: {
    toLocaleDate
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    session() {
      return this.$store.getters.session
    },
    friends() {
      return this.$store.getters.friends
    }
  }
}
</script>
