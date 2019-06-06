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
  const DUMMY_POLLS_DATA = [
    {
      id: 'a1b2',
      question: 'What food should we get?',
      options: [
        {
          name: 'Chinese',
          order: 3,
          votes: 2,
        },
        {
          name: 'Dominos',
          order: 1,
          votes: 4
        },
        {
          name: 'I don\'t care :D',
          order: 4,
          votes: 1
        },
        {
          name: 'Tacos',
          order: 2,
          votes: 0
        }
      ],
      multiple: true
    },
    {
      id: 'bcd3',
      question: 'Who is the best?',
      options: [
        {
          name: 'Matthew',
          order: 1,
          votes: 5,
          selected: true
        },
        {
          name: 'David',
          order: 2,
          votes: 6
        },
        {
          name: 'Pull',
          order: 3,
          votes: 3
        },
        {
          name: 'Radhika',
          order: 4,
          votes: 1
        },
        {
          name: 'Radhika',
          order: 4,
          votes: 1
        },
        {
          name: 'Radhika',
          order: 4,
          votes: 1
        },
        {
          name: 'Radhika',
          order: 4,
          votes: 1
        }
      ]
    },
    { id: 'test1', question: 'Test' },
    { id: 'test2', question: 'Test' },
    { id: 'test3', question: 'Test' },
    { id: 'test4', question: 'Test' },
    { id: 'test5', question: 'Test' },
    { id: 'test6', question: 'Test' },
    { id: 'test7', question: 'Test' },
    { id: 'test8', question: 'Test' },
    { id: 'test9', question: 'Test' },
    { id: 'test10', question: 'Test' },
    { id: 'test11', question: 'Test' },
    { id: 'test12', question: 'Test' },
    { id: 'test13', question: 'Test' },
    { id: 'test14', question: 'Test' },
    { id: 'test15', question: 'Test' },
    { id: 'test16', question: 'Test' },
    { id: 'test17', question: 'Test' },
    { id: 'test18', question: 'Test' },
    { id: 'test19', question: 'Test' },
    { id: 'test20', question: 'Test' },
    { id: 'test21', question: 'Test' },
    { id: 'test22', question: 'Test' },
    { id: 'test23', question: 'Test' },
    { id: 'test24', question: 'Test' },
    { id: 'test25', question: 'Test' },
    { id: 'test26', question: 'Test' },
    { id: 'test27', question: 'Test' },
    { id: 'test28', question: 'Test' },
    { id: 'test29', question: 'Test' },
    { id: 'test30', question: 'Test' },
    { id: 'test31', question: 'Test' },
    { id: 'test32', question: 'Test' }
  ];

  export default {
    name: "GroupPollsPage",
    data() {
      return {
        polls: DUMMY_POLLS_DATA
      }
    },
    asyncData ({ params }) {
      return { groupId: params.id }
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
    width: 300px;
    background-color: #eee;
    border-right: 1px solid #aaa;
    display: flex;
    flex-direction: column;
  }
  .polls-list-inner {
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .polls-detail {
    flex: 1 1 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .create-poll,
  .poll-list-item {
    padding: 1rem;
    border-bottom: 1px solid #aaa;
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
    background-color: #ddd;
  }
  .poll-option {
    cursor: pointer;
    margin: 2rem 0;
    background-color: #fafafa;
    position: relative;
    overflow: hidden;
  }
  .poll-bar {
    background-color: purple;
    opacity: 0.08;
    width: 20%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
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
</style>
