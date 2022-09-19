import { createStore } from 'vuex'

export default createStore({
  state: {
    lang:'',
    token:'',
    isAuthenticated:false,
  },
  getters: {

  },
  mutations: {
    ChangeLanguage(value){
     localStorage.removeItem('language')
     localStorage.setItem('language',value)
    },
    InitializeStore(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      }
      else{
        state.token =''
        state.isAuthenticated = false
      }
    },
    SetToken(state,token){
      state.token = token
      state.isAuthenticated = true
    },
    RemoveToken(state){
      state.token = ''
      state.isAuthenticated = false
    }

  },
  actions: {
    ChangeLang({commit},value){
      commit('ChangeLanguage',value)
    }
  },
  modules: {
  }
})
