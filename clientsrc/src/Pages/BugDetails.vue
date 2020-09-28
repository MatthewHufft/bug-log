<template>
  <div class="home d-flex flex-column">
    <div class="row">
      <div class="col-5 offset-1">
        <h1>
          {{ activeBug.title }}
          <span
            v-if="!activeBug.closed"
            data-toggle="modal"
            data-target="#editBugModal"
            ><i
              class="fa fa-pencil text-warning drop-shadow text-small"
              aria-hidden="true"
            ></i
          ></span>
        </h1>
        <h5>{{ activeBug.creatorEmail }}</h5>
      </div>
      <div class="col-5 d-flex justify-content-end align-items-end">
        <div class="div" v-if="!activeBug.closed">
          <h4>Status: <span class="text-success">Open</span></h4>
          <button class="btn btn-danger" @click="closeBug">Close Bug</button>
        </div>
        <div class="div" v-if="activeBug.closed">
          <h4>Status: <span class="text-danger">Closed</span></h4>
        </div>
      </div>
      <!-- SECTION Edit Bug Modal -->
      <div
        class="modal fade"
        id="editBugModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content text-light">
            <div class="modal-header bg-primary">
              <h5 class="modal-title text-light" id="exampleModalLabel">
                Edit Bug Content
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
            <form @submit.prevent="editBug">
              <input
                class="form-control w-75 my-2 ml-5"
                type="text"
                placeholder="Bug Title ... "
                v-model="bugData.title"
                required
              />
              <input
                class="form-control w-75 my-2 ml-5"
                type="text"
                placeholder="Bug description"
                v-model="bugData.description"
              />
              <div class="modal-footer justify-content-center">
                <button type="submit" class="btn btn-danger">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-10 offset-1 border bug-desc bg-white">
        <h3>Description of issue:</h3>
        <p>{{ activeBug.description }}</p>
      </div>
    </div>
    <!-- NOTES SECTION  -->
    <div class="row mt-5">
      <div class="container-fluid note-container bg-white border">
        <div class="row" name="grid-header">
          <div class="col-4 border">
            <p>Name</p>
          </div>
          <div class="col-4 border">
            <p>Action Taken</p>
          </div>
          <div class="col-4 border">
            <p>Delete</p>
          </div>
        </div>
        <note-comp v-for="note in notes" :key="note.id" :noteProp="note" />
        <div v-if="!this.activeBug.closed" class="row">
          <div class="col-12">
            <form class="form-inline" @submit.prevent="addNote">
              <button class="btn btn-success my-1" type="submit">
                Add Note
              </button>
              <input
                class="form-control w-50"
                type="text"
                placeholder="description of action taken..."
                v-model="newNote.content"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteComp from "../components/NoteComp";
export default {
  name: "bug-details",
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.bugId);
  },
  data() {
    return {
      newNote: {
        content: "",
        bug: this.$route.params.bugId,
      },
      bugData: {
        title: "",
        description: "",
        id: this.$route.params.bugId,
      },
    };
  },
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    },
  },
  props: [""],
  components: { NoteComp },
  methods: {
    addNote() {
      this.$store.dispatch("addNote", this.newNote);
      this.newNote = { content: "", bug: this.$route.params.bugId };
    },
    closeBug() {
      this.$store.dispatch("closeBug", this.newNote.bug);
    },
    editBug() {
      this.$store.dispatch("editBug", this.bugData);
    },
  },
};
</script>

<style>
.bug-desc {
  min-height: 20vh;
}

.note-container {
  width: 83%;
}
.text-small {
  font-size: 0.6em;
}

.drop-shadow {
  transition: 150ms;
}
.drop-shadow:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
