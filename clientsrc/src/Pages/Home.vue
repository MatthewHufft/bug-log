<template>
  <div class="home d-flex flex-column align-items-center">
    <div class="container-fluid bug-container mt-5">
      <div class="row" name="grid-header">
        <div class="col-3 pt-2">
          <p class="font-weight-bold">Title</p>
        </div>
        <div class="col-3 pt-2">
          <p class="font-weight-bold">Reported By</p>
        </div>
        <div class="col-3 p-2 d-flex justify-content-around">
          <p class="font-weight-bold">Status:</p>
          <button class="btn btn-sm custom-btn" @click="showAll">
            All
          </button>
          <button class="btn btn-sm custom-btn" @click="showOpenBugs">
            Open
          </button>
          <button class="btn btn-sm custom-btn" @click="showClosedBugs">
            Closed
          </button>
        </div>
        <div class="col-3 pt-2">
          <p class="font-weight-bold">Last Modified</p>
        </div>
      </div>
      <div v-if="this.sortOpen">
        <bug-comp v-for="bug in openBugs" :key="bug.id" :bugProp="bug" />
      </div>
      <div v-if="this.sortClosed">
        <bug-comp v-for="bug in closedBugs" :key="bug.id" :bugProp="bug" />
      </div>
      <div class="row ">
        <button
          class="btn btn-info m-3 "
          data-toggle="modal"
          data-target="#newBugModal"
        >
          Report Bug
        </button>
      </div>
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
      sortOpen: true,
      sortClosed: true,
    };
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    activeBug() {
      return this.$store.state.activeBug;
    },
    openBugs() {
      return this.$store.state.bugs.filter((b) => !b.closed);
    },
    closedBugs() {
      return this.$store.state.bugs.filter((b) => b.closed);
    },
  },
  props: [""],
  components: { BugComp },
  methods: {
    addBug() {
      this.$store.dispatch("addBug", this.newBug);
      this.newBug = { title: "", description: "" };
    },
    showOpenBugs() {
      this.sortOpen = true;
      this.sortClosed = false;
    },
    showClosedBugs() {
      this.sortClosed = true;
      this.sortOpen = false;
    },
    showAll() {
      this.sortClosed = true;
      this.sortOpen = true;
    },
  },
};
</script>

<style>
.bug-container {
  width: 80%;
  background-color: #f5f5f5;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 20px 0 rgba(231, 231, 231, 0.486);
  border-radius: 25px;
}
.custom-btn {
  box-shadow: 3px 3px 10px #bdbdbd, -6px -6px 13px #ffffff;
  background-color: #bdbdbd28;
  border-radius: 30px;
  width: 70px;
}
.bg-trans {
  background-color: rgba(0, 0, 0, 0);
}
</style>
