import Vue from 'vue'

export const state = () => {
  return {
    calendars: {},
    groupDates: [],
    personalDates: [],
    availableDates: { start: new Date(2019, 5, 17), end: new Date(2019, 5, 21) },
    groupId: null
  }
}

export const getters = {
  personalDates: state => state.personalDates,
  groupDates: state => state.groupDates,
  availableDates: state => state.availableDates,
}

export const actions = {
  async fetchAvailableDates({commit}, groupId) {
    commit('SET_GROUP', {groupId})
    try {
      const calendar = await this.$axios.$get(`/group/${groupId}/calendar`)
      commit('SET_CALENDAR', {calendar})
    } catch (err) {
      // TODO: Error logging
      console.error(err)
    }
  },
  setAvailableDate({commit}, {availableDates}) {
    commit('SET_AVAILABLE_DATE', {availableDates})
  }
}

export const mutations = {
  SET_GROUP(state, {groupId}) {
    state.groupId = groupId
  },
  SET_CALENDAR(state, {calendar}) {
    state.calendar = calendar
  },
  SET_AVAILABLE_DATE(state, {availableDate}) {
    state.availableDates = availableDate
  }
}
