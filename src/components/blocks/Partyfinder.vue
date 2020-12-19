<template>
  <b-card header="Partyfinder" footer-tag="footer" class="mt-2">
    <template #footer>
      <div class="text-center">
        <button
          class="btn btn-outline-secondary p-1"
          @click="update"
          :disabled="loading"
        >
          Получить
        </button>
      </div>
    </template>
    <Loader v-if="loading" />
    <div v-else>
      <div v-if="parties.length && !partyMessage">
        <PlayerInParty
          v-for="party in parties"
          :key="party.id"
          :party="party"
        />
      </div>
      <p v-else-if="partyMessage" class="text-center" style="color: #9A5364">
        {{ partyMessage ? partyMessage : 'Неизвестная ошибка!' }}
      </p>
      <p v-else class="text-center" style="color: #6894dd">
        Нажми на кнопку ниже
      </p>
    </div>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'

import PlayerInParty from '@/components/single/PlayerInParty'
export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(['user', 'parties', 'partyMessage'])
  },
  components: {
    PlayerInParty
  },
  methods: {
    async update() {
      this.loading = true
      await this.$store.dispatch('getParties', this.user.id)
      this.loading = false
    }
  },
  beforeDestroy() {
    this.$store.commit('clearParties')
    this.$store.commit('clearPartyMessage')
  }
}
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
</style>
