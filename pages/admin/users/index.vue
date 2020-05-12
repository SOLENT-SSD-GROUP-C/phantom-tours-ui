<template>
  <div>
    <v-row justify="end" class="pa-5">
      <v-dialog v-model="dialog" persistent max-width="400" class="pa-5">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">ADD ADMIN</v-btn>
        </template>
        <v-card class="pa-5">
          <v-form ref="form" v-model="valid" lazy-validation class="ma-5">
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Username" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
            <v-text-field
              v-model="confirm_password"
              :rules="emailRules"
              label="Confirm Password"
              required
            ></v-text-field>
            <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">Save</v-btn>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <user-list-filter></user-list-filter>
    <v-divider></v-divider>
    <user-list-item></user-list-item>
    <user-list-item></user-list-item>
    <user-list-item></user-list-item>
    <user-list-item></user-list-item>
    <user-list-item></user-list-item>
  </div>
</template>

<script>
import UserListFilter from "@/components/admin/users/UserListFilter";
import UserListForm from "@/components/admin/users/UserListForm";
import UserListItem from "@/components/admin/users/UserListItem";

export default {
  layout: "admin",
  data() {
    return {
      dialog: false,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [
        // Edit rules
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  components: {
    userListFilter: UserListFilter,
    userListForm: UserListForm,
    userListItem: UserListItem
  }
};
</script>
