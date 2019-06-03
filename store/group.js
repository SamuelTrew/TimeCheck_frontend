export const state = () => {
  return {
    ready: false,
    groups: {},
    colour: {
      backgroundColour: "#8B008B"
    },
  }
};

export const getters = {
  ready: state => state.ready,
  map: state => state.groups,
  list: state => Object.values(state.groups),
  getGroupById: state => id => {
    return state.groups[id] || null
  },
  colour: state => state.colour,
};

export const actions = {
  async fetchGroups({ commit }) {
    try {
      const groups_list = await this.$axios.$get('/group')
      const groups_map = {}
      groups_list.forEach(group => {
        groups_map[group.id] = group
      });
      commit('SET_GROUPS', { groups: groups_map })
    } catch (err) {
      // TODO: Error logging
      console.error(err)
    }
  },
  updateName({ commit }, { id, name }) {
    commit('SET_NAME', { id, name })
  },
  updateColour({commit}, {colour}) {
    commit('SET_COLOUR', { colour })
  }
};

export const mutations = {
  SET_GROUPS(state, { groups }) {
    state.groups = groups;
    state.ready = true;
  },
  SET_NAME(state, { id, name }) {
    state.groups[id].name = name;
  },
  SET_COLOUR(state, { colour }) {
    state.colour = colour;
  }
};
