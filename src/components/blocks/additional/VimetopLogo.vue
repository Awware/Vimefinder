<template>
  <div>
    <a
      class="vimetop_logo"
      :href="'https://vimetop.ru/player/' + user.username"
      target="_blank"
    ></a>
    <img src="https://vimetop.ru/favicon.ico" alt="Vimetop" />
  </div>
</template>

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
