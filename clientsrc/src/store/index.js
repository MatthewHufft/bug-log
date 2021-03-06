import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import ns from "../services/NotificationService.js";
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
    closeBug(state) {
      state.activeBug.closed = "Closed";
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
        if (
          await ns.confirmAction(
            "Are you sure you want to delete this note?",
            "You will not be able to recover it"
          )
        ) {
          await api.delete("notes/" + noteId);
          commit("deleteNote", noteId);
          ns.success("Note deleted");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async closeBug({ commit }, bugId) {
      try {
        if (
          await ns.confirmAction(
            "Are you sure you want to close this bug?",
            "You will not be able to undo this action."
          )
        ) {
          await api.delete("bugs/" + bugId);
          commit("closeBug");
          ns.success("Bug closed successfully");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async editBug({ commit }, bugData) {
      try {
        let res = await api.put("bugs/" + bugData.id, bugData);
        commit("setActiveBug", res.data);
        // @ts-ignore
        $("#editBugModal").hide();
        // @ts-ignore
        $(".modal-backdrop").hide();
      } catch (error) {
        console.error(error);
      }
    },
  },
});
