import Vue from 'vue'

export const state = () => {
  return {
    notes: {},
    groupId: null
  }
}

export const getters = {
  map: state => state.notes,
  list: state => Object.values(state.notes),
}

export const actions = {
  async fetchNotes({commit}, groupId) {
    commit('SET_GROUP', {groupId})
    try {
      const notesList = await this.$axios.$get(`/group/${groupId}/note`)
      const notesMap = {}
      notesList.forEach(note => {
        notesMap[note.id] = note
      })
      commit('SET_NOTES', {notes: notesMap})
    } catch (err) {
      // TODO: Error logging
      console.error(err)
    }
  },
  // TODO: Allow deleting / updating notes
  async createNote({state, commit}, note) {
    try {
      const newNote = await this.$axios.$post(`/group/${state.groupId}/note`, note)
      commit('ADD_NOTE', {note: newNote})
    } catch (err) {
      // TODO: Error logging
      console.error(err)
    }
  },
  async updateNote({state, commit}, {id, title, text}) {
    try {
      const newNote = await this.$axios.$put(`/group/${state.groupId}/note/${id}`, {title, text})
      commit('ADD_NOTE', {note: newNote})
    } catch(err) {
      // TODO: Error logging
      console.error(err)
    }
  },
  async deleteNote({state, commit}, note) {
    try {
      await this.$axios.$delete(`/group/${state.groupId}/note/${note.id}`)
      commit('DELETE_NOTE', {note})
    } catch(err) {
      // TODO: Error logging
      console.error(err)
    }
  }
}

export const mutations = {
  SET_GROUP(state, {groupId}) {
    state.groupId = groupId
  },
  SET_NOTES(state, {notes}) {
    state.notes = notes
  },
  ADD_NOTE(state, {note}) {
    Vue.set(state.notes, note.id, note)
  },
  DELETE_NOTE(state, {note}) {
    Vue.delete(state.notes, note.id)
  }
}
