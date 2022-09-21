<template>
   
    <nav class="navbar is-success " style="border-radius: 15px;" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link to='/' class="navbar-item">
            <img src="../assets/images/logos.png" class="logo">
          </router-link>
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" 
          @click="isopen = !isopen" v-bind:class="{'is-active':isopen}">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active':isopen}">
          <div class="navbar-start">
            <a href="/" class="navbar-item">
            {{ $t('home')}}
            </a>
      
            <a class="navbar-item">
              {{$t('news')}}
            </a>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <i class="fa-solid fa-language" style="font-size:20px"></i> &nbsp {{$t('language')}}
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item" @click="Change('uz')">
                    O'zbek tili
                </a>
                <a class="navbar-item" @click="Change('ru')">
                    Pусский язык
                </a>
                <a class="navbar-item" @click="Change('en')">
                 English
                </a>
               
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/register" style="border-radius: 15px;" v-if="!$store.state.isAuthenticated" class="button is-primary">
                  <strong>{{$t('register')}}</strong>
                </router-link>
                <router-link to="login" style="border-radius: 15px;"  v-if="!$store.state.isAuthenticated" class="button is-light">
                 {{$t('login')}}
                </router-link>
                <a @click="Logout" style="border-radius: 15px;"  v-if="$store.state.isAuthenticated" class="button is-danger">
                  {{$t('logout')}}
                 </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
  
</template>

<script>
import axios from 'axios'

    export default {
        data(){
          return{
            isopen:false,
          }
        },
        methods:{
            Change(value){
                this.$i18n.locale = value
                localStorage.removeItem('language')
                localStorage.setItem('language',value)
                console.log(value)
            },
            Logout(){
              this.$store.commit('RemoveToken')
              axios.defaults.headers.common['Authorization'] = ''
              localStorage.removeItem('token')
              this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/css/navbar.css'
</style>