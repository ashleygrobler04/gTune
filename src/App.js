import React from "react";
import String from "./components/string";
import { stringFrequencies } from "./audio";

function App() {
  return (
    <div className="container">
      <String name="String 1" freq={stringFrequencies.e4} />
      <String name="String 2" freq={stringFrequencies.B3} />
      <String name="String 3" freq={stringFrequencies.G3} />
      <String name="String 4" freq={stringFrequencies.D3} />
      <String name="String 5" freq={stringFrequencies.A2} />
      <String name="String 6" freq={stringFrequencies.E2} />
    </div>
  );
}

export default App;
