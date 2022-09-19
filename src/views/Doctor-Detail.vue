<template>
 
    <div class="mypage">
        <div class="mycards">
            <div class="card" >
                <div class="card-image">
                  <!-- <figure class="image"> -->
                    <center>
                      <img :src="doctor.image" alt="Placeholder image">
                    </center>
                 
                </div>
                <div class="card-content">
                  <h2 class="has-text-centered mt-3 mb-3 name">{{doctor.fullname}}</h2>
                <div class="adress">
                  📍 {{$t('address')}} : {{doctor.address}}
                </div>
                <div class="position">
                  👨‍⚕️ {{$t('lavozim')}}: {{doctor.job}}
                </div>
                <div class="phone">
                  📞 {{$t('phonenum')}}: {{doctor.phone}}
                </div>
              
                 
                </div>
                <footer class="card-footer">
                  
                   
                  </footer>
                  <div class="badge">{{doctor.profession}}</div>
              </div>
              
            <div class="table-data">
                <h1 class="has-text-centered title">{{date}}-{{month}} </h1>
                <table class="table has-text-centered">
                    <thead>
                      <tr>
                        
                        <th>🕔 {{$t('start')}}</th>
                        <th>☑️ {{$t('status')}}</th>
                        <th>📌 {{$t('book')}}</th>
                        
                
                      </tr>
                    </thead>
                    
                    <tbody>
                      <tr>
                        <td>08:00</td>
                        <td>❌ Band</td>
                        <td><button class="button is-success">Band qilish</button></td>
                      </tr>
                      <tr>
                        <td>09:00</td>
                        <td>❌ Band</td>
                        <td><button class="button is-success">Band qilish</button></td>
                      </tr>
                      <tr>
                        <td>10:00</td>
                        <td>❌ Band</td>
                        <td><button class="button is-success">Band qilish</button></td>
                      </tr>
                      <tr>
                        <td>11:00</td>
                        <td>❌ Band</td>
                        <td><button class="button is-success">Band qilish</button></td>
                      </tr>
                      <tr>
                        <td>13:00</td>
                        <td>❌ Band</td>
                        <td><button class="button is-success">Band qilish</button></td>
                      </tr>
                      <tr>
                        <td>14:00</td>
                        <td>❌ Band</td>
                        <td><button class="button is-success">Band qilish</button></td>
                      </tr>
                      <tr>
                        <td>15:00</td>
                        <td>❌ Band</td>
                        <td><button class="button is-success">Band qilish</button></td>
                      </tr>
                     </tbody>
                  </table>
            </div>
              
             
         </div>
    </div>
    
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                doctor_id:this.$route.params.id,
                doctor:'',
                date:'',
                month:''
            }
        },
        methods:{
                    getinfo(){
                        axios.get(`doctors/${this.doctor_id}/`).then(res=>{
                            this.doctor = res.data
                        })
                    },
                    getdate(){
                        let sana = new Date()
                        this.date = sana.getDate()
                        this.month = sana.getMonth()
                        
                        
                    }
        },
        mounted(){
            this.getinfo()
            this.getdate()
        }
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/css/doctors-detail.css'
</style>