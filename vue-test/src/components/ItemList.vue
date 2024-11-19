<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }} ({{ item.quantity }})
      <button @click="$emit('edit', item)">編集</button>
      <button @click="$emit('delete', item.id)">削除</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>
