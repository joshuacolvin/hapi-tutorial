'use strict';

const Products = require('./handlers/products');

module.exports = [{
    method: 'GET',
    path: '/products',
    handler: Products.find
}, {
    method: 'GET',
    path: '/products/{id}',
    handler: Products.findOne
}];