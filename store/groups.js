// Perform any preparation (e.g. setting of defaults)
const prepareGroup = group => {
  if (!group.colour) {
    group.colour = DEFAULT_COLOUR
  }
}

const DEFAULT_COLOUR = {
  backgroundColor: "#8e588b",
  color: "white"
}

export const state = () => {
  return {
    groups: {}
  }
}

export const getters = {
  map: state => state.groups,
  list: state => Object.values(state.groups),
}

export const actions = {
  async fetchGroups({ commit }) {
    try {
      const groupsList = await this.$axios.$get('/group')
      const groupsMap = {}
      groupsList.forEach(group => {
        prepareGroup(group)
        groupsMap[group.id] = group
      });
      commit('SET_GROUPS', { groups: groupsMap })
    } catch (err) {
      // TODO: Error logging
      console.error(err)
    }
  },
  updateName({ commit }, { id, name }) {
    commit('SET_NAME', { id, name })
  },
  updateColour({ commit }, { id, colour }) {
    commit('SET_COLOUR', { id, colour })
  },
  async getGroupById({ state, commit }, id) {
    const stateGroup = state.groups[id]
    if (stateGroup) {
      // Found a group with that id in the state list/map, so just return that
      return stateGroup
    } else {
      // Group not in the state data, so try fetching it directly
      try {
        const backendGroup = await this.$axios.$get(`/group/${id}`)
        // Group found, adding to state then returning
        prepareGroup(backendGroup)
        commit('ADD_GROUP', { group: backendGroup })
        return backendGroup
      } catch (err) {
        // TODO: Error handling
        console.error(err)
        // Couldn't find group in state data or from the backend
        return null
      }
    }
  }
}

export const mutations = {
  SET_GROUPS(state, { groups }) {
    state.groups = groups
    state.ready = true
  },
  ADD_GROUP(state, { group }) {
    state.groups[group.id] = group
  },
  SET_NAME(state, { id, name }) {
    state.groups[id].name = name
  },
  SET_COLOUR(state, { id, colour }) {
    state.groups[id].colour = colour
  }
}
