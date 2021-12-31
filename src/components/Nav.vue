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
                <router-link to="/register/biggy9ija" class="btn nav-link btn-secondary">Register here</router-link> 
              </div>
            </li>
          </ul>
      </div>
  </nav>
  </div>
</template>

<script>
// import * as Cookie from 'cookies-js'
export default {
  data:()=>({
   
  }),
  
}
</script>

<style scoped>
    .nav-link1 {
      font-weight: 600;
      color: black;
    }
</style>