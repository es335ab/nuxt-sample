export const state = () => ({
  userList: [{
    id: 1,
    name: 'Taro'
  }],
  userDetails: {}
})

export const getters = {
  userListLength(state) {
    return state.userList.length
  }
}

export const mutations = {
  addUser(state, user) {
    state.userList.push(user)
  }
}

export const actions = {
  addUser({ commit }) {
    const id = Math.random()
    const user = {
      id,
      name: `Taro: ${id}`
    }

    commit('addUser', user)
  }
}