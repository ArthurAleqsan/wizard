import { useState } from "react";
import Wizard, { MAX_TABS } from "./components/Wizard";
import "./styles/app.scss";

function App() {
  const [index, setIndex] = useState<number>(0);

  const onDecreaseClick = () => {
    if (index === 0) {
      return;
    }

    setIndex(index - 1);
  };

  const onIncreaseClick = () => {
    if (index === MAX_TABS - 1) {
      return;
    }

    setIndex(index + 1);
  };

  const tabs = ["Design", "Build", "Launch", "Enjoy"];

  return (
    <div  className={'wizard'}>
      <Wizard tabs={tabs} index={index} />

      <div className={'buttons'}>
        <button onClick={onDecreaseClick}>Prev</button>
        <button onClick={onIncreaseClick}>Next</button>
      </div>
    </div>
  );
}

export default App;
