<template>
  <v-row class="px-5">
    <v-col class="px-5">
      <v-card class="mx-auto red accent-1" shaped dark>
        <v-card-title>
          <v-icon left>mdi-star</v-icon>
          <v-icon left>mdi-star</v-icon>
          <v-icon left>mdi-star</v-icon>
          <v-icon left>mdi-star</v-icon>
          <v-icon left>mdi-star</v-icon>
        </v-card-title>
        <v-row class="pl-5">
          <v-icon x-large left>mdi-format-quote-open</v-icon>
        </v-row>
        <v-card-text
          class="subtitle-1"
        >Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.</v-card-text>

        <v-card-title>Husnul Aman</v-card-title>
      </v-card>
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