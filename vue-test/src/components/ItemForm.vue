<template>
  <form @submit.prevent="saveItem">
    <div>
      <label for="name">アイテム:</label>
      <input id="name" v-model="form.name" placeholder="アイテム" required />
    </div>
    <div>
      <label for="quantity">数量:</label>
      <input id="quantity" type="number" v-model="form.quantity" required />
    </div>
    <button type="submit">
      {{ form.id ? '更新' : '追加' }}
    </button>
  </form>
</template>

<script>
import apiClient from '../api'

export default {
  props: {
    editItem: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        id: null,
        name: '',
        quantity: 0,
      },
    }
  },
  watch: {
    // 編集対象が変更された場合、フォームを更新
    editItem: {
      immediate: true,
      handler(newItem) {
        if (newItem) {
          this.form = { ...newItem }
        } else {
          this.resetForm()
        }
      },
    },
  },
  methods: {
    // アイテムを新規作成または更新
    saveItem() {
      if (this.form.id) {
        // 更新処理
        apiClient.put(`/items/${this.form.id}`, this.form).then(() => {
          this.$emit('item-saved') // 親に通知
          this.resetForm() // フォームをリセット
        })
      } else {
        // 新規作成処理
        apiClient.post('/items', this.form).then(() => {
          this.$emit('item-saved') // 親に通知
          this.resetForm() // フォームをリセット
        })
      }
    },
    // フォームリセット
    resetForm() {
      this.form = { id: null, name: '', quantity: 0 }
    },
  },
}
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>
