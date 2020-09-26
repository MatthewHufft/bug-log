<template>
  <div class="home d-flex flex-column align-items-center">
    <div class="row d-flex justify-content-center">
      <h1>Current Bugs</h1>
    </div>

    <div class="bug-container bg-light border">
      <div class="row">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style>
.bug-container {
  width: 80%;
}
</style>
