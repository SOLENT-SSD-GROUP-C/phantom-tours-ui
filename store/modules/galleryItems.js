import http from "../../http-common";

export default {
  namespaced: true,
  state: {
    loadedGalleryItems: []
  },
  mutations: {
    INIT_GALLERY_ITEMS: (state, galleryItems) =>
      (state.loadedGalleryItems = galleryItems),
    ADD_GALLERY_ITEM: (state, payload) => {
      state.loadedGalleryItems.push(payload);
    },
    REMOVE_GALLERY_ITEM: (state, galleryItemId) =>
      (state.loadedGalleryItems = state.loadedGalleryItems.filter(
        galleryItem => galleryItem.galleryItemId !== galleryItemId
      ))
  },
  actions: {
    async fetchGalleryItems({ commit }) {
      await http
        .get("/galleryItems")
        .then(response => {
          commit("INIT_GALLERY_ITEMS", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async createGalleryItem({ commit }, payload) {
      const galleryItem = {
        galleryImageLink: payload.galleryImageLink
      };

      await http
        .post("/galleryItems", galleryItem)
        .then(response => {
          commit("ADD_GALLERY_ITEM", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async deleteGalleryItem({ commit }, galleryItemId) {
      await http.delete(`/galleryItems/${galleryItemId}`);
      commit("REMOVE_GALLERY_ITEM", galleryItemId);
    }
  },
  getters: {
    loadedGalleryItems(state) {
      return state.loadedGalleryItems;
    }
  }
};
