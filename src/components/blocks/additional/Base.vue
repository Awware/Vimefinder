<template>
  <div class="text-center">
    <span class="profile-nick"
      >[
      <span class="font-weight-bold" :style="STYLE_rank"> {{ usr.rank }} </span
      >] {{ usr.username }} | {{ usr.lvl }}lvl</span
    >
    <b-progress
      max="1"
      height="18px"
      class="ml-2 mr-2"
      variant="secondary"
      show-label
    >
      <b-progress-bar
        striped
        animated
        :value="usr.lvlperc"
        :label="`${(usr.lvlperc * 100).toFixed(0)}%`"
      ></b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
import { GetColorByRank } from '@/utils/coloring'
export default {
  data() {
    return {
      STYLE_rank: { color: '#7D7D7D', fontSize: '18px' }
    }
  },
  mounted() {
    this.STYLE_rank = GetColorByRank(this.usr.rank, this.STYLE_rank)
  },
  props: {
    usr: {
      // rank: { required: true, type: String },
      // username: { required: true, type: String },
      // lvl: { required: true, type: Number },
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.profile-nick {
  text-decoration: none;
  font-size: 16px;
}
</style>
