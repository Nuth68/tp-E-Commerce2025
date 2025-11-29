import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: []
  }),

  getters: {
    getCategoriesByGroup: (state) => {
      return (groupName) =>
        state.categories.filter((cat) => cat.group === groupName)
    },

    getProductsByGroup: (state) => {
      return (groupName) =>
        state.products.filter((p) => p.group === groupName)
    },

    getProductsByCategory: (state) => {
      return (categoryId) =>
        state.products.filter((p) => p.categoryId === categoryId)
    },

    getPopularProducts: (state) => {
      return state.products.filter((p) => p.countSold > 10)
    }
  },

  actions: {
    async loadInitialData() {
      try {
        const [groups, categories, promotions, products] = await Promise.all([
          axios.get('http://localhost:3000/api/groups'),
          axios.get('http://localhost:3000/api/categories'),
          axios.get('http://localhost:3000/api/promotions'),
          axios.get('http://localhost:3000/api/products')
        ])

        this.groups = groups.data
        this.categories = categories.data
        this.promotions = promotions.data
        this.products = products.data

      } catch (err) {
        console.error('Error loading store data:', err)
      }
    }
  }
})
