import http from "../../http-common";

export default {
  namespaced: true,
  state: {
    loadedAdmins: []
  },

  mutations: {
    INIT_ADMINS: (state, admins) => (state.loadedAdmins = admins),
    ADD_ADMIN: (state, payload) => {
      state.loadedAdmins.push(payload);
    },
    REMOVE_ADMIN: (state, id) =>
      (state.loadedAdmins = state.loadedAdmins.filter(admin => admin.id !== id))
  },

  actions: {
    async fetchAdmins({ commit }) {
      const response = await http.get("/users");
      commit("INIT_ADMINS", response.data);
    },
    async createAdmin({ commit }, payload) {
      const user = {
        userName: payload.userName,
        userEmail: payload.userEmail,
        userPassword: payload.userPassword,
        userRole: payload.userRole
      };

      const response = await http.post("/users", user);
      commit("ADD_ADMIN", response.data);
    },
    async deleteAdmin({ commit }, id) {
      await http.delete(`/users/${id}`);
      commit("REMOVE_ADMIN", id);
    }
  },
  getters: {
    loadedAdmins(state) {
      return state.loadedAdmins;
    }
  }
};
