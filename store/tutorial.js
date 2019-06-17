export const state = () => {
  return {
    tutorial: true,
    groupId: null
  }
}

export const getters = {
  tutorial: state => state.tutorial,
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
  async setTutorial({state, commit}, tutorial) {
    commit('SET_TUTORIAL', {tutorial: tutorial})
    // await this.$axios.$post(`/group/${state.groupId}/tutorial`, tutorial)
  },
}

export const mutations = {
  SET_GROUP(state, {groupId}) {
    state.groupId = groupId
  },
  SET_TUTORIAL(state, {tutorial}) {
    if (tutorial === undefined) {
      state.tutorial = true
    } else {
      state.tutorial = tutorial
    }
  },
}
