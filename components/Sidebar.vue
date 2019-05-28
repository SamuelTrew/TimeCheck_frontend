<template>
  <div id="sidebar">
    <nuxt-link to="/dashboard" class="sidebar-logo">
      <img src="~/assets/tc-thumb-white.svg" />
    </nuxt-link>
    <div class="sidebar-divider"></div>
    <div class="sidebar-groups">
      <nuxt-link :to="`/group/${group.id}`" class="sidebar-group" v-for="group in groups" :key="group.id">
        <div v-if="group.thumb" class="group-thumb group-thumb-img" :style="{ backgroundImage: `url('${group.thumb}')` }"></div>
        <div v-else class="group-thumb group-thumb-text">{{ group.name.charAt(0).toUpperCase() }}</div>
      </nuxt-link>
      <div class="sidebar-item group-new">
        <b-icon icon="plus" type="is-light" size="is-medium"></b-icon>
      </div>
    </div>
    <div class="sidebar-divider"></div>
    <nuxt-link to="/auth/logout" class="sidebar-item">
      <b-icon icon="logout" type="is-light" size="is-medium"></b-icon>
    </nuxt-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Sidebar',
    computed: {
      ...mapGetters({
        groups: 'group/list',
        user: 'auth/user'
      })
    }
  }
</script>

<style>
  #sidebar {
    width: 6rem;
    background-color: #3c3744;
    display: flex;
    flex-direction: column;
  }

  .sidebar-logo,
  .sidebar-item,
  .sidebar-group,
  .group-thumb {
    display: block;
    width: 4.5vw;
    height: 4.5vw;
    overflow: hidden;
  }

  .sidebar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .sidebar-logo,
  .sidebar-item,
  .sidebar-group {
    margin: 1rem;
  }

  .sidebar-divider {
    width: 4rem;
    height: 1px;
    margin: 0 1rem;
    background-color: whitesmoke;
  }

  .sidebar-groups {
    flex: 1 1 0;
  }

  .sidebar-logo,
  .sidebar-item,
  .group-thumb {
    border-radius: 50%;
    border: 0 solid whitesmoke;
    box-shadow: none;
    transition: box-shadow .1s, border .1s;
  }

  .sidebar-item:hover,
  .group-thumb:hover {
    border: 3px solid whitesmoke;
    box-shadow: 0 0 1px 0 whitesmoke inset, 0 0 1px 0 whitesmoke;
  }

  .sidebar-item,
  .group-thumb {
    background-color: #302c36;
  }

  .group-thumb-img {
    background-size: cover;
  }

  .group-thumb-text {
    color: whitesmoke;
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
