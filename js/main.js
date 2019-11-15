// const PomSesh = function(length=25){
//     this.timeStart = new Date(),
//     this.id = this.timeStart.getTime(),
//     this.length = length*60000,
//     this.status = 'started',
//     this.timeEnd = new Date(this.timeStart.getTime() + length*60000),
//     this.timeLeft = function() {
//         const now = new Date()
//         if (now > this.timeEnd){
//             this.status = 'finished';
//             return 0
//         }
//         const milliseconds = this.timeEnd - now;
//         const minutes = Math.floor(milliseconds / 60000);
//         const seconds = parseInt(((milliseconds % 60000)/1000).toFixed(0))
//         return [minutes, seconds]
//     },
//     this.reset = function() {
//         const now = new Date()
//         this.timeEnd = new Date(now.getTime() + length*60000);
//     }
// }

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
        const now = new Date()
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

let session = newTimer(25);

console.log(session)
console.log(session.timeLeft())

