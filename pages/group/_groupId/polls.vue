<template>
  <div class="polls">
    <div v-if="!listItemSelected" class="polls-list">
      <h2 class="polls-title">Polls</h2>
      <nuxt-link class="create-poll" :to="`/group/${groupId}/polls/new`" active-class="selected" @click.native="toggleListItemSelected">
        <b-icon icon="plus" size="is-medium"></b-icon>
      </nuxt-link>
      <div class="polls-list-inner">
        <nuxt-link v-for="poll in polls" :key="poll.id" class="poll-list-item" :to="`/group/${groupId}/polls/${poll.id}`" active-class="selected" @click.native="toggleListItemSelected">
          <div class="content">
            {{ poll.question }}
          </div>
        </nuxt-link>
      </div>
    </div>

    <div v-else class="polls-detail">
      <button class="polls-back-button" @click="toggleListItemSelected">
        <b-icon class="icon" icon="arrow-left" type="is-dark" size="is-medium"></b-icon>
      </button>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'GroupPollsPage',
    computed: {
      ...mapGetters({
        polls: 'polls/list'
      })
    },
    data() {
      return {
        listItemSelected: false,
      }
    },
    methods: {
      toggleListItemSelected() {
        this.listItemSelected = !this.listItemSelected;
      },
    },
    asyncData ({ params }) {
      return { groupId: params.groupId }
    }
  }
</script>

<style>
  .polls {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .polls-title {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    padding: 1rem;
  }
  .polls-list {
    width: 100%;
    background-color: #fafafa;
    border-right: 1px solid #dddddd;
    display: flex;
    flex-direction: column;
  }
  .polls-list-inner {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .polls-list-inner::-webkit-scrollbar {
    display: none;
  }
  .polls-detail {
    flex: 1 1 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .create-poll,
  .poll-list-item {
    padding: 1rem;
    border-bottom: 1px solid #dddddd;
    cursor: pointer;
    display: block;
    color: inherit;
  }
  .create-poll {
    border-top: 1px solid #dddddd;;
    text-align: center;
  }
  .create-poll.selected,
  .poll-list-item.selected {
    font-weight: 600;
    background-color: #e8e8e8;
  }
  .poll-option.selected .poll-bar {
    opacity: 0.25;
  }
  .polls-back-button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    align-items: center;
    padding: 1rem;
  }
</style>
