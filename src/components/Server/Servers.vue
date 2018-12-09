<template>
    <nav class="md:flex w-full md:w-1/3 bg-grey-dark">
        <ul class="list-reset w-full btn-list">
            <app-server
                v-for="server in servers.hosts"
                :server="server" :key="server.id"></app-server>
        </ul>
    </nav>
</template>

<script>
    import Server from './Server.vue';
    import List from '../../list.json';

    export default {
        data: function() {
            return {
                // Import list of servers from json file
                servers: List
            };
        },
        components: {
            // Include server component for the button element
            appServer: Server
        }
    }
</script>

<style>

</style>
