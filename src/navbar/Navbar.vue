<template>
  <div class="row">
    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">Competitive Programming</router-link>
        </div>
        <ul class="nav navbar-nav navbar-right d-flex flex-row justify-content-start align-items-end">
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>

export default {
  name: "Navbar",
  components:{
  }
}
</script>
<style>
nav ul li{
  float: left;
  border: 0 !important;
  margin: 0px;
  padding-right: 10px;
  font-size: 18px;
}
.navbar-header{
  font-size: 18px;
}
nav ul li a{
  text-decoration: none !important;
}
</style>