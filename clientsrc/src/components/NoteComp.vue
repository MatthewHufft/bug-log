<template>
  <div class="row" name="grid-header">
    <div class="col-4 border">
      <p>{{ noteProp.creatorEmail }}</p>
    </div>
    <div class="col-4 border">
      <p>{{ noteProp.content }}</p>
    </div>
    <div class="col-4 border">
      <button class="btn btn-danger my-1" @click="deleteNote">Delete</button>
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
  computed: {},
  props: ["noteProp"],
  components: {},
  methods: {
    deleteNote() {
      this.$store.dispatch("deleteNote", this.noteProp.id);
    },
  },
};
</script>

<style>
</style>