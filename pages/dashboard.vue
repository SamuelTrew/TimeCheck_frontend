<template>
  <section>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            {{ user.details.name.split(" ")[0] }}'s Dashboard
          </h1>
        </div>
      </div>
    </section>

    <section class="columns">
      <div id="column">
      <GroupFeatures />
      </div>
      <div class="column is-four-fifths">
        <Updates />
      </div>
    </section>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import GroupFeatures from '../components/GroupFeatures.vue'
  import Updates from "../components/Updates";

  export default {
    components: {
      Updates,
      GroupFeatures,
    },
    computed: {
      ...mapGetters({
        user: 'auth/user'
      })
    }
  }
</script>

<style>

</style>
