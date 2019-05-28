<template>
  <div id="sidebar">
    <nuxt-link to="/" class="sidebar-tc">
      <img src="~/assets/tc-thumb-white.svg" />
    </nuxt-link>
    <div class="sidebar-divider"></div>
    <nuxt-link :to="`/group/${group.id}`" class="sidebar-group" v-for="group in groups" :key="group.id">
      <div v-if="group.thumb" class="group-thumb group-thumb-img" :style="{ backgroundImage: `url('${group.thumb}')` }"></div>
      <div v-else class="group-thumb group-thumb-text">{{ group.name.charAt(0).toUpperCase() }}</div>
    </nuxt-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "Sidebar",
    computed: {
      ...mapGetters({
        groups: 'group/list'
      })
    }
  }
</script>

<style>
  #sidebar {
    width: 6rem;
    background-color: #3c3744;
  }

  .sidebar-tc,
  .sidebar-group,
  .group-thumb {
    display: block;
    width: 4rem;
    height: 4rem;
    overflow: hidden;
  }

  .sidebar-tc,
  .sidebar-group,
  .sidebar-divider {
    margin: 1rem;
  }

  .sidebar-divider {
    width: 4rem;
    height: 1px;
    background-color: #eee;
  }

  .sidebar-tc,
  .group-thumb {
    border-radius: 50%;
    border: 0 solid white;
    box-shadow: none;
    transition: box-shadow .1s, border .1s;
  }

  .sidebar-tc:hover,
  .group-thumb:hover {
    border: 3px solid white;
    box-shadow: 0 0 1px 0 white inset, 0 0 1px 0 white;
  }

  .group-thumb-img {
    background-color: #eee;
    background-size: cover;
  }

  .group-thumb-text {
    background-color: #302c36;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
