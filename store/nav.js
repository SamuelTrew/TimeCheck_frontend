// States
export const state = () => ({
  showSidebar: false
})

// Getters
export const getters = {
  showSidebar: state => state.showSidebar,
}

// actions
export const actions = {
  toggleSidebar({commit}) {
    commit('TOGGLE_SIDEBAR')
  }
}

// mutations
export const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.showSidebar = !state.showSidebar
  }
}
