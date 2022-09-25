<template>
    <div class="has-text-centered mt-3 mb-3 searchbar">
        <form @submit.prevent="SubmitMe">
          <input type="text" class="search" v-bind:placeholder="$t('Search')" v-model="key" required>
        <button class="searchbtn">{{$t('search')}}</button>
        </form>
    </div>
    <div class="container" v-if="search">
      <h1 class="has-text-centered title is-danger-me">{{$t('found')}}</h1>
      <div class="columns is-multiline">
        <div class="column is-2" v-for="drug in search" :key="drug.id">
          <div class="card"  >
              <div class="card-image">
                  <center>
                    <img :src="drug.image" alt="Placeholder image">
                  </center>
               
              </div>
              <div class="card-content">
                <h2 class="has-text-centered mt-3 mb-3 name">{{drug.title}}</h2>
              <div class="adress">
                <i class="fa-sharp fa-solid fa-circle-info"></i>  &nbsp;{{$t('description')}} : {{drug.description}}
              </div>
              <div class="adress">
                <i class="fa-solid fa-calendar-days"></i>  &nbsp;{{$t('expiration')}} : {{formatDate(drug.expiration_date)}}
              </div>
              <div class="adress">
                <i class="fa-solid fa-dollar"></i>  &nbsp;{{$t('price')}} : {{drug.price}} so'm
              </div>
              </div>
              
                <div class="badge" v-bind:class="{'afterme':active}"><i class="fa-regular fa-heart" @click="AddToCart(drug)"></i></div>
            </div>
            
            
           
       </div>

    </div>
    </div>
    <div class="container mt-3 mb-3 " v-if="search">
      <center>
       <div class="pagination">
        
           <a @click="searchpreviouspage" :class="{'disabled':!searchprevious}" >{{$t('previous')}}</a>
          
        
           <a class="active">{{searchcurrent_page_num}}</a>
          
           <a @click="searchnextpage" :class="{'disabled':!searchnext}">{{$t('next')}}</a>
         </div>
      </center>
      </div>
    <div class="container">
      <h1 class="has-text-centered title is-danger-me">Hamma dori-darmonlar</h1>
      <div class="columns is-multiline">
     <div class="column is-2" v-for="drug in drugs" :key="drug.id">
        <div class="card"  >
            <div class="card-image">
                <center>
                  <img :src="drug.image" alt="Placeholder image">
                </center>
             
            </div>
            <div class="card-content">
              <h2 class="has-text-centered mt-3 mb-3 name">{{drug.title}}</h2>
            <div class="adress">
              <i class="fa-sharp fa-solid fa-circle-info"></i>  &nbsp;{{$t('description')}} : {{drug.description}}
            </div>
            <div class="adress">
              <i class="fa-solid fa-calendar-days"></i>  &nbsp;{{$t('expiration')}} : {{formatDate(drug.expiration_date)}}
            </div>
            <div class="adress">
              <i class="fa-solid fa-dollar"></i>  &nbsp;{{$t('price')}} : {{drug.price}} so'm
            </div>
            </div>
            
              <div class="badge" v-bind:class="{'afterme':active}"><i class="fa-regular fa-heart" @click="AddToCart(drug)"></i></div>
          </div>
          
          
         
     </div>

    </div>
    </div>
   <div class="container mt-3 mb-3 ">
   <center>
    <div class="pagination">
     
        <a @click="previouspage" :class="{'disabled':!previous}" >{{$t('previous')}}</a>
       
     
        <a class="active">{{current_page_num}}</a>
       
        <a @click="nextpage" :class="{'disabled':!next}">{{$t('next')}}</a>
      </div>
   </center>
   </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment'
    export default {
      
      data(){
        return{
          active:false,
          drugs:[],
          next:"",
          previous:"",
          current_page_num:'',
          count:'',
          search:'',
          key:'',
          searchnext:"",
          searchprevious:"",
          searchcurrent_page_num:'',
          searchcount:'',
          url:'https://grandhospital.pythonanywhere.com'
        }
      },
      methods:{
        AddToCart(value){
          this.active = true
          this.$store.commit('AddCart',value)
          this.active = false

        },
        nextpage(){
          axios.get(this.next).then(res =>{
            this.doctors = res.data.results,
           
            this.next=res.data.next
            this.previous = res.data.previous
            this.current_page_num = res.data.current_page_num
            this.count=res.data.count
          })
        },
        searchnextpage(){
          axios.get(this.searchnext).then(res =>{
            this.search = res.data.results,
            this.searchnext=res.data.next
            this.searchprevious = res.data.previous
            this.searchcurrent_page_num = res.data.current_page_num
            this.searchcount=res.data.count
          })
        },
        previouspage(){
          axios.get(this.previous).then(res =>{
            this.doctors = res.data.results,
            
            this.next=res.data.next
            this.previous = res.data.previous
            this.current_page_num = res.data.current_page_num
            this.count=res.data.count
          })
        },
        searchpreviouspage(){
          axios.get(this.searchprevious).then(res =>{
            this.search= res.data.results,
            
            this.searchnext=res.data.next
            this.searchprevious = res.data.previous
            this.searchcurrent_page_num = res.data.current_page_num
            this.searchcount=res.data.count
          })
        },
        getdrugs(){
          axios.get('drugs/').then(res =>{
            this.drugs = res.data.results,
            console.log(res.data.results)
            this.next=res.data.next
            this.previous = res.data.previous
            this.current_page_num = res.data.current_page_num
            this.count=res.data.count
          })
        },
        SubmitMe(){
          axios.get(`searchdrug/${this.key}/`).then(res =>{
            this.search = res.data.results,
            this.searchnext=res.data.next
            this.searchprevious = res.data.previous
            this.searchcurrent_page_num = res.data.current_page_num
            this.searchcount=res.data.count
            this.key = ''
          })
        },
        formatDate(date) {
                return moment(date).format('DD-MM-YYYY');
            },
      },
      mounted(){
        this.getdrugs()
      }
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/css/drugs.css'
</style>