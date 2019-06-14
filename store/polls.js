import Vue from 'vue'

export const state = () => {
  return {
    polls: {},
    groupId: null
  }
}

export const getters = {
  map: state => state.polls,
  list: state => Object.values(state.polls),
}

export const actions = {
  async fetchPolls({commit}, groupId) {
    commit('SET_GROUP', {groupId})
    try {
      const pollsList = await this.$axios.$get(`/group/${groupId}/poll`)
      const pollsMap = {}
      pollsList.forEach(poll => {
        pollsMap[poll.id] = poll
      })
      commit('SET_POLLS', {polls: pollsMap})
    } catch (err) {
      // TODO: Error logging
      console.error(err)
    }
  },
  // TODO: Allow deleting polls
  async createPoll({state, commit}, {question, multiple, change, hidden, options}) {
    const poll = {
      question,
      multiple,
      change,
      hide_results: hidden
    }
    poll.options = options.filter(option => option.text).map(option => {
      return {text: option.text, order: option.order}
    })
    try {
      const newPoll = await this.$axios.$post(`/group/${state.groupId}/poll`, poll)
      commit('ADD_POLL', {poll: newPoll})
    } catch (err) {
      // TODO: Error logging
      console.error(err)
    }
  },
  async vote({state, commit}, {poll, option}) {
    if (option.selected) {
      // Un-vote
      // commit('SET_OPTION', { option, value: false })
      try {
        const newPoll = await this.$axios.$post(`/group/${state.groupId}/poll/${poll.id}/unvote`, {option: option.id})
        commit('ADD_POLL', {poll: newPoll})
      } catch (err) {
        // TODO: Error logging
        console.error(err)
      }
    } else {
      // Vote
      // commit('SET_OPTION', { option, value: true })
      try {
        const newPoll = await this.$axios.$post(`/group/${state.groupId}/poll/${poll.id}/vote`, {option: option.id})
        commit('ADD_POLL', {poll: newPoll})
      } catch (err) {
        // TODO: Error logging
        console.error(err)
      }
    }
  }
}

export const mutations = {
  SET_GROUP(state, {groupId}) {
    state.groupId = groupId
  },
  SET_POLLS(state, {polls}) {
    state.polls = polls
  },
  ADD_POLL(state, {poll}) {
    Vue.set(state.polls, poll.id, poll)
  },
  // SET_OPTION(state, {option, value}) {
  //   Vue.set(option, 'selected', value)
  //   if (value) {
  //     option.votes += 1
  //   } else {
  //     option.votes -= 1
  //   }
  // }
}
