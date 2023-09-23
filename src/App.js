import { Field } from "./components/Field";
import { Navigation } from "./components/Navigation";
import { ManipulationPanel } from "./components/ManipulationPanel";
import { Button } from "./components/Button";
import { initFields } from "./utils";
import React, { useEffect, useState } from "react";

const initialPosition = { x: 17, y: 17 };

const initialValues = initFields(35, initialPosition);
const defaultInterval = 100;

let timer = undefined;

const unsubscribe = () => {
  if (!timer) {
    return;
  }
  clearInterval(timer);
};

function App() {
  const [fields, setFields] = useState(initialValues);
  const [position, setPosition] = useState();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setPosition(initialPosition);

    // ゲームの中の時間を管理する
    timer = setInterval(() => {
      setTick((tick) => tick + 1);
    }, defaultInterval);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!position) {
      return;
    }
    goUp();
  }, [tick]);

  const goUp = () => {
    const { x, y } = position;
    const nextY = Math.max(y - 1, 0);
    fields[y][x] = "";
    fields[nextY][x] = "snake";
    setPosition({ x, y: nextY });
    setFields(fields);
  };

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
