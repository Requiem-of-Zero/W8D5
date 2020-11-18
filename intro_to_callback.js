class Clock {
  constructor() {
    // 1. Create a Date object.
    const currentTime = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000)
    // this.date = new Date().toLocaleTimeString("en-US").split(/:| /);
  }
  //let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    // const printingTime = 
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds += 1;

    if(this.seconds === 60) {
      this._addMinute();
      this.seconds = 0;
    }
    
      
  
    // 2. Call printTime.
    this.printTime();
  }

  _addMinute() {
    this.minutes += 1;

    if(this.minutes === 60){
      this._addHour();
      this.minutes = 0; // need fo fix format
    } 
  }

  _addHour() {
    this.hours += 1

    this.hours = this.hours % 24
  }

}

const clock = new Clock();
clock.printTime();

// console.log(clock);

