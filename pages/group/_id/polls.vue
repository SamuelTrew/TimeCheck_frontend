<template>
  <div>
    <div class="section columns">
      <div class="column is-4 polls">
        <div v-for="poll in polls" class="box" @click="selectedPoll = poll">
          <div class="content">
            {{ poll.question }}
          </div>
        </div>
      </div>
      <div class="column is-8">
        <div v-if="selectedPoll">
          <h4 class="title">{{ selectedPoll.question }}</h4>
          <div v-for="option in selectedPoll.options" @click="vote(selectedPoll, option)" class="poll-option">
            <p class="subtitle is-marginless" :class="{'selected-poll': option.selected}">{{ option.name }}</p>
            <div class="poll-bar" :style="calcStyle(selectedPoll, option)"></div>
          </div>
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
          votes: 2
        },
        {
          name: 'Radhika',
          order: 4,
          votes: 1
        }
      ]
    }
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
        selectedPoll: null
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
    align-items: stretch;
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
