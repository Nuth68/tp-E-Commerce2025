import { createRouter, createWebHistory } from 'vue-router'
import CategoryComponet from '@/components/CategoryComponet.vue'
import Menu from '@/components/Menu.vue'
import PromoCard from '@/components/PromoCard.vue'
import ProductCard from '@/components/ProductCard.vue'
import HomeView from '@/view/HomeView.vue'
import NavigationBar from '@/components/NavigationBar.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    name: "CategoryComponent",
    path: "/categorycomponent",
    component:CategoryComponet
  },
  {
    name: "Menu",
    path: "/menu",
    component:Menu
  },
  {
    name:"PromoCard",
    path: "/promocard",
    component:PromoCard
  },
  {
    name: "ProductCard",
    path: "/productcard",
    component: ProductCard
  },
  {
    name: "HomeView",
    path: "/homeview",
    component: HomeView
  },
  {
    name: "Navigation",
    path: "/navigation",
    component: NavigationBar

  }
   
  ],
})

export default router
