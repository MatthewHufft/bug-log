<template>
  <div class="row py-2">
    <div class="col-3 border-bottom ">
      <p>{{ bugProp.title }}</p>
    </div>
    <div class="col-3 border-bottom">
      <p>{{ bugProp.creatorEmail }}</p>
    </div>
    <div class="col-3 border-bottom">
      <p class="text-danger" v-if="bugProp.closed">Closed</p>
      <p class="text-success" v-if="!bugProp.closed">Open</p>
    </div>
    <div class="col-3 border-bottom d-flex justify-content-between p-2">
      <p>{{ bugProp.updatedAt | formatDate }}</p>
      <router-link :to="{ name: 'bug-details', params: { bugId: bugProp.id } }">
        <button class="btn custom-btn mr-1">View</button>
      </router-link>
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
.custom-btn {
  box-shadow: 5px 5px 13px #bdbdbd, -6px -6px 13px #ffffff;
  background-color: #bdbdbd28;
  border-radius: 30px;
}
.custom-btn:active {
  box-shadow: inset 8px 8px 16px #bdbdbd, inset -8px -8px 16px #ffffff;
}
</style>
