<template>
  <v-app class="mx-5">
    <v-container>
      <v-row align="end" class="my-2">
        <h1 class="display-1 font-weight-light">Manage Bikes</h1>
        <v-spacer></v-spacer>
        <v-btn text class="primary" to="/admin/bikes/createBike">Add Bike</v-btn>
      </v-row>

      <v-row>
        <v-card class="mx-auto my-3" outlined v-for="bike in bikes" :key="bike.bikeId">
          <v-row wrap>
            <v-col sm="12" md="5" class="pl-5">
              <v-list-item-avatar tile image height="200" width="300" color="grey">
                <v-img :src="bike.bikeImageLink"></v-img>
              </v-list-item-avatar>
            </v-col>
            <v-col sm="12" md="7">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-4">{{bike.bikeName}}</v-list-item-title>
                  <v-card-text class="grey--text">{{bike.bikeDescription}}</v-card-text>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text class="red--text" @click="deleteBike(bike.bikeId)">DELETE</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import http from "../../../http-common";

export default {
  layout: "admin",
  computed: {
    bikes() {
      return this.$store.getters["bikes/loadedBikes"];
    }
  },
  methods: {
    deleteBike(id) {
      this.$store.dispatch("bikes/deleteBike", id);
    }
  },
  created() {
    this.$store.dispatch("bikes/fetchBikes");
  }
};
</script>
