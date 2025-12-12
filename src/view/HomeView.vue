<template>
  <div>

    <MenuBar
      :NameMenu="'Featured Categories'"
      :groups="groups"
      @group-selected="handleGroupSelected"
    />

    <CategoryList :categories="categories" />

    <PromoCard :promotions="promotions" />

    <MenuBar
      :NameMenu="'Popular Products'"
      :groups="groups"
      @group-selected="handleGroupSelected"
    />
    <ProductCardList :products="products" />
  </div>
</template>

<script>
import { useProductStore } from "../stores/products";
import { mapState } from "pinia";
import { onMounted } from "vue";

import PromoCard from "../components/PromoCard.vue";
import CategoryList from "../components/CategoryComponet.vue";
import Menu from "../components/Menu.vue";
import ProductCardList from "../components/ProductCard.vue";

export default {
  name: "HomePage",

  components: {
    PromoCard,
    CategoryList,
    MenuBar: Menu,
    ProductCardList,
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
