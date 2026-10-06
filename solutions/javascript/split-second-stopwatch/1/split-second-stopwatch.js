export function parseTime(timeStr) {
  const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}
export function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');
}


export class SplitSecondStopwatch {
  constructor() {
    this._state = 'ready';
    this._currentLap = 0;
    this._previousLap = [];
  }

  get state() {
    return this._state;
  }

  get currentLap() {
    return formatTime(this._currentLap);
  }

  get total() {
    const previousSeconds = this._previousLap.reduce((sum, lapStr) => sum + parseTime(lapStr), 0);
    return formatTime(previousSeconds + this._currentLap);
  }

  get previousLaps() {
    return this._previousLap;
  }

  start() {
    if (this._state !== 'running') {
      this._state = 'running';
      return this._state}
    else if (this._state === 'running') {
      throw new Error('cannot start an already running stopwatch')
    }
  }

  stop() {
    if (this._state === 'ready' || this._state === 'stopped') {
      throw new Error('cannot stop a stopwatch that is not running')
    }
    
    else {this._state = 'stopped';
    return this._state}
  }


  lap() {
    if (this._state === 'ready' || this._state === 'stopped') {
      throw new Error('cannot lap a stopwatch that is not running')
    }
    else {
    this.previousLaps.push(formatTime(this._currentLap));
    this._currentLap = 0;}
  }

  reset() {
    if (this._state === 'stopped') {
      this._state = 'ready'
      this._currentLap = 0
      this._previousLap = []
    }
    else {
      throw new Error('cannot reset a stopwatch that is not stopped')
    }
  }

  advanceTime(duration) {
    if (this._state === 'running') {
    this._currentLap += parseTime(duration)
    }
  }
}
