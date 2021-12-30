<template>
   <div>
       <Navbar/>
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
                   <div class="input-group mb-3">
                        <input type="text" class="form-control" value="https://localhost:8080/joshua" id="myInput" disabled >
                        <div class="input-group-append">
                             <button class="btn btn-secondary" @click="copyLink">copy</button>
                        </div>
                    </div>
                    <p class="small-text">Share your links as to promote your count</p>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
import Navbar from '../components/Nav.vue'

export default {

    name:"Profile",

    data:()=>({

    }),
    components:{
        Navbar
    },
    methods:{
        copyLink(){
            let copyText = document.getElementById("myInput")
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);
           let uu = 
           console.log(uu)
        }
    }
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
</style>