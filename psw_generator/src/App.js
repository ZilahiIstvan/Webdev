import { useState } from "react";
import "./App.css";

import OutputField from "./comps/output/OutputField/OutputField";
import MainArea from "./comps/input/MainArea/MainArea";

const App = () => {
  const [psw, setPsw] = useState("6A@8L:Mi5J");
  const [icon, setIcon] = useState(false);

  const props = {
    icon,
    setIcon,
    psw,
    setPsw,
  };

  return (
    <div className="main-site">
      <div className="main-site-container">
        <h1 className="main-site-container-text">Password Generator</h1>
        <OutputField {...props} />
        <MainArea {...props} />
      </div>
    </div>
  );
};

export default App;
