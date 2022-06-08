<template>
  <div>
    <section style="background-color: #eee;">
      <div class="container py-5">
        <div class="row pb-4">
          <div class="justify-content-center align-content-center text-center">
            <h1>Hi</h1>
            <form @submit.prevent="profile" class="form">
              <div class="form-group">
                <input
                type="text"
                id="userName"
                placeholder="handle"
                v-model = "userName"
                >
                <div>
                  <button type="submit" class="btn">Search</button>
                </div>
              </div>

            </form>
          </div>
        </div>
        <div class="row">
<!--          profile-->
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body text-center">
<!--                <img v-bind:src="require('images/rails.png')" />-->
                <img :src=photo alt="avatar"
                     class="img-fluid" style="width: 150px;">
                <h5 class="my-3">{{name}}</h5>
                <div class="d-flex justify-content-center mb-2">
                  <button type="button" class="btn btn-outline-primary ms-1">Codeforces Profile</button>
                </div>
              </div>
            </div>
          </div>
<!--          profile end-->
          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{{ name }}</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Handle</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{{ handle }}</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Friends</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{{ friends }}</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Contribution</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{{ contribution }}</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Registration</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{{  }} ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Country</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ country }}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">City</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{city}}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Organization</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ organization }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <br>
            </div>

            <div class="row pt-3 mx-0">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Current Rating</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ currentRating }}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Max Rating</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ maxRating }}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Current Rank</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{ currentRank }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Profile',
  components:{

  },
  data(){
    return{
      userName: 'hossain95',
      handle: '',
      name: '',
      currentRating: '',
      maxRating: '',
      country: '',
      city: '',
      organization: '',
      friends: '',
      photo: '',
      registration: '',
      contribution: '',
      currentRank: '',
      response: ''
    }
  },
  methods:{
    profile(){
      axios.get(`https://codeforces.com/api/user.info?handles=${this.userName}`)
          .then(res =>{
            this.response = res.data.status;
            var result = res.data.result[0];
            this.handle = result.handle
            this.name = result.firstName + " " + result.lastName;
            this.friends = result.friendOfCount;
            this.city = result.city;
            this.contribution = result.contribution;
            this.country = result.country;
            this.maxRating = result.maxRating;
            this.organization = result.organization;
            this.currentRank = result.rank;
            this.currentRating = result.rating;
            this.photo = result.titlePhoto;
            console.log(this.photo)
            console.log(result);
          })
          .catch(error =>[
              console.log(error)
          ])
    }
  },
  created() {
    this.profile();
  }
}
</script>

<style scoped>

</style>
