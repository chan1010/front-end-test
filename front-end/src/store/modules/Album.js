import { getListAlbum, getListAlbumDetail } from "../../services/Album";

const state = () => ({
  listAlbum: [],
  detailAlbum: {},
  isLoading: false,
});
// getters
const getters = {
  listAlbum: (state) => state.listAlbum,
  detailAlbum: (state) => state.detailAlbum,
  isLoading: (state) => state.isLoading,
};

// mutations
const mutations = {
  setListAlbum: (state, listAlbum) => {
    state.listAlbum = listAlbum
  },
  setMoreListAlbum: (state, listAlbum) => {
    state.listAlbum.push(...listAlbum)
  },
  setDetailAlbum: (state, detailAlbum) => {
    state.detailAlbum = detailAlbum;
  },
  setIsMarked: (state, id) => {
    const el = state.listAlbum.find(x => x.id == id)
    el.isMark = !el.isMark;
  },
  setHeartMediaInAlbum: (state, id) => {
    const el = [...state.detailAlbum.photos].find(x => x.id == id)
    el.isHeart = !el.isHeart;
  },
  updateMediaDetailAlbum: (state, newMedia) => {
    state.detailAlbum.photos.unshift(newMedia);
  },
  updateAlbum: (state, newAlbum) => {
    state.listAlbum.unshift(newAlbum);
  },
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
};
// actions
const actions = {
  async fetchAllAlbums({ commit }, param) {
    commit("setListAlbum", await getListAlbum(param.page, param.size));
    commit('setIsLoading',true);
  },
  async loadmoreAlbums({ commit }, param) {
    commit("setMoreListAlbum", await getListAlbum(param.page, param.size));
  },
  async fetchDetailAlbums({ commit }, id) {
    commit("setDetailAlbum", await getListAlbumDetail(id));
    commit('setIsLoading',true);
  },
  updateMark({ commit }, id) {
    commit('setIsMarked', id);
  },
  updateHeartMediaInAlbum({ commit }, id) {
    commit('setHeartMediaInAlbum', id);
  },
  addMediaDetailAlbum({ commit }, payload) {
    commit('updateMediaDetailAlbum', payload);
  },
  addAlbum({ commit }, payload) {
    commit('updateAlbum', payload);
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
