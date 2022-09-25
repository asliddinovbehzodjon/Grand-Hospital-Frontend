<template>
    <div class='container mt-5'>
      
       <div class="columns is-multiline">
        <div class="column is-offset-1 is-4">
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            Dori rasmi
                        </th>
                        <th>
                            Dori nomi
                        </th>
                        <th>
                            Dori narxi
                        </th>
                        <th>
                            Soni
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-if="!mycnt">
                       <center class="mt-5">
                        <h3 class="has-text-centered title" style="color:crimson"><i class="fa-solid fa-trash"></i> &nbsp;{{$t('empty')}}</h3>
                       </center>
                    </tr>
                    <tr v-else v-for="drug in drugs">
                        <td>
                            <img :src="drug.image" alt="" class="mydrug-image">
                        </td>
                        <td>
                   {{drug.title}}
                        </td>
                        <td>
                            {{drug.price}} so'm
                        </td>
                        <td class="qty">
                            <span @click="AddQty(drug.id)"><i class="fa-solid fa-plus"></i></span>
                            <span style="font-size:15px;font-weight:600">{{drug.qty}}</span>
                            <span @click="RemoveQty(drug.id)"><i class="fa-solid fa-minus"></i></span>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
            <center>
                <div v-if="mycnt " class="has-text-centered all">
                    {{summa}} so'm
                </div>
            </center>
        </div>
        <div class="column is-offset-1 is-3">
           <form @submit.prevent="SubmitShop">
            <input class="input drug-accept" type="text" :placeholder="$t('name')" v-model="name" required />
            <input class="input drug-accept" type="text" :placeholder="$t('phone')" v-model="tel" required />
            <center>
                <button class="button is-danger">{{$t('shop')}}</button>
            </center>
           </form>
        </div>

       </div>
  
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                drugs: this.$store.state.cart,
                token:'5588741562:AAHecX8ASj-vm8_bo3Bj0gN41ZF6nTv2gQ8',
                chat_id:5587212866,
                name:'',
                tel:''
            }
        },
        computed:{
      summa(){
        const cart = this.$store.state.cart
        let data = cart.reduce((a,b)=> a+b.qty*b.price,0)
        return data
      },
      mycnt(){
        const cart = this.$store.state.cart
        let data = cart.reduce((a,b)=> a+b.qty,0)
        return data
      }
      
        },
        
        methods:{
            AddQty(value){
                console.log('Working')
           this.$store.commit('Addqty',value)
            },
            RemoveQty(value){
           this.$store.commit('Removeqty',value)
            },
            SubmitShop(){
                if(!this.drugs){
                    alert("Not shopping yet")
                }
                else{
                let cart = JSON.parse(JSON.stringify(this.$store.state.cart))
                console.log(cart)
                let mine =`Xaridor ${this.name}\n
                Telefon raqam : ${this.tel}\n
                :Dorilar:\n`
                let text=''
                let count = 1
                let summa = 0
                for (let i in cart){
                    
                   text=`${count}) ${cart[i]['title']} ${cart[i]['qty']} ta - ${cart[i]['price']} so'm\n`
                   summa = summa+cart[i]['price']*cart[i]['qty']
                   count++  
                }
                text +=`Jami: ${summa} so'm`
                text = mine+text
                axios.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat_id}&text=${text}`)

                }
                this.name = ''
                this.tel=''
            },
           
        },
       
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/css/drug-accept.css'
</style>