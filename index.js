'use strict';

const nunjucks = require('nunjucks');

const length = parseInt(process.argv[2] || 1000);
const template = process.argv[3] || '1-a.html';
const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('template'));
const items = [];

for (let i = 0; i < length; ++i) {
  items[i] = i;
}

env.render(template, {items});

console.log(`done: ${items.length} files`);
