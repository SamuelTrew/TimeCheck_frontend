export const state = () => {
  return {
    ready: false,
    details: {},
    loggedIn: false,
    admin: false
  }
}

export const getters = {
  user: state => ({
    ready: state.ready,
    details: state.details,
    loggedIn: state.loggedIn,
    admin: state.admin
  })
}

export const actions = {
  async init({ commit }) {
    const token = localStorage.getItem('user:token')
    console.info("Token: ", token)
    if (token) {
      this.$axios.setToken(token, 'Token')
      try {
        const response = await this.$axios('/user/me')
        commit('LOGIN', { details: response.data, token })
      } catch (err) {
        // TODO: Error logging
        console.error(err)
        commit('LOGOUT')
      }
    } else {
      commit('LOGOUT')
    }
  },
  login() {
    const origin = encodeURIComponent(window.location.origin)
    window.open(
      `https://id.mattcorp.com/jwt?client=timecheck&return=${origin}%2Fauth%2Fjwt`,
      'auth',
      'height=600,width=518'
    )
  },
  setUser({ commit }, { details, token }) {
    commit('LOGIN', { details, token })
    // TODO: For use in showing unconfirmed user details temporarily
    // localStorage.setItem('user:details', JSON.stringify(details))
  },
  logout({ commit }) {
    // TODO: Change redirect to only if required (i.e. auth required page)
    // if (rootState.route.name === 'account')
    this.$router.push('/')
    this.$axios.get('/user/logout')
    localStorage.removeItem('user:token')
    commit('LOGOUT')
  }
}

export const mutations = {
  LOGIN(state, { details, token }) {
    this.$axios.setToken(token, 'Token')
    localStorage.setItem('user:token', token)
    state.details = details
    state.loggedIn = true
    state.ready = true
  },
  LOGOUT(state) {
    this.$axios.setToken(false)
    localStorage.removeItem('user:token')
    state.details = {}
    state.loggedIn = false
    state.ready = true
  }
}
