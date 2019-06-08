<template>
  <div class="section">
    <h4 class="title">{{ poll.question }}</h4>
    <p>
      <span v-if="poll.multiple">You can vote for <b>multiple</b> options in this poll</span>
      <span v-else-if="poll.question">You can vote for only <b>one</b> option in this poll</span>
    </p>
    <p>
      <span v-if="poll.change">You <b>can</b> change your vote at any time</span>
      <span v-else-if="poll.question">You <b>cannot</b> change your vote<span v-if="!haveVoted"> after choosing</span></span>
    </p>
    <div v-for="option in poll.options" ref="pollOptions" @click="vote(poll, option)" class="poll-option box" :class="{'selected': option.selected}">
      <div class="poll-bar" :style="calcStyle(poll, option)"></div>
      <p class="poll-option-name">{{ option.name }}</p>
      <p class="poll-option-votes">{{ option.votes }} votes</p>
    </div>
    <p v-if="poll.question">Total of {{ totalVotes }} votes</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'PollDetailPage',
    data() {
      return {
        pollId: null,
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
    watch: {
      '$route.params.pollId': {
        async handler(pollId) {
          this.pollId = pollId
          this.poll = await this.getPollById(pollId)
        },
        deep: true,
        immediate: true
      }
    },
    computed: {
      ...mapGetters({
        getPollById: 'polls/getPollById'
      }),
      totalVotes() {
        let total = 0;
        if (!this.poll.options) return;
        this.poll.options.forEach(opt => {
          total += opt.votes
        });
        return total
      },
      haveVoted() {
        let voted = false
        // Quick fix for TODO need to check if this is correct
        if (this.poll.options) {
          this.poll.options.forEach(opt => {
            if (opt.selected) voted = true
          })
        }
        return voted
      }
    },
    methods: {
      vote(poll, option) {
        if (poll.change || !this.haveVoted) {
          this.$store.dispatch('polls/vote', { poll, option })
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
