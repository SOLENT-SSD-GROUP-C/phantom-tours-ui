import http from "../../http-common";

export default {
  namespaced: true,
  state: {
    loadedTours: []
  },
  mutations: {
    INIT_TOURS: (state, tours) => (state.loadedTours = tours),
    ADD_TOUR: (state, payload) => {
      state.loadedTours.push(payload);
    },
    UPDATE_TOUR: (state, payload) => {
      // const tour = state.loadedTours.find(tour => {
      //   return tour.tourId === payload.tourId;
      // });
      // if (tour) {
      //   tour = payload;
      // }

      const index = state.loadedTours.findIndex(
        tour => tour.tourId === payload.tourId
      );
      if (index !== -1) {
        state.loadedTours.splice(index, 1, payload);
      }
    },
    REMOVE_TOUR: (state, tourId) =>
      (state.loadedTours = state.loadedTours.filter(
        tour => tour.tourId !== tourId
      ))
  },
  actions: {
    async fetchTours({ commit }) {
      await http
        .get("/tours")
        .then(response => {
          commit("INIT_TOURS", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async createTour({ commit }, payload) {
      const tour = {
        tourTitle: payload.tourTitle,
        tourDescription: payload.tourDescription,
        tourLocationImageLink: payload.tourLocationImageLink,
        tourDays: payload.tourDays,
        tourDistance: payload.tourDistance,
        tourPrice: payload.tourPrice,
        tourGroupSize: payload.tourGroupSize,
        tourTerrain: payload.tourTerrain,
        tourStartingPoint: payload.tourStartingPoint,
        tourEndingPoint: payload.tourEndingPoint,
        tourAvailability: payload.tourAvailability,
        tourRouteMapLink: payload.tourRouteMapLink
      };

      const response = await http.post("/tours", tour);
      // .then(response => {
      //
      // })
      // .catch(error => {
      //   console.log(error);
      // });
      commit("ADD_TOUR", response.data);
    },
    async updateTour({ commit }, { tourId, payload }) {
      await http.put(`/tours/${tourId}`, payload);
      commit("UPDATE_TOUR", payload);
    },
    async deleteTour({ commit }, tourId) {
      await http.delete(`/tours/${tourId}`);
      commit("REMOVE_TOUR", tourId);
    }
  },
  getters: {
    loadedTours(state) {
      return state.loadedTours;
    },

    loadedTour(state) {
      return tourId => {
        return state.loadedTours.find(tour => {
          return tour.tourId === tourId;
        });
      };
    },
    selectedTour(state) {
      return tourId => {
        if (state.loadedTours.hasOwnProperty(tourId)) {
          return state.loadedTours[tourId].map(id => state.loadedTours[id]);
        }
      };
    }
  }
};
