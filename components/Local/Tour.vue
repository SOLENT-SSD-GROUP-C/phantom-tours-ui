<template>
  <v-row>
    <v-col xs="12" md="6" v-for="tour in tours" :key="tour.tourId">
      <v-card outlined>
        <v-img class="white--text align-end" height="200px" :src="tour.tourLocationImageLink"></v-img>
        <v-card-title>{{ tour.tourTitle }}</v-card-title>
        <v-card-subtitle style="height:110px; overflow:hidden;" class="pb-0">
          {{
          tour.tourDescription
          }}
        </v-card-subtitle>

        <v-card-actions>
          <v-chip class color="primary ma-2">{{ tour.tourDays }} Days</v-chip>
          <v-chip class color="primary ma-2">{{ tour.tourDistance }} Kms</v-chip>
          <v-chip class color="primary ma-2">{{ tour.tourPrice }} Rs</v-chip>
          <v-spacer></v-spacer>
          <v-btn color="red" text :to="`/tours/${tour.tourId}`" :tourData="tour">View More</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
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
