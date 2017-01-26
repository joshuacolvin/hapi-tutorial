'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8080
});

server.route(require('./routes'));

server.start(function () {
    console.log('Serving hapi app at:', server.info.uri);
});
