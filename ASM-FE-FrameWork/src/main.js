import Vue from "vue"; // Import Vue từ Vue 2.x
import App from "./App";
import router from "./router/index";
import PaperDashboard from "./plugins/paperDashboard";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Khởi tạo ứng dụng Vue và cấu hình
Vue.use(PaperDashboard); // Sử dụng PaperDashboard (nếu cần thiết)
Vue.use(Toast); // Sử dụng Toast

// Khởi tạo và cấu hình Vue instance
new Vue({
  router, // Sử dụng router
  render: (h) => h(App), // Render component App
}).$mount("#app"); // Mount ứng dụng vào phần tử có id là app
