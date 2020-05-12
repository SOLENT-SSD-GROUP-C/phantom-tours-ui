<template>
  <v-row class="px-5">
    <v-col class="px-5">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card class="mx-auto">
            <v-img
              src="https://i.pinimg.com/originals/8b/fc/ac/8bfcacfd1ebb5ff9013ab9ca815ff04d.jpg"
              max-height="220"
            ></v-img>

            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                <v-btn>Delete</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    overlay: false
  })
};
</script>