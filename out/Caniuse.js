"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const caniuse = require('caniuse-api');
function doesBrowserSupport(obj) {
    let browsers = 'last 2 versions';
    if (obj) {
        let browsers = obj.browsers.join(', ');
    }
    let result = caniuse.getSupport(obj.query);
    console.log(obj.query);
    console.log(result);
}
exports.default = doesBrowserSupport;
//# sourceMappingURL=Caniuse.js.map