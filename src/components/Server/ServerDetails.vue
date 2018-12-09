<template>
    <main class="md:flex w-full md:w-2/3 bg-grey-light p-4">
        <div v-if="!server">
            <p>Please select a Server</p>
        </div>
        <div v-else>
            <h1>{{ server.hostname }}</h1>
            <ul class="server-details-list my-4 mx-0 px-5">
                <li v-if="server.memory"><strong>Memory:</strong> {{ server.memory }}</li>
                <li v-if="server.dist"><strong>Distribution:</strong> {{ server.dist }}</li>
                <li v-if="server.default_ip"><strong>Default IP:</strong> {{ server.default_ip }}</li>
                <template v-if="server.sites">
                <li v-for="item in server.sites" v-bind:key="item.id">
                    <strong>{{ item.url }}</strong>
                    <ul class="list-reset py-3 px-5">
                        <li v-for="plugin in item.plugins" v-bind:key="plugin.id">{{ plugin.name }}</li>
                    </ul>
                </li>
                </template>
            </ul>
        </div>
    </main>

</template>

<script>

    import { serverBus } from '../../main';

    export default {
        data: function() {
            return {
                // Initiate variable to store server property
                server : null
            }
        },
        methods: {
            // Here we could add functions to change properties of the server in the future
        },
        created() {
            // Once the component is created handle the event for selecting a server - referring to `this` as the selected server passed to the bus
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }

    }

</script>

<style>
.server-details-list li {
    margin: 0 0 5px 0;
    list-style: square;
}
</style>
