'use strict';

const products = require('../products.json');

exports.find = function (request, reply) {
    return reply(products);
};

exports.findOne = function (request, reply) {
    reply(products[request.params.id - 1])
};

exports.create = function (request, reply) {
    if (request.payload) {
        products.push(request.payload);
    }
    reply(request.payload);
};

exports.update = function (request, reply) {
    let product = products[request.params.id - 1]
    if (request.payload) {
        product = Object.assign(product, request.payload);
    }
    reply(product);
};

exports.delete = function (request, reply) {
    if (products[request.params.id - 1]) {
        products.splice(request.params.id - 1, 1);
    }
    reply(products);
};
