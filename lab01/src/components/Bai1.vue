<template>
  <div class="container mt-5">
    <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
      
      <!-- Tên -->
      <div class="mb-3">
        <label for="name" class="form-label">Tên</label>
        <input
          v-model="formData.name"
          id="name"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': v$.name.$error, 'is-valid': !v$.name.$error && v$.name.$dirty }"
          @blur="v$.name.$touch()"
          required
        />
        <!-- Hiển thị lỗi -->
        <span v-show="v$.name.$dirty && v$.name.$error" class="text-danger">
          <span v-show="!v$.name.required">Tên là bắt buộc.</span>
          <span v-show="!v$.name.minLength">Tên phải có ít nhất 3 ký tự.</span>
        </span>
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="formData.email"
          id="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': v$.email.$error, 'is-valid': !v$.email.$error && v$.email.$dirty }"
          @blur="v$.email.$touch()"
          required
        />
        <span v-if="v$.email.$error" class="text-danger">
          <span v-if="!v$.email.required">Email là bắt buộc.</span>
          <span v-if="!v$.email.email">Email không hợp lệ.</span>
        </span>
      </div>

      <!-- Mật khẩu -->
      <div class="mb-3">
        <label for="password" class="form-label">Mật khẩu</label>
        <input
          v-model="formData.password"
          id="password"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': v$.password.$error, 'is-valid': !v$.password.$error && v$.password.$dirty }"
          @blur="v$.password.$touch()"
          required
        />
        <span v-if="v$.password.$error" class="text-danger">
          <span v-if="!v$.password.required">Mật khẩu là bắt buộc.</span>
          <span v-if="!v$.password.minLength">Mật khẩu phải có ít nhất 6 ký tự.</span>
        </span>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Đăng ký</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

// Dữ liệu form
const formData = reactive({
  name: '',
  email: '',
  password: '',
});

// Quy tắc kiểm tra
const rules = {
  name: { required, minLength: minLength(3) },
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

// Khởi tạo Vuelidate
const v$ = useVuelidate(rules, formData);

// Hàm xử lý gửi form
const handleSubmit = () => {
  v$.value.$touch(); // Đánh dấu tất cả các trường
  if (!v$.value.$invalid) {
    alert('Đăng ký thành công!');
    console.log(formData); // In ra dữ liệu hợp lệ
  } else {
    alert('Vui lòng kiểm tra lại form!');
  }
};
</script>

<style scoped>
/* Thêm CSS cho lỗi */
.text-danger {
  display: block; /* Đảm bảo span hiển thị */
  font-size: 0.875rem; /* Cỡ chữ nhỏ gọn */
  margin-top: 0.25rem;
  color: #dc3545; /* Màu đỏ */
}


/* CSS cho border input */
.is-valid {
  border-color: #28a745 !important;
}

.is-invalid {
  border-color: #dc3545 !important;
}
</style>
