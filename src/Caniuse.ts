const caniuse = require('caniuse-api');


/**
 * @param obj
 * @param obj.browsers: An array of browsers strings to check against.
 */

interface BrowserSupport {
    browsers: Array<string>,
    query: string
}

export default function doesBrowserSupport(obj: BrowserSupport): void {
    let browsers = 'last 2 versions';
    if (obj) {
        let browsers = obj.browsers.join(', ');
    }

    let result = caniuse.getSupport(obj.query);

    console.log(obj.query);
    console.log(result);
}