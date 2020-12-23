<template>
  <b-skeleton-wrapper :loading="value">
    <template #loading>
      <b-list-group-item>
        ID:
        <b-skeleton
          animation="fade"
          class="inline-skeleton"
          width="20%"
        ></b-skeleton>
      </b-list-group-item>
      <b-list-group-item>
        Статус:
        <b-skeleton
          animation="fade"
          class="inline-skeleton"
          width="50%"
        ></b-skeleton>
      </b-list-group-item>
      <b-list-group-item>
        Друзей:
        <b-skeleton
          animation="fade"
          class="inline-skeleton"
          width="5%"
        ></b-skeleton>
      </b-list-group-item>
      <b-list-group-item>
        Проведено времени в игре:
        <b-skeleton
          animation="fade"
          class="inline-skeleton"
          width="10%"
        ></b-skeleton>
      </b-list-group-item>
      <b-list-group-item>
        Последний вход:
        <b-skeleton
          animation="fade"
          class="inline-skeleton"
          width="60%"
        ></b-skeleton>
      </b-list-group-item>
      <b-list-group-item>
        <span
          >Гильдия:
          <b-skeleton
            animation="fade"
            class="inline-skeleton"
            width="50%"
          ></b-skeleton
        ></span>
      </b-list-group-item>
    </template>
    <slot></slot>
  </b-skeleton-wrapper>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style scoped>
.inline-skeleton {
  margin: 0;
  display: inline-block;
  vertical-align: middle;
}
</style>
