export const state = () => {
  return {
    activity: [],
    groupId: null
  }
}

export const getters = {
  list: state => state.activity,
}

export const actions = {
  async fetchActivity({commit}, groupId) {
    commit('SET_GROUP', {groupId})
    try {
      const activity = await this.$axios.$get(`/group/${groupId}/activity`)
      commit('SET_ACTIVITY', {activity})
    } catch (err) {
      // TODO: Error logging
      console.error(err)
    }
  }
}

export const mutations = {
  SET_GROUP(state, {groupId}) {
    state.groupId = groupId
  },
  SET_ACTIVITY(state, {activity}) {
    state.activity = activity
  }
}
