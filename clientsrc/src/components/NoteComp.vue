<template>
  <div class="row " name="grid-header">
    <div class="col-4">
      <p>{{ noteProp.creatorEmail }}</p>
    </div>
    <div class="col-4">
      <p>{{ noteProp.content }}</p>
    </div>
    <div class="col-4">
      <button
        v-if="!this.activeBug.closed"
        class="btn btn-danger my-1"
        @click="deleteNote"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {},
  data() {
    return {};
  },
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    },
  },
  props: ["noteProp"],
  components: {},
  methods: {
    deleteNote() {
      this.$store.dispatch("deleteNote", this.noteProp.id);
    },
  },
};
</script>

<style></style>
