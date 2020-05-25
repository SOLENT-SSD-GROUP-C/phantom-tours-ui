<template>
  <v-app class="mx-5">
    <h1 class="display-1 my-5 font-weight-light">Reservations</h1>

    <v-row v-if="parsedobj.length > 0">
      <v-simple-table :fixed-header="fixedHeader" :height="height">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Reservation Name</th>
              <th class="text-left">Type</th>
              <th class="text-left">Email</th>
              <th class="text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in reservations" :key="reservation.reservationId">
              <td>{{ reservation.userFullName }}</td>
              <div v-if="reservation.tour || reservation.rideout">
                <td v-if="reservation.tour !== null">{{ reservation.tour.tourTitle}}</td>
                <td v-else>{{ reservation.rideout.rideoutTitle}}</td>
              </div>

              <td>{{ reservation.reservationType }}</td>
              <td>{{ reservation.userEmail }}</td>
              <td>{{ reservation.userPhone }}</td>
              <v-btn class="pt-2" icon @click="onDeleteReservation(reservation.reservationId)">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </v-app>
</template>

<script>
export default {
  layout: "admin",
  data: () => ({
    fixedHeader: true,
    height: 500
  }),
  methods: {
    onDeleteReservation(id) {
      this.$store.dispatch("reservations/deleteReservation", id);
    }
  },
  computed: {
    reservations() {
      return this.$store.getters["reservations/loadedReservations"];
    },
    parsedobj() {
      return JSON.parse(JSON.stringify(this.reservations));
    }
  },
  created() {
    this.$store.dispatch("reservations/fetchReservations");
  }
};
</script>
