<template>
  <v-container>
    <h2 class="display-1 my-2">Our Tours</h2>
    <p>
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
    </p>
    <v-row>
      <v-col cols="12" md="6" v-for="tour in tours" :key="tour.tourId">
        <v-card outlined>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="tour.tourLocationImageLink"
          ></v-img>
          <v-card-title>{{ tour.tourTitle }}</v-card-title>
          <v-card-subtitle style="height:110px; overflow:hidden;" class="pb-0">
            {{ tour.tourDescription }}
          </v-card-subtitle>

          <v-card-actions>
            <v-chip class color="primary ma-2">{{ tour.tourDays }} Days</v-chip>
            <v-chip class color="primary ma-2"
              >{{ tour.tourDistance }} Kms</v-chip
            >
            <v-chip class color="primary ma-2">{{ tour.tourPrice }} Rs</v-chip>
            <v-spacer></v-spacer>
            <v-btn
              color="red"
              text
              :to="`/tours/${tour.tourId}`"
              :tourData="tour"
              >View More</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TourComponent",
  layout: "deafult",
  computed: {
    tours() {
      return this.$store.getters["tours/loadedTours"];
    }
  },
  created() {
    this.$store.dispatch("tours/fetchTours");
  }
};
</script>
