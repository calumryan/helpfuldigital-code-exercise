<template>
  <div id="app">
    <div class="container mx-auto px-3 py-10">
        <div class="md:flex flex-row bg-grey-lighter p-4 -mx-2">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
    </div>
  </div>
</template>

<script>
  import Servers from './components/Server/Servers.vue';
  import ServerDetails from './components/Server/ServerDetails.vue';

  export default {
      components: {
          Servers,
          'app-server-details': ServerDetails
      }
  }
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
