<template>
  <div class="home">
    <Navbar/>
    <div class="container-biggy" :style="{background:`url(${require('../assets/coke-bigi-new.png')})`}">
        <div class="biggy-title">
            <h4 class="biggy-inner  animate__animated animate__bounceInDown animate__slower">Welcome To the Biggy Price Of the Year</h4>
            <p class="biggy-small-inner animate__animated animate__bounceInUp animate__slower">Let enjoy the price</p>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import  Navbar from '../components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
<style lang="css" scoped>
  .container-biggy {
    width: 100%;  
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    /* background: url('../assets/ar-night-club-3030331.jpeg') */
  }
  
  .container-biggy::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* background: rgba(93,84,240,0.5); */
    background: rgba(93,84,240,0.5);
    background: -webkit-linear-gradient( to left, rgba(0, 0, 0, 0.993), rgb(0, 0, 0));
    background: -o-linear-gradient(to left, rgba(0, 0, 0, 0.815), rgba(5, 5, 5, 0.842));
    background: -moz-linear-gradient(to left, rgba(0, 16, 24, 0.5), rgba(14, 2, 19, 0.5));
    background: linear-gradient(to left, rgba(19, 20, 20, 0.89), rgba(0, 0, 0, 0.884));
    pointer-events: none;
  }
  .biggy-title .biggy-inner{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-variant: small-caps;
    font-size: 58px;
    font-weight: 600;
    color: white;
  }
  .biggy-title, .biggy-inner, .biggy-small-inner{
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    font-family: Brush Script MT;
    color: white ;
  }
</style>