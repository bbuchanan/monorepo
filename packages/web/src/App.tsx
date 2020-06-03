import { add } from '@monorepo/common';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          1+1={add(1, 1)}
        </p>
      </header>
    </div>
  );
}

export default App;
