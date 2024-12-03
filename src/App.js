import String from "./components/string";
import { stringFrequencies } from "./audio";

function App() {
  return (
    <div>
      <String name="String 1" freq={stringFrequencies.e4}/>
      <br />
      <String name="String 2" freq={stringFrequencies.B3}/>
      <br />
      <String name="String 3" freq={stringFrequencies.G3}/>
      <br />
      <String name="String 4" freq={stringFrequencies.D3}/>
      <br />
      <String name="String 5" freq={stringFrequencies.A2}/>
      <br />
      <String name="String 6" freq={stringFrequencies.E2}/>
      <br />
    </div>
  );
}

export default App;
