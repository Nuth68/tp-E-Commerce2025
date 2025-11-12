<template>
  <div class="category-wrapper">
    <div
      class="category-card"
      v-for="(item, index) in categories"
      :key="index"
      :style="{
        backgroundColor: item.bg,
        border: `1px solid ${item.borderColor}`
      }"
    >
      <img :src="item.image" :alt="item.name" />
      <h4>{{ item.name }}</h4>
      <p>{{ item.items }} Items</p>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: 'Cake & Milk', items: 26, image: '../img1.png', bg: '#F2FCE4', borderColor: '#81B13D' },
  { name: 'Peach', items: 14, image: '../img2.png', bg: '#FFFCEB', borderColor: '#FAAD14' },
  { name: 'Organic Kiwi', items: 10, image: '../img3.png', bg: '#ECFFEC', borderColor: '#52C41A' },
  { name: 'Red Apple', items: 20, image: '../img4.png', bg: '#FEEFEA', borderColor: '#FF4D4F' },
  { name: 'Snack', items: 22, image: '../img5.png', bg: '#FFF3EB', borderColor: '#FA8C16' },
  { name: 'Black plum', items: 12, image: '../img6.png', bg: '#FFF3FF', borderColor: '#722ED1' },
  { name: 'Vegetables', items: 25, image: '../img7.png', bg: '#F2FCE4', borderColor: '#73D13D' },
  { name: 'Headphone', items: 18, image: '../img8.png', bg: '#FEEFEA', borderColor: '#13C2C2' },
  { name: 'Cake & Milk', items: 26, image: '../img9.png', bg: '#FFF3EB', borderColor: '#FADB14' },
  { name: 'Orange', items: 16, image: '../img10.png', bg: '#FFFCEB', borderColor: '#FFA940' }
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
  font-family: 'Quicksand', sans-serif;
}

/* Hide scrollbar (cross-browser) */
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, border-color 0.3s ease;
  flex: 0 0 auto;
}

.category-card:hover {
  transform: translateY(-4px);
  border-color: #1890ff; /* highlight color when hovered */
}

.category-card img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.category-card h4 {
  font-size: 14px;
  margin: 8px 0 4px;
  font-weight: 800;
}

.category-card p {
  font-size: 12px;
  color: gray;
}
</style>
