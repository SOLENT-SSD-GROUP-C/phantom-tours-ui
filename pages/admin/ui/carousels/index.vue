<template>
  <v-app class="mx-5">
    <h1 class="display-1 my-5 font-weight-light">Manage Carousels</h1>

    <carousel-item></carousel-item>
    <carousel-item></carousel-item>
    <carousel-item></carousel-item>
  </v-app>
</template>

<script>
import CarouselItem from "@/components/admin/carousel/CarouselItem";
export default {
  layout: "admin",
  components: {
    carouselItem: CarouselItem
  }
};
</script>
