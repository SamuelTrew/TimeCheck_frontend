<template>
  <div class="section">
    <div class="container has-text-centered">
      <template v-if="loading">
        <h3 class="title">Logging In</h3>
        <p class="content">This should only take a moment</p>
        <Loading />
      </template>
      <template v-else>
        <h3 class="title">Error</h3>
        <p class="content">
          Could not log in :(<br /><br />
          Please try again and, if the problem persists, contact support: <a href="mailto:support@timecheck.app">support@timecheck.app</a>.
        </p>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { mapActions } from 'vuex'

  import Loading from '~/components/Loading.vue'

  @Component({
    layout: 'blank',
    components: {
      Loading
    },
    methods: {
      ...mapActions({
        setUser: 'user/setUser'
      })
    }
  })
  export default class AuthJWTPage extends Vue {
    loading = true

    async mounted() {
      const token = this.$route.query.token
      if (token === null) {
        // TODO: Show error about missing token
        return
      }
      try {
        const response = await this.$axios.post(
          'user/login',
          { jwt: token },
          { withCredentials: false }
        )
        // TODO: Make this more elegant?
        // TODO: Error if cannot set window.opener data or close window
        window.opener.$timecheck.$store.dispatch('auth/setUser', response.data)
        window.close()
      } catch (err) {
        // TODO: Error handling
        console.error(err)
      }
    }
  }
</script>

<style>
</style>
