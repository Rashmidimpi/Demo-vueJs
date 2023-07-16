<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col text-center">
    <img alt="Vue logo" src="../assets/logo.png">
    <p class="h3 display-3 text-muted">Get Started With Vue Js!</p>
    <p class="fst-italic">Let's Get Started With demo implementation...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
  components: {
   
  },
})
export default class HomeView extends Vue {}
</script>
