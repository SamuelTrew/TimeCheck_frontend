export const state = () => {
  return {
    ready: false,
    details: null,
    loggedIn: false,
    admin: false,
    showSidebar: false
  }
}

export const getters = {
  ready: state => state.ready,
  showSidebar: state => state.showSidebar,
  user: state => ({
    ready: state.ready,
    details: state.details,
    loggedIn: state.loggedIn,
    admin: state.admin
  })
}

export const actions = {
  async init({ commit, dispatch }) {
    const token = localStorage.getItem('user:token')
    console.info("Token: ", token)
    if (token) {
      this.$axios.setToken(token, 'Token')
      try {
        const details = await this.$axios.$get('/user/me')
        commit('LOGIN', { details, token })
        dispatch('groups/fetchGroups', null, { root: true })
        if (this.$router.currentRoute.name === 'index') {
          this.$router.push('/dashboard')
        }
      } catch (err) {
        // TODO: Error logging
        console.error(err)
        dispatch('logout', { tellServer: false })
      }
    } else {
      dispatch('logout', { tellServer: false })
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
    this.$router.push('/dashboard')
    // TODO: For use in showing unconfirmed user details temporarily
    // localStorage.setItem('user:details', JSON.stringify(details))
    if (this.$router.currentRoute.name === 'index') {
      this.$router.push('/dashboard')
    }
  },
  logout({ commit }, { tellServer = true } = {}) {
    // TODO: Change redirect to only if required (i.e. auth required page)
    // if (rootState.route.name === 'account')
    if (tellServer) {
      this.$axios.get('/user/logout')
    }
    if (this.$router.currentRoute.name !== 'index') {
      this.$router.push('/')
    }
    // TODO: Logging out page (fixes the race condtion)
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
    state.details = null
    state.loggedIn = false
    state.ready = true
  }
}
