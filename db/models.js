var mongoose = require('mongoose');
var schemas = require('./schemas');

var models = {};

Object.keys(schemas).forEach(function(name){
    models[name] = mongoose.model(name, schema[name]);
});

module.exports = models;
