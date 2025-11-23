  let volume=5;

  function playNote(frequency) {
    const audioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    const oscillator = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    oscillator.connect(gain);
    gain.connect(audioCtx.destination);
  
    oscillator.frequency.value = frequency;
    oscillator.type="sawtooth";
    gain.gain.value =volume/10;
  
    oscillator.start();
    setTimeout(() => oscillator.stop(), 2000); 
  }
  

  function SetVolume(value) {
    volume=value;
  }