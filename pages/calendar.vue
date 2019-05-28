<template>
  <section>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Calendar
          </h1>
        </div>
        <nuxt-link to="/dashboard">
          <div style="float: left;">
            <b-icon href="dashboard" icon="arrow-left" type="is-light" size="is-medium"></b-icon>
          </div>
        </nuxt-link>
      </div>
    </section>
    <section>
      <!--dates functionality-->
    </section>
  </section>
</template>

<script>
  export default {
    name: "calendar"
  }
</script>

<style scoped>

</style>

