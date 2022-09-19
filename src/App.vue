<template>
  <Loading v-if="loading" />
 <div v-if="!loading">
  <nav>
    <navbar></navbar>
  </nav>
  <router-view :key="$route.fullPath" />
 </div>
</template>

<style lang="scss">
@import '../node_modules/bulma'
</style>
<script>
  import axios from 'axios'
  import Navbar from './components/Navbar.vue'
  import Loading from '@/components/Loading.vue'
  export default{
    name:'App',
    data(){
      return{
        loading:true,
      }
    },
    beforeCreate(){
      this.$store.commit('InitializeStore')
      if(localStorage.getItem('token')){
         let token = localStorage.getItem('token')
         axios.defaults.headers.common['Authorization'] = 'Token '+token
      }
      else{
        axios.defaults.headers.common['Authorization'] = ''
      }
    },
    components:{
     Navbar,Loading
    },
    mounted(){
      setTimeout(()=>{
        this.loading=false;
      },1500)
    }
  }
</script>
