<template>
    <li><button class="btn-server" @click="serverSelected">{{ server.hostname }}</button></li>
</template>

<script>
import { serverBus } from "../../main";

export default {
  // Pass properties of server when selected
  props: ["server"],
  methods: {
    // Function to emit selected server to the bus
    serverSelected() {
      serverBus.$emit("serverSelected", this.server);
    }
  }
};
</script>btn-list
<style>
.btn-server {
  display: block;
  background-color: #372386;
  width: 100%;
  padding: 15px 20px;
  color: #fff;
  font-weight: 600;
  text-align: left;
  border-bottom: 1px solid #d8e1e8;
  border-radius: 0;
}
.btn-list li:last-child .btn-server{
  border-bottom:0;
}
</style>
