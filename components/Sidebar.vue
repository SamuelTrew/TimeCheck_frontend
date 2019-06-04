<template>
  <div id="sidebar" v-show="showSidebar">
    <div class="column left-column">
      <nuxt-link to="/dashboard" class="sidebar-logo">
        <img src="~/assets/tc-thumb-white.svg" />
      </nuxt-link>
      <div class="sidebar-divider"></div>
      <div class="sidebar-groups">
        <nuxt-link :to="`/group/${group.id}`" class="sidebar-group" v-for="group in groups" :key="group.id">
          <div v-if="group.thumb" class="group-thumb group-thumb-img" :style="{ backgroundImage: `url('${group.thumb}')` }"></div>
          <div v-else class="group-thumb group-thumb-text">{{ group.name.charAt(0).toUpperCase() }}</div>
        </nuxt-link>
      </div>
      <div class="sidebar-divider"></div>
      <nuxt-link to="/group/new" class="sidebar-item">
        <b-icon icon="plus" type="is-light" size="is-medium"></b-icon>
      </nuxt-link>
      <nuxt-link to="/auth/logout" class="sidebar-item">
        <b-icon icon="logout" type="is-light" size="is-medium"></b-icon>
      </nuxt-link>
    </div>
    <GroupFeatures class="column right-column" :group="group" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import GroupFeatures from "./GroupFeatures";

  export default {
    name: 'Sidebar',
    components: {GroupFeatures},
    data() {
      return {
        // TODO get group from _id
        group: null,
      }
    },
    computed: {
      ...mapGetters({
        groups: 'group/list',
        user: 'auth/user',
        showSidebar: 'nav/showSidebar'
      })
    }
  }
</script>

<style>

  #sidebar {
    background-color: #3c3744;
    display: flex;
  }

  .sidebar-logo,
  .sidebar-item,
  .sidebar-group,
  .group-thumb {
    display: block;
    width: 4rem;
    height: 4rem;
    overflow: hidden;
  }

  .sidebar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .sidebar-logo {
    margin-bottom: 1rem;
  }
  .sidebar-item {
    margin-top: 1rem;
  }

  .sidebar-group {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .sidebar-divider {
    width: 4rem;
    height: 1px;
    background-color: whitesmoke;
  }

  .sidebar-groups {
    flex: 1 1 0;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .sidebar-groups::-webkit-scrollbar {
    width: 0 !important
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

  .column {
    flex: 50%;
  }
  .left-column {
    display: flex;
    flex-direction: column;
  }
  .right-column {
    display: flex;
    flex-direction: column;
  }

</style>
