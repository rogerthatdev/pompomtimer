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

window.onload = function() {
    window.app = new PomPomApp();
  };