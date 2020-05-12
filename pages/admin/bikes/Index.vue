<template>
  <v-app class="mx-5">
    <h1 class="display-1 my-5 font-weight-light">Manage Bikes</h1>

    <bike-item></bike-item>

    <bike-item></bike-item>
  </v-app>
</template>

<script>
import BikeItem from "@/components/admin/bikes/BikeItem";
export default {
  layout: "admin",
  components: {
    bikeItem: BikeItem
  }
};
</script>
