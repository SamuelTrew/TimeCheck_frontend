<template>
  <section class="features">
    <nuxt-link :to="`/group/${group.id}/calendar`" class="group-feature" v-on:click.native="toggleSidebar">
      <b-icon class="group-feature-icon" icon="calendar" size="is-small-medium" type="is-light"></b-icon>
      Calendar
    </nuxt-link>

    <nuxt-link :to="`/group/${group.id}/polls`" class="group-feature" v-on:click.native="toggleSidebar">
      <b-icon class="group-feature-icon" icon="poll" size="is-small-medium" type="is-light"></b-icon>
      Polls
    </nuxt-link>

    <nuxt-link :to="`/group/${group.id}/alarm`" class="group-feature bottom-items" v-on:click.native="toggleSidebar">
      <b-icon class="group-feature-icon" icon="clock" size="is-small-medium" type="is-light"></b-icon>
      Reminders
    </nuxt-link>

    <nuxt-link :to="`/group/${group.id}/notes`" class="group-feature" v-on:click.native="toggleSidebar">
      <b-icon class="group-feature-icon" icon="file-document" size="is-small-medium" type="is-light"></b-icon>
      Notes
    </nuxt-link>

    <nuxt-link :to="`/group/${group.id}/invite`" class="group-feature invite" v-on:click.native="toggleSidebar">
      <b-icon class="group-feature-icon" icon="account-multiple-plus" size="is-small-medium" type="is-light"></b-icon>
      Invite
    </nuxt-link>

    <nuxt-link :to="`/group/${group.id}/settings`" class="group-feature settings" v-on:click.native="toggleSidebar">
      <b-icon class="group-feature-icon" icon="settings" size="is-small-medium" type="is-light"></b-icon>
      Settings
    </nuxt-link>
  </section>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'GroupFeatures',
    props: {
      group: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions({
        toggleSidebar: 'nav/toggleSidebar'
      })
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

  .group-feature {
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

  .invite {
    margin-top: auto;
  }

  .settings {
    margin-bottom: 0rem;
  }
</style>
