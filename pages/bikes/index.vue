

<template>
  <div class="lighten-5">
    <h1>Bikes</h1>
    <p>All bikes</p>
    <v-divider></v-divider>
    <br />
    <p class="text-justify">
      At PHANTOM TOURS, we strive to bypass tarmac as much as possible and pride ourselves on delivering to you the opportunity to discover remote and unspoiled locations and landscapes across Southern Sri Lanka.
      Choosing just one bike from the wide range of capable motorcycles available today was no easy task. We talked at length. Each of us had their favourites and several very good reasons why they'd make the perfect adventure motorcycle.
      We considered practical things like extended fuel range to minimise refuelling stops, generous suspension to soak up the bumps, and capable crash bars for safety. And we all know that an upright riding position and a comfortable seat are paramount when riding hundreds of miles.
      We looked at power to weight ratios and tried to find a bike with the perfect balance of both. Lighter bikes are better in the loose dirt, and easier to throw around in rocky ravines or tight spaces. On the other hand, more power is always a plus... and we needed a simple bike, tough and hardy that goes the distance, and is easy to repair if anything does go wrong.
      In the end, we couldn't decide on just one bike that could do everything we wanted our customers to enjoy when touring with Ride Out Sri Lanka - experiencing our routes on the perfect motorcycle for the terrain...
      <br />
      <br />So we meticulously selected two motorcycles that we believe provide all the features required to go the distance:
    </p>
    <br />
    <v-divider></v-divider>
    <br />
    <app-bike-list></app-bike-list>
  </div>
</template>

<script>
import BikeList from "@/components/bikes/BikeList.vue";
export default {
   components: {
    appBikeList: BikeList,
  }
};
</script>