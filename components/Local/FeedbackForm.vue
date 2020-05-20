<template>
  <v-row justify="center">
    <v-card outlined width="98%" class="pa-3">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline"
            >Write a feedback</v-list-item-title
          >
          <v-form ref="form" @submit.prevent="onCreateFeedback">
            <v-row class="px-3">
              <v-textarea
                v-model="feedbackBody"
                auto-grow
                label="Feedback"
                counter="500"
              ></v-textarea>
            </v-row>
            <v-row class="pa-3">
              <v-rating
                v-model="rating"
                empty-icon="mdi-heart-outline"
                full-icon="mdi-heart"
                hover
                size="20"
                dense
                color="red lighten-3"
                background-color="grey lighten-1"
              ></v-rating>
              <v-spacer></v-spacer>
              <v-btn text class="primary--text" type="submit">Submit</v-btn>
            </v-row>
          </v-form>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-row>
</template>

<script>
export default {
  props: ["tour"],
  data: () => ({
    rating: 1,
    feedbackBody: ""
  }),
  methods: {
    onCreateFeedback() {
      const feedback = {
        tourId: this.tour.tourId,
        feedbackStars: this.rating,
        feedbackBody: this.feedbackBody,
        username: this.currentUser.username
      };
      this.$store.dispatch("feedbacks/createFeedback", feedback);
      this.$refs.form.reset();

      // console.log(this.tour.tourId);
      // console.log(feedback);
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  }
};
</script>
