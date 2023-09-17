class AudioWrapper {
  constructor() {
    // Initialize the Web Audio API context
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.sounds = {}; // Store cached sounds
  }

  // Load and cache a sound
  async loadSound(url) {
    if (!this.sounds[url]) {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
      this.sounds[url] = audioBuffer;
    }
  }

  // Play a sound with optional positional audio and effects
  playSound(url, options = {}) {
    const source = this.audioContext.createBufferSource();
    source.buffer = this.sounds[url];

    // Apply effects (e.g., pitch and volume)
    const gainNode = this.audioContext.createGain();
    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    if (options.pitch) {
      source.detune.value = options.pitch; // Adjust pitch
    }

    if (options.volume) {
      gainNode.gain.value = options.volume; // Adjust volume
    }

    // Handle looping
    source.loop = options.loop || false;

    // Positional audio (if specified)
    if (options.position) {
      const panner = this.audioContext.createPanner();
      panner.setPosition(
        options.position.x,
        options.position.y,
        options.position.z
      );
      source.connect(panner);
      panner.connect(this.audioContext.destination);
    }

    source.start();
  }
}
export default AudioWrapper;
