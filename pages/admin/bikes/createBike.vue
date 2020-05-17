<template>
  <v-app class="ma-5">
    <h1 class="display-1 font-weight-light">Create a bike</h1>

    <v-row wrap>
      <v-col sm="12" md="8">
        <v-form ref="form" @submit.prevent="onCreateBike">
          <v-text-field v-model="bikeName" label="Bike Name" required clearable></v-text-field>
          <v-text-field v-model="bikeDescription" label="Description" required clearable></v-text-field>
          <v-text-field v-model="bikeImageLink" label="Image URL"></v-text-field>
          <v-img
            :src="bikeImageLink"
            height="150"
            width="300"
            alt="Image Preview"
            v-show="bikeImageLink"
          ></v-img>
          <v-btn class="primary mt-3" :disabled="!formIsValid" type="submit">Create Bike</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      bikeName: "",
      bikeDescription: "",
      bikeImageLink: ""
    };
  },
  computed: {
    formIsValid() {
      return (
        this.bikeName !== "" &&
        this.bikeImageLink !== "" &&
        this.bikeDescription !== ""
      );
    }
  },
  methods: {
    onCreateBike() {
      if (!this.formIsValid) {
        return;
      }
      const bikeData = {
        bikeName: this.bikeName,
        bikeDescription: this.bikeDescription,
        bikeImageLink: this.bikeImageLink
      };
      this.$store.dispatch("bikes/createBike", bikeData);
      this.$router.push("/admin/bikes");
    }
  }
};
</script>
