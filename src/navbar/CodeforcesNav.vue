<template>
  <div class="container">
    <div class="row">
      <hr>
      <ul class="nav navbar-nav d-flex flex-row justify-content-center align-content-center">
        <li>
          <router-link to="/codeforces/profile">Profile &nbsp</router-link>|
        </li>
        <li>
          <router-link to="/codeforces/compare-profile"> Compare Profile &nbsp</router-link>|
        </li>
        <li>
          <router-link to="/codeforces/organization-standing"> University Standing &nbsp</router-link>|
        </li>
        <li>
          <router-link to="/codeforces/country-standing"> Country Standing</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: "CodeforcesNav",
  components:{
  }
}
</script>
<style>
ul li{
  float: left;
  border: 0 !important;
  margin: 0px;
  padding: 5px;
}
ul li a{
  text-decoration: none !important;
}
</style>