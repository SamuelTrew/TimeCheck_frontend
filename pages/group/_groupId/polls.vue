<template>
  <div class="polls">
    <div class="polls-list">
      <nuxt-link class="create-poll" :to="`/group/${groupId}/polls/new`" active-class="selected">
        <b-icon icon="plus" size="is-medium"></b-icon>
      </nuxt-link>
      <div class="polls-list-inner">
        <nuxt-link v-for="poll in polls" :key="poll.id" class="poll-list-item" :to="`/group/${groupId}/polls/${poll.id}`" active-class="selected">
          <div class="content">
            {{ poll.question }}
          </div>
        </nuxt-link>
      </div>
    </div>

    <div class="polls-detail">
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
  .polls-list {
    width: 30%;
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
</style>
