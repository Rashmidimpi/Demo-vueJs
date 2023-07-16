<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success"> User List</p>
         <router-link to="/users/add" class="btn btn-success ms-3 mt-20" style="float:right; margin-bottom:10px">Add User</router-link>
        <p>Here we can see list of users!</p>
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
                <th>Actions</th>

                
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

              <td> <i @click="deleteUser(user.id)"><FontAwesomeIcon icon="trash-alt" /></i></td>


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
   

    computed: {},
    mounted() {this.getUser()},
    methods: {
       async getUser(){
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
      async deleteUser(userId){
      try{
        this.loading = true;
        let response = await UserService.deleteUser(userId);
        this.users = this.users.filter(user => user.id !== userId);   
        console.log(userId,"deleted");
        this.loading = false;
        if(response.status == 200 || response.status ==201){
          alert("user deleted");
          
        }
      }catch(error){
        this.loading = false;
        this.errorMessage = error;
        console.log(error);
      }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>