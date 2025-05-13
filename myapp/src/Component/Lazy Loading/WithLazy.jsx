// App.js
import React, { Suspense, useState } from 'react';

const LazyHeavyComponent = React.lazy(() => import('./HeavyComponent'));

const LightComponent = () => (
  <div className="card">
    <h2>Light Component</h2>
    <p>This component is small and loads with the initial bundle.</p>
  </div>
);

function WithLazy() {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div className="container">
      <h1>🌟 Lazy Loading Demo</h1>
      <LightComponent />

      <button className="load-btn" onClick={() => setShowHeavy(true)}>
        Load Heavy Component
      </button>

       <button className="load-btn" onClick={() => setShowHeavy(false)}>
        Un Load Heavy Component
      </button>

      {showHeavy && (
        <Suspense fallback={<div className="loading">Loading heavy content...</div>}>
          <LazyHeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default WithLazy;
