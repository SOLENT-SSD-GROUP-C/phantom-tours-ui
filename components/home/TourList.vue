<template>
  <v-row dense>
    <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
      <v-card>
        <v-img
          :src="card.src"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title v-text="card.title"></v-card-title>
        </v-img>

        <v-card-text class="text--primary" v-text="card.text"></v-card-text>
        <v-card-actions>
          <v-btn
            color="blue"
            text
            :to="card.link"
          >
            View More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Tour Location",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        text: "Tour 1",
        link: "#1",
        flex: 4
      },
      {
        title: "Favorite road Tour",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        text: "Tour 2",
        link: "#2",
        flex: 4
      },
      {
        title: "Best Tour",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        text: "Tour 3",
        link: "#3",
        flex: 4
      }
    ]
  })
};
</script>
