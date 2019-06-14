<template>
  <section>
    <TopAppBar :title="this.getUserName + '\'s Dashboard'" style="color: white"/>

    <section class="columns">
      <!--div class="column is-narrow">
        <GroupFeatures />
      </div-->
      <div class="column">
        <Updates/>
      </div>
    </section>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import GroupFeatures from '../components/GroupFeatures.vue'
  import Updates from "../components/Updates";
  import TopAppBar from "../components/TopAppBar";

  export default {
    components: {
      TopAppBar,
      Updates,
      GroupFeatures,
    },
    computed: {
      ...mapGetters({
        user: 'auth/user'
      }),
      getUserName() {
        // TODO: This shouldn't be necessary... (should not be in dashboard if no user details)
        if (this.user.details) return this.user.details.name.split(" ")[0]
        return "Unknown User"
      }
    },
  }
</script>

<style>

</style>
