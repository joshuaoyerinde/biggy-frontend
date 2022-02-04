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
                    <div >
                        <router-link to="/" class="btn nav-link btn-secondary">Admin</router-link> 
                    </div>
                    </li>
                </ul>
            </div>
        </nav>
        <!--  -->
        <div class="">
            <div class="heading-title">
                Welcome to home of power
            </div>

            <div class="mt-5 row justify-content-center p-3">
                <div class="col-md-4">
                    <img src="../assets/coke-bigi-new.png" class="img-fluid" alt="">
                </div>
                <!-- <button @click="timeUp">Time</button> -->
                <div class="col-md-8">
                    <div class="title-list">
                        List of the Top ten(10) winner
                    </div>
                    <div class="row shadow mt-3">
                        <table class="table p-2 table-collapse " v-if ="show1">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(winner,i) in details" :key="winner._id">
                                    <td>{{i + 1}}</td>
                                    <td><div>{{winner.name}} {{winner.lastname}}</div></td>
                                    <td>{{winner.email}}</td>
                                    <td>{{winner.count}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div v-if="show2" style="text-align: center" class="col-md-12">
                            No record
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data:()=>({
        details : "",
        show1: false,
        show2: true
    }),
    mounted(){
        let URL = "https://biggyapp.herokuapp.com/api/info";
        axios.get(URL).then(resp => {
            let winner = resp.data.response
            if(resp.status == 200){
                this.details = winner
                this.show1 = true
                this.show2 = false
                console.log(this.details.length);
                // console.log("whala ooooo")
            }else{
                 this.show1 = false
                this.show2 = true
            }
        })
    },
    // methods:{
    //     timeUp(){
    //         let currentDateObj = new Date();

    //         let minute = currentDateObj.getTime();
    //         let adminute = 1641474341197 - minute
    //         console.log(adminute)
    //         localStorage.setItem('timeset', JSON.stringify( adminute))
    //     }
    // }
}
</script>
<style scoped>
     .nav-link1 {
      font-weight: 600;
      color: black;
    }
    .heading-title{
        margin: 100px 10% 20px;
        font-variant: small-caps;
        font-weight: 600;
    }
    .title-list{
        font-weight: 500;
    }
</style>