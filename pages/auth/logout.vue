<template>
  <div class="section">
    <div class="container has-text-centered">
      <h3 class="title">Logging Out</h3>
      <p class="content">This should only take a moment</p>
      <Loading />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import Loading from '~/components/Loading'

  export default {
    name: 'IndexPage',
    layout: 'blank',
    components: { Loading },
    computed: {
      ...mapGetters({
        user: 'auth/user'
      })
    },
    methods: {
      ...mapActions({
        logout: 'auth/logout',
      })
    },
    mounted() {
      this.logout()
    }
  }
</script>

<style>
  .home {
    background-image: -webkit-linear-gradient(309deg,#ee4266,#540d6e);
    background-image: -o-linear-gradient(309deg,#ee4266,#540d6e);
    background-image: linear-gradient(141deg,#ee4266,#540d6e);
    background-position: center center;
    background-size: cover;
    background-repeat: repeat;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
