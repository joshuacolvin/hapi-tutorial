'use strict';

const products = require('../products.json');

exports.find = function (request, reply) {
    return reply(products);
};

exports.findOne = function (request, reply) {
    const product = products.filter(function (product) {
        return product.id === request.params.id
    });

    if (product.length) {
        reply(product)
    } else {
        reply('No product found with the id: ' + request.params.id);
    }
};