<template>
  <div>
    <section>
      <div class="container py-5">
        <div class="row pb-4">
          <div class="justify-content-center align-content-center text-center">
            <h1>Hi</h1>
            <form @submit.prevent="countryStanding" class="form">
              <div class="form-group">
                <input
                    type="text"
                    id="country"
                    placeholder="country"
                    v-model = "country"
                >
              </div>
              <div class="form-group">
                <input
                    type="text"
                    id="contestId"
                    placeholder="contestId"
                    v-model = "contestId"
                >
              </div>
              <button type="submit" class="btn">Search</button>
            </form>
          </div>
          <div>
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Standing</th>
                <th scope="col">Handle</th>
                <th scope="col">Points</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="user in standing" :key="user.handle">
                <th scope="row">{{user.localRank}}</th>
                <td>{{ user.rank }}</td>
                <td>{{ user.handle }}</td>
                <td>{{user.points}}</td>
              </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
    </section>
  </div>
</template>

<button type="submit" class="btn">Search</button>
<script>
import axios from "axios";

export default {
  name: 'CodeforcesCountryStanding',
  components:{

  },
  data(){
    return{
      country: 'Bangladesh',
      contestId: '1684',
      UserMap: new Map(),
      standing: []
    }
  },
  methods:{
    users(){
      axios.get(`https://codeforces.com/api/user.ratedList?activeOnly=true`)
          .then(response =>{
            var result = response.data.result;
            for(var i = 0; i < result.length; i++){
              if(result[i].country == this.country){
                var user = {
                  handle: result[i].handle
                }
                this.UserMap.set(result[i].handle, user)
              }
            }
            console.log("user map")
            console.log(this.UserMap)
          })
          .catch(error =>[
            console.log(error)
          ])
    },
    countryStanding(){
      this.standing = []
      console.log(this.contestId)
      axios.get(`https://codeforces.com/api/contest.standings?contestId=${this.contestId}&showUnofficial=false`)
          .then(response =>{
            // console.log(response.data.result)
            var result = response.data.result.rows;
            var pos = 1;
            for(var i = 0; i < result.length; i++){
              if(this.UserMap.get(result[i].party.members[0].handle)&&result[i].party.participantType == "CONTESTANT"){
                var user = {
                  localRank: pos,
                  handle: result[i].party.members[0].handle,
                  rank: result[i].rank,
                  points: result[i].points,
                  participantType: result[i].party.participantType
                }
                pos += 1;
                this.standing.push(user);
              }
            }
            console.log("Standing...")
            console.log(this.standing)
            //
            // for(var x in this.standing){
            //   console.log(x)
            // }
          })
          .catch(error =>[
            console.log(error)
          ])
    }
  },
  created() {
    this.users();
  }
}
</script>

<style scoped>

</style>
