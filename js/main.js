class PomSesh {
    constructor(length=.5){
        this.length = length*60000,
        this.timeEnd = new Date(Date.now() + this.length),
        this.id = Date.now(),
        this.paused = false
    }
}

function addPom() {
    pom = document.createElement("IMG");
    pom.width=25;
    pom.src = 'img/pompom.png';
    document.getElementById('progress').appendChild(pom)
    
}

function PomPomApp() {
    this.sessionCount = 0;
    this.currentSession = null;
    this.newTimer = (length) => {
        this.currentSession = new PomSesh(length);  
        this.displayTimer()
        this.status().then(val=>{
            console.log(val)
            this.sessionCount+=1;
            alert(`Bark! Total for today: ${this.sessionCount}. \nBark! Take a break!`)
            addPom();
        }).catch((val) => {console.log(val)})
    }
    // there should be a this.currentInterval that runs when timer is not paused
    this.status = () => {
        let current = Object.assign({}, this.currentSession);
        promise1 = new Promise( (resolve, reject) => {
            checkFinish = () => {
                console.log(current.id === this.currentSession.id)
                if (current.id !== this.currentSession.id) {
                    reject('arf!')
                    clearInterval(currentInterval)
                }
                if (Date.now() > this.currentSession.timeEnd && !this.currentSession.paused) {
                    resolve('woof!')
                    clearInterval(currentInterval)
                }
            }
            let currentInterval = setInterval(checkFinish, 1000);
        });
        return promise1
    }
    this.displayTimer = () => {
        setInterval(()=> {
            document.getElementById('live').innerHTML = this.showAsTime(...this.getTimeLeft());
        }, 1000)
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
            else { return x.toString() }
        } )
        return time.join(':')
    }
}

window.onload = function() {
    window.app = new PomPomApp();
  };