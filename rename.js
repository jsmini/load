// var path = require('path');

var cdkit = require('cdkit');

var fromName = 'base';
var toName = 'load';

var curPathName = __dirname.split('/').pop();

var map = [
  curPathName + '/package.json',
  curPathName + '/README.md',
  curPathName + '/config/rollup.js',
  curPathName + '/test/browser/index.html',
];

const config = [
  {
    root: '.',
    rules: [
      {
        test: function (pathname) {
          return map.some(function (u) {
            return pathname.indexOf(u) > -1;
          });
        },
        replace: [
          {
            from: fromName,
            to: toName,
          },
        ],
      },
    ],
  },
];

cdkit.run('replace', config);
