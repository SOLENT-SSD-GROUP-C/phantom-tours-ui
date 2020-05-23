<template>
  <v-app>
    <v-container>
      <!-- TOUR COMPONENT -->
      <app-tour></app-tour>

      <!-- RIDEOUT COMPONENT -->
      <app-rideout></app-rideout>
    </v-container>
  </v-app>
</template>

<script>
import TourComponent from "@/components/Local/Tour";
import RideoutComponent from "@/components/Local/Rideout";

export default {
  layout: "deafult",
  components: {
    appTour: TourComponent,
    appRideout: RideoutComponent
  }
};
</script>
