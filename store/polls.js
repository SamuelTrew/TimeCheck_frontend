import Vue from 'vue'

const DUMMY_POLLS_DATA = [
  {
    id: 'a1b2',
    question: 'What food should we get?',
    options: [
      {
        name: 'Chinese',
        order: 3,
        votes: 2,
      },
      {
        name: 'Dominos',
        order: 1,
        votes: 4
      },
      {
        name: 'I don\'t care :D',
        order: 4,
        votes: 1
      },
      {
        name: 'Tacos',
        order: 2,
        votes: 0
      }
    ],
    multiple: true
  },
  {
    id: 'bcd3',
    question: 'Who is the best?',
    options: [
      {
        name: 'Matthew',
        order: 1,
        votes: 5,
        selected: true
      },
      {
        name: 'David',
        order: 2,
        votes: 6
      },
      {
        name: 'Pull',
        order: 3,
        votes: 3
      },
      {
        name: 'Radhika',
        order: 4,
        votes: 1
      },
      {
        name: 'Radhika',
        order: 4,
        votes: 1
      },
      {
        name: 'Radhika',
        order: 4,
        votes: 1
      },
      {
        name: 'Radhika',
        order: 4,
        votes: 1
      }
    ]
  },
  { id: 'test1', question: 'Test' },
  { id: 'test2', question: 'Test' },
];
const DUMMY_POLLS_DATA_MAP = {}
DUMMY_POLLS_DATA.forEach(poll => {
  DUMMY_POLLS_DATA_MAP[poll.id] = poll
})

export const state = () => {
  return {
    polls: DUMMY_POLLS_DATA_MAP
  }
}

export const getters = {
  map: state => state.polls,
  list: state => Object.values(state.polls),
  getPollById: state => id => {
    return { ...state.polls[id] }
  },
}

export const actions = {
  createPoll({ commit, getters }, poll) {
    const id = getters.list.length
    commit('ADD_POLL', { id, ...poll })
  },
  vote({ commit }, { poll, option }) {
    if (option.selected) {
      // Un-vote
      commit('SET_OPTION', { option, value: false })
      // TODO: Tell backend
    } else {
      // Vote
      commit('SET_OPTION', { option, value: true })
      if (!poll.multiple) {
        // Un-vote others
        poll.options.forEach(opt => {
          if (opt !== option) {
            if (opt.selected) {
              commit('SET_OPTION', { option: opt, value: false })
            }
          }
        })
      }
    }
  },
}

export const mutations = {
  ADD_POLL(state, poll) {
    Vue.set(state.polls, poll.id, poll)
  },
  SET_OPTION(state, { option, value }) {
    Vue.set(option, 'selected', value)
    if (value) {
      option.votes += 1
    } else {
      option.votes -= 1
    }
  }
}
