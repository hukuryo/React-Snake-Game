import { Field } from './components/Field';
import { Navigation } from './components/Navigation';
import { ManipulationPanel } from './components/ManipulationPanel';
import { Button } from './components/Button';
import { initFields } from './utils';

const fields = initFields(35);
fields[17][17] = 'snake';

function App() {
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
