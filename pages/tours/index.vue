<template>
  <v-app>
    <v-container>
      <h1 class="display-1 my-3 font-weight-thin">Our Tours</h1>
      <span>
        Take a ride with us on some of the less-travelled roads in Southern
        Africa. You'll get to discover and experience some of the continent's
        breath-taking landscapes while challenging your skill and technique on
        different terrain. Our adventure tours cover a large area of Southern
        Africa, stretching from the Eastern Cape, to the border of Namibia.
        Whether you want to go on a shorter adventure tour that covers the
        outskirts of the mystical Garden Route, or a week-long excursion, our
        adventure tours cater for every type of rider and adventurer out there.
        All the adventure tours also offer a wide variety of terrain, making our
        offering as diverse as it is unique.
      </span>

      <v-divider class="my-4"></v-divider>

      <v-row>
        <app-tour-item class="mb-4"></app-tour-item>
        <app-tour-item class="mb-4"></app-tour-item>
        <app-tour-item class="mb-4"></app-tour-item>
        <app-tour-item class="mb-4"></app-tour-item>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import TourItem from "@/components/tours/TourItem.vue";

export default {
  components: {
    appTourItem: TourItem
  }
};
</script>
