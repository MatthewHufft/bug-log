import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activeBug: {},
    notes: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs;
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    },
    setNotes(state, notes) {
      state.notes = notes;
    },
    addBug(state, bug) {
      state.bugs.push(bug);
    },
    addNote(state, notes) {
      state.notes = notes;
    },
    deleteNote(state, note) {
      state.notes = state.notes.filter((n) => n.id != note);
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBugs({ commit }) {
      try {
        let res = await api.get("bugs");
        commit("setBugs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getActiveBug({ commit }, bugId) {
      try {
        let res = await api.get("bugs/" + bugId);
        if (!res.data.closed) {
          res.data.closed = "Open";
        } else {
          res.data.closed = "Closed";
        }
        commit("setActiveBug", res.data);
        this.dispatch("getNotes", bugId);
      } catch (error) {
        console.error(error);
      }
    },
    async getNotes({ commit }, bugId) {
      try {
        let res = await api.get("bugs/" + bugId + "/notes");
        commit("setNotes", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addBug({ commit }, newBug) {
      try {
        let res = await api.post("bugs", newBug);
        commit("addBug", res.data);
        // @ts-ignore
        $(".modal-backdrop").hide();
        router.push({ name: "bug-details", params: { bugId: res.data.id } });
      } catch (error) {
        console.error(error);
      }
    },
    async addNote({ commit, state }, newNote) {
      try {
        let res = await api.post("notes", newNote);
        commit("addNote", [...state.notes, res.data]);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteNote({ commit }, noteId) {
      try {
        await api.delete("notes/" + noteId);
        commit("deleteNote", noteId);
      } catch (error) {
        console.error(error);
      }
    },
    async closeBug({ commit }, bugId) {
      try {
        await api.delete("bugs/" + bugId);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
