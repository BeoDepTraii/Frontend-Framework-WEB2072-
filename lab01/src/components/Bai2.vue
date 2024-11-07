<script setup>
import { reactive } from "vue";
const user = reactive({
  name: "",
  age: null,
  email: "",
});
const submitForm = () => {
  if (user.name && user.email) {
    alert("Thông tin hợp lệ");
  } else {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
};
</script>

<template>
  <div class="container">
    <h1>Quản lý thông tin người dùng với reactive()</h1>
    <!-- <form @submit.prevent="submitForm">
      <label>Tên: <input v-model="user.name" required /></label><br />
      <label>Tuổi: <input type="number" v-model="user.age" required /></label
      ><br />
      <label>Email: <input v-model="user.email" required /></label><br />
      <button type="submit">Cập nhật</button>
    </form> -->


    <form @submit.prevent="submitForm">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Họ tên:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="user.name" required >
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Tuổi:</label>
    <input type="number" class="form-control" v-model="user.age" required >
  </div>
  <div class="mb-3">
    <label for="exampleCheck1" class="form-label">Email:</label>
    <input type="text" class="form-control" id="exampleCheck1" v-model="user.email" required >
  </div>
  <button type="submit" class="btn btn-primary">Cập nhật</button>
</form>

    <p>Tên: {{ user.name }}</p>
    <p>Tuổi: {{ user.age }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>
