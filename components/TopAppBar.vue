<template>
  <section :style="colour">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1 group-title">
          <nuxt-link v-if=hasBack :to=parent>
            <div style="float: left;">
              <b-icon href="dashboard" icon="arrow-left" type="is-dark" size="is-medium"></b-icon>
            </div>
          </nuxt-link>
          <button v-else class="menu" @click="toggleSidebar">
            <b-icon class="icon" icon="menu" size="is-medium"></b-icon>
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
      group: Object
    },
    computed: {
      ...mapGetters({
        getColourById: 'group/getColourById'
      }),
      colour() {
        if (this.group) {
          return this.getColourById(this.group.id)
        } else {
          return {'background-color': "#8B008B"}
        }
      }
    },
    methods: {
      ...mapActions({
        toggleSidebar: 'nav/toggleSidebar'
      })
    }
  }
</script>

<style scoped>
  .title {
    font-size: 2rem;
  }
  .hero-body {
    padding: 1rem;
  }
  .menu {
    display: flex;
    float: left;
    background-color: transparent;
    border: none;
    outline:none;
    cursor:pointer;
    align-items: center;
  }
  .icon {
    float: left;
  }
  .background {

  }
  .group-title {
    color: inherit;
  }
</style>
