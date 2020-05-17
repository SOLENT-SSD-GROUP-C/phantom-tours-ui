<template>
  <v-app>
    <v-container>
      <v-btn @click="dialog = true">Sign Up</v-btn>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>Create an Account</v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form" @submit.prevent="onCreateTour">
                  <v-text-field v-model="username" label="Username" required></v-text-field>
                  <v-text-field v-model="email" label="Email" required></v-text-field>
                  <v-text-field v-model="password" label="Password" required></v-text-field>
                  <v-text-field v-model="confirmPassword" label="Password" required></v-text-field>

                  <v-btn class="primary mt-3" type="submit">Sign Up</v-btn>
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
  data: () => ({
    overlay: true,
    dialog: false,

    username: "",
    email: "",
    password: ""
  })
};
</script>
