import React, { useState } from "react";
import Home from "./pages/Home";
import A from "./pages/A";

const App = () => {
  const [Value, setValue] = useState(0);

  const innumber = () => {
    setValue(Value + 1);
  };
  const drnumber = () => {
    setValue(Value - 1);
  };

  return (
    <div>
      <h1>hello world App pages {Value}</h1>
      <button onClick={innumber}>Click me</button>
      <button onClick={drnumber}>Click me</button>
      <Home number={Value} />
      <A number={Value} />
    </div>
  );
};

export default App;
