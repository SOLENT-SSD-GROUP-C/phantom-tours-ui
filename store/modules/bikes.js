import http from "../../http-common";

export default {
  namespaced: true,
  state: {
    loadedBikes: []
  },
  mutations: {
    INIT_BIKES: (state, bikes) => (state.loadedBikes = bikes),
    ADD_BIKE: (state, payload)=> {
      state.loadedBikes.push(payload);
    },
    REMOVE_BIKE: (state, bikeId) =>
      (state.loadedBikes = state.loadedBikes.filter(
        bike => bike.bikeId !== bikeId
      ))
  },
  actions: {
    async fetchBikes({ commit }) {
      await http
        .get("/bikes")
        .then(response => {
          commit("INIT_BIKES", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async createBike({ commit }, payload) {
      const bike = {
        bikeName: payload.bikeName,
        bikeDescription: payload.bikeDescription,
        bikeImageLink: payload.bikeImageLink
      };

      await http
        .post("/bikes", bike)
        .then(response => {
          commit("ADD_BIKE", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async deleteBike({ commit }, bikeId) {
      await http.delete(`/bikes/${bikeId}`);
      commit("REMOVE_BIKE", bikeId);
    }
  },
  getters: {
    loadedBikes(state) {
      return state.loadedBikes;
    },

    loadedBike(state) {
      return bikeId => {
        return state.loadedBikes.find(bike => {
          return bike.bikeId === bikeId;
        });
      };
    }
  }
};
