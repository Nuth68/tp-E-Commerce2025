<template>
  <div class="container">
    <CategoryList />
    <PromoCards />
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CategoryList from './components/CategoryList.vue'
import PromoCards from './components/PromoCards.vue'

</script>
