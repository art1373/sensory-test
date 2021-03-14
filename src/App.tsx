import React, { useState, useEffect } from "react";
import shuffle from "shuffle-array";
import { motion } from "framer-motion";

import "./App.css";

import { start } from "./components/Confeti";
import { bbb } from "./utils/mockData";
import Tile from "./components/Tile";
import { isWon } from "./utils/tools";

function Confetti() {
  useEffect(() => {
    start();
  });
  return <canvas id="canvas" />;
}

const data = shuffle(bbb).reduce(
  (data: any, value, index) => ({ ...data, [index]: value }),
  {}
);

function App() {
  const [state, setState] = useState<any>({ checked: {} });

  const toggle = (id: string | number) =>
    setState((state: any) => {
      const checked = { ...state.checked, [id]: !state?.checked[id] };
      const won = isWon(checked);
      return {
        ...state,
        checked,
        won,
      };
    });

  return (
    <motion.div
      animate={{
        rotate: state?.won ? 360 : 0,
        opacity: state?.won ? 0.3 : 1,
      }}
      id="app"
      className="App"
    >
      <h1>Bingo</h1>
      <div id="wrapper" className="wrapper">
        {Object.keys(data).map((id, index) => (
          <>
            <Tile
              isCenter={Math.ceil(bbb?.length / 2) === index + 1}
              index={index}
              key={id}
              id={"tile"}
              isSet={!!state?.checked[id]}
              onToggle={() => toggle(id)}
              isWon={state?.won}
            >
              {data[id]}
            </Tile>
          </>
        ))}
      </div>
      {state?.won ? <Confetti /> : null}
    </motion.div>
  );
}

export default App;
