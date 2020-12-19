<template>
  <b-row class="justify-content-center">
    <Stat
      v-for="(stat, name) in stats"
      :key="stat.id"
      :stat="stat"
      :name="name"
    />
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Stat from '@/components/single/Stat'
export default {
  components: {
    Stat
  },
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['stats'])
  },
  async mounted() {
    await this.$store.dispatch('getStats', this.userId)
  },
  beforeDestroy() {
    this.$store.commit('clearStats')
  }
}
</script>

<style scoped></style>
