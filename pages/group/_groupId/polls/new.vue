<template>
  <div class="section form">
    <h4 class="title">New Poll</h4>

    <b-field label="Name">
      <b-input v-model="poll.question"></b-input>
    </b-field>

    <b-field label="Multiple Votes">
      <b-switch v-model="poll.multiple">
        <span v-if="poll.multiple">Can vote for multiple options</span>
        <span v-else>Can vote for only one option</span>
      </b-switch>
    </b-field>

    <b-field label="Change Vote">
      <b-switch v-model="poll.change">
        <span v-if="poll.change">Can change choice after voting</span>
        <span v-else>Cannot change choice after voting</span>
      </b-switch>
    </b-field>

    <b-field label="Hide Results">
      <b-switch v-model="poll.hidden">
        <span v-if="poll.hidden">Results are hidden until after vote cast</span>
        <span v-else>Can view results before voting</span>
      </b-switch>
    </b-field>


    <div>
      <h5 class="title is-4">Options</h5>
      <p>Extra text boxes will automatically appear as you type</p>

      <br />

      <b-field class="newpoll-option" :key="index" v-for="(option, index) in poll.options">
        <b-input v-model="poll.options[index].text" @input="newOption(index)"></b-input>
      </b-field>
    </div>

    <b-button type="is-primary" @click="createPoll">Create Poll</b-button>
  </div>
</template>

<script>
  export default {
    name: 'NewPollPage',
    data() {
      return {
        poll: {
          question: '',
          multiple: false,
          change: true,
          hidden: true,
          options: [
            {
              text: '',
              votes: 0,
              order: 1,
            }
          ]
        }
      }
    },
    methods: {
      newOption(index) {
        if (index === this.poll.options.length - 1) {
          this.poll.options.push({ text: '' })
        }
      },
      async createPoll() {
        try {
          this.$store.dispatch('polls/createPoll', this.poll)
        } catch (e) {
          console.error("Poll creation error", e);
        }
      }
    }
  }
</script>

<style>
</style>
