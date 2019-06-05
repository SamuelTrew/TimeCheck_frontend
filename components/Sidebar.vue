<template>
  <div id="sidebar" v-show="showSidebar">
    <div class="column left-column">
      <nuxt-link to="/dashboard" class="sidebar-logo">
        <img src="~/assets/tc-thumb-white.svg" />
      </nuxt-link>
      <div style="color: white;margin-bottom: 0.2rem">
        Groups
      </div>
      <div class="sidebar-divider"></div>
      <div class="sidebar-groups">
        <nuxt-link v-for="group in groups" :to="`/group/${group.id}`" class="sidebar-group" :key="group.id" >
          <div v-if="group.thumb" class="group-thumb group-thumb-img" :style="{ backgroundImage: `url('${group.thumb}')` }"></div>
          <div v-else class="group-thumb group-thumb-text">{{ group.name.charAt(0).toUpperCase() }}</div>
        </nuxt-link>
      </div>
      <div class="sidebar-divider"></div>
      <nuxt-link to="/group/new" class="sidebar-item">
        <b-icon icon="plus" type="is-light" size="is-small-medium"></b-icon>
      </nuxt-link>
      <div style="color: white;">
        Add
      </div>
      <nuxt-link to="/auth/logout" class="sidebar-item">
        <b-icon icon="logout" type="is-light" size="is-small-medium"></b-icon>
      </nuxt-link>
      <div style="color: white;">
        Logout
      </div>
    </div>
    <GroupFeatures v-if="this.group" class="column right-column" :group="group" />
    <div class="column hide-touch-area" @click="toggleSidebar">
      <div style="width: 100%"></div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import GroupFeatures from "./GroupFeatures";

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
        groups: 'group/list',
        user: 'auth/user',
        showSidebar: 'nav/showSidebar',
        groupsReady: 'group/ready',
        getGroupById: 'group/getGroupById'
      })
    },
    watch: {
      groupsReady: {
        handler(ready) {
          if (ready) {
            if (ready && this.groupId) {
              this.fetchGroup()
            }
          }
        },
        immediate: true
      },
      '$route.params.id': {
        handler(groupId) {
          this.groupId = groupId
          if (groupId && this.groupsReady) {
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
        toggleSidebar: 'nav/toggleSidebar'
      }),
      fetchGroup() {
        const group = this.getGroupById(this.groupId)
        if (group) {
          this.group = group
        } else {
          // Could not find group
          // TODO: Display error about group 404 not found
          this.$router.push('/dashboard')
        }
      }
    },
    asyncData ({ params }) {
      return { id: params.id }
    }
  }
</script>

<style>

  #sidebar {
    display: flex;
    z-index: 1000;
    background-color: #3c3744;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .column {
    flex: 33%;
    display: flex;
    flex-direction: column;
  }
  .left-column {
    align-items: center;
    background-color: #3c3744;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  .right-column {
    padding-top: 1rem;
    background-color: #474250;
  }

  @media only screen and (max-width: 768px) {
    #sidebar {
      z-index: 1000;
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
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    width: 100%;
    background: transparent;
    z-index: 1001;
  }

  @media only screen and (min-width: 768px) {
    .hide-touch-area {
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

</style>
