<template>
    <section class="section features">
        <div class="sidebar-item group-feature">
          <b-icon icon="clock" type="is-light" size="is-medium" ></b-icon>
        </div>
        <div class="sidebar-item group-feature">
          <b-icon icon="poll" type="is-light" size="is-medium"></b-icon>
        </div>
        <div class="sidebar-item group-feature">
          <b-icon icon="map-marker" type="is-light" size="is-medium"></b-icon>
        </div>
        <div class="sidebar-item group-feature">
          <b-icon icon="calendar" type="is-light" size="is-medium"></b-icon>
        </div>
        <div class="sidebar-item group-feature">
          <b-icon icon="file-document" type="is-light" size="is-medium"></b-icon>
        </div>
    </section>
</template>

<script>
    export default {
        name: "GroupFeatures"
    }
</script>

<style scoped>

  .group-feature{
    border-radius: 20%;
    background-color: darkmagenta;
    /*can change this based on user feedback*/
  }

</style>
