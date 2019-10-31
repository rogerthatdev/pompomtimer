const PomSesh = function(length=25){
    this.timeStart = new Date(),
    this.length = length*60000,
    this.status = 'started',
    this.timeEnd = new Date(this.timeStart.getTime() + length*60000),
    this.timeLeft = function() {
        const now = new Date()
        if (now > this.timeEnd){
            this.status = 'finished';
            return 0
        }
        const milliseconds = this.timeEnd - now;
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = ((milliseconds % 60000)/1000).toFixed(0)  
        return [minutes, seconds]
    }
}

