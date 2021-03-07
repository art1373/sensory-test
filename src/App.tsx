import React, { useState, useEffect } from "react";
import shuffle from "shuffle-array";
import { motion } from "framer-motion";

import "./App.css";

import { start } from "./components/Confeti";

function Confetti() {
  useEffect(() => {
    start();
  });
  return <canvas id="canvas" />;
}
interface Props {
  id: string | undefined;
  children: React.ReactNode;
  onToggle: any;
  isSet: boolean;
  isWon: boolean;
}

function Tile({ id, children, onToggle, isSet, isWon }: Props) {
  return (
    <motion.div
      id={id}
      animate={{ scale: isWon ? 0 : 1 }}
      onClick={onToggle}
      className={`tile ${isSet ? "tile--set" : ""}`}
    >
      {children}
    </motion.div>
  );
}

const bbb = [
  "Great success",
  "User engagement",
  "Kodiak",
  "Huge kudos to X",
  "Suboptimal",
  "Learning experience ",
  "Personalized learning",
  "Super excited ",
  "Funnel",
  "OKRs",
  "Highest company priority ",
  "It’s only a test",
  "Operate like a startup",
  "Keeping the momentum",
  "The results look promising",
  "Initial signals",
  "Can’t wait to share results ",
  "Significant increase ",
  "High quality content",
  "Keep product consistent ",
  "Data driven ",
  "Glorious X team",
  "Allocate resources ",
  "Alignment between X and Y",
  "Happy to announce",
];

const data = shuffle(bbb).reduce(
  (data: any, value, index) => ({ ...data, [index]: value }),
  {}
);

function App() {
  const [state, setState] = useState<any>({ checked: {} });
  const isWon = (checked: any) => {
    const range = [0, 1, 2, 3, 4];
    return (
      undefined !==
        range.find((row) =>
          range.every((column) => checked[row * 5 + column])
        ) ||
      undefined !==
        range.find((column) =>
          range.every((row) => checked[row * 5 + column])
        ) ||
      range.every((index) => checked[index * 5 + index]) ||
      range.every((index) => checked[index * 5 + 4 - index])
    );
  };
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
        {Object.keys(data).map((id) => (
          <Tile
            key={id}
            id={"tile"}
            isSet={!!state?.checked[id]}
            onToggle={() => toggle(id)}
            isWon={state?.won}
          >
            {data[id]}
          </Tile>
        ))}
      </div>
      {state?.won ? <Confetti /> : null}
    </motion.div>
  );
}

export default App;
