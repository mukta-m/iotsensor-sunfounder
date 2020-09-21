const dht11 = require('./sensor/.js');
const led = require('./sensor/LED.js');

exports.readDHT = () => {
    return dht11.readDHT();
};

exports.blinkRed = (n) => {
    led.blinkRed(n);
}

exports.blinkGreen = (n) => {
    led.blinkGreen(n);
}
