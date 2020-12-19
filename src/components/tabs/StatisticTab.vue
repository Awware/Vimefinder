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
import { mapGetters, mapActions, mapMutations } from 'vuex'
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
  methods: {
    ...mapActions(['getStats']),
    ...mapMutations(['clearStats'])
  },
  computed: mapGetters(['stats']),
  async mounted() {
    await this.getStats(this.userId)
  },
  beforeDestroy() {
    this.clearStats()
  }
}
</script>

<style scoped></style>
