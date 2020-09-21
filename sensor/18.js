const GPIO = require('rpi-gpio');
const ADC = require('pcf8591');

let DO = 17;
GPIO.setMode(MODE_BCM);

function setup(){
    ADC.configure(0x48);
    GPIO.setup(DO, GPIO.DIR_IN);
}

function Print(x){
	if (x == 1){
		console.log('')
		console.log('***********')
		console.log('* Better~ *')
		console.log('***********')
		console.log('')
    }
	if (x == 0){
		console.log('')
		console.log('***********')
		console.log('* Too Hot! *')
		console.log('***********')
		console.log('')
    }
}

function loop(){
    let status = 1;
    let tmp = 1;
    while(true){
        let analogVal = ADC.read(0);

		let Vr = 5 * float(analogVal) / 255;
		let Rt = 10000 * Vr / (5 - Vr);
		let temp = 1/(((math.log(Rt / 10000)) / 3950) + (1 / (273.15+25)));
		temp = temp - 273.15;
		console.log ('temperature = ', temp, 'C');

        if (temp > 33){
            tmp = 0;
        }
		if (temp < 31){
            tmp=1;
        }

		if (tmp != status){
            Print(tmp);
            status = tmp;
        }

        setTimeout(() => {  console.log("PAUSE"); }, 2000);


    }
}

function main(){
    setup();
    loop();
}

main();