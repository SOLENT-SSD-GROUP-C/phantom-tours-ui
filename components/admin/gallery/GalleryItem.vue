<template>
  <v-col cols="auto" sm="6" md="4" lg="3">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="mx-auto" max-width="344">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg" aspect-ratio="1"></v-img>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358">
              <v-btn>Delete</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    overlay: false
  })
};
</script>