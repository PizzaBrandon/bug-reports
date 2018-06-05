import React, { Component } from 'react';
import intersect from '@turf/intersect';

const area = {
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [[ 10, 10 ], [ 80, 10 ], [ 80, 80 ], [ 10, 80 ], [ 10, 10 ]]
    ]
  }
};

const subarea = {
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [[10, 10], [40, 10], [40, 40], [10, 40], [10, 10]]
    ]
  }
};

let result = null;
try {
  const feature = intersect(area, subarea);
  result = (
    <div>
      <h2>Success!</h2>
      <pre>{ JSON.stringify(feature, null, 2) }</pre>
    </div>
  );
} catch (e) {
  result = (
    <div>
      <h2>Error</h2>
      <pre>{ e.stack }</pre>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>@turf/intersect 6.1.2 webpack build failure</h1>
        <div>
          { result }
        </div>
      </div>
    );
  }
}

export default App;
