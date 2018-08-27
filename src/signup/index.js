const page = require('page');
const empty = require('empty-element');
var template = require('./template');

page('/signup', (ctx, next) => {
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})
