<template>
  <div class="products-wrapper">
    <div class="products">

      <div
        class="card-wrapper"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="badge" v-if="product.promotionAsPercentage > 0">
          -{{ product.promotionAsPercentage }}%
        </div>

        <div class="card">

          <div class="img">
          <img 
          :src="getImage(product)" 
          :alt="product.name" 
          />
          </div>

          <p class="brand">hodo</p>
          <h3 class="title">{{ product.name }}</h3>
          <div class="rating">
            <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
              <i class="pi pi-star-fill"></i>
             <span class="gray">({{ product.rating }})
             </span>
          </div>
          <p class="weight">{{ product.size }}</p>
          <div class="footer">
            <div class="price-section">
              <span class="price">${{ product.price }}</span>
              <span
                class="old-price"
                v-if="product.promotionAsPercentage > 0"
              >
                ${{ oldPrice(product.price, product.promotionAsPercentage) }}
              </span>
            </div>

            <div class="qty-box">
               add +
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCardList",
  props: {
    products: Array
  },

  methods: {
  oldPrice(price, discount) {
    return (price / (1 - discount / 100)).toFixed(2);
  },

  getImage(product) {
    try {
      const img = JSON.parse(product.image)[0];  
      return `http://localhost:3000/${img.replace(/\\/g, "/")}`;
    } catch  {
      return "/img1.png"; // fallback
    }
  }
}

}
</script>

<style scoped>
.products-wrapper {
  padding-bottom: 30px;
}

.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  row-gap: 35px; 
}


/* Card */
.card-wrapper {
  position: relative;
  width: 260px;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  font-family: sans-serif;
  transition: 0.3s;
  border: 1px solid #E5E5E5;
}

.card-wrapper:hover {
  transform: translateY(-5px);
  border: 1px solid green;
}

/* Badge */
.badge {
  position: absolute;
  top: 15px;
  left: 0px;
  background: #3EB86F;
  color: white;
  padding: 8px  15px;
  border-bottom-right-radius: 15px ;
  border-top-right-radius: 15px;
  font-size: 13px ;
  font-weight: 600;
}

/* Image */
.img {
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.img img {
  width: 160px;
  height: auto;
  object-fit: contain;
}

/* Brand */
.brand {
  margin-top: 15px;
  color: #888;
  font-size: 14px;
}

/* Title */
.title {
  font-size: 16px;
  font-weight: 600;
  margin: 6px 0;
  color: #333;
}

/* Rating */
.rating {
  font-size: 14px;
}

.gray {
  color: #888;
}

/* Weight */
.weight {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

/* Footer */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Price */
.price-section {
  display: flex;
  gap: 8px;
  align-items: center;
}

.price {
  font-size: 20px;
  font-weight: 700;
  color: #2ECC71;
}

.old-price {
  color: #999;
  text-decoration: line-through;
  font-size: 14px;
}

/* Quantity */
.qty-box {
  width: 60px;
  height: 35px;

  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  background-color: #DEF9EC;
  color: #3BB77E;
}

.arrow {
  font-size: 10px;
}
</style>
