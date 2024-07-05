import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import DataFetcher from "./components/DataFetcher";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Timer
      </button>
      {show && <Timer />}
      <DataFetcher />
    </div>
  );
};
export default App;
