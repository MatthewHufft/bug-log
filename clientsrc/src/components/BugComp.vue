<template>
  <div class="row">
    <div class="col-3 border d-flex justify-content-between">
      <p>{{ bugProp.title }}</p>
      <router-link :to="{ name: 'bug-details', params: { bugId: bugProp.id } }">
        <button class="btn btn-primary btn-sm my-1">View Details</button>
      </router-link>
    </div>
    <div class="col-3 border">
      <p>{{ bugProp.creatorEmail }}</p>
    </div>
    <div class="col-3 border">
      <p class="text-danger" v-if="bugProp.closed">Closed</p>
      <p class="text-success" v-if="!bugProp.closed">Open</p>
    </div>
    <div class="col-3 border">
      <p>{{ bugProp.updatedAt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "bug-comp",
  mounted() {},
  computed: {},
  props: ["bugProp"],
  components: {},
  methods: {},
};
</script>

<style>
</style>