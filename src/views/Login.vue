<template>
<div class="container">
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
                                        <form @submit.prevent="onSubmitLogin" novalidate class="needs-validation" autocomplete="off">
                                                <div class="text-center">Register here</div>
                                                <!-- <div class="validate">{{message}}</div> -->
                                                <div class="form-group row justify-content-center mt-3">
                                                    <div class="col-md-10 col-lg-10 mx-auto col-xl-10 mb-2">
                                                        <input type="text" id="email" v-model="email" class="1-hidden input-width form-control" placeholder="Email">
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
                                             Register here?<router-link to="/register/biggy9ija">Sign up</router-link>
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
import  axios  from 'axios'
import  * as Cookies from 'cookies-js'
export default {
    data:()=>({
        email:'',
        loading:false
    }),
    methods:{
        onSubmitLogin(){
            this.loading = true
            let URL = "https://biggyapp.herokuapp.com/api/auth/login"
            let { email } = this
            let saveInfo = {email}
            axios.post(URL, saveInfo).then(res => {
                // console.log(res.data)
                if(res.status == 200){
                    Cookies.set('access_token', res.data.response);
                    setTimeout(() => {
                        this.loading = false
                        this.$router.push('/profile')
                    }, 2000);
                }else{
                    let msg = "enter a valid email"
                    console.log(msg)
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
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
    /* font-family: 'Courier New', Courier, monospace; */
    font-size: 15px;
    color: black  ;
    font-weight: 400;
}
.input-width:focus{
    border: 2px solid #8e8e8e !important;
    outline: 2px solid #FAFAFA !important;
}
.input-btn{
    background-color:#8e8e8e;
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
</style>