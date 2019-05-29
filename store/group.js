export const state = () => {
  return {
    ready: false,
    groups: []
  }
}

export const getters = {
  ready: state => state.ready,
  list: state => state.groups,
  getGroupById: state => id => {
    console.info('getting group ', id)
    console.info(state.groups)
    return state.groups.find(group => group.id === id)
  }
}

export const actions = {
  async fetchGroups({ commit }) {
    try {
      const groups = await this.$axios.$get('/group')
      console.info(groups)
      commit('SET_GROUPS', { groups })
    } catch (err) {
      // TODO: Error logging
      console.error(err)
    }
  }
}

export const mutations = {
  SET_GROUPS(state, { groups }) {
    state.groups = groups
    state.ready = true
  }
}
