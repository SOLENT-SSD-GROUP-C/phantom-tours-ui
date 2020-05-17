<template>
  <v-app class="mx-5">
    <v-container>
      <v-row align="end" class="my-2">
        <h1 class="display-1 font-weight-light">Manage Carousels</h1>
        <v-spacer></v-spacer>
        <v-btn text class="primary" @click="dialog = true">Add Carousel</v-btn>
      </v-row>

      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-text>
              <v-container>
                <v-form ref="form" @submit.prevent="onCreateCarousel">
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-text-field v-model="carouselImageLink" label="Image Link" required></v-text-field>
                    </v-col>
                    <v-img
                      :src="carouselImageLink"
                      height="150"
                      width="300"
                      alt="Image Preview"
                      v-show="carouselImageLink"
                    ></v-img>
                  </v-row>
                  <v-btn class="primary mt-3" :disabled="!formIsValid" type="submit">Create</v-btn>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>

      <v-row class="px-5">
        <v-col class="px-5" v-for="carousel in carousels" :key="carousel.carouselId">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto">
                <v-img :src="carousel.carouselImageLink" max-height="220"></v-img>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn @click="deleteCarousel(carousel.carouselId)">Delete</v-btn>
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
    carouselImageLink: ""
  }),
  computed: {
    carousels() {
      return this.$store.getters["carousels/loadedCarousels"];
    },
    formIsValid() {
      return this.carouselImageLink !== "";
    }
  },
  methods: {
    onCreateCarousel() {
      if (!this.formIsValid) {
        return;
      }
      const imageData = {
        carouselImageLink: this.carouselImageLink
      };
      this.$store.dispatch("carousels/createCarousel", imageData);
      this.$router.push("/admin/ui/carousels");
      this.dialog = false;
    },
    deleteCarousel(id) {
      this.$store.dispatch("carousels/deleteCarousel", id);
    }
  },
  created() {
    this.$store.dispatch("carousels/fetchCarousels");
  }
};
</script>
