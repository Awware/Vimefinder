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
import { mapGetters, mapMutations, mapActions } from 'vuex'

import PlayerInParty from '@/components/single/PlayerInParty'
export default {
  data() {
    return {
      loading: false
    }
  },
  computed: mapGetters(['user', 'parties', 'partyMessage']),
  components: {
    PlayerInParty
  },
  methods: {
    ...mapMutations(['clearParties', 'clearPartyMessage']),
    ...mapActions(['getParties']),
    async update() {
      this.loading = true
      await this.getParties(this.user.id)
      this.loading = false
    }
  },
  beforeDestroy() {
    this.clearParties()
    this.clearPartyMessage()
  }
}
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
</style>
