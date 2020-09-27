<template>
  <div class="home d-flex flex-column align-items-center">
    <div class="row d-flex justify-content-center">
      <h1>Current Bugs</h1>
    </div>

    <div class="container-fluid bug-container bg-light border">
      <div class="row" name="grid-header">
        <div class="col-3 border">
          <p>Title</p>
        </div>
        <div class="col-3 border">
          <p>Reported By</p>
        </div>
        <div class="col-3 border">
          <p>Status</p>
        </div>
        <div class="col-3 border">
          <p>Last Modified</p>
        </div>
      </div>
      <bug-comp v-for="bug in bugs" :key="bug.id" :bugProp="bug" />
      <button
        class="btn btn-info"
        data-toggle="modal"
        data-target="#newBugModal"
      >
        Report Bug
      </button>
      <!-- REPORT BUG MODAL FORM -->
      <div
        class="modal fade"
        id="newBugModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content text-light">
            <div class="modal-header bg-primary">
              <h5 class="modal-title text-light" id="exampleModalLabel">
                Report a New Bug
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="addBug">
              <input
                class="form-control w-75 my-2 ml-5"
                type="text"
                placeholder="Bug Title ... "
                v-model="newBug.title"
                required
              />
              <input
                class="form-control w-75 my-2 ml-5"
                type="text"
                placeholder="Brief description of bug"
                v-model="newBug.description"
              />
              <div class="modal-footer justify-content-center">
                <button type="submit" class="btn btn-danger">Report Bug</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BugComp from "../components/BugComp";
export default {
  name: "home",
  mounted() {},
  data() {
    return {
      newBug: {
        title: "",
        description: "",
      },
    };
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    activeBug() {
      return this.$store.state.activeBug;
    },
  },
  props: [""],
  components: { BugComp },
  methods: {
    addBug() {
      this.$store.dispatch("addBug", this.newBug);
      this.newBug = { title: "", description: "" };
    },
  },
};
</script>

<style>
.bug-container {
  width: 80%;
}
</style>
