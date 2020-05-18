<template>
  <div>
    <app-slider/>
    <br>
    <h1>About</h1>

    <v-divider></v-divider>
    <br>
    <h3>PHANTOM TOURS was founded by brothers Jone Doe.</h3>
    <br>
    <p>They share a passion for exploring, bikes and the outdoors.</p>
    <p>Guides Nico and Willie have extensive first-hand knowledge of the routes and destinations on offer. 
      They have built leading industry relations with service providers along the way who offer excellent 
      service, quality products, and exceptional hospitality.</p>
    <p>Each tour with a maximum of 6 clients is accompanied by a backup vehicle with a trained first aider to ensure the safety of the group.</p>
    <p>We have the skills and experience to take you on routes with astonishing diversity while tackling some challenging terrain with either a Honda Africa Twin, or a Honda XR650L.</p>
    <p><b>We look forward to showing you our <a href="/tours">Tours!</a></b></p> 
  </div>
</template>

<script>
import ImageSlider from "@/components/home/ImageSlider.vue";
export default {
  
  components: {
    appSlider: ImageSlider,
  }
};
</script>