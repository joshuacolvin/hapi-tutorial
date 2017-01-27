'use strict';

const products = require('../products.json');

exports.find = function (request, reply) {
    return reply(products);
};

exports.findOne = function (request, reply) {
    return reply(products[request.params.id - 1]);
};