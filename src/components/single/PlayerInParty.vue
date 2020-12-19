<template>
  <div class="text-center">
    <a
      target="_blank"
      :style="styleName"
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
import { GetColorByRank } from '@/utils/coloring'
export default {
  data() {
    return {
      styleName: {
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
  mounted() {
    this.styleName = GetColorByRank(this.party.rank, this.styleName)
  }
}
</script>

<style scoped></style>
