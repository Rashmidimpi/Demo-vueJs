<template>
  <div class="card">
    <div class="card-header">Add a new User</div>
    <div class="card-body">
      <form class="form-inline" v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label>Name</label>
          <input v-model="name"
            type="text"
            class="form-control ml-sm-2 mr-sm-4 my-2" 
            required
          />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            type="text"
            class="form-control ml-sm-2 mr-sm-4 my-2" v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <label>Company</label>
          <input
            type="text"
            class="form-control ml-sm-2 mr-sm-4 my-2" v-model="company"
            required
          />
        </div>
        <div class="form-group">
          <label>Location</label>
          <input
            type="text"
            class="form-control ml-sm-2 mr-sm-4 my-2" v-model="location"
            required
          />
        </div>
        <div class="ml-auto text-right">
          <button type="submit" class="btn btn-success">
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/service/UserService";
export default {
  name: "AddUser",
  data() {
    return {
      name: "",
      email: "",
      company: "",
      location: "",
    };
  },
  computed: {},
  
  methods: {
    async onSubmit() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          company: this.company,
          location: this.location,
        };
        if(data.name != ''){
        let response = await UserService.addUser(data);
        this.loading = false;
        console.log(response.data,"::data");
        if(response.status == 200 || response.status == 201){
          alert('user added successfully');
        }
        }
      } catch (error) {
        this.loading = false;
        this.errorMessage = error;
        console.log(error);
      }
    },
  },
  mounted() {
    this.onSubmit();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>