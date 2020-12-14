<template>
  <div class="text-center">
    <a
      target="_blank"
      :style="style_nickname"
      class="font-weight-bold"
      :href="'/user/' + party.username"
      >{{ party.username }}</a
    >
    |
    <span :style="{ color: party.percent >= 50 ? '#9A5364' : '#7CBB4E' }"
      >{{ party.percent }}%</span
    >
    |
    <a
      target="_blank"
      style="color: #7dd553;"
      :href="'https://vimetop.ru/player/' + party.username"
      >VT</a
    >
  </div>
</template>
<script>
import { GetColorByRank } from '@/coloring'
export default {
  data() {
    return {
      style_nickname: {
        color: '#88888'
      }
    }
  },
  props: {
    party: {
      type: Object,
      required: true
    }
  },
  methods: {},
  mounted() {
    this.style_nickname = GetColorByRank(this.party.rank, this.style_nickname)
  }
}
</script>

<style scoped></style>
