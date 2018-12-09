import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Setup a bus variable to carry state between different components
// Potentially also useful for making property changes for servers in the future
export const serverBus = new Vue({
  methods: {
    selectedServer(serverID) {
      this.$emit('serverWasChanged', serverID);
    }
  }
});

// Initiate Vue application to render in the page DOM
new Vue({
  render: h => h(App),
}).$mount('#app')
