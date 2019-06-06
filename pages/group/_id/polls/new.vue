<template>
  <div class="section">
    <h4 class="title">New Poll</h4>

    <div class="form">
      <b-field label="Name">
        <b-input v-model="name"></b-input>
      </b-field>

      <b-field label="Multiple Votes">
        <b-switch v-model="multiple">
          <span v-if="multiple">Can vote for multiple options</span>
          <span v-else>Can vote for only one option</span>
        </b-switch>
      </b-field>

      <b-field label="Change Vote">
        <b-switch v-model="change">
          <span v-if="change">Can change choice after voting</span>
          <span v-else>Cannot change choice after voting</span>
        </b-switch>
      </b-field>

      <b-field label="Hide Results">
        <b-switch v-model="hidden">
          <span v-if="hidden">Results are hidden until after vote cast</span>
          <span v-else>Can view results before voting</span>
        </b-switch>
      </b-field>


      <div>
        <h5 class="title is-4">Options</h5>
        <p>Extra text boxes will automatically appear as you type</p>

        <br />

        <b-field class="newpoll-option" :key="index" v-for="(option, index) in options">
          <b-input v-model="options[index].text" @input="newOption(index)"></b-input>
        </b-field>
      </div>

      <b-button type="is-primary">Create Poll</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewPollPage",
    data() {
      return {
        name: '',
        multiple: false,
        change: true,
        hidden: true,
        options: [
          {
            text: ''
          }
        ]
      }
    },
    methods: {
      newOption(index) {
        if (index === this.options.length - 1) {
          this.options.push({ text: '' })
        }
      }
    }
  }
</script>

<style>
</style>
