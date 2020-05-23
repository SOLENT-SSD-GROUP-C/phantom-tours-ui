<template>
  <v-container>
    <h2 class="display-1 my-2" v-if="rideouts.length > 0">Upcoming Rideouts</h2>
    <p v-if="rideouts.length > 0">
      Take a ride with us on some of the less-travelled roads in Southern Africa. You'll get to discover and experience some of the continent's breath-taking landscapes while challenging your skill and technique on different terrain. Our adventure tours cover a large area of Southern Africa, stretching from the Eastern Cape, to the border of Namibia.
      Whether you want to go on a shorter adventure tour that covers the outskirts of the mystical Garden Route, or a week-long excursion, our adventure tours cater for every type of rider and adventurer out there. All the adventure tours also offer a wide variety of terrain, making our offering as diverse as it is unique.
    </p>
    <v-divider class="my-5" v-if="rideouts.length > 0"></v-divider>
    <v-row>
      <v-col xs="12" md="6" v-for="rideout in rideouts" :key="rideout.rideoutId">
        <v-card outlined height="440px">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="rideout.rideoutLocationImageLink"
          ></v-img>
          <v-card-title>{{rideout.rideoutTitle}}</v-card-title>
          <v-card-subtitle class="pb-0 subtitle-1">
            From:
            <span class="font-weight-bold primary--text">{{rideout.rideoutStartingPoint}}</span> To:
            <span class="font-weight-bold primary--text">{{rideout.rideoutEndingPoint}}</span>
          </v-card-subtitle>
          <v-card-subtitle class="pb-0 subtitle-1">
            Date:
            <span class="font-weight-bold primary--text">{{rideout.rideoutDate.substr(0, 10)}}</span>
          </v-card-subtitle>
          <v-card-subtitle
            class="pb-0"
            style="height:70px; overflow:hidden;"
          >{{rideout.rideoutDescription}}</v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="primary" text @click="onClickBook(rideout.rideoutId)">Book This Rideout</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- BOOK DIALOG -->
    <v-row justify="center">
      <v-dialog v-model="bookDialog" persistent max-width="600px">
        <v-card>
          <v-card-title>Book this Rideout</v-card-title>
          <v-card-text>
            <v-container>
              <ValidationObserver name="obs2" ref="obs2" v-slot="{ validate, reset }">
                <v-form ref="form" @submit.prevent="onCreateReservation">
                  <ValidationProvider v-slot="{ errors }" rules="required|max:10">
                    <v-text-field
                      v-model="rideout.rideoutTitle"
                      disabled
                      label="Reservation"
                      required
                    ></v-text-field>
                  </ValidationProvider>

                  <v-text-field v-model="userFullName" label="Full Name" required></v-text-field>
                  <v-text-field v-model="userEmail" label="Email" required></v-text-field>
                  <v-text-field v-model="userPhone" label="Phone" required></v-text-field>

                  <v-btn class="primary mt-3" type="submit">Submit</v-btn>
                  <v-btn class="red mt-3" dark @click="cancelForm">Cancel</v-btn>
                </v-form>
              </ValidationObserver>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "RideoutComponent",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  layout: "deafult",
  data: () => ({
    id: 0,
    bookDialog: false,
    rideout: {},
    reservationName: "",
    userFullName: "",
    userEmail: "",
    userPhone: ""
  }),
  methods: {
    onClickBook(id) {
      this.rideout = this.$store.getters["rideouts/rideout"](parseInt(id));
      if (this.currentUser) {
        this.bookDialog = true;
      } else {
        this.$router.push("/login");
      }
    },
    onCreateReservation() {
      const reservation = {
        rideoutId: this.rideout.rideoutId,
        reservationType: "Rideout",
        userFullName: this.userFullName,
        userEmail: this.userEmail,
        userPhone: this.userPhone
      };
      this.$store.dispatch("reservations/createReservation", reservation);
      this.$refs.form.reset();
      this.bookDialog = false;
    },
    cancelForm() {
      this.$refs.form.reset();
      this.bookDialog = false;
    }
  },
  computed: {
    rideouts() {
      return this.$store.getters["rideouts/loadedRideouts"];
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    this.$store.dispatch("rideouts/fetchRideouts");
  }
};
</script>