<template>
    <div class="container mt-3">
       <div class="columns">
        <div class="column is-4 is-offset-4">
            <form @submit.prevent="SubmitForm">
                
                  <div class="field">
                    <label class="label has-text-centered">{{$t('phone')}}</label>
                    <div class="control">
                      <input class="input has-text-centered" type="text" placeholder="+998 ** *** ** **" v-model="num">
                    </div>
                    <p class="help is-success"></p>
                  </div>
                  <div class="field">
                    <label class="label has-text-centered">{{$t('password')}}</label>
                    <div class="control">
                      <input class="input has-text-centered" type="password" placeholder="******" v-model="pas1">
                    </div>
                    <p class="help is-success"></p>
                  </div>
                  <div class="notification is-danger" v-if="errors.length">
                    <p v-for="(error,index) in errors">{{index+1}}.{{error}}</p>

                  </div>
                  <div class="field ">
                    <button class="button is-success">{{$t('login')}}</button>
                  </div>
            </form>
        </div>
       </div>

    </div>
</template>

<script>
  import axios from 'axios'
    export default {
      data(){
        return{
          num:'',
          pas1:'',
          errors:''
        }
      },
      methods:{
        SubmitForm(){
          this.errors = []
          if(!this.num.length){
            this.errors.push("Enter phone number")
          }
          if(!this.pas1.length){
            this.errors.push("Enter password")
          }
        
          const form = {
            phone: this.num,
            password:this.pas1
          }
          axios.post('auth/token/login/',form).then(res=>{
            // console.log(res.data.auth_token)
            this.$store.commit('SetToken',res.data.auth_token)
            axios.defaults.headers.common['Authorization'] = 'Token '+res.data.auth_token
            localStorage.setItem('token',res.data.auth_token)
            this.num = ''
            this.pas1 = ''
            this.pas2 = ''
            this.$router.push('/')
          }).catch(error=>{
            if (error.response) {
                                for (const property in error.response.data) {
                                    this.errors.push(`${property}: ${error.response.data[property]}`)
                                }
                            } else if (error.message) {
                                this.errors.push('Something went wrong. Please try again!')
                            }
          })

           
          
        }
      }
    }
</script>

<style lang="scss" scoped>
@import '../assets/css/register.css'
</style>