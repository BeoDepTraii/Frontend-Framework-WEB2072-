<template>
  <div class="row">
    <div class="col-12">
      <button class="btn btn-success mb-3" @click="showAddProductModal = true">Add new product</button>

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
    </div>

    <!-- Modal for Adding Product -->
    <div v-if="showAddProductModal" class="modal fade show" tabindex="-1" style="display: block;">
        <!-- Background overlay -->
  <div class="modal-backdrop fade show"></div>
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
                <label for="img">Image URL:</label>
                <input type="text" class="form-control" v-model="newProduct.img" required />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" v-model="newProduct.name" required />
              </div>
              <div class="form-group">
                <label for="price">Price:</label>
                <input type="number" class="form-control" v-model="newProduct.price" required />
              </div>
              <div class="form-group">
                <label for="quantity">Quantity:</label>
                <input type="number" class="form-control" v-model="newProduct.quantity" required />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textarea class="form-control" v-model="newProduct.description" required></textarea>
              </div>
              <div class="form-group">
                <label for="status">Status:</label>
                <select class="form-control" v-model="newProduct.status" required>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary mr-2">Save</button>
              <button type="button" class="btn btn-secondary" @click="showAddProductModal = false">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Editing Product -->
    <div v-if="showEditProductModal" class="modal fade show" tabindex="-1" style="display: block;">
              <!-- Background overlay -->
  <div class="modal-backdrop fade show"></div>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Product</h5>
            <button type="button" class="close" @click="showEditProductModal = false">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProduct">
              <div class="form-group">
                <label for="img">Image URL:</label>
                <input type="text" class="form-control" v-model="editProduct.img" required />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" v-model="editProduct.name" required />
              </div>
              <div class="form-group">
                <label for="price">Price:</label>
                <input type="number" class="form-control" v-model="editProduct.price" required />
              </div>
              <div class="form-group">
                <label for="quantity">Quantity:</label>
                <input type="number" class="form-control" v-model="editProduct.quantity" required />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textarea class="form-control" v-model="editProduct.description" required></textarea>
              </div>
              <div class="form-group">
                <label for="status">Status:</label>
                <select class="form-control" v-model="editProduct.status" required>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary mr-2">Save</button>
              <button type="button" class="btn btn-secondary" @click="showEditProductModal = false">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PaperTable } from "@/components";
import ProductService from "@/services/ProductService";
import { Toast } from "vue-toastification"; // Import Toast từ vue-toastification
import "vue-toastification/dist/index.css"; // Import CSS của Toast

export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      table1: {
        title: "Product List",
        subTitle: "Manage all products available in the shop",
        columns: ["Id", "Image", "Name", "Price", "Quantity", "Description"],
        data: [],
      },
      showAddProductModal: false,
      showEditProductModal: false,
      newProduct: {
        id: "",
        img: "",
        name: "",
        price: "",
        quantity: "",
        description: "",
      },
      editProduct: null,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      ProductService.getProducts()
        .then(response => {
          this.table1.data = response.data;
        })
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    },
    handleEditItem(item) {
      this.editProduct = { ...item };
      this.showEditProductModal = true;
    },
    updateProduct() {
      ProductService.updateProduct(this.editProduct.id, this.editProduct)
        .then(() => {
          const index = this.table1.data.findIndex(product => product.id === this.editProduct.id);
          if (index !== -1) {
            this.table1.data.splice(index, 1, { ...this.editProduct });
          }
          this.showEditProductModal = false;
          this.editProduct = null;

          // Hiển thị thông báo khi cập nhật thành công
          this.$toast.success("Product updated successfully!");
        })
        .catch(error => {
          console.error("Error updating product:", error);
        });
    },
    handleDeleteItem(item) {
      ProductService.deleteProduct(item.id)
        .then(() => {
          this.table1.data = this.table1.data.filter(dataItem => dataItem.id !== item.id);
        })
        .catch(error => {
          console.error("Error deleting product:", error);
        });
    },
    addProduct() {
        // Tạo id tự động tăng nếu chưa có id cho sản phẩm
  if (this.newProduct.id === "" || this.newProduct.id === null) {
    this.newProduct.id = this.table1.data.length ? Math.max(...this.table1.data.map(product => product.id)) + 1 : 1;
  }
      ProductService.createProduct(this.newProduct)
        .then(response => {
          this.table1.data.push(response.data);
          this.resetNewProduct();
          this.showAddProductModal = false;
        })
        .catch(error => {
          console.error("Error adding product:", error);
        });
    },
    resetNewProduct() {
      this.newProduct = { id: null, img: null, name: "", price: "", quantity: "", description: "" };
    },
  },
};
</script>

<style scoped>
.modal-body .form-control {
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.modal-body .form-control:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
  
}

/* Mờ nền khi modal hiển thị */
.modal.fade.show {
  display: block !important;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1); /* Nền mờ */
  z-index: 1040; /* Đảm bảo lớp backdrop ở dưới cùng */
}

.modal-dialog {
  z-index: 1050; /* Đảm bảo modal content ở trên backdrop */
}

.modal-content {
  border-radius: 0.25rem;
  overflow: hidden;
}
</style>
