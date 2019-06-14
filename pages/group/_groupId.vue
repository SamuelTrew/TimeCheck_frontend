<template>
  <div class="group-page" v-if="group">
    <TopAppBar :group="group" :title="group.name"/>

    <div class="group-content">
      <nuxt-child :group="group"/>
    </div>
  </div>

  <div class="section" v-else>
    <div class="container has-text-centered">
      <h3 class="title">Loading group</h3>
      <p class="content">This should only take a moment</p>
      <Loading/>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  import Loading from '~/components/Loading'
  import Updates from "../../components/Updates"
  import GroupFeatures from "../../components/GroupFeatures"
  import TopAppBar from "../../components/TopAppBar"

  export default {
    name: 'GroupViewPage',
    components: {TopAppBar, GroupFeatures, Updates, Loading},
    data() {
      return {
        group: null,
        name: '',
      }
    },
    methods: {
      ...mapActions({
        getGroupById: 'groups/getGroupById'
      })
    },
    async mounted() {
      const group = await this.getGroupById(this.groupId)
      if (group) {
        this.group = group
        console.info('Group id:', this.groupId)
        this.$store.dispatch('polls/fetchPolls', this.groupId)
        this.$store.dispatch('notes/fetchNotes', this.groupId)
      } else {
        // Could not find group
        // TODO: Display error about group 404 not found
        console.info('Going dashboard - group not found')
        this.$router.push('/dashboard')
      }
    },
    asyncData({params}) {
      return {groupId: params.groupId}
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
    overflow-y: auto;
    flex-direction: column;
  }
</style>
