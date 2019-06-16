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
    console.log('HERE IS THE Before ' + state.tutorial);
    console.log('HERE IS THE ' + tutorial);
    commit('SET_TUTORIAL', {tutorial: tutorial})
    console.log('HERE IS THE after ' + state.tutorial);
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
