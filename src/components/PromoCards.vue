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
      <img :src="card.image" alt="promo image" />
    </div>
  </div>
</template>

<script setup>
const promos = [
  {
    title: 'Everyday Fresh & Clean with Our Products',
    bg: '#F9FBE7',
    image: '../img11.png'
  },
  {
    title: 'Make your Breakfast Healthy and Easy',
    bg: '#E0F7FA',
    image: '../img12.png'
  },
  {
    title: 'The best Organic Products Online',
    bg: '#FFF3E0',
    image: '../img13.png'
  }
];
</script>

<style scoped>
.promo-container {
  display: flex;
  gap: 25px;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 20px 0;
}

/* Hide scrollbar but still scrollable */
.promo-container::-webkit-scrollbar {
  display: none;
}
.promo-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.promo-card {
  flex: 0 0 auto;
  min-width: 420px;
  height: 180px;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.promo-card:hover {
  transform: translateY(-5px);
}

.content {
  max-width: 230px;
}

.promo-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 1.4;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease;
}

button:hover {
  background-color: #43a047;
}

img {
  width: 130px;
  height: 130px;
  object-fit: contain;
}
</style>
