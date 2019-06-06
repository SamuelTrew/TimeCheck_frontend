export const state = () => {
  return {
    polls: {}
  }
};

export const getters = {
  getPoll: state => name => {
    return state.polls[name].options;
  },
};

export const actions = {
  createPoll({ commit }, { name, options }) {
    commit('SET_POLL', { name, options })
  },
};

export const mutations = {
  SET_POLL(state, { name, options }) {
    state.polls[name].options = options;
  }
};
