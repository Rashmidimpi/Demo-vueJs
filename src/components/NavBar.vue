<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vue Router</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link px-3">Home
            </router-link>
          </li>
           <li class="nav-item">
            <router-link to="/users" class="nav-link px-3">Users
            </router-link>
          </li>
           <li class="nav-item">
            <router-link to="/about" class="nav-link px-3">About
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {}
    },
    computed: {},
    // mounted() {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>