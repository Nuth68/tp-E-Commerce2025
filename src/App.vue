<template>
  <div>
    <!-- Menu Section -->
    <MenuBar :NameMenu="'Menu'" :groups="groups" @group-selected="handleGroupSelected" />

      <!-- Category Section -->
    <CategoryList :categories="categories" />

    <!-- Promotion Section -->
    <PromoCard :promotions="promotions" />

     <MenuBar :NameMenu="'Menu'" :groups="groups" @group-selected="handleGroupSelected" />

  

    <!-- Products Section -->
    <div class="products-section">
      <h2>Products</h2>
      <div class="products-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :productImage="`http://localhost:3000/${JSON.parse(product.image)[0].replace(/\\/g, '/')}`"
          :productRating="product.rating"
          :brand="'Hodo Foods'"
          :description="product.name"
          :weight="product.size"
          :discountPrice="product.price"
          :originalPrice="product.price"
          :bgpromotion="'#FF6F61'"
        />
      </div>
    </div>

  </div>
</template>

<script>
import { useProductStore } from "./stores/products"
import { mapState } from "pinia"
import { onMounted } from "vue"
import PromoCard from "./components/PromoCard.vue"
import CategoryList from "./components/CategoryCompoenet.vue"
import Menu from "./components/Menu.vue"
import ProductCard from "./components/ProductCard.vue"

export default {
  components: { PromoCard, CategoryList, MenuBar: Menu, ProductCard },

  computed: {
    ...mapState(useProductStore, {
      categories: (store) => store.categories,
      promotions: (store) => store.promotions,
      groups: (store) => store.groups,
      products: (store) => store.products
    })
  },

  methods: {
    handleGroupSelected(group) {
      console.log('Selected group:', group)
      // Handle group selection logic here
    }
  },

  setup() {
    const store = useProductStore()
    onMounted(() => store.loadInitialData())
  }
}
</script>
