class PomSesh {
    constructor(length=25){
        this.timeStart = new Date(),
        this.timeEnd = new Date(this.timeStart.getTime() + length*60000),
        this.id = this.timeStart.getTime(),
        this.length = length*60000,
        this.status = 'started'}
    timeLeft() {
        const now = new Date()
        if (now > this.timeEnd){
            this.status = 'finished';
            return 0
        }
        const milliseconds = this.timeEnd - now;
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = parseInt(((milliseconds % 60000)/1000).toFixed(0))
        return [minutes, seconds]
    }
    reset() {
        const now = new Date();
        this.timeEnd = new Date(now.getTime() + length*60000)
    }
        // this.reset = function() {
        //     const now = new Date()
        //     this.timeEnd = new Date(now.getTime() + length*60000);
        // }
}


function newTimer(length){
    current = new PomSesh(length);
    return current;
}

function showAsTime(minutes, seconds) {
    if (seconds === 60) {
        minutes = minutes+1;
        seconds = 0;
    }
    let time = [minutes, seconds]
    time = time.map(x=>{
        if (x < 10){
            return '0'+x.toString()}
        else {return x.toString()}
    } )
    return time.join(':')
}
console.log(showAsTime(0, 22))
console.log(showAsTime(2, 4))