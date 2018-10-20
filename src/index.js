import { extend } from '@jsmini/extend';
import { Guid } from '@jsmini/guid';

const g = new Guid();
const doc = document;
const docCharset = doc.charset;
const head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;

// export function loadimg(src, success, error, option) {

// }

// export function loadcss(src, success, error, option) {

// }

export function loadjs(src, success, error, option) {
    const d = extend({
        charset: docCharset,
        cache: true
    }, option);

    const guid = g.guid();

    if (!d.cache) {
        src += '?t=' + guid;
    }
    const node = doc.createElement('script');
    node.src = src;
    node.id = 'loadjs-js-' + guid;
    node.charset = d.charset;
    if ('onload' in node) {
        node.onload = success;
        node.onerror = error;
    } else {
        node.onreadystatechange = function() {
            if (/loaded|complete/.test(node.readyState)) {
                success();
            }
        };
    }

    head.appendChild(node);
}
