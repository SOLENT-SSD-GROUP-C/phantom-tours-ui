<template>
  <v-app>
    <v-container>
      <v-row align="end" class="my-2">
        <h1 class="display-1 font-weight-light">Manage Users</h1>
        <v-spacer></v-spacer>
      </v-row>

      <v-data-table
        :headers="headers"
        :items="users"
        hide-default-footer
        class="elevation-1"
      >
        <template v-slot:item.username="{ item }">{{ item.username }}</template>
        <template v-slot:item.email="{ item }">{{ item.email }}</template>
        <!-- <template v-slot:item.role="{ item }">{{
          item.roles[0].name
        }}</template> -->
        <template v-slot:item.role="{ item }">
          <v-chip small label :color="getColor(item.roles[0].name)" dark>{{
            item.roles[0].name
          }}</v-chip>
        </template>
        <!-- <template v-slot:item.action="{ item }">
          <div v-if="item.userRole === 'ADMIN'">
            <v-btn class="pt-2" icon @click="handleEditAdminButton(item)">
              <v-icon class="green--text">mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="pt-2" icon @click="onDeleteAdmin(item.userId)">
              <v-icon class="red--text">mdi-trash-can</v-icon>
            </v-btn>
          </div>
        </template> -->
      </v-data-table>

      <!-- EDIT TOUR FORM -->
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
        { text: "Role", value: "role" }
        // { value: "action" }
      ]
    };
  },
  methods: {
    getColor(role) {
      if (role === "ROLE_ADMIN") return "orange";
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
