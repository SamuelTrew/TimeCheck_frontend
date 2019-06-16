<template>
  <div class="form polls-display">
    <h4 class="title">
      New Poll
    </h4>

    <b-field label="Name">
      <b-input v-model="poll.question"></b-input>
    </b-field>

    <div class="control">
      <label class="radio">
        <input type="radio" name="rsvp" v-model="poll.type" value="0">
        Time Poll
      </label>
      <label class="radio">
        <input type="radio" name="rsvp" v-model="poll.type" value="1">
        Location Poll
      </label>
      <label class="radio">
        <input type="radio" name="rsvp" v-model="poll.type" value="2">
        Other Poll
      </label>
    </div>

    <b-field label="Multiple Votes">
      <b-switch v-model="poll.multiple">
        <span v-if="poll.multiple">Can vote for multiple options</span>
        <span v-else>Can vote for only one option</span>
      </b-switch>
    </b-field>

    <b-field label="Change Vote">
      <b-switch :disabled="poll.multiple" v-model="poll.change">
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

      <br/>

      <b-field :key="index" class="newpoll-option" v-for="(option, index) in poll.options">
        <b-input @input="newOption(index)" v-model="poll.options[index].text"></b-input>
      </b-field>
    </div>

    <b-button :loading="saving" @click="createPoll" type="is-primary">Create Poll</b-button>

  </div>
</template>

<script>
  // TODO: Ability to reorder options
  // TODO: Rename / edit poll? Maybe?
  import Next from "../../../../components/next";

  export default {
    name: 'NewPollPage',
    components: {Next},
    data() {
      return {
        poll: {
          question: '',
          type: null,
          multiple: false,
          change: true,
          hidden: false,
          options: [
            {
              text: '',
              votes: 0,
              order: 1,
            }
          ]
        },
        saving: false
      }
    },
    props: {
      group: {
        type: Object,
        required: true
      }
    },
    watch: {
      'poll.multiple'(multiple) {
        if (multiple) {
          this.poll.change = true
        }
      }
    },
    methods: {
      newOption(index) {
        if (index === this.poll.options.length - 1) {
          this.poll.options.push({text: '', order: this.poll.options.length + 1})
        }
      },
      async createPoll() {
        this.saving = true
        try {
          await this.$store.dispatch('polls/createPoll', this.poll)
        } catch (e) {
          console.error("Poll creation error", e);
        } finally {
          this.saving = false
        }
      }
    }
  }
</script>

<style>
  .polls-display {
    padding: 0 1rem 1rem;
  }
</style>
