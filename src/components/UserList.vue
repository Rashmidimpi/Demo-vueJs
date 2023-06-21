<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success"> User List</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repudiandae nobis mollitia?</p>
      </div>
    <div v-if="loading">
      <SpinnerComponent/>
  </div>
  <div v-if="errorMessage">
    <p class="fw-bold text-danger">{{errorMessage}}</p>
  </div>
  <!-- <pre> {{errorMessage}} </pre> -->
      <div class="row" v-if="!loading && users.length > 0">
        <div class="col">
          <table class="table table-hover text-center table-striped">
            <thead class="bg-success">
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Website</th>
                <th>Location</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>
                  <router-link :to="'/users/' +user.id" class="text-decoration-none fw-bold text-success" >{{user.name}}</router-link>
                </td>
                <td>{{user.email}}</td>
                <td>{{user.company.name}}</td>
                <td>{{user.website}}</td>
                <td>{{user.address.city}}</td>


              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { UserService } from "@/service/UserService";
  export default {
    name: 'UserList',
    data() {
      return {
        users: [],
        loading: false,
        errorMessage: null

      }
    },

    // Predefined Lifecycle method created(this will fetch data from the server), it will get executed whenever component is fully created
    async created(){
      try{
        // this will return a promise
        this.loading = true;
        let response = await UserService.getAllUsers();
        this.loading = false;
        this.users = response.data;
      }catch(error){
        this.loading = false;
        this.errorMessage = error;
      }
    },

    computed: {},
    // mounted() {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>