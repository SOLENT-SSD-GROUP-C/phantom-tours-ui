<template>
  <v-app class="mx-5">
    <h1 class="display-1 my-5 font-weight-light">Manage Gallery</h1>
    <v-row>
      <gallery-item></gallery-item>
      <gallery-item></gallery-item>
      <gallery-item></gallery-item>
      <gallery-item></gallery-item>
      <gallery-item></gallery-item>
      <gallery-item></gallery-item>
    </v-row>
  </v-app>
</template>

<script>
import GalleryItem from "@/components/admin/gallery/GalleryItem";
export default {
  layout: "admin",
  components: {
    galleryItem: GalleryItem
  }
};
</script>
