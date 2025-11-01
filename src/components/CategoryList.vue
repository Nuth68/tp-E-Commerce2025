<template>
  <div class="category-wrapper">
    <div
      class="category-card"
      v-for="(item, index) in categories"
      :key="index"
      :style="{ backgroundColor: item.bg || '#fff' }"
    >
      <img :src="item.image" :alt="item.name" />
      <h4>{{ item.name }}</h4>
      <p>{{ item.items }} Items</p>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: 'Cake & Milk', items: 26, image: '/public/img1.png', bg: '#F2FCE4' },
  { name: 'Peach', items: 14, image: '/public/img2.png', bg: '#FFFCEB' },
  { name: 'Organic Kiwi', items: 10, image: '/public/img3.png', bg: '#ECFFEC' },
  { name: 'Red Apple', items: 20, image: '/public/img4.png', bg: '#FEEFEA' },
  { name: 'Snack', items: 22, image: '/public/img5.png', bg: '#FFF3EB' },
  { name: 'Black plum', items: 12, image: '/public/img6.png', bg: '#FFF3FF' },
  { name: 'Vegetables', items: 25, image: '/public/img7.png', bg: '#F2FCE4' },
  { name: 'Headphone', items: 18, image: '/public/img8.png', bg: '#FEEFEA' },
  { name: 'Cake & Milk', items: 26, image: '/public/img9.png', bg: '#FFF3EB' },
  { name: 'Orange', items: 16, image: '/public/img10.png', bg: '#FFFCEB' }
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
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.category-card {
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  width: 120px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
  flex: 0 0 auto;
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
