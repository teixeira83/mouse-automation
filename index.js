const { exec } = require("child_process");

const TIMES = 999999;

const timer = (seconds) =>  {
    let time = seconds * 1000
    return new Promise(res => setTimeout(res, time))
}

async function doSomething() {
    const commands = [
        'xdotool mousemove 600 800',
        'xdotool mousemove 900 400'
    ];

    for (var i = 0; i < TIMES; i++) {
    console.log(i + " Looping...");
    
    let x = 0
    
    if (i % 2 === 0) {
        x = 1
    }

    exec(commands[x], (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    });
    await timer(2);
  }
}

doSomething();