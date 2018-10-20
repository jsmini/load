var pkg = require('../package.json');

// 兼容 load 和 @jsmini/load，@jsmini/load 替换为 jsmini_load
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * load ${version} (https://github.com/jsmini/load)
 * API https://github.com/jsmini/load/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/load/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
