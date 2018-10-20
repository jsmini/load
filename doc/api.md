# 文档
提供简单加载资源功能，比如js

## loadjs
加载js功能，可配置缓存和编码

函数参数和返回值（要遵守下面的例子的规则）

- param {string} src 加载的url
- param {function} [success] 加载成功时的回调函数
- param {function} [error] 加载失败时的回调函数
- param {object} [option] 可选的配置参数
- param {string} [option.charset=页面编码] 加载url的编码
- param {boolean} [option.cache=true] 是否使用缓存

举个例子（要包含代码用例）

```js
loadjs('xxx.js');

loadjs(
    'xxx.js',
    function success() { console.log('success') },
    function error() { console.log('error')
});

loadjs(
    'xxx.js',
    function success() {},
    function error() {},
    {
        charset: 'gb2312',
        cache: false,
    }
);
```
