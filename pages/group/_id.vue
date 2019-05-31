<template>
  <div>
    <div v-if="group">
      <section class="hero is-primary is-bold">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-1">
              {{ group.name }}
            </h1>
          </div>
        </div>
      </section>

      <section class="columns">
        <div class="column is-narrow">
          <GroupFeatures :group="group" />  <!-- TODO: make this customisable -->
        </div>
        <div class="column">
          <nuxt-child :group="group" />
        </div>
      </section>
    </div>

    <div v-else class="section">
      <div class="container has-text-centered">
        <h3 class="title">Loading group</h3>
        <p class="content">This should only take a moment</p>
        <Loading />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Loading from '~/components/Loading'
  import Updates from "../../components/Updates";
  import GroupFeatures from "../../components/GroupFeatures";

  export default {
    name: 'GroupViewPage',
    components: {GroupFeatures, Updates, Loading },
    data() {
      return {
        group: null,
        name: '',
      }
    },
    computed: {
      ...mapGetters({
        ready: 'group/ready',
        getGroupById: 'group/getGroupById'
      })
    },
    watch: {
      ready: {
        handler(ready) {
          if (ready) {
            const group = this.getGroupById(this.id)
            if (group) {
              this.group = group
            } else {
              // Could not find group
              // TODO: Display error about group 404 not found
              this.$router.push('/dashboard')
            }
          }
        },
        immediate: true
      }
    },
    methods: {},
    asyncData ({ params }) {
      return { id: params.id }
    }
  }
</script>

<style>

</style>
