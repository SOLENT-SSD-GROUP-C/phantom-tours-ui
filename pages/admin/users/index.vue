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
              <v-text-field v-model="adminName" :counter="10" label="Admin Username" required></v-text-field>
              <v-text-field v-model="adminEmail" label="E-mail" required></v-text-field>
              <v-text-field v-model="adminPassword" label="Password" required></v-text-field>
              <v-btn color="green darken-1" text type="submit">save</v-btn>
              <v-btn color="green darken-1" text @click="onClickClose">close</v-btn>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <v-row>
        <v-col class="pa-2" v-for="admin in admins" :key="admin.userId">
          <v-card class="mx-auto grey lighten-4" outlined>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">{{admin.userName}}</v-list-item-title>
                <v-list-item-subtitle>{{admin.userEmail}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-card-actions>
                <v-btn text class="red--text" @click="onDeleteAdmin(admin.userId)">REMOVE USER</v-btn>
              </v-card-actions>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>

      <!-- <user-list-item></user-list-item> -->
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      addDialog: false,
      valid: true,
      adminName: "",
      adminEmail: "",
      adminPassword: ""
    };
  },
  methods: {
    onCreateAdmin() {
      const admin = {
        userName: this.adminName,
        userEmail: this.adminEmail,
        userPassword: this.adminPassword,
        userRole: "ADMIN"
      };

      this.$store.dispatch("admins/createAdmin", admin);
      this.$refs.form.reset();
      this.addDialog = false;

      this.$router.push("/admin");
    },
    onClickClose() {
      this.$refs.form.reset();
      this.addDialog = false;
    },
    onDeleteAdmin(id) {
      this.$store.dispatch("admins/deleteAdmin", id);
    }
  },
  computed: {
    admins() {
      return this.$store.getters["admins/loadedAdmins"];
    }
  },
  created() {
    this.$store.dispatch("admins/fetchAdmins");
  }
};
</script>
