<template>
  <v-app class="mx-5">
    <v-container>
      <v-row align="end" class="my-2">
        <h1 class="display-1 font-weight-light">User Feedbacks</h1>
      </v-row>

      <v-row class="px-5">
        <v-col
          class="px-5"
          cols="12"
          sm="12"
          v-for="feedback in feedbacks"
          :key="feedback.feedbackId"
        >
          <v-card class="mx-auto" shaped dark>
            <v-card-title>
              <v-icon left v-for="star in feedback.feedbackStars" :key="star">mdi-star</v-icon>
              <v-spacer></v-spacer>
              <v-btn icon @click="onDeleteFeedback(feedback.feedbackId)">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text class="subtitle-2 pl-5">{{feedback.tour.tourTitle}}</v-card-text>
            <v-icon class="pl-5" x-large left>mdi-format-quote-open</v-icon>
            <v-card-text class="subtitle-1 pl-5">{{feedback.feedbackBody}}</v-card-text>
            <v-card-text class="subtitle-2">{{feedback.userName}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "admin",

  computed: {
    feedbacks() {
      return this.$store.getters["feedbacks/loadedFeedbacks"];
    }
  },
  methods: {
    onDeleteFeedback(id) {
      this.$store.dispatch("feedbacks/deleteFeedback", id);
    }
  },
  created() {
    this.$store.dispatch("feedbacks/fetchFeedbacks");
  }
};
</script>
