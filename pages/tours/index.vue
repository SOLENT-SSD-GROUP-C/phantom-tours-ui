<template>
  <v-app>
    <v-container>
      <!-- TOURS SECTION -->
      <h2 class="display-1 my-2">Our Tours</h2>
      <p>
        Take a ride with us on some of the less-travelled roads in Southern Africa. You'll get to discover and experience some of the continent's breath-taking landscapes while challenging your skill and technique on different terrain. Our adventure tours cover a large area of Southern Africa, stretching from the Eastern Cape, to the border of Namibia.
        Whether you want to go on a shorter adventure tour that covers the outskirts of the mystical Garden Route, or a week-long excursion, our adventure tours cater for every type of rider and adventurer out there. All the adventure tours also offer a wide variety of terrain, making our offering as diverse as it is unique.
      </p>
      <v-divider class="my-5"></v-divider>

      <!-- TOUR COMPONENT -->
      <app-tour></app-tour>
      <v-divider class="my-5"></v-divider>

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
  components: { appTour: TourComponent, appRideout: RideoutComponent }
};
</script>