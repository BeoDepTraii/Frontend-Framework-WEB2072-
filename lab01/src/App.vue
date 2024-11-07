<script setup>
import Product from "./components/Product.vue";
import { ref } from 'vue';
import Profile from "./components/Profile.vue";
const courseName = "Framework Vue 3";
const courseLevel = "Nâng cao";
const courseTime = 30; //giờ
// const courseIsActive = true;
const courseIsActive = ref(true);

function changeBtn() {
  courseIsActive.value = !courseIsActive.value;
}
</script>

<template>
  <div class="container my-5">
    <div>
      <h1 class="display-4 mb-3">Thông tin:</h1>
      <ul class="list-group">
        <li class="list-group-item">
          Tên khóa học: <strong>{{ courseName }}</strong>
        </li>
        <li class="list-group-item">Cấp độ: {{ courseLevel }}</li>
        <li class="list-group-item">Thời gian: {{ courseTime }} giờ</li>
        <li class="list-group-item">
          Trạng thái: {{ courseIsActive ? "Đang mở" : "Đã đóng" }} <button class="btnChange" @click="changeBtn"><i class='fas fa-exchange-alt'></i></button>
        </li>
      </ul>
    </div>

    <div style="margin-top: 3rem;">
      <h1 style="color: green">Lab 1</h1>
      <Product />
    </div>

    <div style="margin-top: 3rem;">
      <h1 style="color: green">Lab 2</h1>
      <Profile />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.btnChange {
  margin-left: 10px;
  font-size: 0.7rem;
  border-radius: 10%;
}

</style>
