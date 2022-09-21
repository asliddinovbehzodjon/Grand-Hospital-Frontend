<template>
    <div class="has-text-centered mt-3 mb-3 searchbar">
        <form @submit.prever="SubmitMe">
          <input type="text" class="search" name="" id="" v-bind:placeholder="$t('Search')" required>
        <button class="searchbtn">{{$t('search')}}</button>
        </form>
    </div>
    <div class="container">
      <div class="columns is-multiline">
     <div class="column is-3" v-for="doctor in doctors" :key="doctor.id">
        <div class="card"  >
            <div class="card-image">
                <center>
                  <img :src="doctor.image" alt="Placeholder image">
                </center>
             
            </div>
            <div class="card-content">
              <h2 class="has-text-centered mt-3 mb-3 name">{{doctor.fullname}}</h2>
            <div class="adress">
              <i class="fa-solid fa-location-dot" style="color:#2CEA99"></i>  &nbsp;{{$t('address')}} : {{doctor.address}}
            </div>
            <div class="position">
              <i class="fa-solid fa-user-doctor" style="color:#50D5EA"></i>  &nbsp;{{$t('lavozim')}}: {{doctor.job}}
            </div>
            <div class="phone">
              <i class="fa-solid fa-phone" style="color:red;"></i>&nbsp; {{$t('phonenum')}}: {{doctor.phone}}
            </div>
          
             
            </div>
            <footer class="card-footer">
              
              <router-link :to="{name:'doctor-about',params:{id:doctor.id}}" class="card-footer-item"><i class="fa-solid fa-calendar-check" style="color:crimson"></i> &nbsp{{ $t('appointment')}}</router-link>
              </footer>
              <div class="badge">{{doctor.profession}}</div>
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

    export default {
      data(){
        return{
          doctors:[],
          next:"",
          previous:"",
          current_page_num:'',
          count:''
        }
      },
      methods:{
        nextpage(){
          axios.get(this.next).then(res =>{
            this.doctors = res.data.results,
            console.log(this.doctors),
            this.next=res.data.next
            this.previous = res.data.previous
            this.current_page_num = res.data.current_page_num
            this.count=res.data.count
          })
        },
        previouspage(){
          axios.get(this.previous).then(res =>{
            this.doctors = res.data.results,
            console.log(this.doctors),
            this.next=res.data.next
            this.previous = res.data.previous
            this.current_page_num = res.data.current_page_num
            this.count=res.data.count
          })
        },
        getdoctors(){
          axios.get('doctors/').then(res =>{
            this.doctors = res.data.results,
            console.log(this.doctors),
            this.next=res.data.next
            this.previous = res.data.previous
            this.current_page_num = res.data.current_page_num
            this.count=res.data.count
          })
        }
      },
      mounted(){
        this.getdoctors()
      }
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/css/doctors.css'
</style>