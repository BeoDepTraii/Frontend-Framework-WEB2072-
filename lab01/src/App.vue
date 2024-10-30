<script setup>
// import HelloWorld from './components/HelloWorld.vue'
const courseName = "Framework Vue 3";
const courseLevel = "Nâng cao";
const courseTime = 30; //giờ
const courseIsActive = true;
</script>


<template>
  <div class="container my-5">
    <h1 class="display-4 mb-3">Thông tin:</h1>
      <ul class="list-group">
          <li class="list-group-item">Tên khóa học: <strong>{{courseName}}</strong></li>
          <li class="list-group-item">Cấp độ: {{courseLevel}}</li>
          <li class="list-group-item">Thời gian: {{courseTime}} giờ</li>
          <li class="list-group-item">Trạng thái: {{courseIsActive ? "Đang mở" : "Đã đóng"}}</li>
      </ul>
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
</style>
