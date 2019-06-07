<template>
  <div class="section">
    <h4 class="title">{{ poll.question }}</h4>
    <p>
      <span v-if="poll.multiple">You can vote for <b>multiple</b> options in this poll</span>
      <span v-else>You can vote for only <b>one</b> option in this poll</span>
    </p>
    <div v-for="option in poll.options" ref="pollOptions" @click="vote(poll, option)" class="poll-option box" :class="{'selected': option.selected}">
      <div class="poll-bar" :style="calcStyle(poll, option)"></div>
      <p class="poll-option-name">{{ option.name }}</p>
      <p class="poll-option-votes">{{ option.votes }} votes</p>
    </div>
    <p>Total of {{ totalVotes }} votes</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "PollDetailPage",
    data() {
      return {
        poll: {
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
        }
      }
    },
    computed: {
      ...mapGetters({
        getPoll: 'polls/getPoll'
      }),
      totalVotes() {
        let total = 0;
        if (!this.poll.options) return;
        this.poll.options.forEach(opt => {
          total += opt.votes
        });
        return total
      },
      setPoll(name) {
        this.poll = {
          id: 'bc3d',
          question: name,
          options: this.getPoll(name)
        }
      }
    },
    methods: {
      vote(poll, option) {
        if (option.selected) {
          // Un-vote
          this.$set(option, 'selected', false);
          option.votes -= 1;
          // TODO: Tell backend
        } else {
          // Vote
          this.$set(option, 'selected', true);
          option.votes += 1;
          if (!poll.multiple) {
            // Un-vote others
            poll.options.forEach(opt => {
              if (opt !== option) {
                if (opt.selected) {
                  this.$set(opt, 'selected', false);
                  opt.votes -= 1;
                }
              }
            })
          }
        }
      },
      calcStyle(poll, option) {
        let total = 0;
        poll.options.forEach(opt => {
          total += opt.votes
        });
        let percentage = option.votes / total * 100;
        return {width: `${percentage}%`}
      }
    }
  }
</script>

<style>

</style>
