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
      <div v-if="group" class="sidebar-item group-feature">
        <nuxt-link :to="`/group/${group.id}/settings`">
          <b-icon icon="settings" type="is-light" size="is-medium"></b-icon>
        </nuxt-link>
      </div>
      <div v-if="group" class="sidebar-item group-feature">
        <nuxt-link :to="`/group/${group.id}/invite`">
          <b-icon icon="account-multiple-plus" type="is-light" size="is-medium"></b-icon>
        </nuxt-link>
      </div>
  </section>
</template>

<script>
  export default {
    name: "GroupFeatures",
    props: ['group']
  }
</script>

<style>
  .features {
    width: 7rem;
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  .group-feature{
    margin: 0.8rem;
    border-radius: 20%;
    background-color: darkmagenta;
    /*can change this based on user feedback*/
  }
</style>
