const state = {
  value: 0
}

const getters = {
  value: state => {
    return state.value
  }
}

export default {
  state,
  getters
}
