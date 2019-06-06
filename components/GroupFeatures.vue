<template>
  <section class="features">
    <nuxt-link class="group-feature" :to="`/group/${group.id}/calendar`">
      <b-icon icon="calendar" class="group-feature-icon" type="is-light" size="is-small-medium"></b-icon>
      Calendar
    </nuxt-link>

    <nuxt-link class="group-feature" :to="`/group/${group.id}/polls`">
      <b-icon icon="poll" class="group-feature-icon" type="is-light" size="is-small-medium"></b-icon>
      Polls
    </nuxt-link>

    <nuxt-link class="group-feature bottom-items" :to="`/group/${group.id}/alarm`">
      <b-icon icon="clock" class="group-feature-icon" type="is-light" size="is-small-medium"></b-icon>
      Reminders
    </nuxt-link>

    <!--
    <nuxt-link class="group-feature" to="/maps">
      <b-icon icon="map-marker" class="group-feature-icon" type="is-light" size="is-small-medium"></b-icon>
      Maps
    </nuxt-link>

    <nuxt-link class="group-feature" to="/docs">
      <b-icon icon="file-document" class="group-feature-icon" type="is-light" size="is-small-medium"></b-icon>
      Docs
    </nuxt-link>
    -->

    <nuxt-link class="group-feature settings" :to="`/group/${group.id}/settings`">
      <b-icon icon="settings" class="group-feature-icon" type="is-light" size="is-small-medium"></b-icon>
      Settings
    </nuxt-link>

    <nuxt-link class="group-feature invite" :to="`/group/${group.id}/invite`">
      <b-icon icon="account-multiple-plus" class="group-feature-icon" type="is-light" size="is-small-medium"></b-icon>
      Invite
    </nuxt-link>
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
  .group-feature-icon {
    margin-right: 0.5rem
  }
  .group-feature{
    margin-bottom: 1rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: white;
    /*can change this based on user feedback*/
  }
  .group-feature:hover {
    color: #ffffff;
  }
  .settings {
    margin-top: auto;
  }
  .invite {
    margin-bottom: 0rem;
  }
</style>
