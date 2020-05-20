<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="5">
        <v-card class="py-5 px-10 ma-10">
          <div class="text-center">
            <v-card-title class="pa-0 font-weight-bold">Sign In</v-card-title>
          </div>

          <v-img
            id="profile-img"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            class="profile-img-card"
          />
          <v-form ref="form" @submit.prevent="handleLogin">
            <!-- <div v-if="!successful"> -->
            <v-text-field
              label="username"
              v-model="user.username"
            ></v-text-field>

            <v-text-field
              label="password"
              v-model="user.password"
            ></v-text-field>
            <!-- </div> -->
            <v-btn type="submit" block class="primary">Login</v-btn>
            <v-card-text
              >Don't have and account?
              <span
                style="cursor:pointer"
                class="primary--text"
                @click="$router.push('/register')"
                >Register</span
              ></v-card-text
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import User from "@/models/user";

export default {
  name: "Login",
  data() {
    return {
      user: new User("", "")
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin() {
      if (this.user.username && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/");
          },
          error => {
            this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
    }
  }
};
</script>

<style scoped>
.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
