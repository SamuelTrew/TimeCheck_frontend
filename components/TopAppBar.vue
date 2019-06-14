<template>
  <section :style="color" id="topappbar">
    <div class="hero-body">
      <div class="has-text-centered">
        <div class="top-bar-container">
          <div class="menu-icon">
            <button class="menu" v-if=hasBack>
              <nuxt-link :to=parent>
                <div class="icon">
                  <b-icon icon="arrow-left" size="is-medium" style="margin-left: 1rem" type="is-light"></b-icon>
                </div>
              </nuxt-link>
            </button>

            <button @click="toggleSidebar" class="menu" v-else>
              <b-icon class="icon" icon="menu" size="is-medium" type="is-light"></b-icon>
            </button>
          </div>

          <h1 class="title is-1 group-title">{{ title }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'TopAppBar',
    props: {
      title: String,
      hasBack: Boolean,
      parent: String,
      group: Object
    },
    computed: {
      color() {
        if (this.group) {
          return this.group.colour
        } else {
          return {
            backgroundColor: "#8e588b",
            color: "white"
          }
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
  #topappbar {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    z-index: 10;
  }

  .title {
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hero-body {
    padding: 1rem;
  }

  .top-bar-container {
    display: flex;
    align-items: center;
  }

  .menu {
    display: flex;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    align-items: center;
  }

  .icon {
    z-index: 2;
    margin-right: 1rem;
  }

  .group-title {
    color: inherit;
  }

  @media screen and (min-width: 768px) {
    .menu-icon {
      display: none;
    }
  }
</style>
