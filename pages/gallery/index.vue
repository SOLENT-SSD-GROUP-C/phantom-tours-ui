<template>
  <v-app>
    <v-container>
      <h2 class="display-1 my-2">Gallery</h2>
      <v-divider class="my-5"></v-divider>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="galleryItem in galleryItems"
          :key="galleryItem.galleryItemId"
        >
          <v-card outlined class="d-flex">
            <v-img :src="galleryItem.galleryImageLink" aspect-ratio="1" class="grey lighten-2"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "deafult",
  data: () => ({}),
  computed: {
    galleryItems() {
      return this.$store.getters["galleryItems/loadedGalleryItems"];
    }
  },
  created() {
    this.$store.dispatch("galleryItems/fetchGalleryItems");
  }
};
</script>