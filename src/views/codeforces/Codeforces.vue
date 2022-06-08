<template>
  <div>
    <CodeforcesNav/>
    <router-view/>
  </div>
</template>

<script>
import CodeforcesNav from "@/navbar/CodeforcesNav";

export default {
  name: 'Codeforces',
  components: {
    CodeforcesNav
  }
}
</script>

