<template>
  <b-card class="statCard" style="height: 10rem; width:13rem;" no-body>
    <b-card-title class="game-title">
      {{ name | translateTitle }}
      <hr />
    </b-card-title>
    <b-card-body class="scrollable">
      <div class="text-center">
        <p v-for="(keyValue, keyName) in stat.global" :key="keyName">
          <b-row cols="2">
            <b-col cols="8" style="font-size: 13px">
              {{ keyName | translateKeyTitle }}
            </b-col>
            <b-col cols="4" style="font-size: 12px">
              {{ keyValue | translatePrisonBlocks }}
            </b-col>
          </b-row>
        </p>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { translateTitle, translateKeyTitle } from '@/filters'
export default {
  props: {
    stat: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  filters: {
    translateTitle: value => translateTitle(value),
    translateKeyTitle: value => translateKeyTitle(value),
    translatePrisonBlocks: value => {
      if (typeof value === 'object') return 'soon'
      return value
    }
  }
}
</script>

<style scoped>
* {
  font-family: Roboto;
  margin: 0;
  padding: 0;
}
hr {
  padding: 0;
  margin: 0;
  margin-top: 5px;
}
.game-title {
  font-size: 15px;
  text-align: center;
  font-family: Roboto;
  font-weight: bold;
  color: #3c3c3c;
  padding-top: 5px;
}
.statCard {
  margin-left: 7px;
  margin-top: 7px;
}

@media (max-width: 1200px) {
  .statCard {
    width: 16.5rem !important;
  }
}
@media (max-width: 1000px) {
  .statCard {
    width: 24.3rem !important;
  }
}
@media (max-width: 468px) {
  .statCard {
    width: 23.5rem !important;
  }
}
</style>
