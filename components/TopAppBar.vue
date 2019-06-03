<template>
  <section :style="color">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1">
          <nuxt-link v-if=hasBack :to=parent>
            <div style="float: left;">
              <b-icon href="dashboard" icon="arrow-left" type="is-light" size="is-medium"></b-icon>
            </div>
          </nuxt-link>
          <button v-else class="menu" @click="toggleSidebar">
            <b-icon style="float: left; margin: auto; vertical-align: middle" icon="menu" type="is-light" size="is-medium"></b-icon>
          </button>
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: "TopAppBar",
    props: {
      title: String,
      hasBack: Boolean,
      parent: String,
    },
    computed: {
      ...mapGetters({
        color: 'group/colour'
      })
    },
    methods: {
      ...mapActions({
        toggleSidebar: 'nav/toggleSidebar'
      })
    }
  }
</script>

<style scoped>
  .menu {
    display: flex;
    float: left;
    background-color: transparent;
    border: none;
    outline:none;
    cursor:pointer;
    align-items: center;
  }
</style>
