<template>
  <section>
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
    </div>

    <div v-else class="section">
      <div class="container has-text-centered">
        <h3 class="title">Loading group</h3>
        <p class="content">This should only take a moment</p>
        <Loading />
      </div>
    </div>

    <section class="columns">
      <div id="column">
        <GroupFeatures/>  <!-- TODO: make this customisable -->
      </div>
      <div class="column is-four-fifths">
        <Updates />       <!-- TODO: make this customisable -->
        <button
          class="button is-primary"
          @click="deleteGroup">Delete group</button>
      </div>
    </section>
  </section>
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
        group: null
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
            this.group = this.getGroupById(this.id)
          }
        },
        immediate: true
      }
    },
    methods: {
      async deleteGroup() {
        const group = await this.$axios.$post('/group', { name: this.name })
        console.info(group)
        this.$store.dispatch('group/fetchGroups')
      }
    },
    asyncData ({ params }) {
      return { id: params.id }
    }
  }
</script>

<style>

</style>
