<template>
  <div class="promo-container">
    <div
      class="promo-card"
      v-for="(card, index) in promos"
      :key="index"
      :style="{ backgroundColor: card.bg }"
    >
      <div class="content">
        <h3>{{ card.title }}</h3>
        <button>Shop Now →</button>
      </div>
      <img :src="card.image" alt="" />
    </div>
  </div>
</template>

<script setup>
const promos = [
  {
    title: 'Everyday Fresh & Clean with Our Products',
    bg: '#F9FBE7',
    image: 'https://via.placeholder.com/150?text=Onions'
  },
  {
    title: 'Make your Breakfast Healthy and Easy',
    bg: '#E0F7FA',
    image: 'https://via.placeholder.com/150?text=Milk'
  },
  {
    title: 'The best Organic Products Online',
    bg: '#FFF3E0',
    image: 'https://via.placeholder.com/150?text=Veggies'
  }
];
</script>

<style scoped>
.promo-container {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding-bottom: 10px;
}

/* Hide scrollbar but still scrollable */
.promo-container::-webkit-scrollbar {
  display: none;
}
.promo-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.promo-card {
  flex: 0 0 auto;
  min-width: 250px;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.promo-card h3 {
  font-size: 16px;
  margin-bottom: 12px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #43a047;
}

img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
