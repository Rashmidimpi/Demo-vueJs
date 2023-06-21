<template>
  <div>
    <pre>{{isLoggedIn}}</pre>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div v-if="isLoggedIn" class="card-body">
              <p class="h3 fw-bold text-success">Welcome User</p>
              <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eveniet neque provident maiores repudiandae sequi facere dolorem ad, cumque esse totam iure magni, quas doloribus laborum tempora ut ea, velit reprehenderit non.</p>
            </div>

            <div v-if="!isLoggedIn" class="card-body">
              <p class="h3 fw-bold text-danger">Thank You</p>
              <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sunt corporis! Vitae, quidem? Tempora non dolorem modi maiores? Illum impedit nesciunt temporibus asperiores ad mollitia harum vel culpa? Amet, temporibus.</p>
            </div>

          <div>
            <button v-if="!isLoggedIn" class="btn btn-success btn-sm m-1" @click="login()">Login</button>
            <button v-if="isLoggedIn" class="btn btn-danger btn-sm m-1" @click="logOut()">Log Out</button>
          </div> 
          </div>

        </div>
      </div>
    </div>
      </div>
</template>

<script>
  export default {
    name: 'AuthUser',
    data() {
      return {
        isLoggedIn : false,
      }
    },
    computed: {},
    // mounted() {},
    methods: {
      login(){
        this.isLoggedIn = true;
      },
      logOut(){
        this.isLoggedIn = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>