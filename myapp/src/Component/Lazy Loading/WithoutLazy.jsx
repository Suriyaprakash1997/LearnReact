import React from 'react';
import HeavyComponent from './HeavyComponent';

function WithoutLazy() {
  return (
    <div>
      <h1>Without Lazy Loading</h1>
      <HeavyComponent />
    </div>
  );
}

export default WithoutLazy;
