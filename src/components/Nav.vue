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
            <li class="nav-item">
              <a class="nav-link active d-icons" href="darshboard.php"><i class="fa fa-home"></i></a>
            </li>
            <li class="nav-item mr-4">
              <a class="nav-link d-icons" href="#"><i class="fa fa-instagram"></i></a>
            </li>
            <li class="nav-item  mr-2">
              <!-- </div> -->
             <div><router-link to="/register" class="btn nav-link btn-secondary">Sign up</router-link> </div>
            </li>
          </ul>
      </div>
  </nav>
  </div>
</template>

<script>
export default {
  data:()=>({


  })
}
</script>

<style scoped>
    .nav-link1 {
      font-weight: 600;
      color: black;
    }
</style>