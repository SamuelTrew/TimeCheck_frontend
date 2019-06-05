<template>
  <section :style="colour">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1 group-title" style="display: flex; align-items: center">
          <button v-if=hasBack class="menu">
            <nuxt-link :to=parent>
              <div class="icon">
                <b-icon icon="arrow-left" type="is-light" size="is-medium" style="margin-left: 1rem"></b-icon>
              </div>
            </nuxt-link>
          </button>

          <button v-else class="menu" @click="toggleSidebar">
            <b-icon class="icon" icon="menu" type="is-light" size="is-medium"></b-icon>
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
    white-space: nowrap;
  }
  .hero-body {
    padding: 1rem;
  }
  .menu {
    display: flex;
    float: left;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    align-items: center;
  }
  .icon {
    float: left;
    z-index: 2;
    margin-right: 1rem;
  }
  .group-title {
    color: inherit;
  }
</style>
