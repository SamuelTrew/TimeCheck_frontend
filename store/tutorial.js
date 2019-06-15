import Vue from 'vue'

export const state = () => {
  return {
    tutorial: true,
    groupId: null
  }
}

export const getters = {
  tutorial: state => state.polls,
}

export const actions = {
  async fetchTutorialData({commit}, groupId) {
    commit('SET_GROUP', {groupId})
    try {
      const tutorial = await this.$axios.$get(`/group/${groupId}/tutorial`)

      commit('SET_TUTORIAL', {tutorial: tutorial})
    } catch (err) {
      console.error(err)
    }
  },
  async setTutorial({commit}, tutorial) {
    commit('SET_TUTORIAL', {tutorial: tutorial})
  },
}

export const mutations = {
  SET_GROUP(state, {groupId}) {
    state.groupId = groupId
  },
  SET_TUTORIAL(state, {tutorial}) {
    state.tutorial = tutorial || true
  },
}
