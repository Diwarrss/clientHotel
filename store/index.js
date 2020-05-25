import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000'
//export const strict = true

export const state = () => ({
  user: null
})

export const getters = {}

export const mutations = {
  async SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  async login({ dispatch }, formData) {
    // Before loading login page, obtain csrf cookie from the server. Iniciar la protección CSRF
    await axios.get('/sanctum/csrf-cookie')
    await axios.post('/login', formData)
    //luego del login ejecutamos get User
    await dispatch('getUser')
  },
  getUser({ state, commit }) {
    axios
      .get('api/user')
      .then(res => {
        state.auth.loggedIn = true
        commit('SET_USER', res.data)
      })
      .catch(err => {
        state.auth.loggedIn = false
        commit('SET_USER', null)
      })
  },
  async logout({ state, commit }) {
    await axios
      .post('/logout')
      .then(res => {
        state.auth.loggedIn = false
        state.auth.user = null
        commit('SET_USER', null)
        //console.log(res)
      })
      .catch(err => {
        //console.error(err)
      })
  }
}
