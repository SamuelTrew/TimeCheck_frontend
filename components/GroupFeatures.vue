<template>
  <section class="features">
    <div class="group-feature">
      <nuxt-link to="/calendar">
        <b-icon icon="calendar" type="is-light" size="is-medium"></b-icon>
      </nuxt-link>
    </div>
    <div class="group-feature">
      <nuxt-link :to="`/group/${group.id}/polls`">
        <b-icon icon="poll" type="is-light" size="is-medium"></b-icon>
      </nuxt-link>
    </div>
      <div class="group-feature">
        <nuxt-link to="/alarm">
          <b-icon icon="clock" type="is-light" size="is-medium" ></b-icon>
        </nuxt-link>
      </div>
      <div class="group-feature">
        <nuxt-link to="/maps">
          <b-icon icon="map-marker" type="is-light" size="is-medium"></b-icon>
        </nuxt-link>
      </div>
      <div class="group-feature">
        <nuxt-link to="/docs">
          <b-icon icon="file-document" type="is-light" size="is-medium"></b-icon>
        </nuxt-link>
      </div>
    <!-- TODO pass group from sidebar -->
      <div class="group-feature">
        <nuxt-link :to="`/group/${group.id}/settings`">
          <b-icon icon="settings" type="is-light" size="is-medium"></b-icon>
        </nuxt-link>
      </div>
      <div class="group-feature">
        <nuxt-link :to="`/group/${group.id}/invite`">
          <b-icon icon="account-multiple-plus" type="is-light" size="is-medium"></b-icon>
        </nuxt-link>
      </div>
  </section>
</template>

<script>
  export default {
    name: "GroupFeatures",
    props: {
      group: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .features {
    display: flex;
    flex-direction: column;
  }

  .group-feature{
    margin-bottom: 1rem;
    padding: 0.5rem;
    /*can change this based on user feedback*/
  }
</style>
