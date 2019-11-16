class PomSesh {
    constructor(length=25){
        this.length = length*60000,
        this.timeEnd = new Date(Date.now() + this.length),
        this.id = Date.now(),
        this.paused = false
    }
    timeLeft(){
        if (Date.now() > this.timeEnd){
            return 0
        }
        return this.timeEnd - Date.now()
    }
    getTimeLeft() {
        const now = new Date()
        if (now > this.timeEnd){
            return [0, 0]
        }
        const milliseconds = this.timeLeft()
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = parseInt(((milliseconds % 60000)/1000).toFixed(0))
        return [minutes, seconds]
    }
}


function newTimer(length){
    current = new PomSesh(length);
    setInterval(()=> {
        document.getElementById('live').innerHTML = showAsTime(...current.getTimeLeft());
    },1000)
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
