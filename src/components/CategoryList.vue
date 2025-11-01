<template>
  <div class="category-wrapper">
    <div
      class="category-card"
      v-for="(item, index) in categories"
      :key="index"
    >
      <img :src="item.image" :alt="item.name" />
      <h4>{{ item.name }}</h4>
      <p>{{ item.items }} Items</p>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: 'Cake & Milk', items: 26, image: 'https://via.placeholder.com/80?text=Cake' },
  { name: 'Peach', items: 14, image: 'https://via.placeholder.com/80?text=Peach' },
  { name: 'Organic Kiwi', items: 10, image: 'https://via.placeholder.com/80?text=Kiwi' },
  { name: 'Red Apple', items: 20, image: 'https://via.placeholder.com/80?text=Apple' },
  { name: 'Snack', items: 22, image: 'https://via.placeholder.com/80?text=Snack' },
  { name: 'Black plum', items: 12, image: 'https://via.placeholder.com/80?text=Plum' },
  { name: 'Vegetables', items: 25, image: 'https://via.placeholder.com/80?text=Veggies' },
  { name: 'Headphone', items: 18, image: 'https://via.placeholder.com/80?text=Headphone' },
  { name: 'Cake & Milk', items: 26, image: 'https://via.placeholder.com/80?text=Cake' },
  { name: 'Orange', items: 16, image: 'https://via.placeholder.com/80?text=Orange' }
];
</script>

<style scoped>
.category-wrapper {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding-bottom: 10px;
}

/* Hide scrollbar but still scrollable */
.category-wrapper::-webkit-scrollbar {
  display: none;
}
.category-wrapper {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.category-card {
  background: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  width: 120px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
  flex: 0 0 auto; /* Prevent shrinking */
}

.category-card:hover {
  transform: translateY(-4px);
}

.category-card img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.category-card h4 {
  font-size: 14px;
  margin: 8px 0 4px;
}

.category-card p {
  font-size: 12px;
  color: gray;
}
</style>
