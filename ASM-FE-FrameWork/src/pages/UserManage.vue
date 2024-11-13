<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table
            :data="table1.data"
            :columns="table1.columns"
            @edit-item="editUser"
            @delete-item="deleteUser"
          />
        </div>
      </card>
      <button class="btn btn-success" @click="addUser">Add new user</button>
    </div>
  </div>
</template>

<script>
import { PaperTable } from "@/components";

export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      table1: {
        title: "User List",
        subTitle: "Manage all users",
        columns: ["Id", "Name", "Phone_number", "Email", "Address"],
        data: [
          { id: 1, name: "Dakota Rice", phone_number: "0913634651", email: "dakota@example.com", address: "Oud-Turnhout", status: 'active' },
          { id: 2, name: "Minerva Hooper", phone_number: "0913634651", email: "minerva@example.com", address: "Sinaai-Waas", status: 'inactive' },
          { id: 3, name: "Sage Rodriguez", phone_number: "0913634651", email: "sage@example.com", address: "Baileux", status: 'active' },
          { id: 4, name: "Philip Chaney", phone_number: "0913634651", email: "philip@example.com", address: "Overland Park", status: 'inactive' },
          { id: 5, name: "Doris Greene", phone_number: "0913634651", email: "doris@example.com", address: "Feldkirchen in Kärnten", status: 'active' },
        ],
      },
    };
  },
  methods: {
    addUser() {
      console.log("Add new user button clicked");
      // Logic to add a new user (e.g., open a form modal)
    },
    editUser(user) {
      console.log("Edit user:", user);
      // Logic to edit the selected user (e.g., open an edit modal)
    },
    deleteUser(user) {
      console.log("Delete user:", user);
      // Logic to delete the selected user (e.g., confirm deletion and remove from data)
    },
  },
};
</script>
