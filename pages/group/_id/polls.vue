<template>
  <div class="polls">
    <div class="polls-list">
      <div class="create-poll" @click="selectedPoll = null; newPoll = true" :class="{selected: newPoll}">
        <b-icon icon="plus" size="is-medium"></b-icon>
      </div>
      <div class="polls-list-inner">
        <div v-for="poll in polls" class="poll-list-item" @click="selectedPoll = poll; newPoll = false" :class="{selected: selectedPoll === poll}">
          <div class="content">
            {{ poll.question }}
          </div>
        </div>
      </div>
    </div>
    <div class="section polls-detail">
      <div v-if="selectedPoll" class="poll">
        <h4 class="title">{{ selectedPoll.question }}</h4>
        <div v-for="option in selectedPoll.options" @click="vote(selectedPoll, option)" class="poll-option">
          <p class="subtitle is-marginless" :class="{'selected-poll': option.selected}">{{ option.name }}</p>
          <div class="poll-bar" :style="calcStyle(selectedPoll, option)"></div>
        </div>
      </div>
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
        }
      ]
    },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' },
    { id: '123', question: 'Test' }
  ];

  const haveVoted = poll => {
    let voted = false
    poll.options.forEach(option => {
      if (option.selected) voted = true
    })
    return voted
  }

  export default {
    name: "GroupPollsPage",
    data() {
      return {
        polls: DUMMY_POLLS_DATA,
        selectedPoll: null,
        newPoll: false
      }
    },
    methods: {
      vote(poll, option) {
        if (option.selected) {
          // Unvote
          this.$set(option, 'selected', false)
          option.votes -= 1
          // TODO: Tell backend
        } else {
          // Vote
          this.$set(option, 'selected', true)
          option.votes += 1
          if (!poll.multiple) {
            // Unvote others
            poll.options.forEach(opt => {
              if (opt !== option) {
                if (opt.selected) {
                  this.$set(opt, 'selected', false)
                  opt.votes -= 1
                }
              }
            })
          }
        }
      },
      calcStyle(poll, option) {
        let total = 0
        poll.options.forEach(opt => {
          total += opt.votes
        })
        let percentage = option.votes / total * 100
        return {width: `${percentage}%`}
      }
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
  }

  /*.polls-list-outer {*/
  /*  align-items: stretch;*/
  /*}*/
  /*.polls-list-inner {*/
  /*  flex: 1 1 0;*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  height: 100%;*/
  /*}*/
  .create-poll,
  .poll-list-item {
    padding: 1rem;
    border-bottom: 1px solid #aaa;
    cursor: pointer;
  }
  .create-poll {
    text-align: center;
  }
  .create-poll.selected,
  .poll-list-item.selected {
    font-weight: 600;
    background-color: #ddd;
  }
  .selected-poll {
    font-weight: 600;
  }
  .poll-option {
    cursor: pointer;
    margin: 2rem 0;
  }
  .poll-bar {
    height: 1rem;
    background-color: red;
  }
</style>
