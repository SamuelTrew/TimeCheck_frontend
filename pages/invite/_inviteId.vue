<template>
  <div>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Accept Invitation
          </h1>
        </div>
      </div>
    </section>

    <section class="section" v-if="group">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2 form">
            <p>You have been invited to join "{{ group.name }}"</p>
            <p>Do you want to join this group?</p>

            <b-button @click="cancel">Cancel</b-button>
            <b-button @click="join" type="is-primary">Join</b-button>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'InviteByCodePage',
    data() {
      return {
        group: null
      }
    },
    computed: {
      ...mapGetters({
        ready: 'auth/ready'
      })
    },
    watch: {
      ready: {
        async handler(ready) {
          if (ready) {
            try {
              this.group = await this.$axios.$get(`/invite/${this.inviteId}/group`)
            } catch (e) {
              // TODO: Error handling
              console.error(e)
            }
          }
        },
        immediate: true
      }
    },
    methods: {
      cancel() {
        console.info('Going dashboard - invite cancel')
        this.$router.push('/dashboard')
      },
      async join() {
        try {
          const data = await this.$axios.$get(`/invite/${this.inviteId}/accept`)
          await this.$store.dispatch('groups/fetchGroups')
          await this.$store.dispatch('tutorial/setTutorial', true)
          this.$router.push(`/group/${this.group.id}/calendar`)
        } catch (e) {
          // TODO: Error handling
          console.error(e)
        }
      }
    },
    asyncData({params}) {
      return {inviteId: params.inviteId}
    }
  }
</script>

<style>

</style>
