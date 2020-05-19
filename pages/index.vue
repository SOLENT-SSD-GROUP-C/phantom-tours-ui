<template>
  <v-app>
    <v-container>
      <!-- HERO SECTION -->
      <v-row class="mb-5">
        <v-carousel cycle height="400" show-arrows-on-hover>
          <v-carousel-item v-for="carousel in carousels" :key="carousel.carouselId">
            <v-img contain :src="carousel.carouselImageLink" :lazy-src="carousel.carouselImageLink"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-row>

      <!-- INTRO SECTION -->
      <h3 class="headline mt-5 mb-2">Venture further off the beaten track</h3>
      <h2 class="display-1">Welcome to Phantom Tours</h2>
      <v-divider class="my-2"></v-divider>

      <p>Phantom Tours is an adventure motorcycle touring company offering the ultimate riding experience through South East Aisa. We've scoured the lesser-known, often unexplored roads to create travel itineraries that promise to deliver exceptional quality and unforgettable experiences for our clients.</p>
      <v-divider class="my-5"></v-divider>

      <!-- SERVICES -->
      <p class="display-1">Services</p>
      <app-service></app-service>
      <v-divider class="my-5"></v-divider>

      <!-- TESTIMONIALS -->
      <p class="display-1 mt-5">Testimonials</p>
      <app-testimonial></app-testimonial>
    </v-container>
  </v-app>
</template>

<script>
import ServicesComponent from "@/components/Local/Services";
import TestimonialsComponent from "@/components/Local/Testimonials";

export default {
  layout: "deafult",
  components: {
    appService: ServicesComponent,
    appTestimonial: TestimonialsComponent
  },
  data: () => ({}),
  computed: {
    carousels() {
      return this.$store.getters["carousels/loadedCarousels"];
    }
  },
  created() {
    this.$store.dispatch("carousels/fetchCarousels");
  }
};
</script>

