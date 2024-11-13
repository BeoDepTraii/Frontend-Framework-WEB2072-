<template>
  <table class="table" :class="tableClass">
    <thead>
      <th v-for="column in columns" :key="column">{{ column }}</th>
      <th>Status</th>
      <th>Actions</th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="(column, index) in columns" :key="index">{{ item[column.toLowerCase()] }}</td>
        <td>
          <span :class="item.status === 'active' ? 'badge bg-success' : 'badge bg-danger'">
            {{ item.status === 'active' ? 'Active' : 'Inactive' }}
          </span>
        </td>
        <td>
          <button @click="$emit('edit-item', item)" class="ti-cut btn btn-warning mr-2"></button>
          <button @click="$emit('delete-item', item)" class="ti-close btn btn-danger"></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PaperTable",
  props: {
    columns: Array,
    data: Array,
    type: String,
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    },
  },
};
</script>


<style>

.badge {
  text-transform: uppercase;
  font-size: small !important;
  color: rgb(255, 255, 255);
}
</style>
