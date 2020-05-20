<template>
  <v-app>
    <v-container>
      <v-row align="end" class="my-2">
        <h1 class="display-1 font-weight-light">Manage Users</h1>
        <v-spacer></v-spacer>
        <v-btn text class="primary" @click="addDialog = true">Add Admin</v-btn>
      </v-row>

      <v-row justify="end" class="pa-5">
        <v-dialog v-model="addDialog" persistent max-width="400" class="pa-5">
          <v-card class="pa-5">
            <v-form ref="form" v-model="valid" class="ma-5" @submit.prevent="onCreateAdmin">
              <v-text-field v-model="userName" :counter="10" label="Admin Username" required></v-text-field>
              <v-text-field v-model="userEmail" label="E-mail" required></v-text-field>
              <v-text-field v-model="userPassword" label="Password" required></v-text-field>
              <v-btn color="green darken-1" text type="submit">save</v-btn>
              <v-btn color="green darken-1" text @click="onClickClose">close</v-btn>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <v-data-table :headers="headers" :items="users" hide-default-footer class="elevation-1">
        <template v-slot:item.username="{ item }">{{ item.userName }}</template>
        <template v-slot:item.email="{ item }">{{ item.userEmail }}</template>
        <template v-slot:item.role="{ item }">
          <v-chip small label :color="getColor(item.userRole)" dark>{{ item.userRole }}</v-chip>
        </template>
        <template v-slot:item.action="{item }">
          <div v-if="item.userRole === 'ADMIN'">
            <v-btn class="pt-2" icon @click="handleEditAdminButton(item)">
              <v-icon class="green--text">mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="pt-2" icon @click="onDeleteAdmin(item.userId)">
              <v-icon class="red--text">mdi-trash-can</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>

      <!-- EDIT TOUR FORM -->
      <v-row justify="center">
        <v-dialog v-model="editDialog" persistent max-width="600px">
          <v-card>
            <v-card-title>Edit tour</v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form" @submit.prevent="onUpdateAdmin(editedUserId)">
                  <v-text-field v-model="editedUserName" label="Username" required></v-text-field>
                  <v-text-field v-model="editedUserEmail" label="Email" required></v-text-field>
                  <v-text-field v-model="editedUserPassword" label="Password" required></v-text-field>
                  <v-btn class="primary mt-3" type="submit">Save</v-btn>
                  <v-btn class="red mt-3" dark @click="cancelForm">Cancel</v-btn>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-app>
</template>
      

<script>
export default {
  layout: "admin",
  data() {
    return {
      headers: [
        {
          text: "Username",
          align: "start",
          sortable: false,
          value: "username"
        },
        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
        { value: "action" }
      ],

      addDialog: false,
      editDialog: false,
      valid: true,
      userName: "",
      userEmail: "",
      userPassword: "",

      editedUserId: "",
      editedUserName: "",
      editedUserEmail: "",
      editedUserPassword: "",
      editedUserRole: ""
    };
  },
  methods: {
    onCreateAdmin() {
      const admin = {
        userName: this.userName,
        userEmail: this.userEmail,
        userPassword: this.userPassword,
        userRole: "ADMIN"
      };

      console.log(admin);

      this.$store.dispatch("users/createUser", admin);
      this.$refs.form.reset();
      this.addDialog = false;
    },
    onDeleteAdmin(id) {
      this.$store.dispatch("users/deleteUser", id);
      console.log(id);
    },
    onClickClose() {
      this.$refs.form.reset();
      this.addDialog = false;
    },
    handleEditAdminButton(user) {
      this.editedUserId = user.userId;
      this.editedUserName = user.userName;
      this.editedUserEmail = user.userEmail;
      this.editedUserPassword = user.userPassword;
      this.editedUserRole = user.userRole;
      this.editDialog = true;
    },
    onUpdateAdmin(userId) {
      const payload = {
        userId: this.editedUserId,
        userName: this.editedUserName,
        userEmail: this.editedUserEmail,
        userPassword: this.editedUserPassword,
        userRole: "ADMIN"
      };

      const data = { userId, payload };
      this.$store.dispatch("users/updateUser", data);
      this.$refs.form.reset();
      this.editDialog = false;
    },
    cancelForm() {
      this.$refs.form.reset();
      this.addDialog = false;
      this.editDialog = false;
    },
    getColor(role) {
      if (role === "ADMIN") return "orange";
      else return "grey darken-1";
    }
  },

  computed: {
    users() {
      return this.$store.getters["users/loadedUsers"];
    }
  },
  created() {
    this.$store.dispatch("users/fetchUsers");
  }
};
</script>
