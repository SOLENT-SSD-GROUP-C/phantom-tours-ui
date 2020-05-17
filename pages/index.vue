<template>
  <div>
     <v-app>
      <v-container>
        <section>
          <h1>Home Page</h1>
          <app-slider></app-slider>
        </section>
        
        <br>
        
        <h1>Featured Tours</h1>
          <app-tour-list></app-tour-list>

        <div class="text-center  my-10">
          <v-btn rounded color="red" to="/tours" dark flat>View More</v-btn>
        </div>
        <v-divider></v-divider>
        <br>
        <h1>Testimonials</h1>
       
          <app-testimonials></app-testimonials>
       
      </v-container>
     </v-app>
    
    
    
  </div>
</template>

<script>
import ImageSlider from "@/components/home/ImageSlider.vue";
import TourList from "@/components/home/TourList.vue";
import Testimonials from "@/components/home/Testimonials.vue";
export default {
  components: {
    appSlider: ImageSlider,
    appTourList: TourList,
    appTestimonials: Testimonials,
  }
};
</script>
