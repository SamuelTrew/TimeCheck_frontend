<template>
    <section class="features">
      <div class="sidebar-item group-feature">
        <nuxt-link to="/calendar">
          <b-icon icon="calendar" type="is-light" size="is-medium"></b-icon>
        </nuxt-link>
      </div>
      <div class="sidebar-item group-feature">
        <nuxt-link to="/polls">
          <b-icon icon="poll" type="is-light" size="is-medium"></b-icon>
        </nuxt-link>
      </div>
        <div class="sidebar-item group-feature">
          <nuxt-link to="/alarm">
            <b-icon icon="clock" type="is-light" size="is-medium" ></b-icon>
          </nuxt-link>
        </div>
        <div class="sidebar-item group-feature">
          <nuxt-link to="/maps">
            <b-icon icon="map-marker" type="is-light" size="is-medium"></b-icon>
          </nuxt-link>
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

  .features {
    width: 7rem;
    display: flex;
    flex-direction: column;
  }

  .group-feature{
    margin: 0.8rem;
    border-radius: 20%;
    background-color: darkmagenta;
    /*can change this based on user feedback*/
  }

</style>
