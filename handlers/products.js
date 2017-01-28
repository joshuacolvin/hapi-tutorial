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