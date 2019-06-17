export const state = () => {
  return {
    activity: [],
    allActivity: [],
    groupId: null
  }
}

export const getters = {
  list: state => state.activity,
  all: state => state.allActivity,
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
  },
  async fetchAllActivity({commit}) {
    try {
      const activity = await this.$axios.$get(`/activity`)
      commit('SET_ALL_ACTIVITY', {activity})
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
  },
  SET_ALL_ACTIVITY(state, {activity}) {
    state.allActivity = activity
  }
}
