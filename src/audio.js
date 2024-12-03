export const stringFrequencies = {
    E2: 82.41,
    A2: 110.00,
    D3: 146.83,
    G3: 196.00,
    B3: 246.94,
    e4: 329.63
  };
  
  export function playNote(frequency) {
    const audioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    const oscillator = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    oscillator.connect(gain);
    gain.connect(audioCtx.destination);
  
    oscillator.frequency.value = frequency;
    oscillator.type="sawtooth";
    gain.gain.value = 0.8;
  
    oscillator.start();
    setTimeout(() => oscillator.stop(), 2000); 
  }
  