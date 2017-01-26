'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8080
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello world');
    }
});

server.start(function () {
    console.log('Serving hapi app at:', server.info.uri);
});
