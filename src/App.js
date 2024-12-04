import React, { useState } from "react";
import String from "./components/string";
import StaticSlider from "./components/StaticSlider";
import { stringFrequencies, SetVolume,volume} from "./audio"; // Import the volume variable

function App() {
  const [sliderValue, setSliderValue] = useState(volume); // Initialize state with the current volume value

  const changeVolume = (event) => {
    const newVolume = event.target.value; // Get the slider value
    setSliderValue(newVolume); // Update state for UI
    SetVolume(newVolume); // Update the audio file's volume variable
  };

  return (
    <div className="container">
      <String name="String 1" freq={stringFrequencies.e4} />
      <String name="String 2" freq={stringFrequencies.B3} />
      <String name="String 3" freq={stringFrequencies.G3} />
      <String name="String 4" freq={stringFrequencies.D3} />
      <String name="String 5" freq={stringFrequencies.A2} />
      <String name="String 6" freq={stringFrequencies.E2} />
      <StaticSlider onChange={changeVolume} current={sliderValue}/>
      <p>Current Volume: {sliderValue}</p> {/* Display the volume for reference */}
    </div>
  );
}

export default App;
