class PomSesh {
    constructor(length=25){
        this.length = length*60000,
        this.timeEnd = new Date(Date.now() + this.length),
        this.id = Date.now(),
        this.paused = false
    }
}




function PomPomApp() {
    
    this.sessionCount = 0;
    this.currentSession = null;
    this.newTimer = (length) => {
        this.currentSession = new PomSesh(length);
        // current = this.currentSession;
        // sessions.push(current)
        setInterval(()=> {
            document.getElementById('live').innerHTML = this.showAsTime(...this.getTimeLeft());
        },1000)
    }

    this.timeLeft = () => {
        if (this.currentSession.paused) {
            return this.currentSession.length
        }
        if (Date.now() > this.currentSession.timeEnd){
            return 0
        }
        return this.currentSession.timeEnd - Date.now()
    }

    this.pause = () => {
        if (!this.currentSession.paused) {
            this.currentSession.length = this.timeLeft()
            this.currentSession.paused = true;
            this.currentSession.timeEnd = null;
        }
    }
    this.resume = () => {
        if (this.currentSession.paused) {
            this.currentSession.paused = false;
            this.currentSession.timeEnd = new Date(Date.now() + this.currentSession.length)
        }
    }
    this.getTimeLeft = () => {
        const now = new Date()
        if (!this.currentSession.paused && now > this.currentSession.timeEnd){
            return [0, 0]
        }
        const milliseconds = this.timeLeft()
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = parseInt(((milliseconds % 60000)/1000).toFixed(0))
        return [minutes, seconds]
    }
    this.showAsTime = (minutes, seconds) => {
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
}

window.onload = function() {
    window.app = new PomPomApp();
  };