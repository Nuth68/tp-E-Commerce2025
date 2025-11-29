<template>
  <div class="card">
    <!-- Promotion Badge & Image -->
    <div class="image-section">
      <div
        v-if="productRating"
        class="promo-badge"
        :style="{ backgroundColor: bgpromotion || '#FF6F61' }"
      >
        {{ productRating }}
      </div>

      <!-- Image Container -->
      <div class="image-wrapper">
        <img
          v-if="!imageError"
          :src="currentImage"
          alt="product"
          class="product-image"
          @load="imageLoaded = true"
          @error="imageError = true"
          :class="{ hidden: !imageLoaded, visible: imageLoaded }"
        />

        <div
          v-if="!imageLoaded && !imageError"
          class="loader"
        ></div>

        <img
          v-if="imageError"
          src="/img1.png"
          alt="placeholder"
          class="product-image"
        />
      </div>
    </div>

    <!-- Content Section -->
    <div class="content">
      <p class="brand">{{ brand ?? 'Hodo Foods' }}</p>

      <p class="description">{{ description }}</p>

      <!-- Star Rating -->
      <div class="rating-section">
        <div class="stars">
          <template v-for="n in stars.full" :key="'full-' + n">
            <svg class="star full" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.34 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.951-.69l1.286-3.974z"
              />
            </svg>
          </template>

          <svg
            v-if="stars.half"
            class="star half"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <defs>
              <linearGradient id="halfGrad">
                <stop offset="50%" stop-color="currentColor" />
                <stop offset="50%" stop-color="#ddd" />
              </linearGradient>
            </defs>
            <path
              fill="url(#halfGrad)"
              d="M12 2l2.39 7.26h7.63l-6.18 4.49 2.39 7.26L12 16.52l-6.23 4.49 2.39-7.26-6.18-4.49h7.63z"
            />
          </svg>

          <template v-for="n in stars.empty" :key="'empty-' + n">
            <svg class="star empty" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.34 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.951-.69l1.286-3.974z"
              />
            </svg>
          </template>
        </div>

        <span class="rating-number">({{ rating }})</span>
      </div>

      <p class="weight">{{ weight }}</p>

      <div class="price-section">
        <div class="price-info">
          <span class="discount">${{ discountPrice }}</span>
          <span class="original">${{ originalPrice }}</span>
        </div>

        <div class="qty-box">
          <button
            v-if="!isQtyVisible"
            @click="addFirstTimes"
            class="add-btn"
          >
            Add +
          </button>

          <div v-else class="qty-input-box">
            <input
              type="number"
              v-model.number="qty"
              min="1"
              @blur="checkQty"
              class="qty-input"
            />
            <button @click="resetQty" class="reset-btn">×</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductCard',
  props: {
    productImage: String,
    productRating: [String, Number],
    brand: String,
    description: String,
    weight: [String, Number],
    discountPrice: [String, Number],
    originalPrice: [String, Number],
    bgpromotion: String,
  },
  data() {
    return {
      isQtyVisible: false,
      qty: 1,
      imageLoaded: false,
      imageError: false,
      currentImage: this.productImage || '',
    }
  },
  watch: {
    productImage(newVal) {
      this.currentImage = newVal
      this.imageLoaded = false
      this.imageError = false
    },
  },
  computed: {
    rating(): number {
      return 4
    },
    stars() {
      const full = Math.floor(this.rating)
      const half = this.rating % 1 >= 0.5 ? 1 : 0
      const empty = 5 - full - half
      return { full: Array(full).fill(0), half, empty: Array(empty).fill(0) }
    },
  },
  methods: {
    addFirstTimes() {
      this.isQtyVisible = true
      this.handleQtyChange()
    },
    checkQty() {
      if (!this.qty || this.qty < 1) {
        this.resetQty()
      }
    },
    resetQty() {
      this.qty = 1
      this.isQtyVisible = false
    },
    handleQtyChange() {
      this.$emit('qty-changed', this.qty)
    },
  },
}
</script>
<style>
.card {
  background: white;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  width: 240px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.image-section {
  position: relative;
  height: 190px;
  background: linear-gradient(to bottom, #f9fafb, white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.promo-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 6px 16px;
  border-radius: 0 16px 16px 0;
}

.image-wrapper {
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image {
  width: 160px;
  height: 160px;
  object-fit: contain;
  transition: opacity 0.3s;
}

.hidden { opacity: 0; }
.visible { opacity: 1; }

.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top-color: #9ca3af;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.content {
  padding: 16px;
}

.brand {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.description {
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  line-height: 18px;
  height: 38px;
  overflow: hidden;
}

.rating-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  width: 16px;
  height: 16px;
}

.star.full { color: #facc15; }
.star.half { color: #facc15; }
.star.empty { color: #d1d5db; }

.rating-number {
  font-size: 14px;
  color: #374151;
}

.weight {
  font-size: 12px;
  color: #6b7280;
}

.price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-info {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.discount {
  color: #22c55e;
  font-size: 20px;
  font-weight: bold;
}

.original {
  text-decoration: line-through;
  color: #9ca3af;
}

.add-btn {
  background: #d1fae5;
  color: #16a34a;
  padding: 6px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  border: none;
}

.add-btn:hover {
  background: #a7f3d0;
}

.qty-input-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-input {
  width: 60px;
  text-align: center;
  padding: 6px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.reset-btn {
  color: #ef4444;
  font-size: 20px;
  cursor: pointer;
  background: none;
  border: none;
}

.reset-btn:hover {
  color: #b91c1c;
}

</style>