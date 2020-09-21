var rpio = require('rpio');

rpio.init({mapping: 'gpio'});

module.exports = {
    /*
        function: blinkRed
        parameters: (int) n for number of times to blink
        
        purpose: LED light will blink red n number of times.
        return value: N/A
    */
    blinkRed:function(n){
        rpio.open(17, rpio.OUTPUT, rpio.LOW);

        for (let i = 0; i < n; i++) {
            /* On for 1 second */
            rpio.write(17, rpio.HIGH);
            console.log("HIGH");
            rpio.sleep(1);

            /* Off for half a second (500ms) */
            rpio.write(17, rpio.LOW)
            console.log("LOW");
            rpio.msleep(500);
        }
    }

    /*
        function: blinkGreen
        parameters: (int) n for number of times to blink
        
        purpose: LED light will blink green n number of times.
        return value: N/A
    */
    blinkGreen:function(n){
        rpio.open(18, rpio.OUTPUT, rpio.LOW);

        for (let i = 0; i < n; i++) {
            /* On for 1 second */
            rpio.write(18, rpio.HIGH);
            console.log("HIGH");
            rpio.sleep(1);

            /* Off for half a second (500ms) */
            rpio.write(18, rpio.LOW)
            console.log("LOW");
            rpio.msleep(500);
        }
    }
}


blinkRed(5);

blinkGreen(5);