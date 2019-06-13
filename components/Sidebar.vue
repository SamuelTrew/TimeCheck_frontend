<template>
  <transition name="slide">
    <div id="sidebar" v-show="showSidebar || windowWidth >= 768">
      <div class="column left-column">
        <nuxt-link class="sidebar-logo" to="/dashboard">
          <img src="~/assets/tc-thumb-white.svg"/>
        </nuxt-link>
        <div class="sidebar-label" style="margin-bottom: 0.2rem">
          Groups
        </div>
        <div class="sidebar-divider"></div>
        <div class="sidebar-groups">
          <nuxt-link :key="group.id" :to="`/group/${group.id}`" class="sidebar-group" v-for="group in groups">
            <div :style="{ backgroundImage: `url('${group.thumb}')` }" class="group-thumb group-thumb-img"
                 v-if="group.thumb"></div>
            <div class="group-thumb group-thumb-text" v-else>{{ group.name.charAt(0).toUpperCase() }}</div>
          </nuxt-link>
        </div>
        <div class="sidebar-divider"></div>
        <nuxt-link class="sidebar-item" to="/group/new" v-on:click.native="toggleSidebar">
          <b-icon icon="plus" size="is-small-medium" type="is-light"></b-icon>
        </nuxt-link>
        <div class="sidebar-label">
          Add
        </div>
        <nuxt-link class="sidebar-item" to="/auth/logout">
          <b-icon icon="logout" size="is-small-medium" type="is-light"></b-icon>
        </nuxt-link>
        <div class="sidebar-label" style="padding-bottom: 0.5rem">
          Logout
        </div>
      </div>
      <GroupFeatures :group="group" class="column right-column" v-if="this.group"/>
      <div @click="toggleSidebar" class="column hide-touch-area">
        <div style="width: 100%"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import GroupFeatures from "./GroupFeatures"

  export default {
    name: 'Sidebar',
    components: {GroupFeatures},
    data() {
      return {
        // TODO get group from _id
        group: null,
        groupId: null
      }
    },
    computed: {
      ...mapGetters({
        groups: 'groups/list',
        user: 'auth/user',
        showSidebar: 'nav/showSidebar',
      })
    },
    watch: {
      '$route.params.groupId': {
        handler(groupId) {
          this.groupId = groupId
          if (groupId) {
            this.fetchGroup()
          } else {
            this.group = null
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      ...mapActions({
        toggleSidebar: 'nav/toggleSidebar',
        getGroupById: 'groups/getGroupById'
      }),
      async fetchGroup() {
        const group = await this.getGroupById(this.groupId)
        if (group) {
          this.group = group
        } else {
          // Could not find group
          // TODO: Display error about group 404 not found
          console.info('Going dashboard - group not found (sidebar)')
          this.$router.push('/dashboard')
        }
      }
    },
    asyncData({params}) {
      return {groupId: params.groupId}
    }
  }
</script>

<style>

  #sidebar {
    display: flex;
    z-index: 1000;
    background-color: #3c3744;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .slide-leave-active,
  .slide-enter-active {
    transition: 0.1s;
  }

  .slide-enter {
    transform: translateX(-100%);
  }

  .slide-leave-to {
    transform: translateX(-100%);
  }

  #sidebar > .column {
    flex: 33%;
    display: flex;
    flex-direction: column;
  }

  .left-column {
    padding-top: 1rem;
    align-items: center;
    background-color: #3c3744;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .right-column {
    padding-top: 1rem;
    background-color: #474250;
  }

  @media only screen and (max-width: 767px) {
    #sidebar {
      z-index: 1000;
      /*display: none;*/
    }

    #sidebar.sidebar-visible {
      /*display: flex;*/
    }

    .left-column {
      z-index: 1003;
    }

    .right-column {
      z-index: 1002;
    }
  }

  .hide-touch-area {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    position: absolute;
    width: 100%;
    background: transparent;
    z-index: 1001;
  }

  @media only screen and (min-width: 768px) {
    #sidebar > .column.hide-touch-area {
      display: none;
    }
  }

  .sidebar-logo,
  .sidebar-item,
  .sidebar-group,
  .group-thumb {
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    overflow: hidden;
  }

  .sidebar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .sidebar-logo {
    margin-bottom: 0.5rem;
  }

  .sidebar-item {
    margin-top: 1rem;
  }

  .sidebar-group {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .sidebar-divider {
    width: 3.5rem;
    height: 1px;
    background-color: whitesmoke;
  }

  .sidebar-groups {
    flex: 1 1 0;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .sidebar-groups::-webkit-scrollbar {
    display: none;
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

  .sidebar-label {
    color: white;
  }

</style>
