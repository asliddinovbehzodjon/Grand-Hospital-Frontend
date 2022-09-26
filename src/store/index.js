import { createStore } from 'vuex'

export default createStore({
  state: {
    lang:'',
    token:'',
    isAuthenticated:false,
    cart:[]
  },
  getters: {
      // count:state => state.cart.length
  },
  mutations: {
    Addqty(state,id){
      const item = state.cart.find(product => product.id === id)
      if(item){
        item.qty++
      }
    },
    Removeqty(state,id){
      const item = state.cart.find(product => product.id === id)
      if(item.qty>1){
        item.qty--
      }
      else{
      state.cart = state.cart.filter(product=> product.id !== id)
      }
    },
    AddCart(state,item){
      const addeditem = state.cart.find(product => product.id === item.id)
      if(addeditem){
        addeditem.qty +=1
      }
      else{
        state.cart.push({...item,qty:1})
      }
    },
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
