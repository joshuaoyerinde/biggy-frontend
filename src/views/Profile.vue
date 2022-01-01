<template>
   <div class="container-fluid">
    <nav class="card border-1 fixed-top navbar-expand-lg p-2">
      <div class="container">
          <ul class="nav justify-content-end">
          <ul class="nav mr-auto ml-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link nav-link1 active brand">Biggy</router-link>
            </li>
          </ul>
            <li class="nav-item  mr-2">
              <!-- </div> -->
              <div>
                  <div class="btn nav-link btn-secondary">{{response.email}}</div>
              </div>
            </li>
          </ul>
      </div>
    </nav>
       <div class="container mt-5">
           <div class="row ">
               <div class="col-md-8 mt-5 ">
                    <div class="title-text">   
                       <h3>You're Welcome to the year of another Champ</h3>
                        <p>You can be our finest Winner for this year</p>
                    </div> 
               </div>
           </div>
           <div class="row justify-content-start ">
                
               <div class="col-md-6 mt-3 ">
                    <div>   
                       <img src="../assets/coke-bigi-new.png" class="img-fluid" alt="">
                    </div> 
               </div>
               <div class="col-md-6 mt-5 p-3">
                   <div>
                       here is your percentage, we're goin to 50%
                      <p>Your Count: <b>{{response.count}}%</b> </p>  
                       <div class="progress mb-3">
                        <div class="progress-bar text-center percent" :style="{width:`${response.count}px`}">{{response.count}}%</div>
                       </div>
                   </div>
                   <div class="input-group mb-3">
                        <input type="text" class="form-control" :value="url + response.link" id="myInput" disabled >
                        <div class="input-group-append">
                             <button class="btn btn-secondary" @click="copyLink">copy</button>
                        </div>
                    </div>
                    <p class="small-text">click copy to Share your links as to promote your count</p>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
// import Navbar from '../components/Nav.vue'
import  * as Cookies from 'cookies-js'
// import  Axios  from 'axios'
export default {

    name:"Profile",
    data:()=>({
        response:'',
        url:"https://biggytest.netlify.app/#/register",
        details:''
    }),
    // components:{
    //     Navbar
    // },
    methods:{
        copyLink(){
            let copyText = document.getElementById("myInput")
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);
        }
    },
    created(){
        let token = Cookies.get("access_token")
        let tk_data = JSON.parse(atob(token.split('.')[1]))
        this.response = tk_data.token
        // console.log(this.response);
    },
    // mounted(){
    //     // get the deatails after login
    //     let token = Cookies.get("token_link")
    //     console.log(token)
    //     const API = `http://localhost:5000/api/info/${token}`
    //       Axios.get(API).then(res =>{
    //           if(res.status == 200){
    //               this.details = res.data.resp
    //           }else{
    //               this.$router.push('/')
    //           }
    //       })
    // }
}
</script>
<style scoped>
    .small-text{
        /* font-variant: small-caps; */
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 15px;
        font-style: italic;
        font-weight: 600;
    }
    .title-text h3{
        font-variant: small-caps;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
     .nav-link1 {
      font-weight: 600;
      color: black;
    }
    .percent{
        font-size: 12px;
    }
    .progress{
        width: 50%;
    }
</style>