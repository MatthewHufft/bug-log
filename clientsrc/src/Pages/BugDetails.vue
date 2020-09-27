<template>
  <div class="home d-flex flex-column">
    <div class="row">
      <div class="col-5 offset-1">
        <h1>{{ activeBug.title }}</h1>
        <sub>{{ activeBug.creatorEmail }}</sub>
      </div>
      <div class="col-5 d-flex justify-content-end align-items-end">
        <h4>Status: {{ activeBug.closed }}</h4>
        <button class="btn btn-danger" @click="closeBug">Close Bug</button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-10 offset-1 border bug-desc">
        <h3>Description of issue:</h3>
        <p>{{ activeBug.description }}</p>
      </div>
    </div>
    <!-- NOTES SECTION  -->
    <div class="row mt-5">
      <div class="container-fluid note-container bg-light border">
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
        <div class="row">
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
</style>