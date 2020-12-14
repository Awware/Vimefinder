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
import Loader from '@/components/single/Loader'
import Match from '@/components/single/Match'

import { getMatchesById } from '@/vimerequests'
export default {
  components: {
    Loader,
    Match
  },
  props: {
    matches: {
      type: Array,
      required: true
    },
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
  methods: {
    async loadMore() {
      this.loading = true
      const recMatches = await getMatchesById(
        this.userId,
        this.count,
        this.offset
      )
      if (recMatches.request.size) {
        this.matches = this.matches.concat(recMatches.matches)
        this.offset += 10
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
.load-more {
  height: 45px;
  width: 180px;
}
</style>
