'use strict';

const Products = require('./handlers/products');

module.exports = [{
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
    handler: Products.find
}, {
    method: 'GET',
    path: '/products/{id}',
    handler: Products.findOne
}, {
    method: 'POST',
    path: '/products',
    handler: Products.create
}];