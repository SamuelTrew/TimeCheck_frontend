<template>
  <div class="particles">
    <!-- add vue particle code if you have time by stripping the original stuff -->
    <button>
    <nuxt-link to="dashboard">dashboard page</nuxt-link>
    </button>
  </div>
</template>

<script>
  const Dashboard = { template: '<p>Dashboard</p>'};
  const Splashscreen = { template: '<p>Splashscreen</p>'};

  const routes = {
    '/': Splashscreen,
    '/dashboard': Dashboard,
  };

  export default {
    name: 'IndexPage'
  }
</script>

<style>
  .particles {
    background-image: -webkit-linear-gradient(309deg,#ee4266,#540d6e);
    background-image: -o-linear-gradient(309deg,#ee4266,#540d6e);
    background-image: linear-gradient(141deg,#ee4266,#540d6e);
    background-position: center center;
    background-size: cover;
    background-repeat: repeat;
    height: 100vh;
  }
</style>
