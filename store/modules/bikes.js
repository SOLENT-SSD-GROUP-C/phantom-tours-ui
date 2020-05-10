import axios from "axios";

export const state = () => ({
  loadedBikes: [
    {
      id: "1",
      name: "Pulsar",
      year: 2020
    },
    {
      id: "2",
      name: "Discover",
      year: 2018
    }
  ]
});

export const mutations = {
  INIT_BIKES: (state, bikes) => (state.loadedBikes = bikes),

  ADD_BIKE: (state, bike) => state.loadedBikes.push(bike),

  REMOVE_BIKE: (state, id) =>
    (state.loadedBikes = state.loadedBikes.filter(bike => bike.id !== id)),

  UPDATE_NOTE: (state, updates) => {
    const index = state.loadedBikes.findIndex(bike => bike.id === updates.id);

    if (index !== -1) {
      state.loadedBikes.splice(index, 1, updates);
    }
  }
};

export const actions = {
  async fetchBikes({ commit }) {
    //  Fetch from Database
    commit("INIT_BIKES", response.data);
  }
};

export const getters = () => {};

export default { state, mutations, actions, getters };
