<template>
  <div class="container mt-3">
    <div v-if="loading">
      <spinnerComponent/>
    </div>
    <div class="row" v-if="!loading && Object.keys(user).length > 0">
      <!-- <div class="col"> -->
        <!-- <pre>{{user}}</pre> -->
         <div class="row">
      <div class="col">
        <ul class="list-group">
           <li class="list-group-item">
             Id : <span class="fw-bold">{{user.id}}</span>
          </li>
          <li class="list-group-item">
             Name : <span class="fw-bold">{{user.name}}</span>
          </li>
          <li class="list-group-item">
            Email : <span class="fw-bold">{{user.email}}</span>
          </li>
          <li class="list-group-item">
            Company : <span class="fw-bold">{{user.company.name}}</span>
          </li>
           <li class="list-group-item">
            Website : <span class="fw-bold">{{user.website}}</span>
          </li>
          <li class="list-group-item">
            Location : <span class="fw-bold">{{user.address.city}}</span>
          </li>
        </ul>
      </div>
    </div>
      
    </div>
  <div class="row">
    <div class="col">
      <router-link to="/users" class="btn btn-success ms-3 mt-20">Back</router-link>
    </div>
  </div>
  </div>
</template>

<script>
import { UserService } from '@/service/UserService';
import SpinnerComponent from './SpinnerComponent.vue';
  export default {
  components: { SpinnerComponent },
    name: 'UserDetails',
    data() {
      return {
        loading : false,
        user : {},
        errorMessage : null
      }
    },
    async created(){
      let userId = this.$route.params.userId;
      try{
        this.loading = true;
        let response = await UserService.getUser(userId);
        this.loading = false;
        this.user = response.data;
      }catch(error){
        this.loading = false;
        this.errorMessage = error;
        console.log(error);
      }
      
    },
    computed: {},
    // mounted() {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mt-20{
  margin-top : 20px;
}
</style>