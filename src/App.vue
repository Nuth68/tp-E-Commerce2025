<template>
  <div>
    <!-- Menu Section -->
    <MenuBar
      :NameMenu="'Featured Categories'"
      :groups="groups"
      @group-selected="handleGroupSelected"
    />

    <!-- Category Section -->
    <CategoryList :categories="categories" />

    <!-- Promotion Section -->
    <PromoCard :promotions="promotions" />

    <!-- Popular Products -->
    <MenuBar
      :NameMenu="'Popular Products'"
      :groups="groups"
      @group-selected="handleGroupSelected"
    />

    <!-- Products Section -->
    <div class="products-section">
      <div class="products-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :description="product.name"
          :productImage="getImage(product)"
          :productRating="product.rating"
          :brand="'Hodo Foods'"
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
import { useProductStore } from "./stores/products";
import { mapState } from "pinia";
import { onMounted } from "vue";

import PromoCard from "./components/PromoCard.vue";
import CategoryList from "./components/CategoryCompoenet.vue";
import Menu from "./components/Menu.vue";
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "HomePage",

  components: {
    PromoCard,
    CategoryList,
    MenuBar: Menu,
    ProductCard,
  },

  computed: {
    ...mapState(useProductStore, {
      categories: (store) => store.categories,
      promotions: (store) => store.promotions,
      groups: (store) => store.groups,
      products: (store) => store.products,
    }),
  },

  methods: {
    handleGroupSelected(group) {
      console.log("Selected group:", group);
    },

    getImage(product) {
      try {
        const img = JSON.parse(product.image)[0];
        return `http://localhost:3000/${img.replace(/\\/g, "/")}`;
      } catch {
        return "/img1.png";
      }
    },
  },

  setup() {
    const store = useProductStore();
    onMounted(() => store.loadInitialData());
  },
};
</script>

<style scoped>
.banners {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.banner-card {
  display: flex;
  justify-content: space-between;
  padding: 35px;
  border-radius: 15px;
  align-items: center;
}

.banner-card h3 {
  width: 60%;
  color: #1c1c1c;
  line-height: 1.3;
}

.banner-card button {
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 10px;
}

.banner-card img {
  width: 150px;
  height: auto;
}

@media (max-width: 768px) {
  .banners {
    grid-template-columns: 1fr;
  }
}

.banners {
  margin-bottom: 30px;
}
.products-section {
  padding: 20px 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

</style>
