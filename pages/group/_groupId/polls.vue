<template>
  <div>
    <div v-if="tutorial">
      <b-message type="is-info" style="margin-top: 1rem; margin-left: 1rem; margin-right: 1rem">
        <p><b>Tutorial</b></p>
        Here is where you and your friends or colleagues can:
        <li>View polls</li>
        <li>Create polls</li>
        <li>Vote in polls</li>
        <next :group="group" next="notes" :end="false" style="float: right"/>
      </b-message>
    </div>
    <h2 class="polls-title">Polls</h2>
    <div class="polls">
      <!-- TODO: I mean, seriously -->

      <template v-if="windowWidth >= 769">
        <div class="polls-list">
          <nuxt-link :to="`/group/${groupId}/polls/new`" @click.native="toggleListItemSelected" active-class="selected"
                     class="create-poll">
            <b-icon icon="plus" size="is-medium"></b-icon>
          </nuxt-link>
          <div class="polls-list-inner">
            <nuxt-link :key="poll.id" :to="`/group/${groupId}/polls/${poll.id}`" @click.native="toggleListItemSelected"
                       active-class="selected" class="poll-list-item" v-for="poll in polls">
              <div class="content">
                {{ poll.question }}
              </div>
            </nuxt-link>

            <br />
            <br />


          </div>
        </div>

        <div class="polls-detail section">
          <nuxt-child :group="group"/>
        </div>
      </template>

      <template v-else>
        <div class="polls-list" v-if="!listItemSelected">
          <nuxt-link :to="`/group/${groupId}/polls/new`" @click.native="toggleListItemSelected" active-class="selected"
                     class="create-poll">
            <b-icon icon="plus" size="is-medium"></b-icon>
          </nuxt-link>
          <div class="polls-list-inner">
            <nuxt-link :key="poll.id" :to="`/group/${groupId}/polls/${poll.id}`" @click.native="toggleListItemSelected"
                       active-class="selected" class="poll-list-item" v-for="poll in polls">
              <div class="content">
                {{ poll.question }}
              </div>
            </nuxt-link>
          </div>
        </div>


        <div class="polls-detail" v-else>
          <button @click="toggleListItemSelected" class="polls-back-button">
            <b-icon class="icon" icon="arrow-left" size="is-medium" type="is-dark"></b-icon>
          </button>
          <nuxt-child :group="this.group"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Next from "../../../components/next";

  export default {
    name: 'GroupPollsPage',
    components: {Next},
    computed: {
      ...mapGetters({
        polls: 'polls/list',
        tutorial: 'tutorial/tutorial'
      }),
      pollDetail() {
        return this.$route.params.pollId
      }
    },
    props: {
      group: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        listItemSelected: false,
      }
    },
    methods: {
      toggleListItemSelected() {
        this.listItemSelected = !this.listItemSelected
      },
    },
    asyncData({params}) {
      return {groupId: params.groupId}
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

  .poll-option {
    cursor: pointer;
    padding: 0.5rem 1rem;
    position: relative;
    overflow: hidden;
  }

  .poll-bar {
    background-color: purple;
    opacity: 0.08;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 0.5s ease-in-out;
  }

  .poll-option.selected .poll-bar {
    opacity: 0.25;
  }

  .poll-option-name,
  .poll-option-votes {
    position: relative;
  }

  .poll-option-name {
    font-size: 1.5rem;
  }

  .poll-option.selected .poll-option-name {
    font-weight: 600;
  }

  .polls-back-button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    align-items: center;
    padding: 1rem;
  }

  @media screen and (min-width: 769px) {
    .polls-list {
      width: 30%;
    }
  }
</style>
