<!-- NavigationBar.vue -->
<template>
  <nav class="navbar">
    <!-- Logo -->
    <router-link to="/" class="logo">
      <img src="logo" alt="Melon Logo" class="logo-img" />
    </router-link>

    <!-- Search Bar with Category Dropdown -->
    <div class="search-wrapper">
      <div class="category-select">
        <select v-model="selectedCategory">
          <option value="">All Categories</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
        </select>
        <i class="fas fa-chevron-down arrow"></i>
      </div>

      <div class="search-input-wrapper">
        <input
          type="text"
          v-model="searchQuery"
          @keyup.enter="performSearch"
          placeholder="Search for items"
          class="search-input"
        />
        <button @click="performSearch" class="search-btn">
          <i class="pi pi-search"></i>
        </button>
      </div>
    </div>

    <!-- Right Navigation Icons -->
    <div class="nav-right">
      <router-link to="/account" class="nav-item">
        <i class="pi pi-user"></i>
        <span>Account</span>
      </router-link>
      <router-link to="/compare" class="nav-item">
        <i class="pi pi-bell"></i>
        <span>Compare</span>
      </router-link>
      <router-link to="/wishlist" class="nav-item">
        <i class="pi pi-heart"></i>
        <span>Wishlist</span>
        <span v-if="wishlistCount" class="badge">{{ wishlistCount }}</span>
      </router-link>
      <router-link to="/cart" class="nav-item">
        <i class="pi pi-shopping-cart"></i>
        <span>Cart</span>
        <span v-if="cartCount" class="badge">{{ cartCount }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/logo.png'


// Reactive state
const searchQuery = ref('')
const selectedCategory = ref('')
const cartCount = ref(3)        // example
const wishlistCount = ref(7)    // example

const router = useRouter()

const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/search',
      query: {
        q: searchQuery.value,
        category: selectedCategory.value || undefined
      }
    })
  }
}
</script>

<style scoped>
.navbar {
  background: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.8rem;
}
.logo-img { height: 52px; }
.subtitle { font-size: 0.9rem; color: #94a3b8; font-weight: normal; }

/* Search Bar */
.search-wrapper {
  flex: 1;
  max-width: 680px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  border: 1px solid green;
}

.category-select {
  position: relative;
  background: transparent;
  padding: 0 20px 0 24px;

}
.category-select i{
    background-color: #374151;
}
.category-select select {
  appearance: none;
  background: transparent;
  border: none;
  padding: 18px 24px 18px 0;
  font-size: 1rem;
  color: #374151;
  cursor: pointer;
  width: 100%;
}
.category-select .arrow {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
  font-size: 0.8rem;
}

.search-input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.search-input {
  width: 100%;
  padding: 18px 20px;
  border: none;
  background: transparent;
  font-size: 1rem;
  outline: none;
}
.search-input::placeholder { color: #9ca3af; }

.search-btn {
  color: white;
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 4px;
  
}
.search-btn:hover { background: #059669; }

/* Right Nav */
.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #7E7E7E;
  font-size: 0.95rem;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: color 0.2s;
}
.nav-item:hover { color: white; }
.nav-item i { font-size: 1.3rem; }
.badge {
  position: absolute;
  top: -8px;
  right: -12px;
  background: #ef4444;
  color: white;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive */
@media (max-width: 992px) {
  .navbar { flex-direction: column; text-align: center; }
  .search-wrapper { max-width: 100%; order: 3; }
  .nav-right { order: 2; gap: 1.5rem; }
}
</style>