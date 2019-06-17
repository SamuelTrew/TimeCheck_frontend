<template>
  <div class="form polls-display" v-if="poll">
    <h4 class="title">{{ poll.question }}</h4>
    <p>
      <span v-if="poll.multiple">You can vote for <b>multiple</b> options in this poll</span>
      <span v-else-if="poll.question">You can vote for only <b>one</b> option in this poll</span>
    </p>
    <p>
      <span v-if="poll.change">You <b>can</b> change your vote at any time</span>
      <span v-else-if="poll.question">You <b>cannot</b> change your vote<span
        v-if="!haveVoted"> after choosing</span></span>
    </p>
    <div v-for="option in poll.options" @click="vote(poll, option)" class="poll-option box"
         :class="{'selected': option.selected}">
      <div class="poll-bar" :style="calcStyle(poll, option)"></div>
      <p class="poll-option-name">{{ option.text }}</p>
      <p class="poll-option-votes">{{ option.votes }} votes</p>
    </div>
    <p v-if="poll.question">Total of {{ totalVotes }} votes</p>

    <b-button @click="deletePoll" type="is-danger">
      Delete Poll
    </b-button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'PollDetailPage',
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        polls: 'polls/map'
      }),
      pollId() {
        return this.$route.params.pollId || null
      },
      poll() {
        if (this.pollId) {
          const poll = this.polls[this.pollId]
          if (poll) return poll
          return null
        } else {
          return null
        }
      },
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
          this.$store.dispatch('polls/vote', {poll, option})
        }
      },
      calcStyle(poll, option) {
        let total = 0;
        poll.options.forEach(opt => {
          total += opt.votes
        });
        let percentage = option.votes / total * 100;
        return {width: `${percentage}%`}
      },
      async deletePoll() {
        this.$dialog.confirm({
          title: 'Deleting group',
          message: `Are you sure you want to <b>delete</b> the poll "${this.poll.question}"? This action cannot be undone.`,
          confirmText: 'Delete Poll',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: async () => {
            try {
              await this.$store.dispatch('polls/deletePoll', this.poll)
              this.$snackbar.open({
                message: `Poll \"${this.poll.question}\" deleted.`
              })
            } catch (e) {
              console.error("Poll creation error", e);
            }
          }
        })
      },
    }
  }
</script>

<style>

</style>
