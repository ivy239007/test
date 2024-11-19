<template>
  <div>
    <h1>CROUD_test</h1>
    <ItemForm @item-saved="fetchItems" :edit-item="selectedItem" />
    <ItemList :items="items" @edit="editItem" @delete="deleteItem" />
  </div>
</template>

<script>
import apiClient from './api'
import ItemList from './components/ItemList.vue'
import ItemForm from './components/ItemForm.vue'

export default {
  components: {
    ItemList,
    ItemForm,
  },
  data() {
    return {
      items: [], // アイテム一覧
      selectedItem: null, // 編集対象のアイテム
    }
  },
  methods: {
    // アイテム一覧を取得
    fetchItems() {
      apiClient.get('/items').then((response) => {
        this.items = response.data
      })
    },
    // 編集時の処理
    editItem(item) {
      this.selectedItem = item // 編集対象を選択
    },
    // 削除処理
    deleteItem(id) {
      apiClient.delete(`/items/${id}`).then(() => {
        this.fetchItems() // 再取得
      })
    },
  },
  mounted() {
    this.fetchItems() // 初期データ取得
  },
}
</script>
