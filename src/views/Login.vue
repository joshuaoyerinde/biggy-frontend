<template>
  <div class="container">
      <!-- <div class="login row justify-content-center mx-auto mt-5">
        <div class="col-md-6 shadow-sm p-2">
            <form @submit.prevent="onRegister">
              <div class="mt-2 mb-3">
                Register here
              </div>
                <div class="form-group">
                    <input type="" class="form-control mb-2" placeholder="name">
                    <input type="" class="form-control" placeholder="phone number">
                </div>
                <button type="submit" class="btn btn-secondary shadow-sm">Register</button>
            </form>
        </div>
      </div> -->
       <div class="row justify-content-center mt-3">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 my-4 card-box">
                    <div class="card-body">
                        <div class="row justify-content-center">
                            <div class="col-md-5 ">
                                <div class="card o-hidden border-1">
                                    <div class="card-body">
                                        <h3 class="card-title instagram text-center mt-2">Biggy</h3>
                                        <div class="text-center card-text mt-3">
                                           <div class="">
                                           Win our price today <br> cheers                 
                                           </div>
                                           <div class="fa-spin" v-if="loading">
                                             <i class="fa fa-spinner fa-spin"></i>
                                           </div>
                                        </div>
                                        <div><hr></div>
                                        <form @submit.prevent="onSubmitRegistration" novalidate class="needs-validation" autocomplete="off">
                                                <div class="text-center">Register here</div>
                                                <div class="validate">{{message}}</div>
                                                <div class="form-group row justify-content-center mt-3">
                                                    <div class="col-md-10 col-lg-10 mx-auto col-xl-10 mb-2">
                                                        <input type="text" id="email" v-model="name" class="1-hidden input-width form-control" placeholder="Firstname">
                                                    </div>
                                                    <div class="col-md-10 mx-auto mt-2 mb-2">
                                                        <input type="text" v-model="lastname" id="name" class="input-width form-control" placeholder="Lastname">
                                                    </div>
                                                    <div class="col-md-10 mx-auto mt-2 mb-2">
                                                        <input type="text" v-model="phone" id="usname" class="input-width form-control" placeholder="Phonenumber">
                                                    </div>
                                                    <div class="col-md-10 mx-auto mt-2 mb-2">
                                                        <input type="text" v-model="email" id="pass" class="input-width form-control" placeholder="email">
                                                    </div>
                                                    <div class="col-md-10 mx-auto mt-3">
                                                        <input type="submit" name="submit" id="registerbtn" value="Sign-up" class="input-btn btn-block">
                                                    </div>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="card mt-3">
                                    <div class="card-body">
                                        <div class="card-title text-center">
                                             Have an account?<a href="loginpage.php"> Log in</a>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
   data:()=>({
     name:'',
     lastname:'',
     phone:'',
     email:'',
     message:'',
     loading:false   

   }),

   methods:{
     onSubmitRegistration(){
       this.$router.push('')
       this.loading = true
      const link = Math.random().toString(36).replace('0.', '');
      let {name,lastname, phone, email} = this
      let registrationData = {name,lastname, phone, email}
      registrationData = {...registrationData, link}
    
      if(name == "" && lastname == "" && phone == "" && email == ""){
        let msg = "Pls fill all the input required"
        this.message = msg
      }else{
        const URL = `http://localhost:5000/api/auth/register/${link}`
        Axios.post(URL, registrationData).then(res=>{
          if(res.status == 200){
            setTimeout(() => {
                this.loading = false
                console.log(res.data)
            }, 2000);
          }else{
            this.loading = true
          }
        })
        // console.log(registrationData);

      }
     }
   }
    
   
}
</script>
<style scoped>
.card-box{
    /* background-color: #FAFAFA; */
}
.card-text{
    color: #8e8e8e;
    font-weight: 700;
    font-size: 15px;
    font-family: Arial Unicode MS;
}
.input-width{
    /* width: 300px; */
    padding: 8px 8px;
    background-color:   #FAFAFA !important;
    border: 1px solid #8e8e8e !important;
    outline: none !important;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 17px;
    font-weight: 500;
}
.input-width:focus{
    border: 2px solid #8e8e8e !important;
    outline: 2px solid #FAFAFA !important;
}
.input-btn{
    background-color:#0095F6;
    padding: 4px 4px;
    outline: none;
    border-radius: 5px;
    border: none !important;
    font-family: Calibri (Body);
    font-size: 17px;
    font-weight: 600;
    color: white;
    letter-spacing: 2px;
}
.instagram{
    font-family: Brush Script MT;
    font-size: 50px;
}
.fa-spin{
  color: red;
  font-size: 20px;
}
.validate{
  color: red;
}
</style>
