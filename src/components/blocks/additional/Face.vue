<template>
  <div class="face">
    <b-skeleton-wrapper :loading="!preloadImage">
      <template #loading>
        <b-skeleton
          animation="fade"
          type="avatar"
          :width="faceWidth"
          :height="faceHeight"
        ></b-skeleton>
      </template>
      <div
        class="profile-second-layer"
        :style="{
          backgroundImage: `url(https://skin.vimeworld.ru/raw/skin/${username}.png?_=16057785)`,
          transform: `scale(${scale})`
        }"
      ></div>
      <img
        :width="faceWidth"
        :src="`https://skin.vimeworld.ru/head/${username}.png?_=16057785`"
        alt=""
      />
    </b-skeleton-wrapper>
  </div>
</template>

<script>
import { preload } from '@/utils/preload'
export default {
  data() {
    return {
      preloadImage: false
    }
  },
  props: {
    username: {
      required: true,
      type: String
    },
    faceWidth: {
      required: false,
      type: String,
      default: '64px'
    },
    faceHeight: {
      required: false,
      type: String,
      default: '64px'
    },
    scale: {
      required: false,
      type: String,
      default: '9'
    }
  },
  created(){
    preload(`https://skin.vimeworld.ru/head/${this.username}.png?_=16057785`)
    preload(
      `https://skin.vimeworld.ru/raw/skin/${this.username}.png?_=16057785`,
      () => {
        this.preloadImage = true
      }
    )
  }
}
</script>

<style scoped>
.profile-second-layer {
  background-position: -40px -8px;
  position: absolute;
  width: 8px;
  height: 8px;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
}

.face {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
}
</style>
