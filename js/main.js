let sessions = [];
let sessionCount = sessions.filter(x => x.timeEnd && Date.now()>x.timeEnd).length

class PomSesh {
    constructor(length=25){
        this.length = length*60000,
        this.timeEnd = new Date(Date.now() + this.length),
        this.id = Date.now(),
        this.paused = false
    }
    timeLeft(){
        if (this.paused) {
            return this.length
        }
        if (Date.now() > this.timeEnd){
            return 0
        }
        return this.timeEnd - Date.now()
    }
    pause() {
        if (!this.paused) {
            this.length = this.timeLeft()
            this.paused = true;
            this.timeEnd = null;
        }
    }
    resume() {
        if (this.paused) {
            this.paused = false;
            this.timeEnd = new Date(Date.now() + this.length)
        }
    }
    
    getTimeLeft() {
        const now = new Date()
        if (!this.paused && now > this.timeEnd){
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
    sessions.push(current)
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

function PomPomApp() {
    this.sessions = []
    this.sessionCount = this.sessions.filter
        (x => x.timeEnd && Date.now()>x.timeEnd).length
}

window.onload = function() {
    window.app = new PomPomApp();
   // window.location.assign('http://www.google.com')
  };