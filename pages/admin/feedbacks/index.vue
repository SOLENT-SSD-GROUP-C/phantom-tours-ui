<template>
  <v-app class="mx-5">
    <h1 class="display-1 my-5 font-weight-light">User Feedbacks</h1>

    <feedback-item></feedback-item>
    <feedback-item></feedback-item>
  </v-app>
</template>

<script>
import FeedbackItem from "@/components/admin/feedbacks/FeedbackItem";
export default {
  layout: "admin",
  components: {
    feedbackItem: FeedbackItem
  }
};
</script>
