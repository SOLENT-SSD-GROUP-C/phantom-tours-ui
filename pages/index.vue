<template>
  <div>
    <h1>Home Page</h1>
    <div>
      <app-slider></app-slider>
    </div>
  </div>
</template>

<script>
import ImageSlider from "@/components/home/ImageSlider.vue";
export default {
  components: {
    appSlider: ImageSlider
  }
};
</script>
