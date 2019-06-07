<template>
  <div v-if="group" class="group-page">
    <TopAppBar :title="group.name" :group="group" />

    <div class="group-content">
      <nuxt-child :group="group" />
    </div>
  </div>

  <div v-else class="section">
    <div class="container has-text-centered">
      <h3 class="title">Loading group</h3>
      <p class="content">This should only take a moment</p>
      <Loading />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Loading from '~/components/Loading'
  import Updates from "../../components/Updates";
  import GroupFeatures from "../../components/GroupFeatures";
  import TopAppBar from "../../components/TopAppBar";

  export default {
    name: 'GroupViewPage',
    components: { TopAppBar, GroupFeatures, Updates, Loading },
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
            const group = this.getGroupById(this.groupId)
            if (group) {
              this.group = group
            } else {
              // Could not find group
              // TODO: Display error about group 404 not found
              console.info('Going dashboard - group not found')
              this.$router.push('/dashboard')
            }
          }
        },
        immediate: true
      }
    },
    methods: {},
    asyncData ({ params }) {
      return { groupId: params.groupId }
    }
  }
</script>

<style>
  .group-page {
    display: flex;
    flex-direction: column;
  }
  .group-content {
    flex: 1 1 0;
    display: flex;
    overflow-x: hidden;
    overflow-y: scroll;
    flex-direction: column;
  }
</style>
