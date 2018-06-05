# @turf/intersect 6.1.2 webpack build failure

This bug report demonstrates undesired behavior in the `@turf/intersect` package when built with webpack 3. This demonstration is built from the latest `create-react-app` with default settings.

This appears to be related to how `turf`, `martinez-polygon-clipping`, and `webpack` work together as this behavior does not appear when the code is run in node.

***Note:*** This may apply to more than just `@turf/intersect`. I will update this bug report to note additional packages if they are found.

## Error
```
TypeError: martinez.intersection is not a function
    at intersect (http://localhost:3000/static/js/bundle.js:1538:37)
    at Object../src/App.js (http://localhost:3000/static/js/bundle.js:39523:72)
    at __webpack_require__ (http://localhost:3000/static/js/bundle.js:679:30)
    at fn (http://localhost:3000/static/js/bundle.js:89:20)
    at Object../src/index.js (http://localhost:3000/static/js/bundle.js:39638:63)
    at __webpack_require__ (http://localhost:3000/static/js/bundle.js:679:30)
    at fn (http://localhost:3000/static/js/bundle.js:89:20)
    at Object.0 (http://localhost:3000/static/js/bundle.js:39664:18)
    at __webpack_require__ (http://localhost:3000/static/js/bundle.js:679:30)
    at ./node_modules/@turf/helpers/index.js.Object.defineProperty.value (http://localhost:3000/static/js/bundle.js:725:37)
    at http://localhost:3000/static/js/bundle.js:728:10
```

## Verification Steps:
1. Check out this repository
1. Install dependencies: `npm install`
1. Run application: `npm start`
1. Open browser to [`http://localhost:3000`](http://localhost:3000)
1. Observe error stack trace
1. Optionally, open browser dev tools and inspect the source of the error
