<template>
  <div>
    <Navbar/>
    <CodeforcesNav/>
    <hr>
    <router-view/>
  </div>
</template>
<script>
import Navbar from "@/navbar/Navbar";
import CodeforcesNav from "@/navbar/CodeforcesNav";

export default {
  name: "App",
  components:{
    CodeforcesNav,
    Navbar
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>
