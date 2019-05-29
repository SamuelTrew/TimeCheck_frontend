export const state = () => {
  return {
    groups: []
  }
}

export const getters = {
  list: state => state.groups,
  getGroupById: state => id => {
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
  }
}
