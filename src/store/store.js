import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    stringCounter: state => {
      return state.counter + ' Clicks'
    },
    value: state => {
      return state.value
    }
  },
  mutations: {
    increment: (state, payload = 1) => {
      state.counter += payload
    },
    decrement: (state, payload = 1) => {
      state.counter -= payload
    },
    updateValue: (state, payload) => {
      state.value = payload
    }
  },
  actions: {
    increment: (context, payload) => { // just wanted one example with context, instead of desctructured commit part of context
      context.commit('increment', payload)
    },
    decrement: ({commit}, payload) => {
      commit('decrement', payload)
    },
    asyncIncrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('increment', payload.by)
      }, payload.duration)
    },
    asyncDecrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by)
      }, payload.duration)
    },
    updateValue: ({commit}, payload) => {
      commit('updateValue', payload)
    }
  }
})
