<template>
  <div class="promo-wrapper">
    <div
      class="promo-card"
      v-for="(promo, index) in promotions"
      :key="index"
      :style="{ backgroundColor: promo.bg }"
    >
     
      <div class="promo-text">
        <h3>{{ promo.title }}</h3>
        <!-- Inline button component -->
        <button
          class="shop-btn"
          :style="{ backgroundColor: promo.buttonColor }"
        >
          {{ promo.buttonText }} →
        </button>
      </div>
      <img :src="promo.image" alt="promo" />
    </div>
  </div>
</template>

<script setup>
const promotions = [
  {
    title: 'Everyday Fresh & \nClean with Our \nProducts',
    bg: '#F9FBE7',
    image: '../img11.png',
    buttonText: 'Shop Now',
    buttonColor: '#3BB77E'
  },
  {
    title: 'Make your Breakfast Healthy and Easy',
    bg: '#E0F7FA',
    image: '../img12.png',
    buttonText: 'Shop Now',
    buttonColor: '#3BB77E'
  },
  {
    title: 'The best Organic Products Online',
    bg: '#FFF3E0',
    image: '../img13.png',
    buttonText: 'Shop Now',
    buttonColor: '#FDC040'
  }
]
</script>

<style scoped>
/* Layout for the wrapper */
.promo-wrapper {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding-bottom: 10px;
}

/* Each card box */
.promo-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 430px;
  height: 200px;
  border-radius: 10px;
  padding: 20px;
  flex-shrink: 0;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  font-family: 'Quicksand', sans-serif;
}

.promo-card:hover {
  transform: translateY(-5px);
}

/* Text block inside card */
.promo-text {
  max-width: 180px;
  padding-top: 20px;
}

.promo-text h3 {
  font-size: 16px;
  margin-bottom: 10px;
  white-space: pre-line;
  color: #333;
  font-weight: 900;
}

/* Reusable button style */
.shop-btn {
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;
  font-weight: 500;
}

.shop-btn:hover {
  opacity: 0.85;
}

/* Image styling */
.promo-card img {
  width: 200px;
  height:140px;

}
</style>
