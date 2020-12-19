<template>
  <Loader v-if="loading" />
  <b-row class="justify-content-center" v-else>
    <Match v-for="match in matches" :key="match.id" :match="match" />
    <b-col md="12" class="text-center mt-2">
      <b-button
        class="mt-2 mb-3 load-more"
        variant="outline-success"
        @click="loadMore"
        >Загрузить больше</b-button
      >
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    Match: () => import('@/components/single/Match')
  },
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      count: 10,
      offset: 10
    }
  },
  computed: mapGetters(['matches']),

  async mounted() {
    this.loading = true
    await this.getMatches(this.userId)
    this.loading = false
  },

  methods: {
    ...mapMutations(['clearMatches']),
    ...mapActions(['getMatches', 'appendMatches']),
    async loadMore() {
      this.loading = true
      await this.appendMatches(this.userId, this.count, this.offset)
      this.offset += 10
      this.loading = false
    }
  },

  beforeDestroy() {
    this.clearMatches()
  }
}
</script>

<style scoped>
.load-more {
  height: 45px;
  width: 180px;
}
</style>
