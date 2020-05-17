<template>
  <v-app class="mx-5">
    <v-container>
      <v-row align="end" class="my-2">
        <h1 class="display-1 font-weight-light">Manage Gallery</h1>
        <v-spacer></v-spacer>
        <v-btn text class="primary" @click="dialog = true">Add Picture</v-btn>
      </v-row>

      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-text>
              <v-container>
                <v-form ref="form" @submit.prevent="onCreateGalleryItem">
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-text-field v-model="galleryImageLink" label="Image Link" required></v-text-field>
                    </v-col>
                    <v-img
                      :src="galleryImageLink"
                      height="150"
                      width="300"
                      alt="Image Preview"
                      v-show="galleryImageLink"
                    ></v-img>
                  </v-row>
                  <v-btn class="primary mt-3" :disabled="!formIsValid" type="submit">Create</v-btn>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>

      <v-row>
        <v-col
          cols="auto"
          sm="6"
          md="4"
          lg="3"
          v-for="galleryItem in galleryItems"
          :key="galleryItem.galleryItemId"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344">
                <v-img :src="galleryItem.galleryImageLink"></v-img>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn @click="deleteGalleryItem(galleryItem.galleryItemId)">Delete</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "admin",
  data: () => ({
    overlay: false,
    dialog: false,
    galleryImageLink: ""
  }),
  computed: {
    galleryItems() {
      return this.$store.getters["galleryItems/loadedGalleryItems"];
    },
    formIsValid() {
      return this.galleryImageLink !== "";
    }
  },
  methods: {
    onCreateGalleryItem() {
      if (!this.formIsValid) {
        return;
      }
      const imageData = {
        galleryImageLink: this.galleryImageLink
      };
      this.$store.dispatch("galleryItems/createGalleryItem", imageData);
      this.$router.push("/admin/ui/gallery");
      this.dialog = false;
    },
    deleteGalleryItem(id) {
      this.$store.dispatch("galleryItems/deleteGalleryItem", id);
    }
  },
  created() {
    this.$store.dispatch("galleryItems/fetchGalleryItems");
  }
};
</script>
