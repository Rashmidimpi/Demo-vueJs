<template>
<!-- display state data using pre tag -->
<!-- <pre>{{ this.user }}</pre> -->
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="card shadow-lg">
          <div class="card-header bg-success text-white">
            <p class="h3">Register Here</p>
          </div>
          <div class="card-body bg-light">
            <form @submit.prevent="register()">
              <div class="mb-2">
                <input v-model="user.name" type="text" class="form-control" placeholder="Name">
              </div>
               <div class="mb-2">
                <input v-model="user.email" type="email" class="form-control" placeholder="Email">
              </div>
               <div class="mb-2">
                <input v-model="user.password" type="password" class="form-control" placeholder="Password">
              </div>
               <div class="mb-2">
                <input type="submit" class="btn btn-success" value="Register">
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RegistrationHome',
    data() {
      return {
        user : {
          name : '',
          email : '',
          password : '',
        }
      }
    },
    computed: {},
    // mounted() {},
    methods: {
      register(){
        console.log(this.user);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>