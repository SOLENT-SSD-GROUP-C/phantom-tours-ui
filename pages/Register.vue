<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="5">
        <v-card class="py-5 px-10 ma-10">
          <div class="text-center">
            <v-card-title class="pa-0 font-weight-bold">Sign Up</v-card-title>
          </div>

          <v-img
            id="profile-img"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            class="profile-img-card"
          />
          <v-form ref="form" @submit.prevent="handleRegister">
            <!-- <div v-if="!successful"> -->
            <div>
              <v-text-field label="username" v-model="user.username"></v-text-field>
              <!-- <div v-if="submitted && errors.has('username')" class="danger">
                  {{ errors.first("username") }}
              </div>-->
            </div>

            <div>
              <v-text-field label="email" v-model="user.email"></v-text-field>
              <!-- <div v-if="submitted && errors.has('email')" class="danger">
                  {{ errors.first("email") }}
              </div>-->
            </div>

            <div>
              <v-text-field label="password" v-model="user.password"></v-text-field>
              <!-- <div v-if="submitted && errors.has('password')" class="danger">
                  {{ errors.first("password") }}
              </div>-->
            </div>
            <!-- </div> -->
            <v-btn type="submit" block class="primary">Sign Up</v-btn>
            <v-card-text>
              Already have an account?
              <span
                style="cursor:pointer"
                class="primary--text"
                @click="$router.push('/login')"
              >Sign in</span>
            </v-card-text>
          </v-form>

          <!-- <div
            v-if="message"
            class="alert"
            :class="successful ? 'success' : 'danger'"
          >
            {{ message }}
          </div>-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import User from "../models/user";
import { ValidationProvider } from "vee-validate";

export default {
  name: "Register",
  components: { ValidationProvider },
  data() {
    return {
      user: new User("", "", ""),
      submitted: false,
      successful: false,
      message: ""
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister() {
      // this.message = "";
      // this.submitted = true;
      // this.$validator.validate().then(isValid => {
      //   if (isValid) {
      //     this.$store.dispatch("auth/register", this.user).then(
      //       data => {
      //         this.message = data.message;
      //         this.successful = true;
      //       },
      //       error => {
      //         this.message =
      //           (error.response && error.response.data) ||
      //           error.message ||
      //           error.toString();
      //         this.successful = false;
      //       }
      //     );
      //   }
      // });

      this.$store.dispatch("auth/register", this.user).then(data => {
        this.message = data.message;
        this.successful = true;
      });
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
