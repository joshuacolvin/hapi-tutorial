'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const products = require('./products.json');

server.connection({
    host: 'localhost',
    port: 8080
});

server.route([{
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply('Hello world');
    }
}, {
    method: 'GET',
    path: '/about',
    handler: function (request, reply) {
        return reply('About');
    }
}, {
    method: 'GET',
    path: '/products',
    handler: function (request, reply) {
        return reply(products);
    }
}]);

server.start(function () {
    console.log('Serving hapi app at:', server.info.uri);
});
