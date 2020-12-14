<template>
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
    <b-list-group-item>
      ID: <span class="text-success">{{ user.id }}</span>
    </b-list-group-item>
    <b-list-group-item>
      Статус:
      <span :style="{ color: user.online ? '#4FBC66' : '#D35858' }">{{
        user.online_message
      }}</span>
    </b-list-group-item>
    <b-list-group-item>
      Друзей:
      <span class="text-muted">{{ user.friends.length }}</span>
    </b-list-group-item>
    <b-list-group-item>
      Проведено времени в игре:
      <span class="text-muted">{{ user.hours }}ч.</span>
    </b-list-group-item>
    <b-list-group-item>
      Последний вход:
      <span class="text-muted">{{ user.last_seen | toLocaleDate }}</span>
    </b-list-group-item>
    <b-list-group-item>
      Гильдия:
      <span v-if="user.guild">
        <a @click.prevent="$emit('toGuild')" href="#"
          >{{ user.guild.tag && `[${user.guild.tag}] |` }}
          {{ user.guild.name }}</a
        >
      </span>
      <span class="text-muted" v-else>
        Не состоит в гильдии
      </span>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { toLocaleDate } from '@/filters'
import Face from './additional/Face'

//Базовая информация в виде [RANK] USERNAME | LVL
import Base from './additional/Base'
export default {
  components: {
    Face,
    Base
  },
  methods: {},
  filters: {
    toLocaleDate
  },
  data() {
    return {
      loading: true
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
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
