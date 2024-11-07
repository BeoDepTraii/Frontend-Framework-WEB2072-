<script setup>
    import { ref } from "vue";
    const productCount = ref(0);
    const increaseCount = () => {
    productCount.value++;
    };
    const decreaseCount = () => {
    if (productCount.value > 0) {
        productCount.value--;
    }
    };
</script>

<template>

  <div class="container">
    <h1>Quản lý giỏ hàng với ref()</h1>
    <p>Số lượng sản phẩm: {{ productCount }}</p>
    <button style="margin-right: 5px;" class="btn btn-success" @click="increaseCount">Tăng</button>

    <button class="btn btn-warning" @click="decreaseCount" :disabled="productCount === 0">Giảm</button>
  </div>

</template>
