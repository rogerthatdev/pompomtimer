const DEBUG_MODE = true
let debug
if (DEBUG_MODE){
    debug = (msg) =>{
        console.log('DEBUG: ' + msg)
    }
} else {
    debug = () =>{
    }
}

function newTimer(length=25){
    debug('new timer');
    _id = Date.now()
    _endTime = new Date(Date.now() + length*60000),
    debug(_id)
    debug(_endTime)
    return {
        id: () => _id,
        endTime: () =>_endTime,
        promise: new Promise( (resolve, reject) => {
            const check = setInterval(()=> {}, 1000)
            }
        })
    }
}

function timeLeft(timer){
    return timer.endTime() - Date.now() 
}
// window.onload = function() {
//     window.app = newTimer();

//   };