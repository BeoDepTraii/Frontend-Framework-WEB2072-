<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table 
            :data="table1.data" 
            :columns="table1.columns"
            @edit-item="handleEditItem"
            @delete-item="handleDeleteItem"
          >
          </paper-table>
        </div>
      </card>
      <button class="btn btn-success mt-3" @click="showAddProductModal = true">Add new product</button>
    </div>

    <!-- Modal for Adding Product -->
    <div v-if="showAddProductModal" class="modal fade show" tabindex="-1" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Product</h5>
            <button type="button" class="close" @click="showAddProductModal = false">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProduct">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" v-model="newProduct.name" required />
              </div>
              <div class="form-group">
                <label for="salary">Salary:</label>
                <input type="text" class="form-control" v-model="newProduct.salary" required />
              </div>
              <div class="form-group">
                <label for="country">Country:</label>
                <input type="text" class="form-control" v-model="newProduct.country" required />
              </div>
              <div class="form-group">
                <label for="city">City:</label>
                <input type="text" class="form-control" v-model="newProduct.city" required />
              </div>
              <button type="submit" class="btn btn-primary mr-2">Save</button>
              <button type="button" class="btn btn-secondary" @click="showAddProductModal = false">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PaperTable } from "@/components";

const tableColumns = ["Id", "Name", "Salary", "Country", "City"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    salary: "$36.738",
    country: "Niger",
    city: "Oud-Turnhout",
  },
  // Các sản phẩm khác ở đây
];

export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      table1: {
        title: "Product List",
        subTitle: "Manage all products available in the shop",
        columns: [...tableColumns],
        data: [...tableData],
      },
      showAddProductModal: false,
      newProduct: {
        id: null,
        name: "",
        salary: "",
        country: "",
        city: "",
      },
    };
  },
  methods: {
    handleEditItem(item) {
      console.log("Edit item:", item);
      // Xử lý logic chỉnh sửa
    },
    handleDeleteItem(item) {
      console.log("Delete item:", item);
      this.table1.data = this.table1.data.filter((dataItem) => dataItem.id !== item.id);
    },
    addProduct() {
      this.newProduct.id = this.table1.data.length + 1; // Tạo id mới cho sản phẩm
      this.table1.data.push({ ...this.newProduct }); // Thêm sản phẩm vào danh sách
      this.resetNewProduct(); // Xóa dữ liệu trong form
      this.showAddProductModal = false; // Đóng modal
    },
    resetNewProduct() {
      this.newProduct = { id: null, name: "", salary: "", country: "", city: "" };
    },
  },
};
</script>

<style scoped>
.modal-body .form-control {
  background-color: #f8f9fa; /* Màu nền nhạt */
  border: 1px solid #ced4da; /* Viền nhẹ */
  border-radius: 0.25rem; /* Góc bo tròn */
}

.modal-body .form-control:focus {
  border-color: #80bdff; /* Viền khi focus vào input */
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25); /* Ánh sáng viền khi focus */
}
</style>
