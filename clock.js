

class Clock {
    constructor() {
        let currentDate = new Date;
        this.hours = currentDate.getHours();
        this.minutes = currentDate.getMinutes();
        this.seconds = currentDate.getMinutes();
        this.printTime();
        setInterval(this._tick.bind(this),1000);
        //Figure out what goes at the end to start the interval ticks
    }
    _tick() {
        this.seconds += 1;
        this.printTime();
    }
    
    
    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

}

const clock = new Clock 
