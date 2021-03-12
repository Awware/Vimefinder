<template>
  <div>
    <b-row>
      <b-col cols="4">
        <b-list-group>
          <b-list-group-item>
            <h5 class="text-center">{{ authUser.username }}</h5>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col col cols="8">
        <b-card no-body>
          <b-tabs fill card>
            <b-tab class="scrollable" title="Настройки" active> </b-tab>
            <b-tab class="scrollable" title="Безопасность" active> </b-tab>
            <b-tab class="scrollable" title="Заявки"> </b-tab>
            <b-tab class="scrollable" title="Привилегии"> </b-tab>
            <b-tab
              v-show="authUser.permission === 1"
              class="scrollable"
              title="Администрирование">
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: mapGetters(['authUser']),
  methods: mapMutations(['setError'])
}
</script>

<style scoped></style>
