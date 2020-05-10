import Vuex from "vuex";
import * as bikes from "./modules/bikes";
import * as tours from "./modules/tours";

new Vuex.Store({
  modules: {
    a: bikes,
    b: tours
  },
  state: {
    count: 2
  },
  mutations: {},
  getters: {},
  actions: {}
});
