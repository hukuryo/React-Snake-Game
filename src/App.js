import { Field } from './components/Field';
import { Navigation } from './components/Navigation';
import { ManipulationPanel } from './components/ManipulationPanel';
import { Button } from './components/Button';
import { initFields } from './utils';
import React, { useEffect, useState } from 'react';

const initialPosition = { x: 17, y: 17 };
// fields[17][17] = 'snake';
const initialValues = initFields(35, initialPosition)

function App() {
  const [fields, setFields] = useState(initialValues);
  const [position, setPosition] = useState(initialPosition);
  
  useEffect(() => {
    setPosition(initialPosition)
  }, [])
  
  return (
    <div className="App">
      <header className="header">
          <div className="title-container">
            <h1 className="title">Snake Game</h1>
          </div>
          <Navigation />
        </header>
        <main className="main">
          <Field fields={fields} />
        </main>
        <footer className="footer">
          <Button />
          <ManipulationPanel />
        </footer>
    </div>
  );
}

export default App;
