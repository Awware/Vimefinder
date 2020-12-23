<template>
  <div>
    <a
      class="vimetop_logo"
      :href="'https://vimetop.ru/player/' + username"
      target="_blank"
    >
      <img src="https://vimetop.ru/favicon.ico" alt="Vimetop"
    /></a>
  </div>
</template>

<script>
export default {
  props: ['username']
}
</script>

<style scoped>
.vimetop_logo {
  position: absolute;
  display: block;
  width: 24px;
  height: 24px;
  right: 5px;
  top: 5px;
}
.vimetop_logo img {
  width: 24px;
  height: 24px;
}
</style>
