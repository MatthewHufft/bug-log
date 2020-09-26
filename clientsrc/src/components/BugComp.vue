<template>
  <div class="row">
    <div class="col-3 border">
      <p>{{ bugProp.title }}</p>
    </div>
    <div class="col-3 border">
      <p>{{ bugProp.creatorEmail }}</p>
    </div>
    <div class="col-3 border">
      <p>{{ bugProp.closed }}</p>
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