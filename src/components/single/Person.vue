<template>
  <b-card class="cardPerson" :style="cardStyle">
    <b-card-body style="padding: 0">
      <p :style="online" class="online-status">*</p>
      <div
        style="display:flex; justify-content: center; align-items:center; margin-bottom:3px"
      >
        <Face
          :username="person.username"
          faceWidth="32px"
          faceHeight="32px"
          scale="5"
        />
      </div>
      <div style="text-align:center;">
        <router-link
          class="font-weight-bold"
          :style="style_color"
          :to="`/user/${person.username}`"
        >
          {{ person.username }}</router-link
        >
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import Face from '@/components/blocks/additional/Face'
import { GetColorByRank } from '@/utils/coloring'
export default {
  components: {
    Face
  },
  data() {
    return {
      style_color: {
        color: '#888888',
        fontSize: '12px'
      },
      cardStyle: {}
    }
  },
  computed: {
    online() {
      return { color: this.person.online.value ? '#8DCA4C' : '#DB4C60' }
    }
  },
  props: {
    person: {
      type: Object,
      required: true
    },
    pWidth: {
      type: String,
      required: false,
      default: '10.2rem'
    },
    pHeight: {
      type: String,
      required: false,
      default: '6rem'
    },
    guildCompat: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    this.cardStyle = {
      height: this.pHeight,
      width: this.pWidth
    }

    //?
    if (this.person.username.length <= 12) {
      this.style_color.fontSize = '13px'
    }
    this.style_color = GetColorByRank(this.person.rank, this.style_color)

    if (this.guildCompat) {
      if (this.person.status == 'OFFICER') {
        this.cardStyle.backgroundColor = 'rgba(75, 96, 163, 0.1)'
        this.cardStyle.border = '2px dotted #4B60A3'
      } else if (this.person.status == 'LEADER') {
        this.cardStyle.backgroundColor = 'rgba(163, 75, 94, 0.1)'
        this.cardStyle.border = '4px dotted #A34B5E'
      }
    }
  }
}
</script>

<style scoped>
.url_nickname {
  text-align: center;
  color: #888888;
  font-weight: bold;
}
.online-status {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 5px;
  transform: rotate(-45deg);
  font-size: 18px;
  transition: opacity 1s ease-in-out;
  animation: online_status_anim 1s ease-in-out infinite;
}

@keyframes leader {
  0% {
    transform: scale(5);
  }
  50% {
    transform: scale(4);
  }
  100% {
    transform: scale(3);
  }
}

@keyframes online_status_anim {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
.cardPerson {
  margin-left: 5px;
  margin-right: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
}
@media (max-width: 767px) {
  .cardPerson {
    width: 12rem !important;
  }
}
@media (max-width: 480px) {
  .cardPerson {
    width: 20rem !important;
  }
}
</style>
