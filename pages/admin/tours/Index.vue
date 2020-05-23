<template>
  <v-app>
    <v-container>
      <v-row align="end" class="my-2">
        <h1 class="display-1 font-weight-light">Manage Tours</h1>
        <v-spacer></v-spacer>
        <v-btn text class="primary" @click="addDialog = true">Add Tour</v-btn>
      </v-row>

      <!-- CREATE TOUR DIALOG FORM -->
      <v-row justify="center">
        <v-dialog v-model="addDialog" persistent max-width="600px">
          <v-card>
            <v-card-title>Create a Tour</v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form" @submit.prevent="onCreateTour">
                  <v-text-field v-model="tourTitle" label="Title" required></v-text-field>
                  <v-textarea
                    v-model="tourDescription"
                    name="tourDescription"
                    label="Description"
                    counter="2500"
                  ></v-textarea>
                  <v-text-field
                    v-model="tourLocationImageLink"
                    label="Location Image Link"
                    required
                    counter="250"
                  ></v-text-field>
                  <v-text-field v-model="tourDays" label="Days" required></v-text-field>
                  <v-text-field v-model="tourDistance" label="Distance" required></v-text-field>
                  <v-text-field v-model="tourPrice" label="Price" required></v-text-field>
                  <v-text-field v-model="tourGroupSize" label="Group Size" required></v-text-field>
                  <v-text-field v-model="tourTerrain" label="Terrain" required></v-text-field>
                  <v-text-field v-model="tourStartingPoint" label="Starting Point" required></v-text-field>
                  <v-text-field v-model="tourEndingPoint" label="Ending Point" required></v-text-field>
                  <v-switch v-model="tourAvailability" label="Availability" inset></v-switch>
                  <v-text-field
                    v-model="tourRouteMapLink"
                    label="Route Map Link"
                    required
                    counter="250"
                  ></v-text-field>

                  <v-btn class="primary mt-3" type="submit">Create</v-btn>
                  <v-btn class="red mt-3" dark @click="cancelForm">Cancel</v-btn>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>

      <!-- EDIT TOUR FORM -->
      <v-row justify="center">
        <v-dialog v-model="editDialog" persistent max-width="600px">
          <v-card>
            <v-card-title>Edit tour</v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form" @submit.prevent="onUpdateTour(editedTourId)">
                  <v-text-field v-model="editedTourTitle" label="Title" required></v-text-field>
                  <v-textarea
                    v-model="editedTourDescription"
                    name="tourDescription"
                    label="Description"
                    counter="2500"
                  ></v-textarea>
                  <v-text-field
                    v-model="editedTourLocationImageLink"
                    label="Location Image Link"
                    required
                    counter="250"
                  ></v-text-field>
                  <v-text-field v-model="editedTourDays" label="Days" required></v-text-field>
                  <v-text-field v-model="editedTourDistance" label="Distance" required></v-text-field>
                  <v-text-field v-model="editedTourPrice" label="Price" required></v-text-field>
                  <v-text-field v-model="editedTourGroupSize" label="Group Size" required></v-text-field>
                  <v-text-field v-model="editedTourTerrain" label="Terrain" required></v-text-field>
                  <v-text-field v-model="editedTourStartingPoint" label="Starting Point" required></v-text-field>
                  <v-text-field v-model="editedTourEndingPoint" label="Ending Point" required></v-text-field>
                  <v-switch v-model="editedTourAvailability" label="Availability" inset></v-switch>
                  <v-text-field
                    v-model="editedTourRouteMapLink"
                    label="Route Map Link"
                    required
                    counter="250"
                  ></v-text-field>

                  <v-btn class="primary mt-3" type="submit">Save</v-btn>
                  <v-btn class="red mt-3" dark @click="cancelForm">Cancel</v-btn>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>

      <!-- DISPLAY TOURS -->
      <v-row>
        <div v-if="tours.length > 0">
          <v-col cols="12" sm="6" v-for="tour in tours" :key="tour.tourId">
            <v-card>
              <v-img class="white--text align-end" height="200px" :src="tour.tourLocationImageLink">
                <v-card-title>{{tour.tourTitle}}</v-card-title>
              </v-img>

              <v-card-subtitle
                style="height:100px; overflow:hidden;"
                class="pb-0"
              >{{tour.tourDescription}}</v-card-subtitle>

              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn color="primary" text @click="editDialog = true">Edit</v-btn> -->
                <v-btn color="primary" text @click="handleEditTourButton(tour)">Edit</v-btn>
                <v-btn color="red" text @click="onDeleteTour(tour.tourId)">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "admin",
  data: () => ({
    overlay: false,
    addDialog: false,
    editDialog: false,

    tourTitle: "",
    tourDescription: "",
    tourLocationImageLink: "",
    tourDays: "",
    tourDistance: "",
    tourPrice: "",
    tourGroupSize: "",
    tourTerrain: "",
    tourStartingPoint: "",
    tourEndingPoint: "",
    tourAvailability: true,
    tourRouteMapLink: "",

    editedTourId: "",
    editedTourTitle: "",
    editedTourDescription: "",
    editedTourLocationImageLink: "",
    editedTourDays: "",
    editedTourDistance: "",
    editedTourPrice: "",
    editedTourGroupSize: "",
    editedTourTerrain: "",
    editedTourStartingPoint: "",
    editedTourEndingPoint: "",
    editedTourAvailability: "",
    editedTourRouteMapLink: ""
  }),

  computed: {
    tours() {
      return this.$store.getters["tours/loadedTours"];
    },

    formIsValid() {
      // return
    }
  },
  methods: {
    cancelForm() {
      this.$refs.form.reset();
      this.addDialog = false;
      this.editDialog = false;
    },
    handleEditTourButton(tour) {
      this.editedTourId = tour.tourId;
      this.editedTourTitle = tour.tourTitle;
      this.editedTourDescription = tour.tourDescription;
      this.editedTourLocationImageLink = tour.tourLocationImageLink;
      this.editedTourDays = tour.tourDays;
      this.editedTourDistance = tour.tourDistance;
      this.editedTourPrice = tour.tourPrice;
      this.editedTourGroupSize = tour.tourGroupSize;
      this.editedTourTerrain = tour.tourTerrain;
      this.editedTourStartingPoint = tour.tourStartingPoint;
      this.editedTourEndingPoint = tour.tourEndingPoint;
      this.editedTourAvailability = tour.tourAvailability;
      this.editedTourRouteMapLink = tour.tourRouteMapLink;
      this.editDialog = true;
    },
    onCreateTour() {
      // if (!this.formIsValid) {
      //   return;
      // }
      const tourData = {
        tourId: this.tourId,
        tourTitle: this.tourTitle,
        tourDescription: this.tourDescription,
        tourLocationImageLink: this.tourLocationImageLink,
        tourDays: this.tourDays,
        tourDistance: this.tourDistance,
        tourPrice: this.tourPrice,
        tourGroupSize: this.tourGroupSize,
        tourTerrain: this.tourTerrain,
        tourStartingPoint: this.tourStartingPoint,
        tourEndingPoint: this.tourEndingPoint,
        tourAvailability: this.tourAvailability,
        tourRouteMapLink: this.tourRouteMapLink
      };

      this.$store.dispatch("tours/createTour", tourData);
      this.$refs.form.reset();
      this.dialog = false;

      this.$router.push("/admin/tours");
    },
    onUpdateTour(tourId) {
      const payload = {
        tourId: this.editedTourId,
        tourTitle: this.editedTourTitle,
        tourDescription: this.editedTourDescription,
        tourLocationImageLink: this.editedTourLocationImageLink,
        tourDays: this.editedTourDays,
        tourDistance: this.editedTourDistance,
        tourPrice: this.editedTourPrice,
        tourGroupSize: this.editedTourGroupSize,
        tourTerrain: this.editedTourTerrain,
        tourStartingPoint: this.editedTourStartingPoint,
        tourEndingPoint: this.editedTourEndingPoint,
        tourAvailability: this.editedTourAvailability,
        tourRouteMapLink: this.editedTourRouteMapLink
      };

      const data = { tourId, payload };
      this.$store.dispatch("tours/updateTour", data);
      this.$refs.form.reset();
      this.editDialog = false;
      this.$router.push("/admin/tours");
    },
    onDeleteTour(id) {
      this.$store.dispatch("tours/deleteTour", id);
    }
  },
  created() {
    this.$store.dispatch("tours/fetchTours");
  }
};
</script>
